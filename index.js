

const scrollUp = () => {
    const btnScrollUp = document.querySelector('.scroll-up');
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        btnScrollUp.style.display = 'block';
    } else {
        btnScrollUp.style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const btnTheme = document.querySelector(".fa-moon");
    const body = document.body;
    const storedTheme = localStorage.getItem("theme");

    // Function to toggle between dark and light themes
    const toggleTheme = () => {
        if (body.classList.contains("body-dark")) {
            body.classList.remove("body-dark");
            btnTheme.classList.remove("fa-sun"); // Remove sun icon
            btnTheme.classList.add("fa-moon"); // Add moon icon
            localStorage.setItem("theme", "light");
        } else {
            body.classList.add("body-dark");
            btnTheme.classList.remove("fa-moon"); // Remove moon icon
            btnTheme.classList.add("fa-sun"); // Add sun icon
            localStorage.setItem("theme", "dark");
        }
    };

    const toggleButton = document.querySelector(".fa-bars");
    const navMenu = document.querySelector("nav ul");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("display-nav-list");
    });

    // Event listener for theme toggle button
    btnTheme.addEventListener("click", toggleTheme);

    // Apply stored theme on page load
    if (storedTheme === "dark") {
        body.classList.add("body-dark");
        btnTheme.classList.add("fa-sun"); // Add sun icon
    } else {
        body.classList.remove("body-dark");
        btnTheme.classList.add("fa-moon"); // Add moon icon
    }
});

