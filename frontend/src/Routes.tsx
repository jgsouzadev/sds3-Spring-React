import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
 
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
                
            </Switch>  
        </BrowserRouter>
    );
}

export default Routes;