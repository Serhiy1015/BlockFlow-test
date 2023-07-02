const burgerMenu = document.querySelector('.burger-menu')
const closeMenu = document.querySelector('.close-menu')
const overlay = document.querySelector('.overlay')
const leftBar = document.querySelector('.leftbar')

burgerMenu.addEventListener('click', () => {
    leftBar.classList.add('active-bar')
    overlay.style.display = 'block'
})
closeMenu.addEventListener('click', () => {
    leftBar.classList.remove('active-bar')
    overlay.style.display = 'none'
})