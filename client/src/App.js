import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GameListPage from "./components/GameListPage/GameListPage";
import GameEnd from "./components/GameEndPage/GameEndPage"
import GameLandingPage from "./components/GameLandingPage";
import MainPage from "./components/MainPage/MainPage";
import HowToUsePage from "./components/HowToUsePage/HowToUsePage";
import GameRanking from "./components/GameRankingPage/GameRankingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={GameLandingPage} />
        <Route path="/game_list" component={GameListPage} />
        <Route path="/game_end" component={GameEnd} />
        <Route path="/game_ranking" component={GameRanking} />
        <Route path="/how_to_use" component={HowToUsePage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  )
}

export default App;
