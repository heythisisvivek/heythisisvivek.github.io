let bar = document.querySelector(".bar");
let navbar__right = document.querySelector(".navbar__right");

setInterval(() => {
    if(document.title == "Jake Redfield - Dexter Disciple") {
        document.title = "Or may be vivek";
    } else {
        document.title = "Jake Redfield - Dexter Disciple";
    }
}, 5000)

bar.addEventListener("click", () => {
    navbar__right.classList.toggle("displayNavFlex");
})
