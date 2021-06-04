import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";
import HowToUsePage from "./components/HowToUsePage/HowToUsePage";
import GamePage from "./components/GamePage/GamePage";
import GameListPage from "./components/GameListPage/GameListPage";
import GameRanking from "./components/GameRankingPage/GameRankingPage";
import GameEnd from "./components/GameEndPage/GameEndPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
          </Route>
        <Route exact={true} path="/how_to_use">
          <HowToUsePage />
          </Route>
        <Route exact={true} path="/game">
          <GamePage />
          </Route>
        <Route exact={true} path="/game_list">
          <GameListPage />
        </Route>

        {/* 승아 */}
        <Route path={"/game_ranking"}>
          <GameRanking />
        </Route>
        <Route path="/game_end">
          <GameEnd />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
