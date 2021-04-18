import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
               <Home/>
          </Route>
          <Route path="/home">
               <Home/>
          </Route>
          <Route path="/login">
               <Navbar></Navbar>
               <Login/>
          </Route>
          <PrivateRoute path="/admin">
               <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
