import React from 'react'
import '../login/login.less'
import Ajax from '../../lib/config'
import Toast from '../../lib/toast'

class LoginLogo extends React.Component{
    render(){
        return (
            <img src={require('../../asset/img/login_image.jpg')} alt=""/>
        )
    }
}

class Input extends React.Component{
    constructor(props){
        super(props)
        this.sentData = this.sentData.bind(this);
    }
    sentData(ev){
        this.props.getData(ev.target.value)
    }
    render(){
        return (
            <div data-type={this.props.type}>
                <input type="text" placeholder={this.props.tips} onChange={this.sentData} value={this.props.value}/>
            </div>
        )
    }
}

class Button extends React.Component{
    render(){
        return(
            <div className="me-u-btn" data-size="block" onClick={this.props.fn}>{this.props.text}</div>
        )
    }
}


class LoginFrom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginTel : '',
            loginPas : ''
        }
    }
    formChange(t,v){
        switch(t){
            case 'u': this.setState({loginTel:v});break;
            case 'p': this.setState({loginPas:v});break;
            default :
        }
    }
    goLogin(){
        let _this = this;
        if(!this.state.loginPas || !this.state.loginTel){
             Toast("请将信息填写完整",1000);
             return false;
        }
        Ajax({
            key     :'login',
            method  : 'post',
            data    :_this.state,
            callback:function(data){
                if(data.code === "000"){
                    Toast("登录成功","1000",function(){
                        window.location.href="/home"
                    });
                }
            }
        })
       
    }
    render(){
        return(
            <div className="formContainer">
                <LoginLogo />
                <Input type="norm" tips="请输入您的用户名" getData={this.formChange.bind(this,'u')} value={this.state.loginTel}/>
                <Input type="norm" tips="请输入您的密码" getData={this.formChange.bind(this,'p')} value={this.state.loginPas}/>
                <Button text="登录" fn={this.goLogin.bind(this)}/>
            </div>
        )
    }
}

export default LoginFrom