import React, { Component } from 'react'
import Header from '../component/header'
import Tab from '../component/tab'
import Footer from '../component/footer'

class Home extends Component{
    render(){
        return (
            <div>
                <Header />
                <Tab />
                <Footer />
                这是主页
            </div>
        )
    }
}

export default Home