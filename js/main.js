/* Menu aparecer/esconder */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle')
    closeMenu = document.getElementById('nav-close')

/* Aparecer */
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/* Esconder */
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/* Animação */
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__descricao', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})