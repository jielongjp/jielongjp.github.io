//navbar scroll background
const nav = document.querySelector(".nav");
document.addEventListener("scroll", function() {
    nav.style.backgroundColor = "var(--white)";
})

//dark mode
const darkBtn = document.querySelector(".dark-mode-btn");
let darkMode = localStorage.getItem("darkMode")

darkBtn.addEventListener("click", function darkSwitch (){
    if (darkMode === null) {
        localStorage.setItem("darkMode", true);
        document.body.classList.toggle("dark-mode");
    } else if (darkMode === "false"){
        localStorage.setItem("darkMode", true);
        document.body.classList.toggle("dark-mode");
    } else if (darkMode === "true") {
        localStorage.setItem("darkMode", false);
        document.body.classList.toggle("dark-mode");
    }
})

if(darkMode === "true") {
    document.body.classList.toggle("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}
