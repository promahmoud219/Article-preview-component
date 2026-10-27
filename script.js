const openShareMenuBtn = document.querySelector(".card-footer__share-button");
const closeShareMenuBtn = document.querySelector(".share-menu__close");
const cardFooterProfile = document.querySelector(".card-footer__profile");
const shareMenu = document.getElementById("share-menu");


openShareMenuBtn.addEventListener("click", openShareMenu);
closeShareMenuBtn.addEventListener("click", closeShareMenu);

function openShareMenu(){
    shareMenu.removeAttribute('hidden');    
    cardFooterProfile.setAttribute("hidden", "");
}


function closeShareMenu(){
    shareMenu.setAttribute('hidden', "");    
    cardFooterProfile.removeAttribute("hidden");
}
