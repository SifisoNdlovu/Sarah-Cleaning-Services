document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", toggleMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", toggleMenu);
  }

  // Close menu when a link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Sticky Header
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

    lastScroll = currentScroll;
  });

  // Form Submission (Demo)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }
});
