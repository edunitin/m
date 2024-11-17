document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetID = link.getAttribute("href").slice(1); // Get the target section ID
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Dynamic navbar highlighting
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Alert for demo links (optional)
    const demoLinks = document.querySelectorAll(".btn-primary, .btn-secondary");
    demoLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            alert("This feature is currently under development.");
            event.preventDefault(); // Prevent default action for demo purposes
        });
    });

    // Sticky Navbar on scroll
    const header = document.querySelector(".navbar");
    const stickyOffset = header.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
});
