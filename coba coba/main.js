function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
    const gallery = new SimpleLightbox('.artworks-gallery a', { /* options if needed */ });