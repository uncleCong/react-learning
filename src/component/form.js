import React from 'react'

class Single extends React.Component{
    constructor(props){
        super(props)
        this.getChangedData = this.getChangedData.bind(this);
    }
    getChangedData(ev){
        this.props.postData(ev.target.value)
    }
    render(){
        return(
            <input value={this.props.value} onChange={this.getChangedData} style={{border:"1px solid #ccc"}}/>
        )
       
    }
}

class Full extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unit:"cm",
            height:""
        }
    }
    getHeight(unit,height){
        this.setState({
            unit,height
        })
    }
    render(){
        return (
            <div>
                <Single 
                    value = {this.state.unit == "cm" ?
                        this.state.height :
                        this.state.height*100
                    }
                    postData = {this.getHeight.bind(this,"cm")}
                    unit= "cm"
                />
                <Single 
                    value = {this.state.unit == "cm" ?
                        this.state.height/100 :
                        this.state.height
                    }
                    postData = {this.getHeight.bind(this,"m")}
                    unit = "m"
                />
            </div>
        )
    }
}

export default Full
