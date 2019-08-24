import React, { Component } from "react";
//==================Components=====================//
import PlayerOne from "./One.component";
import PlayerTwo from "./Two.component";


class Gitter extends Component {
  state = {};
  render() {
    
    let battleButton;
    //=========Shows Battle Button by checking BattleStart value if true==========//
    if (this.props.battleStart) {
      battleButton = (
        <button onClick={this.props.battle} className="btn btn-secondary">
          Battle
        </button>
      );
    }
    //======a Grid Holding PlayerOne & PlayerTwo Components & Passed Props========//
    const { addPlayerOne, battleStart, playerOne, addPlayerTwo, playerTwo } = this.props;
    return (
      
      <div className="bkPic2">
        <div className="row m-5">
          <div className="col-2"></div>
          <div className="col">
            <PlayerOne
              addPlayerOne={addPlayerOne}
              battleStart={battleStart}
              playerOne={playerOne}
            />
          </div>
          <div className="col-2"></div>
          <div className="col">
            <PlayerTwo
              addPlayerTwo={addPlayerTwo}
              battleStart={battleStart}
              playerTwo={playerTwo}
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row m-3">
          <div className="col-5"></div>
          <div className="col-2">{battleButton}</div>
          <div className="col-5"></div>
        </div>
      </div>
    );
  }
}

export default Gitter;
