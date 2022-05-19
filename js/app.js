// VARIABLES
const toggle = document.querySelector('.toggle');
const logo = document.querySelector('.logo');
const mobileMenu = document.querySelector('.mobile-links');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const homeBtn = document.querySelector('.home-btn');
const navLinks = document.querySelectorAll("header .mobile-links ul li a");
console.log(main);

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
    rootMargin: "-100% 0px 0px 0px",
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

// MAIN OBSERVER
// const mainOptions = {
//     rootMargin: "50% 0px 0px 0px",
// }
// const mainObserver = new IntersectionObserver(
//     function(entries, mainObserver){
//         entries.forEach(entry => {
//             if(!entry.isIntersecting){
//                 console.log("main NOT Intersecting");
//                 homeBtn.classList.remove("active");
//             } else {
//                 console.log("main is intersecting");
//                 homeBtn.classList.add("active");
//             }
//         })
//     }, mainOptions
// );
// mainObserver.observe(main);

// CONTENT IO
const ioItem = document.querySelectorAll('.io-item');
console.log(ioItem);
itemOptions= {
    rootMargin: '0px 0px 0px 0px',
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





// DATE 
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();