function displayMenu() {
    let menu = document.getElementsByClassName("navbar-mobile")[0];
    style = window.getComputedStyle(menu);
    if (style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}