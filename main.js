//navbar scroll background
const nav = document.querySelector(".nav");
document.addEventListener("scroll", function() {
    nav.style.backgroundColor = "var(--white)";
})

//dark mode
function darkMode (){
  const darkBtn = document.querySelector(".dark-mode-btn");
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    })
}
darkMode ();