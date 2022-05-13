// VARIABLES
const toggle = document.querySelector('.toggle');
const logo = document.querySelector('.logo');
const mobileMenu = document.querySelector('.mobile-links');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const homeBtn = document.querySelector('.home-btn');
const navLinks = document.querySelectorAll("header .mobile-links ul li a");
console.log(logo);

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
    rootMargin: "-98% 0px 0px 0px",
}
const heroObserver = new IntersectionObserver(
    function(entries, heroObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                console.log("hero NOT Intersecting");
                header.classList.remove("active-hero");
                homeBtn.classList.add("active");
            } else {
                console.log("hero is intersecting");
                header.classList.add("active-hero");
                homeBtn.classList.remove("active");
            }
        })
    }, heroOptions
);
heroObserver.observe(hero);
