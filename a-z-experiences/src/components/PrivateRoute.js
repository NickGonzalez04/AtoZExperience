import React from 'react'
import {Route, Redirect} from 'react-router-dom'


// Need to arrange so the nav bar so the Private works properly

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  export default PrivateRoute;