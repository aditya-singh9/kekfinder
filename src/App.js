import React, { useEffect } from "react";
import { Container } from "./components";
import { keepTheme } from "./utils/theme";
import { focusOnSearchBar, showSearchBarFocusHelp } from "./utils/searchBox";

function App() {
  useEffect(() => {
    keepTheme();

    document.addEventListener('keydown', focusOnSearchBar);
    document.addEventListener('keydown', showSearchBarFocusHelp);

    return () => {
      document.removeEventListener('keydown', focusOnSearchBar);
      document.removeEventListener('keydown', showSearchBarFocusHelp);
    }
  }, []);

  return <Container />;
}

export default App;
