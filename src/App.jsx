import React, { Component } from 'react'
import Store from './redux/Store'
import { Provider } from 'react-redux'

import InfoContainer from './components/InfoContainer'
import Background from './components/Background'
import Sidebar from './components/Sidebar'
import Loading from './components/Loading'
import './App.scss'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Provider store={Store}>
          <Loading />
          <Sidebar />
          <div className="bg-wraper">
            <Background />
          </div>
          <InfoContainer />
        </Provider>
      </div>
    )
  }
}