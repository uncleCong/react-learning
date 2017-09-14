import React, { Component } from 'react'
import { Route ,Switch} from 'react-router-dom';
import Home from './page/home/home'
import More from './page/more.js'
import List from './page/list.js'
import Account from './page/account'
import Login from './page/login/login'

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
                <Route path="/more" component={More} />
                <Route path="/list" component={List} />
                <Route path="/account" component={Account} />
                <Route path="/login" component={Login} />
                <Route component={NoMatch}/>
            </Switch>
        )
    }
}

export default Router
