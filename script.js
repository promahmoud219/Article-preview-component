const shareBtn = document.querySelector(".card-footer__share-button");
const cardFooterProfile = document.querySelector(".card-footer__profile");
const shareMenu = document.getElementById("share-menu");


shareBtn.addEventListener("click", openShareMenu);

function openShareMenu(){
    shareMenu.removeAttribute('hidden');    
    cardFooterProfile.setAttribute("hidden", "");

}
