const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar__content');
const closeSidebar = document.querySelector('.sidebar__close');
const {documentElement: html} = document;
const headerContent = document.querySelector('.header__content');
const authNav =  document.querySelector('.header__auth');
const isPhoneMedia = matchMedia('(max-width: 470px)')


isPhoneMedia.addEventListener('change', e => {
    const parent = authNav.parentElement;
    if (e.matches) {
        if (parent != sidebarContent) {
            parent.removeChild(authNav)
            sidebarContent.append(authNav)
            toogleAuth()
        }

    } else if (parent === sidebarContent) {
        sidebarContent.removeChild(authNav)
        headerContent.insertBefore(authNav, burger)
        toogleAuth()
    }
})

document.addEventListener('click', e => {
    if (!e.target.closest('.sidebar__content') && sidebar.classList.contains('visible')) toogleSideBar()
})

burger.addEventListener('click', e => {
    toogleSideBar()
    e.stopPropagation()
})

closeSidebar.addEventListener('click', e => {
    toogleSideBar()
    e.stopPropagation()
})

function toogleSideBar() {
    html.classList.toggle('overlay-open');
    burger.classList.toggle('burger_open');
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('visible');
}
function toogleAuth() {
    authNav.classList.toggle('header__auth');
    authNav.classList.toggle('sidebar__auth');
}
