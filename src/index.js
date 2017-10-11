import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router.js'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
)