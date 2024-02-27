export function header(gsapOBserver) {
    let isScroll = false;
    const menuToggleBtn = document.querySelector('.header__menu-btn');

    menuToggleBtn.addEventListener('click', () => {
        if(!isScroll){
            gsapOBserver.kill();
            isScroll=true
        } else {
            gsapOBserver.enable();
            isScroll=false
        }
        document.body.classList.toggle('open-menu');
    })

}