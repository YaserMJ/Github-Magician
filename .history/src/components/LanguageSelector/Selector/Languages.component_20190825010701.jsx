import React from "react";
import "./LanguageSelector.styles.css";
const Languages = props => {
  const languages = ["All", "JavaScript", "Java", "CSS", "Python"];

  return (
    <div></div>
    <h1>Select language</h1>
    <ul className="languages">
      {languages.map((language, i) => {
        return (
          <li
            key={i}
            style={
              language === props.selectedLanguage ? { color: "#0033CD" } : null
            }
            onClick={() => props.onSelect(language)}
          >
            {language}
          </li>
        );
      })}
    </ul>
  );
};

export default Languages;
