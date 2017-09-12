import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import '../asset/css/component.less'
import '../asset/css/flex.less'

class Footer extends Component{
    render(){
        return (
            <div data-layout="row center-spread" className="footerContainer">
                <NavLink to="/home" activeStyle={{ color: '#ff4c4c', fontWeight: 'bold' }}>
                    <b className="me-ion-a-home">首页</b>
                </NavLink>
                <NavLink to="/list" activeStyle={{ color: '#ff4c4c', fontWeight: 'bold' }}>
                    <b className="me-ion-a-menu">列表</b>
                </NavLink>
                <NavLink to="/account" activeStyle={{ color: '#ff4c4c', fontWeight: 'bold' }}>
                    <b className="me-ion-person">我的</b>
                </NavLink>
                <NavLink to="/more" activeStyle={{ color: '#ff4c4c', fontWeight: 'bold' }}>
                    <b className="me-ion-o-gear">更多</b>
                </NavLink>
            </div>
        )
    }
}

export default Footer