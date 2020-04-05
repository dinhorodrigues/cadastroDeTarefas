import React from 'react'
import ReactDom from 'react-dom'
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import promisse from 'redux-promise'
import reduxMulti from 'redux-multi'
import reduxThunk from 'redux-thunk'


import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(reduxThunk,reduxMulti,promisse)(createStore)(reducers,devTools)
ReactDom.render(
    <Provider store={store}>

        <App />
    </Provider>
, document.getElementById('app'))