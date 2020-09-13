import React, {FC} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";

export const App: FC = () => {

   return (
      <div className="App">
         <Switch>
            <Route path={"/home"} component={Home}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/"} component={Home}/>
         </Switch>
      </div>
   );
}

