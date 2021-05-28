import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GamePage from "./components/GamePage/GamePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
