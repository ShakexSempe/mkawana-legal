// TOGGLE VARIABLES
const toggle = document.querySelector('.toggle');
const mobileMenu = document.querySelector('.mobile-links');
console.log(mobileMenu);

toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active-menu");
});


const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const heroOptions = {
    rootMargin: "-90% 0px 0px 0px",
}
const heroObserver = new IntersectionObserver(
    function(entries, heroObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                console.log("hero NOT Intersecting");
                header.classList.remove("active-hero")
            } else {
                console.log('hero is intersecting');
                header.classList.add("active-hero")
            }
        })
    }, heroOptions
);
heroObserver.observe(hero);
