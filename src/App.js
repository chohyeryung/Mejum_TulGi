import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GamePage from "./components/GamePage/GamePage";
import GameListPage from "./components/GameListPage/GameListPage";
import GameRanking from "./components/GameRankingPage/GameRankingPage";

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
        {/* 승아 */}
        <Route path={"/game_ranking"}>
          <GameRanking />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
