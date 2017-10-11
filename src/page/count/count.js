import React, { Component } from 'react'
import { connect } from 'react-redux'
import './count.css'

@connect(
    state => ({ todoData: state }),
    dispatch => ({
        add: (text,id) => dispatch({ type: 'ADD_TODO', text: text,id:id}),
        remove: () => dispatch({ type: 'TOGO_TODO' }),
        toggle: () => dispatch({ type: 'REMOVE_TODO' }),
    })
)
class ADDTodo extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            value: '',
            id : 0
        }
        this.add = this.add.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    setValue(e) {
        this.setState({
            value: e.target.value
        })
    }
    add() {
        this.props.add(this.state.value,this.state.id);
        this.setState({
            id  :   this.state.id + 1
        })
    }
    render() {
        return (
            <div className="todo">
                <input type="text" onInput={this.setValue} value={this.state.value} /><input type="button" value="添加" onClick={this.add} />
                <hr />
            </div>
        )
    }
}

@connect(
    state => ({ todoData: state }),
    dispatch => ({
        add: (text) => dispatch({ type: 'ADD_TODO', text: text }),
        remove: () => dispatch({ type: 'TOGO_TODO' }),
        toggle: () => dispatch({ type: 'REMOVE_TODO' }),
    })
)
class Item extends Component {
    constructor(...props) {
        super(...props);
        this.readItem = this.readItem.bind(this);
    }
    readItem() {
        console.log(this.props.todoData)
        let arr = [];
        this.props.todoData.map((item) => {
            arr.push(<p key={item.id}>
                <span>{item.text}</span>
                <button>完成</button>
                <button>删除</button>
            </p>)
        })
        return arr;
    }
    render() {
        return (<div className="itemContainer">
            {this.readItem()}
        </div>)
    }
}


class ListItem extends Component {
    render() {
        return (<div>
            <ADDTodo></ADDTodo>
            <Item></Item>
        </div>)
    }
}


export default ListItem