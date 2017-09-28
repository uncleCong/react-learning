import React, { Component } from 'react'
import { Route ,Switch} from 'react-router-dom';
import Home from './page/home/home'
import Login from './page/login/login'
import Count from './page/count/count'

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
                <Route path="/login" component={Login} />
                <Route path="/count" component={Count} />
                <Route component={NoMatch}/>
            </Switch>
        )
    }
}

export default Router
