document.addEventListener("DOMContentLoaded", function () {
    const flagButton = document.querySelector(".header__country");
    const flagMenu = document.querySelector(".header__flag-menu");

    if (!flagButton || !flagMenu) {
        console.log("Елементи не знайдені!");
        return;
    }

    flagButton.addEventListener("click", function (event) {
        event.stopPropagation();
        flagMenu.classList.toggle("active");
        flagButton.classList.toggle("active");
        console.log("Меню стан: ", flagMenu.classList.contains("active"));
    });

    document.addEventListener("click", function (event) {
        if (!flagButton.contains(event.target) && !flagMenu.contains(event.target)) {
            flagMenu.classList.remove("active");
            flagButton.classList.remove("active");
            console.log("Меню закрито");
        }
    });
});
