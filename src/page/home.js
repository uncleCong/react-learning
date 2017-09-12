import React, { Component } from 'react'
import Footer from '../component/footer'
import Carousel from '../lib/carousel'

class Home extends Component{
    render(){
        return (
            <div>
                <Carousel />
                <Footer />
                这是主页
            </div>
        )
    }
}

export default Home