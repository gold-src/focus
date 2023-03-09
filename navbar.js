function displayMenu() {
    let menu = document.getElementsByClassName("navbar-mobile")[0];
    let open = document.getElementsByClassName("navbar-hamburger-open")[0];
    let close = document.getElementsByClassName("navbar-hamburger-close")[0];
    style = window.getComputedStyle(menu);
    if (style.display == 'flex') {
        menu.style.display = 'none';
        close.style.display = 'none';
        open.style.display = 'flex'
    } else {
        menu.style.display = 'flex';
        open.style.display = 'none'
        close.style.display = 'flex';
    }
}