/**
 * Functie om van sectie te wisselen (SPA navigatie)
 */
function showSection(sectionId) {
    // 1. Haal alle secties op
    const sections = document.querySelectorAll(".section-fade");

    // 2. Verberg alle secties met een fade-out effect
    sections.forEach((section) => {
        section.classList.add("hidden-section");
        section.classList.remove("active-section");
    });

    // 3. Toon de geselecteerde sectie met een vertraging (optioneel) voor soepele overgang
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove("hidden-section");
        activeSection.classList.add("active-section");
    }

    // 4. Update Navigatie Links Styling
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
        }
    });

    // 5. Sluit mobiel menu na klik
    document.getElementById("mobile-menu").classList.add("hidden");

    // 6. Scroll naar boven wanneer een nieuwe pagina wordt getoond
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Mobiel Menu Toggle
 */
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Event listener voor de browser 'back' button support (optioneel)
window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) showSection(hash);
});

// Check hash bij laden van de pagina
window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) showSection(hash);
    else showSection("home");

    // Stel het dynamische jaartal in de footer in
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
