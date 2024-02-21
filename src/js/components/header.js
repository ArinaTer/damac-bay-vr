export function header() {
    const menuToggleBtn = document.querySelector('.header__menu-btn');

    menuToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('open-menu');
    })

}