import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router.js'
import { BrowserRouter } from 'react-router-dom'

import './asset/css/index.css'

ReactDOM.render(
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    ,
  document.getElementById('root')
)