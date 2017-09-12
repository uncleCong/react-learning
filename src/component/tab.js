import React, { Component } from 'react'

const styles = {
    container:{
        background:'#dddcdd',
        color:'#ff4c4c'
    },
    ul:{
        overflow:'hidden'
    },
    li:{
        float:'left',
        width:'100px',
        border:'1px solid black',
        listStyle:'none'
    }
}

class Tab extends Component{

    constructor(...arg){
        super(...arg)
        this.state = {
            isActive : 1
        }
    }

    changeState(n){
        this.setState({
            isActive : n
        })
    }
    getInfo(){
        if(this.state.isActive === 1){
            return <span>我是第一个</span>
        }else if(this.state.isActive === 2){
             return <span>我是第二个</span>
        }else{
            return <span>我是第三个</span>
        }
    }
    render(){
        return(<div style={styles.container}>
           <div>
               <ul style={styles.ul}>
                   <li style={styles.li} onClick={this.changeState.bind(this,1)}>第一个</li>
                   <li style={styles.li} onClick={this.changeState.bind(this,2)}>第二个</li>
                   <li style={styles.li} onClick={this.changeState.bind(this,3)}>第三个</li>
               </ul>
               <div>
                   {this.getInfo()}
               </div>
           </div>
        </div>)
    }
}

export default Tab