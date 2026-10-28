const openShareMenuBtn = document.querySelector(".share-button"); 
const shareMenu = document.getElementById("share-menu");

openShareMenuBtn.addEventListener("click", openShareMenu);

function openShareMenu(){
    shareMenu.classList.toggle("active");     
}

