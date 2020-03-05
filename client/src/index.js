import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "antd/dist/antd.css" // import style sheet

import App from './App'

import Reducer from './_reducers' // for redux to take prev state & action to exec nxt state
import {Provider} from 'react-redux' // make redux store available to nested components in connect()
import {createStore,applyMiddleware} from 'redux' // createStore for redux store
import promiseMiddleware from 'redux-promise' // applyMiddleware for store enhancer
/* promise middleware inspects action returned from action creator and if it contains 
   API request or asynchronous request, delay the action, so we can get that response 
   to come back before the action goes to the reducers */
import ReduxThunk from 'redux-thunk' // write action creators that return a function instead of an action
import {BrowserRouter} from "react-router-dom" // wrap all Route components to
                                               // show/hide components
import * as serviceWorker from './serviceWorker'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
)

serviceWorker.unregister() // to work offline faster, change unregister() to register()
