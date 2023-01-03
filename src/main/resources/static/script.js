const nav = document.querySelector("nav ul");
const navButton = document.querySelector(".nav-button");
let launchButtons = document.querySelectorAll('.launch');
let cards = document.querySelectorAll('.card');
let calc = document.querySelector('#calculator');
let chess = document.querySelector('#chess')
let project3 = document.querySelector('#project3');

navButton.addEventListener("click", () => {
    const vis = nav.getAttribute("data-visable");

    if (vis === "false") {
        nav.setAttribute("data-visable", true);
        navButton.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visable", false);
        navButton.setAttribute("aria-expanded", false);
    }
});

launchButtons.forEach(button => {
    button.addEventListener('click', () => {
        let red = "red";
        let btnsCardID = button.getAttribute('data-launch')
        cards.forEach(card => {
            let isCardLive = card.getAttribute('data-is-project-live');
            let img = card.querySelector('.project-img')
            if(isCardLive == 'false' && card.id == btnsCardID) {
                img.style.filter = "blur(8px)";
            }
        });
    });
});

