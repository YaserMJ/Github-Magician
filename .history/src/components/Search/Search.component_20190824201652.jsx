import React from "react";
import UserProfile from "./UserProfile.component";
import { getProfile, getUserRepos } from "../api"; // Calls from the API
import "./Search.styles.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // initial user values
    this.state = {
      user: null,
      userInfo: "",
      userRepos: ""
      // loading: false
    };
  }

  // handles input's value written by the user.
  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      user: null,
      userInfo: "",
      userRepos: "",
      loading: true
    });
    //==========DON'T CHANGE============
    // Loads "userInfo" fetched from API
    getProfile(this.state.user).then(
      function(info) {
        this.setState(function() {
          return { userInfo: info };
        });
      }.bind(this)
    );
    //Loads "userRepos" fetched from API
    getUserRepos(this.state.user).then(
      function(repos) {
        this.setState(function() {
          return { userRepos: repos };
        });
      }.bind(this)
    );
    //===================================
    // this.setState({
    //   loading: false
    // });
  };

  render() {
    // State destructuring
    let { userInfo, userRepos } = this.state;

    return (
      <div className="bkPic">
        <form onSubmit={this.handleSubmit}>
          {/* Gets name  */}
          <label ref={c => (this.label = c)}>
            Search for a Github user : &nbsp; &nbsp;
          </label>
          <br />
          {/* The input the users searches in  */}
          <input
            ref={l => (this.input = l)}
            id="user"
            type="text"
            placeholder="Enter a Github username..."
            autoComplete="off"
            onChange={this.handleChange}
          />
          <button
            // Submit button ,disabled if there's no user.
            ref={z => (this.button = z)}
            className="button"
            type="submit"
            disabled={!this.state.user}
          >
            <i className='fa fa-search'></i>
          </button>
        </form>

        {/* Shows the UserRepos and Info Components  */}
        <div>
          {/* {loading ? <Loading speed="250" /> : ' '} */}
          {userRepos && <UserProfile profile={userInfo} />}
        </div>
      </div>
    );
  }
}

export default Search;
