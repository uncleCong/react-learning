import React, { Component } from 'react'
import { Route ,Switch} from 'react-router-dom';
import Home from './page/home'
import About from './page/about.js'
import List from './page/list.js'

class NoMatch extends Component{
    render(){
        return(
            <div>404</div>
        )
    }
}

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/list" component={List} />
                <Route component={NoMatch}/>
            </Switch>
        )
    }
}

export default Router
