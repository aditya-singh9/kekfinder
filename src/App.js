import React, { useEffect } from "react";
import Container from "./components/Container";
import { keepTheme } from "./utils/theme";
import { focusOnSearchBar, showSearchBarFocusHelp } from "./utils/searchBox";

function App() {
  useEffect(() => {
    keepTheme();

    document.addEventListener('keydown', focusOnSearchBar);
    document.addEventListener('keydown', showSearchBarFocusHelp);
  });

  return <Container />;
}

export default App;
