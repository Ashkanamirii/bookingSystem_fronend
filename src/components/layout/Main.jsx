import { Switch, Route } from "react-router-dom";
import Home from "./../../pages/Home.js"
import SignUp from "./../../pages/SignUp.js"
import Login from "../../pages/Login.js"

function Main (){
return(
    <div className="container mt-3">
         <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
    </div>
)
}

export default Main;