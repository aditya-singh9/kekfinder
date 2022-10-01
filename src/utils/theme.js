export function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

export function keepTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return setTheme(theme);
  }

  const doesUserPreferDarkMode = window.matchMedia([
    "(prefers-color-scheme: dark)",
  ]).matches;

  doesUserPreferDarkMode ? setTheme("dark") : setTheme("light");
}
