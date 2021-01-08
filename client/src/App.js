import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Group from "./pages/Group";
import User from "./pages/User";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import SignUp from "./pages/Signup";

import Group from "./pages/Group"

import Login from "./pages/Login";
import socketClient from "socket.io-client";

function App() {
  let socket = socketClient();

  socket.on("connection", () => {
    console.log("Connected to backend");
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">

            <Login />

          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>

      
          <Route exact path="/group">            
              <Group />       
          </Route>
          <Route exact path="/user/:id">
            <User />
          </Route>
   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
