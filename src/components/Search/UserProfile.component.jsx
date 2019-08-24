import React from "react";
import "./Search.styles.css";
const UserProfile = props => {
  let profile = props.profile;
  let date = new Date(profile.created_at);
  let readableMonth = date.toLocaleString("en-us", { month: "long" });

  return (
    <div className='center'>
          <div className="card center" style={{ width: "35rem" }}>
        <img className="avatar" src={profile.avatar_url} alt={profile.login} />
        <div className="card-body">
          <h5 className="card-title">
            {profile.name} <br /> <a href={profile.html_url}>{profile.login}</a>
          </h5>
          <p className="card-text">{profile.bio}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <i className="fa fa-map-marker" aria-hidden="true" />{" "}
             Location :{profile.location}
          </li>
          <li className="list-group-item">
            <i className="fa fa-code-fork" aria-hidden="true" /> Repositories: &nbsp;
            {profile.public_repos}
          </li>
          <li className="list-group-item">
            <i className="fa fa-users" aria-hidden="true" /> Followers: &nbsp;
            {profile.followers}
          </li>
          <li className="list-group-item">
                      <i class="fas fa-bezier-curve"></i> Following: &nbsp;
            {profile.following}
          </li>
        </ul>
        <div className="card-body">
          <a href={profile.blog} className="card-link">
            {profile.blog}
          </a>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
