import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GameListPage from "./components/GameListPage/GameListPage";
import GameEnd from "./components/GameEndPage/GameEndPage"
import GameLandingPage from "./components/GameLandingPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game">
          <GameLandingPage />
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
