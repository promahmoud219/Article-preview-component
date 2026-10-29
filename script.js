const openShareMenuBtn = document.querySelector(".share-button"); 
const shareMenu = document.getElementById("share-menu");

openShareMenuBtn.addEventListener("click", openShareMenu);

function openShareMenu(){
    const isOpen = shareMenu.classList.toggle("active");     
    shareMenu.inert = !isOpen;
    openShareMenuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
}

