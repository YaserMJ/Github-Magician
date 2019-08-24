import React, { useState, useEffect } from "react";
import Languages from "../Selector/Languages.component";
import { api } from "../../api";
import RepoTable from "./RepoTable.component";

const Popular = props => {
  const [selectedLanguage, setLanguage] = useState("All");
  const [repos, setRepos] = useState([]);

  const updateLanguage = newLang => {
    setLanguage(newLang);
    getRepos(newLang);
  };

  const getRepos = newLang => {
    api
      .fetchPopularRepos(newLang)
      .then(repos => {
        setRepos(repos);
      })
      .catch(err => {
        console.error(err);
        setRepos([]);
      });
  };

  useEffect(() => {
    getRepos(selectedLanguage);
  }, []);

  return (
    <div>
      <Languages
        selectedLanguage={selectedLanguage}
        onSelect={lang => updateLanguage(lang)}
      />
      <RepoTable repos={repos} />
    </div>
  );
};

export default Popular;
