function searchString(str) {
    window.location.href = "https://duckduckgo.com/?q=" + str;
}

// Javascript Event To Display Content On Load Finised
onload = () => {
    document.querySelector(".beforeloading").style.display = "none";
    document.querySelector(".afterloading").style.display = "block";
  }