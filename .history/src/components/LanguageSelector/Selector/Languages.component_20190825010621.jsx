import React from "react";
import "./LanguageSelector.styles.css";
const Languages = props => {
  const languages = ["All", "JavaScript", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map((language, i) => {
        return (
          <h1>Select</h1>
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
