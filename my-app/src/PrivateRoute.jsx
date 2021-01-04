import React from "react"
import { Route, Redirect } from "react-router-dom"
 import { Home } from "./Home"

export default function PrivateRoute({Component, ...rest }) {
return(
    <Route
      {...rest}
      render={props => {
        localStorage.getItem('auth-token') ? (
        <Component {...props} />): (<Redirect to='/' />
        )
      }}
        />)
      }
      
      