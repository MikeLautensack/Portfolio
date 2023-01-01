const nav = document.querySelector("nav ul");
const navButton = document.querySelector(".nav-button");
let launchButtons = document.querySelectorAll('.launch');
let cards = document.querySelectorAll('.card');

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

/*launchButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('1')
        
        cards.forEach(card => {
            console.log('2')
            let isCardLive = card.getAttribute('data-is-project-live');
            if(isCardLive == 'false') {
                card.setAttribute('data-display-coming-soon', 'true');
                console.log('3')
            }
        });
    });
});*/

