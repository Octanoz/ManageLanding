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
});

const slider = new A11YSlider(document.querySelector(".slider"), {
    container: false,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: {
        640: {
            arrows: true,
            dots: false
        }
    }
});

const autoPlayToggle = document.querySelector(".a11y-slider-autoplay");

autoPlayToggle.addEventListener('click', () => {
    if (!autoPlayToggle.hasAttribute('data-autoplaying')) {
        autoPlayToggle.classList.toggle("go");
    }
});