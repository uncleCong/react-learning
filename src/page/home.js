import React, { Component } from 'react'
import Header from '../component/header'
import Tab from '../component/tab'

class Home extends Component{
    render(){
        return (
            <div>
                <Header />
                <Tab />
                这是主页
            </div>
        )
    }
}

export default Home