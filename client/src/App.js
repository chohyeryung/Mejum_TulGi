import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GamePage from "./components/GamePage/GamePage";
import GameListPage from "./components/GameListPage/GameListPage";
import GameEnd from "./components/GameEndPage/GameEndPage"
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
        <Route path="/game_end">
          <GameEnd />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
