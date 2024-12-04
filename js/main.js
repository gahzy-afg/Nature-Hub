//togell class active
const navbarNav = document.querySelector('.navbar-nav');
//when menu clicked
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};