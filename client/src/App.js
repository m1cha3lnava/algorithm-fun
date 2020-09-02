import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar"
import Geometry from "./containers/Math/Geometry";
import HighScores from "./containers/HighScores/HighScores";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>        
        <Route exact path="/" component={Home} />
        <Route exact path="/geometry" component={Geometry} />
        <Route exact path="/highscores" component={HighScores} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
