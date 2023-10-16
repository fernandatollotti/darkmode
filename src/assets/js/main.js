const changed = document.querySelector('#change-theme');

changed.addEventListener('change', () => {
  toggleDarkMode();

  localStorage.removeItem('dark');
  let dark = document.body.classList.contains('dark');

  if(dark) 
    localStorage.setItem('dark', 1);
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function loadTheme() {
  const darkMode = localStorage.getItem('dark');

  if(darkMode) {
    toggleDarkMode();
  }
}

loadTheme();