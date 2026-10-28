const openShareMenuBtn = document.querySelector(".card-footer__share-button");
const closeShareMenuBtn = document.querySelector(".share-menu__close");
const cardFooterProfile = document.querySelector(".card-footer__profile");
const shareMenu = document.getElementById("share-menu");


openShareMenuBtn.addEventListener("click", () => {
        shareMenu.hidden ? openShareMenu() : closeShareMenu();
    }
);

closeShareMenuBtn.addEventListener("click", closeShareMenu);

function openShareMenu(){
    shareMenu.hidden = false;    
    openShareMenuBtn.setAttribute("aria-expanded", "true");
    openShareMenuBtn.classList.add('is-open');
}


function closeShareMenu(){
    shareMenu.hidden = true;    
    openShareMenuBtn.setAttribute("aria-expanded", "fasle");
    openShareMenuBtn.classList.remove('is-open');
}
