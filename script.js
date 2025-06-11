const textArray = ["Software Engineer", "AI Intern"];
let textIndex = 0;
let charIndex = 0;
const typeSpeed = 100; 
const eraseSpeed = 50;
const delayBetween = 2000;
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typewriterElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typeSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and insert navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Now that navbar is loaded, highlight the active link
            highlightActivePage();
        });
});

// Function to highlight the active navbar link
function highlightActivePage() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add highlight to the active link
        }
    });
}

// Delay function (if needed for animations)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});

