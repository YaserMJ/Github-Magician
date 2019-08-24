import React, { Component } from "react";
class Winner extends Component {
  render() {
    return (
      <div className="bkPic">
        <div className="row m-5">
          <div className="col-2"></div>
          <div className="col">
            <div className="row">
              <div className="col-12 mb-2">
                <h2 style={{ color: "green" }} className="pl-5">
                  Winner!
                </h2>
              </div>
              <div className="col-12 mb-2">
                <h4 className="pl-5">Score: {this.props.winner.score}</h4>
              </div>
              <div className="col-12">
                <div className="pl-3">
                  <img
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%"
                    }}
                    src={this.props.winner.avatar_url}
                    alt="Winner"
                  ></img>
                </div>
              </div>
              <div className="col-12 mt-2">
                <h2 style={{ color: "green" }}>{this.props.winner.name}</h2>
              </div>
              <div className="col-12 mt-2">
                <h5>Followers: {this.props.winner.followers}</h5>
              </div>
              <div className="col-12 mt-2">
                <h5>Public Gists: {this.props.winner.public_gists}</h5>
              </div>
              <div className="col-12 mt-2">
                <h5>Public Repos: {this.props.winner.public_repos}</h5>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col">
            <div className="row">
              <div className="col-12 mb-2">
                <h2 style={{ color: "red" }} className="pl-5">
                  Loser!
                </h2>
              </div>
              <div className="col-12 mb-2">
                <h4 className="pl-5">Score: {this.props.loser.score}</h4>
              </div>
              <div className="col-12">
                <img
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%"
                  }}
                  src={this.props.loser.avatar_url}
                  alt="Loser"
                ></img>
              </div>
              <div className="col-12 mt-2">
                <h2 style={{ color: "red" }}>{this.props.loser.name}</h2>
              </div>
              <div className="col-12 mt-2">
                <h5>Followers: {this.props.loser.followers}</h5>
              </div>
              <div className="col-12 mt-2">
                <h5>Public Gists: {this.props.loser.public_gists}</h5>
              </div>
              <div className="col-12 mt-2">
                <h5>Public Repos: {this.props.loser.public_repos}</h5>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Winner;
