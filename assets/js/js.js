function toggleMenu() {
    // almacenamos el elemento con el id main-menu en la variable menu 
    const menu = document.getElementById(`main-menu`);
    //agregamos/quitamos la clase visible. Para agregar a index.html usar "script"
    menu.classList.toggle(`visible`);
}