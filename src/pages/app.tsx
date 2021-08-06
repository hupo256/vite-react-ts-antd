import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayer from './baseLayer'

import Ts from './ts' // ts

const routes = () => (
  <BrowserRouter basename="/mkt/">
    <Switch>
      <Route
        path="/"
        component={() => {
          return (
            <BaseLayer>
              <>
                {/* <Route exact path="/xingg" render={() => <Egg />} /> */}
                {Ts}
              </>
            </BaseLayer>
          )
        }}
      />
    </Switch>
  </BrowserRouter>
)

export default routes
