import React from 'react'
import { Route } from 'react-router-dom'
// import Loadable from '@src/components/loading/index'

// const Home = Loadable(() => import('./home'))
// const Usecall = Loadable(() => import('./usecall'))
import Home from './home' // ts
import Usecall from './usecall' // usecall

export default (
  <React.Fragment>
    <Route exact path="/ts" component={Home} />
    <Route path="/usecall" component={Usecall} />
  </React.Fragment>
)
