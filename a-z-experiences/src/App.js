import React from 'react';
import { Route } from 'react-router-dom';


// Components 
import Nav from "./components/Nav";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import newUserSignUp from "./components/newUserSignUp";
import Dashboard from "./components/Dashboard";
import newExperience from "./components/newExperienceForm";

function App() {
  return (
   <div>
    
      <Nav bg="red.300" /> 
      <Route path="/login" component={Login} />
      <Route path="/signup" component={newUserSignUp} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/AddExperience" component={newExperience}/>

   </div> 
  );
}

export default App;