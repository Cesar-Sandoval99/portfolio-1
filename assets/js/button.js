const mainButton = document.getElementById("homeButton")
const mainTop = document.getElementById("main-section")


function scrollTop() {
   let initial = mainTop.offsetTop;
   window.scrollTo(0, 0);
}
mainButton.addEventListener("click", scrollTop);
mainButton.onclick = scrollTop;