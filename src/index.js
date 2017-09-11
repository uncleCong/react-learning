import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import './asset/css/index.css'
import Header from './component/header'

class Index extends Component{
    render(){
        return (
            <div>
                这是首页
            </div>
        )
    }
}

class About extends Component{
    render(){
        return (
            <div>
                这是关于我们
            </div>
        )
    }
}
class List extends Component{
    render(){
        return (
            <div>
                这是列表
            </div>
        )
    }
}
ReactDOM.render(
    <BrowserRouter> 
        <div>
            <Header/>
            <Switch>
                <Route path="/index" component={Index}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/list" component={List}></Route>
            </Switch>
        </div>
        
  </BrowserRouter>,
  document.getElementById('root')
)