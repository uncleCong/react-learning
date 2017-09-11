import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import '../asset/css/component.css'

class Header extends Component{
    render(){
        return (
            <div className="headNav">
                <NavLink to="/home" activeStyle={{ color: '#dddcdd', fontWeight: 'bold' }}>HOME</NavLink>
                <NavLink to="/about" activeStyle={{ color: '#dddcdd', fontWeight: 'bold' }}>ABOUT</NavLink>
                <NavLink to="/list" activeStyle={{ color: '#dddcdd', fontWeight: 'bold' }}>LIST</NavLink>
            </div>
        )
    }
}
export default Header