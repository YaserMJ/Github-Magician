import React from "react";
import ReactFullpage from "@fullpage/react-fullpage"; 
import "./Home.styles.css";
import SectionTwo from "./Section2.component";

const Home = () => (
  <ReactFullpage //FullPage.js package componenet to initalize Fullpages.
    scrollingSpeed={1000} //prefixed prop.
    render={({ fullpageApi }) => {
      //FullPageAPI .
      return (
        <ReactFullpage.Wrapper>   {/*Prefixed FullPage Wrapper Componenet from the package that wraps around the sections.*/}
          <div className="bkPic2">
            <div className="section "> {/* Section one here */}
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      className="GitWizard floating" //Floating Logo
                      src={require("./jajaja.png")}
                      alt=""
                    />
                  </div>
                  <div className="col" style={{ marginTop: "50px" }}>
                    <h1>Github Magician</h1>
                    <br />
                    <h3>The Octocat that finds everything!</h3>
                  </div>
                </div>
              </div>
              <button
                className="findMore"
                onClick={() => fullpageApi.moveSectionDown()} //Prefixed Move to sections method by the FullPageJS package.
              >
                <i className="fas fa-arrow-circle-down "></i>
              </button>
            </div>
            <div className="section "> {/* Second section here */}
              <SectionTwo />
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Home;
