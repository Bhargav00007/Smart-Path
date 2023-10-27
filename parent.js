// Open and close the sidebar when the menu button is clicked.
const menuButton = document.querySelector('#menu-button');
const sidebar = document.querySelector('#sidebar');

menuButton.addEventListener('click', () => {
sidebar.classList.toggle('open');
});