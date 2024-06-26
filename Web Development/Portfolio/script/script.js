// nav-bar

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarRight = document.getElementById('navbar-right');

    toggleButton.addEventListener('click', function() {
        if (navbarRight.style.display === "flex") {
            navbarRight.style.display = "none";
        } else {
            navbarRight.style.display = "flex";
        }
    });
});

// nav-bar
