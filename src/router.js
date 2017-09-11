import React, { Component } from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Home from './page/home'
import About from './page/about.js'
import List from './page/list.js'

class Router extends Component{
    render(){
        return(
            <BrowserRouter> 
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/list" component={List}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
