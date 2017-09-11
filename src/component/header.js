import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../asset/css/component.css'

class Header extends Component{
    render(){
        return (
            <div className="headNav">
                <Link to="/about">About</Link>
                <Link to="/index">index</Link>
                <Link to="/list">list</Link>
            </div>
        )
    }
}

export default Header