import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <div className="App">
        <>
          {/* Route paths for each components */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </>
      </div>
    </Router>
  )
}

export default App;