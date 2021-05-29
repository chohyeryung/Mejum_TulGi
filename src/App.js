import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GamePage from "./components/GamePage/GamePage";
import GameListPage from "./components/GameListPage/GameListPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <GamePage />
        </Route>
        <Route path="/game_list">
          <GameListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
