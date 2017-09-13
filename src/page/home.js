import React, { Component } from 'react'
import Footer from '../component/footer'
import Carousel from '../lib/carousel'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("拜拜")
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1 style={{ padding: "20px" }}>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Clock />
                <Footer />
            </div>
        )
    }
}

export default Home