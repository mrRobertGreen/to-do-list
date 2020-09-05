import React, {FC, useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";
import {useDispatch} from "react-redux";
import {getCards} from "./redux/tasks-reducer/tasks-reducer";

export const App: FC = () => {
   const dispatch = useDispatch()
   useEffect( () => {
      dispatch(getCards())
   }, [dispatch])

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

