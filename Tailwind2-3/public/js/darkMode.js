const d = document;
const htmlElement = d.querySelector('html');
const toggleButton = d.getElementById('darkNavBar');
const toggleButtonSm = d.getElementById('darkTabBar');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDarkMode()
});
toggleButtonSm.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDarkMode();
});

function toggleDarkMode(){
    htmlElement.classList.contains('dark')?
    htmlElement.classList.remove('dark'):
    htmlElement.classList.add('dark');
}
