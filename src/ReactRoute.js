import {Route} from "react-router-dom";
import {Redirect} from "react-router";

const PrivateRoute = ({Component, auth, to, ...rest}) => {
   return (
       <Route
           {...rest}
           render={props =>
           auth ?
           <Component props={props}/> : (
               <Redirect to={to}/>
               )
           }

    />
)
}

export default PrivateRoute;