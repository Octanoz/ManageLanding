const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const crossIcon = document.querySelector(".icon-close");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
    primaryNav.toggleAttribute('data-visible');
    // navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"));

    if (primaryNav.hasAttribute('data-visible')) {
        navToggle.setAttribute('aria-expanded', true);
        hamburgerIcon.classList.toggle("hide");
        crossIcon.classList.toggle("hide");
    }
    else {
        navToggle.setAttribute('aria-expanded', false);
        hamburgerIcon.classList.toggle("hide");
        crossIcon.classList.toggle("hide");
    }
})