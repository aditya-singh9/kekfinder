import React, { useState, useEffect, useCallback } from "react";
import GitHubButton from "react-github-btn";
import "./Header.css";
import Toggle from "./Toggle";
import { keepTheme } from "../utils/theme";

function Header() {
  const theme = localStorage.getItem("theme");
  const [togClass, setTogClass] = useState("dark");

  const callback = useCallback(
    (theme) => {
      setTogClass(theme);
    },
    [setTogClass]
  );

  useEffect(() => {
    keepTheme();
    const storedTheme = localStorage.getItem("theme");
    setTogClass(storedTheme);
  }, [togClass]);

  return (
    <div className="header">
      <h1>KekFinder </h1>
      <p>Find emojis with ease.</p>
      <p className="github">
        <GitHubButton
          href="https://github.com/aditya-singh9/kekfinder"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star aditya-sing9/kekfinder on GitHub"
        >
          Star
        </GitHubButton>
        &nbsp;&nbsp;
        <GitHubButton
          href="https://github.com/aditya-singh9/kekfinder/fork"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="true"
          aria-label="Fork aditya-singh9/kekfinder on GitHub"
        >
          Fork
        </GitHubButton>
      </p>

      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">Switch to your preferred theme.</p>
      </div>
    </div>
  );
}

export default Header;
