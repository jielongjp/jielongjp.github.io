// navbar scroll background
const nav = document.querySelector(".nav");
document.addEventListener("scroll", function() {
    nav.style.backgroundColor = "var(--white)";
})

// dark mode
const darkBtn = document.querySelector(".dark-mode-btn");
let darkMode = localStorage.getItem("darkMode")

darkBtn.addEventListener("click", function darkSwitch () {
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

if (darkMode === "true") {
    document.body.classList.toggle("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

// send form data to sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzqxb_X0gNw6slH_W3B6Zj7G9t3EO6TLvr5uo6hagbXQqfhBusRCMi9t4nYMJnM-FHo3A/exec'; // change with each new deployment
const form = document.forms['sheet-form'];
const pot = document.querySelector('[name=Subject]');
const Message = document.querySelector('[name=Message]');

if (form) {
    form.addEventListener('submit', e => {
        data = new FormData(form);
        e.preventDefault();
    
        data.append('form', form.name);
        data.append('Message', Message.value);
    
        if (pot.value !== '') {
        document.querySelector('.form').innerHTML = '';
        document.querySelector('.msg').innerHTML = '<p>Thank You. I\'ll get back to you soon</p>';
        } else {
            fetch(scriptURL, { method: 'POST', body: data })
                .then(response => console.log('Success: ', response))
                .catch(error => console.error('Error: ', error.message))
                .finally(
                    () => {
                        document.querySelector('.form').innerHTML = '';
                        document.querySelector('.msg').innerHTML = '<p>Thank You. I\'ll get back to you soon</p>';
                    }
                )
        }
    });
}
