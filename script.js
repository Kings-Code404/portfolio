// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
      navLinks.classList.contains("active")
        ? "✖"
        : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.innerHTML = "☰";
    });
  });
}

// ======================
// TYPING ANIMATION
// ======================

const typingElement = document.querySelector(".typing");

if (typingElement) {

  const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "BCA Student",
    "Problem Solver"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
      typingElement.textContent =
        currentWord.substring(0, charIndex--);
    } else {
      typingElement.textContent =
        currentWord.substring(0, charIndex++);
    }

    if (!deleting &&
        charIndex === currentWord.length + 1) {

      deleting = true;

      setTimeout(typeEffect, 1200);
      return;
    }

    if (deleting && charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
  }

  typeEffect();
}

// ======================
// DARK MODE
// ======================

const themeBtn =
  document.getElementById("themeBtn");

if (themeBtn) {

  const currentTheme =
    localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";
  }

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
      document.body.classList.contains("dark")
    ) {

      localStorage.setItem(
        "theme",
        "dark"
      );

      themeBtn.innerHTML = "☀️";

    } else {

      localStorage.setItem(
        "theme",
        "light"
      );

      themeBtn.innerHTML = "🌙";
    }
  });
}

// ======================
// SCROLL REVEAL
// ======================

const reveals =
  document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach(section => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      section.getBoundingClientRect().top;

    const revealPoint = 120;

    if (
      revealTop <
      windowHeight - revealPoint
    ) {
      section.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

// ======================
// BACK TO TOP BUTTON
// ======================

const topBtn =
  document.getElementById("topBtn");

if (topBtn) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 300) {

        topBtn.classList.add("show");

      } else {

        topBtn.classList.remove("show");
      }
    }
  );

  topBtn.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );
}

// ======================
// ACTIVE NAVIGATION
// ======================

const currentPage =
  window.location.pathname
    .split("/")
    .pop();

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );

navItems.forEach(link => {

  const page =
    link.getAttribute("href");

  if (
    page === currentPage ||
    (currentPage === "" &&
      page === "index.html")
  ) {

    link.classList.add("active");
  }
});

// ======================
// EMAILJS CONTACT FORM
// ======================

const contactForm =
  document.getElementById(
    "contactForm"
  );

if (
  contactForm &&
  typeof emailjs !== "undefined"
) {

  emailjs.init(
    "Q0NUmXyMhc_TWOg3y"
  );

  contactForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const params = {

        from_name:
          document.getElementById("name")
            .value,

        from_email:
          document.getElementById("email")
            .value,

        message:
          document.getElementById("message")
            .value
      };

      emailjs.send(
        "service_wobmd6w",
        "template_5356nc5",
        params
      )

      .then(() => {

        alert(
          "Message sent successfully!"
        );

        contactForm.reset();
      })

      .catch(error => {

        console.error(error);

        alert(
          "Failed to send message."
        );
      });
    }
  );
}

// ======================
// PAGE LOADER (OPTIONAL)
// ======================

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );
  }
);

// ======================
// CONSOLE SIGNATURE
// ======================

console.log(
  "%cPortfolio Developed by Sumit Kumar",
  "color:#2563eb;font-size:16px;font-weight:bold;"
);