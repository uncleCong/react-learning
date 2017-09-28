import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({ value: state.count}),
  dispatch => ({onIncreaseClick: () => dispatch(increaseAction)})
)
class Count extends Component {
    render(){
        const { value, onIncreaseClick } = this.props
        return(
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>增加</button>
            </div>
        )
    }
}

// Action Creator
const increaseAction = { type: 'increase' }

export default Count