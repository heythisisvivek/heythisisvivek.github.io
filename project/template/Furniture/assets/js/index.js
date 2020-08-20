setInterval(() => {
    if(document.title == "Furniture") {
        document.title = "Get great deal on festival";
    } else {
        document.title = "Furniture";
    }
}, 2000)

document.querySelector(".goToTop").addEventListener("click", () => {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", () => {
    let getScrollY = window.scrollY;
    if(getScrollY >= 14) {
        document.querySelector("nav").classList.add("scroll-nav");
        document.querySelector(".goToTop").style.display = "block";
    } else {
        document.querySelector("nav").classList.remove("scroll-nav");
        document.querySelector(".goToTop").style.display = "none";
    }
})