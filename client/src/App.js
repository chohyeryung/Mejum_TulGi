import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GameListPage from "./components/GameListPage/GameListPage";
import GameEnd from "./components/GameEndPage/GameEndPage"
import GameLandingPage from "./components/GameLandingPage";
import GameRanking from "./components/GameRankingPage/GameRankingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={GameLandingPage} />
        <Route path="/game_list" component={GameListPage} />
        <Route path="/game_end" component={GameEnd} />
        <Route path="/game_ranking" component={GameRanking} />
      </Switch>
    </Router>
  );
}

export default App;
