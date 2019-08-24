import React, { Component } from "react";
import axios from "axios";
//=================== Components ======================//
import Gitter from "./Gitter.component";
import Winner from "./Winner.component";

class Battle extends Component {
  constructor() {
    super();
    this.state = {
      playerOne: {},
      playerTwo: {},
      battleStart: false,
      winner: {},
      loser: {},
      tie: "false"
    };
  }

  battle = () => {
    let { playerOne, playerTwo } = this.state;
  // ============================ Calculate Players Results ======================================//
    playerOne.score =
      playerOne.followers * 2 +
      playerOne.public_repos * 2 +
      playerOne.public_gists * 2 +
      (playerOne.bio ? 1 : 0) +
      (playerOne.Company ? 1 : 0);

    playerTwo.score =
      playerTwo.followers * 2 +
      playerTwo.public_repos * 2 +
      playerTwo.public_gists * 2 +
      (playerTwo.bio ? 1 : 0) +
      (playerTwo.Company ? 1 : 0);
    //=============Decides which player won and updates the winner/loser in state=================//
    if (playerOne.score > playerTwo.score) {
      this.setState({ winner: playerOne });
      this.setState({ loser: playerTwo });
    } else if (playerOne.score < playerTwo.score) {
      this.setState({ winner: playerTwo });
      this.setState({ loser: playerOne });
    }
    this.setState({ tie: true });
  };
  //========================API CALL & Battle check : DON'T CHANGE===============================//
  addPlayerOne = query => {
    axios.get(`https://api.github.com/users/${query}`).then(response => {
      this.setState({ playerOne: response.data });
      if (
        Object.keys(this.state.playerOne).length > 0 &&
        Object.keys(this.state.playerTwo).length > 0
      ) {
        this.setState({ battleStart: true });
      }
    });
  };

  addPlayerTwo = query => {
    axios.get(`https://api.github.com/users/${query}`).then(response => {
      this.setState({ playerTwo: response.data });

      if (
        Object.keys(this.state.playerOne).length > 0 &&
        Object.keys(this.state.playerTwo).length > 0
      ) {
        this.setState({ battleStart: true });
      }
    });
  };

  render() {
    let afterSubmit = (
      //=======================passed props from state to Gitter Component==========================//
      <Gitter
        addPlayerOne={this.addPlayerOne}
        addPlayerTwo={this.addPlayerTwo}
        battleStart={this.state.battleStart}
        playerOne={this.state.playerOne}
        playerTwo={this.state.playerTwo}
        battle={this.battle}
      />
    );
    //=======================Passes Win/Lose state to Winner Component============================//
    let result;
    if (Object.keys(this.state.winner).length > 0) {
      afterSubmit = (
        <Winner winner={this.state.winner} loser={this.state.loser} />
      );
    }
    // ============================Main Battle Component here=====================================//
    return (
      <div className="bkPic2">
        <h1 className="mt-5" style={{ color: "#0033CD" }} align="center">
          Battle <i class="fas fa-trophy"></i>
        </h1>
        {afterSubmit}
        {result}
      </div>
    );
  }
}

export default Battle;
