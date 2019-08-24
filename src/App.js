import React from "react";
import Repos from "./components/LanguageSelector/Repos/Repos.component";
import "./App.css";
import Search from "./components/Search/Search.component";
import Battle from "./components/Battle/Battle.component";
import Home from "./components/Home/Home.component";
import Header from "./components/Header_Footer/Header.component";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/battle" component={Battle} />
        <Route path="/popular" component={Repos} />
      </Router>
    </div>
  );
}

export default App;
