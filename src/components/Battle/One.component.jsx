//=====================================================================================//
//                                                                                     //
//Both Compoenent One and Two & methods will be reduced to a single componenet later on//
//                                                                                     //
//=====================================================================================//

import React, { Component } from "react";

class PlayerOne extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }
  //=================Sets query to the value given by first input======================//
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  //===================Handles submition  addPlayerOne method==========================//
  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayerOne(this.state.query);
  };

  render() {
    //==========Checks for input and returns picture and name of the player============//
    if (Object.keys(this.props.playerOne).length > 0) {
      return (
        <div className="row">
          <div className="col-12">
            <img
              style={{ width: "250px", height: "250px", borderRadius: "50%" }}
              src={this.props.playerOne.avatar_url}
              alt="Player One"
            ></img>
          </div>
          <div className="col-12 mt-2">
            <h2>{this.props.playerOne.name}</h2>
          </div>
        </div>
      );
    }
    return (
    //=================Player One Rendered component & handling====================//
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="playerOne">
            <i style={{ color: "#0033CD" }} class="fas fa-gamepad"></i> Player
            one :
          </label>
          <input
            type="text"
            className="form-control"
            id="PlayerOne"
            placeholder="Enter Your Github Username"
            onChange={this.handleChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-secondary"
          value="Ready"
        ></input>
      </form>
    );
  }
}

export default PlayerOne;
