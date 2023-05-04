const header = document.querySelector(".header");
const altElement = document.querySelector(".shadowed-section");
const form = document.querySelector(".form");


window.addEventListener("scroll", function () {
    const headerBottom = header.offsetTop + header.offsetHeight;
    const altElementTop = altElement.offsetTop;

    if (headerBottom >= altElementTop) {
        header.style.backdropFilter = "blur(10px)";
        header.style.width = "80%";
        header.style.webkitBackdropFilter = "blur(10px)";
    } else {
        header.style.backdropFilter = "none";
        header.style.webkitBackdropFilter = "none";
    }
});

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;


        window.location.href = `results.html?name=${name}&email=${email}`;
    });
}

// Path: sonuc.html
const urlParams = new URLSearchParams(window.location.search);

const senderName = urlParams.get("name");
const email = urlParams.get("email");

// We could send athor data to the server here



document.getElementById("name").textContent = senderName;
document.getElementById("email").textContent = email;


