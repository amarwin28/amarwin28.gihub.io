/* =========================================
   AMARWIN JASAN PORTFOLIO
   JAVASCRIPT
========================================= */


// =========================================
// WEBSITE LOADED MESSAGE
// =========================================

console.log(
    "Welcome to Amarwin Jasan's Portfolio!"
);



// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const cards =
    document.querySelectorAll(".card");


function revealCards() {

    cards.forEach(card => {

        const cardPosition =
            card.getBoundingClientRect().top;


        const screenPosition =
            window.innerHeight - 100;


        if (cardPosition < screenPosition) {

            card.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealCards
);


revealCards();



// =========================================
// MOBILE MENU
// =========================================

const navLinks =
    document.querySelector(".nav-links");


const navbar =
    document.querySelector(".navbar");


// Create mobile menu button
const menuButton =
    document.createElement("button");


menuButton.innerHTML = "☰";


menuButton.classList.add(
    "menu-button"
);


navbar.appendChild(menuButton);


// Open and close mobile menu
menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-active"
        );

    }
);



// =========================================
// CLOSE MENU AFTER CLICKING A LINK
// =========================================

const links =
    document.querySelectorAll(
        ".nav-links a"
    );


links.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "mobile-active"
            );

        }
    );

});



// =========================================
// ACTIVE NAVIGATION LINK
// =========================================

window.addEventListener(
    "scroll",
    () => {

        const sections =
            document.querySelectorAll(
                "section"
            );


        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            const sectionId =
                section.getAttribute(
                    "id"
                );


            if (

                scrollPosition >= sectionTop &&

                scrollPosition <
                sectionTop + sectionHeight

            ) {

                links.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        `.nav-links a[href="#${sectionId}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            }

        });

    }
);



// =========================================
// BUTTON CLICK EFFECT
// =========================================

const buttons =
    document.querySelectorAll(
        ".main-btn, .outline-btn, .card-btn, .github-btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            console.log(
                "Button clicked:"
                + button.innerText
            );

        }
    );

});