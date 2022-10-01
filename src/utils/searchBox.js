export const focusOnSearchBar = (e) => {
  const searchBox = document.querySelector('input.search');

  if (e.code === 'Slash') {
    e.preventDefault();
    searchBox.focus();
  }
}

export const showSearchBarFocusHelp = (e) => {
  const searchBox = document.querySelector('input.search');

  // if we type on search box do nothing
  if (searchBox === e.target) return;

  showPopup();
}

const showPopup = () => {
  const popupEl = document.querySelector('.search-bar-focus-popup');

  popupEl.classList.add('visible');

  setTimeout(() => popupEl.classList.remove('visible'), 5000);

  document.removeEventListener('keydown', showSearchBarFocusHelp);
}
