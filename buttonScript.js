console.log('Hi!')

const btnBurg = document.getElementById('btnBurger');
const navLinks = document.getElementById('navLinks');
const navLinksClose = document.getElementById('headerLinksClose');

btnBurg.addEventListener('click', function () {
    console.log('Working')

    navLinks.classList.add('active');
})


navLinksClose.addEventListener('click', function () {
    navLinks.classList.remove('active');
})
