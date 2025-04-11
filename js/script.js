function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const myModal = document.getElementById('myModal')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})