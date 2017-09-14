import React, { Component } from 'react'
import Ajax from '../lib/config'

let touchDirection = {
    getSlideAngle: function (dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    },
    getSlideDirection: function (startX, startY, endX, endY) {
        var dy = startY - endY;
        var dx = endX - startX;
        var result = "no";
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }
        var angle = touchDirection.getSlideAngle(dx, dy);
        if (angle >= -45 && angle < 45) {
            result = "right";
        } else if (angle >= 45 && angle < 135) {
            result = "up";
        } else if (angle >= -135 && angle < -45) {
            result = "down";
        }
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = "left";
        }
        return result;
    }
}

class Carousel extends Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            startX: 0,
            startY: 0,
            activeIndex: 0,
            bannerList: []
        }
        this.startEvent = this.startEvent.bind(this);
        this.endEvent = this.endEvent.bind(this);
    }
    componentWillMount(){
        var _this = this;
        Ajax({
            key : "banner",
            callback:function(data){
                if(data.code === "000"){
                    _this.setState({
                        bannerList : data.banner_urls
                    })
                }
            }
        })
    }
    startEvent(event) {
        this.setState({
            startX: event.touches[0].pageX,
            startY: event.touches[0].pageY
        })
    }

    endEvent(event) {
        let endX = event.changedTouches[0].pageX;
        let endY = event.changedTouches[0].pageY;
        let direction = touchDirection.getSlideDirection(this.state.startX, this.state.startY, endX, endY);
        console.log("滑动方向为" + direction)
        switch (direction) {
            case 'left': this.goLeft(); break;
            case 'right': this.goRight(); break;
            default: return false
        }
    }
    goLeft() {
        if (this.state.activeIndex === this.state.bannerList.length - 1) {
            this.setState({
                activeIndex: 0
            }, () => {
                console.log('激活状态:'+this.state.activeIndex)
            })
        } else {
            this.setState({
                activeIndex: this.state.activeIndex + 1
            }, () => {
                console.log('激活状态:'+this.state.activeIndex)
            })
        }
    }
    goRight() {
        if (this.state.activeIndex === 0) {
            this.setState({
                activeIndex: this.state.bannerList.length - 1
            }, () => {
                console.log('激活状态:'+this.state.activeIndex)
            })
        } else {
            this.setState({
                activeIndex: this.state.activeIndex - 1
            }, () => {
                console.log('激活状态:'+this.state.activeIndex)
            })
        }
    }
    getImgData() {
        for (var i = 0; i < this.state.bannerList.length; i++) {
            if (this.state.activeIndex === i) {
                return <img src={this.state.bannerList[i].pic_url} alt="" style={{ width: "100%", height: "100%" }} />
            }
        }
    }
    getPoint(){
        let arr = []
        for (var i = 0; i < this.state.bannerList.length; i++) {
            if(this.state.activeIndex === i){
                arr.push(<span style={styles.pointActive} key={i}></span>)
            }else{
                arr.push(<span style={styles.point} key={i}></span>)
            }
        }
        return arr;
    }
    render() {
        return (
            <div style={{ width: "100%", height: "180px", background: "#dddcdd" ,position:"relative"}} onTouchStart={this.startEvent} onTouchEnd={this.endEvent}>
                {this.getImgData()}
                <div style={styles.pointContainer}>
                    {this.getPoint()}
                </div>
            </div>
        )
    }
}

const styles = {
    pointContainer:{
        position:'absolute',
        left:'45%',
        bottom:'20px',
    },
    point:{
        display:"inline-block",
        width:'10px',
        height:'10px',
        borderRadius:"50%",
        border:"2px solid #fff",
        marginRight:"10px"
    },
    pointActive:{
        display:"inline-block",
        width:'10px',
        height:'10px',
        borderRadius:"50%",
        border:"2px solid #fff",
        marginRight:"10px",
        background:"#fff"
    }
}

export default Carousel