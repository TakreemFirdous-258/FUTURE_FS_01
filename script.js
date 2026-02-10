console.log("JS connected");

document.querySelectorAll('a[herf^="#"]').forEach
(anchor => { 
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavoir: 'smooth'
        });    
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundcolor = 'rgba(10, 10, 10, 0.98)' :
        navbar.style.backgroundcolor = 'rgba(10, 10, 10, 0.95)';  
});

console.log("Frontend JS loaded");

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

if (form) {
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!email || !phone || !message) {
        statusMsg.innerText = "All fields are required";
        statusMsg.style.color = "red";
        return;
    }

    try {
        const res = await fetch("http://localhost:5000/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, phone, message })
        });

        const data = await res.json();
        statusMsg.innerText = data.msg;
        statusMsg.style.color = data.success ? "#2ecc71" : "red";

        if (data.success) form.reset();

    } catch (err) {
        statusMsg.innerText = "Server error. Try again later.";
        statusMsg.style.color = "red";
    }
});
}