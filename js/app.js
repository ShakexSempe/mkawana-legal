// VARIABLES
const toggle = document.querySelector('.toggle');
const logo = document.querySelector('.logo');
const mobileMenu = document.querySelector('.mobile-links');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const homeBtn = document.querySelector('.home-btn');
const bottomNav = document.querySelector('.bottom-nav');
const navLinks = document.querySelectorAll("header .mobile-links ul li a");
console.log(bottomNav);

toggle.addEventListener("click", () => {
    header.classList.remove("active-hero");
    toggle.classList.toggle("active-toggle");
    mobileMenu.classList.toggle("active-menu");
    container.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active-menu");
        container.classList.remove("active");
        toggle.classList.remove("active-toggle");
    });
});

logo.addEventListener("click", () => {
    mobileMenu.classList.remove("active-menu");
        container.classList.remove("active");
        toggle.classList.remove("active-toggle");
})

// HERO OBSERVER
const hero = document.querySelector('.hero');
const heroOptions = {
    rootMargin: "-90% 0px 0px 0px",
}
const heroObserver = new IntersectionObserver(
    function(entries, heroObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                console.log("hero NOT Intersecting");
                header.classList.remove("active-hero");
                bottomNav.classList.add("active-bottom-nav");

            } else {
                console.log("hero is intersecting");
                header.classList.add("active-hero");
                bottomNav.classList.remove("active-bottom-nav");
            }
        })
    }, heroOptions
);
heroObserver.observe(hero);

// SECTION TITLE IO
const ioItem = document.querySelectorAll('.io-item');
console.log(ioItem);
itemOptions= {
    rootMargin: '0px 0px -20% 0px',
};

ioItem.forEach(item => {
    const itemObserver = new IntersectionObserver(
        function(entries, itemObserver) {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    console.log("entry NOT io");
                    item.classList.remove("active-item"); 
                } else {
                    console.log("entry IS io")
                    item.classList.add("active-item");
                }
            });
        }, itemOptions
    );
    itemObserver.observe(item);
});

// CONTENT IO
const contentIO = document.querySelectorAll('.io-content');
const contentOptions = {
    rootMargin: '0% 0px -30% 0px', 
};
contentIO.forEach(item => {
    const itemObserver = new IntersectionObserver(
        function(entries, itemObserver){
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    console.log("content NOT IO");
                    item.classList.remove("active-content");
                } else {
                    console.log("content IS IO");
                    item.classList.add("active-content");
                }
            });
        } , contentOptions
    );
    itemObserver.observe(item);
});



// DATE 
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();