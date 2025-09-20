function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  let scrollBtn = document.getElementById("scrollTopBtn");

  // Show button when user scrolls down
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  
  // Scroll to top on click
  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  let features = document.querySelectorAll(".feature");

  window.addEventListener("scroll", () => {
    let triggerBottom = window.innerHeight * 0.8;
    features.forEach(f => {
      let boxTop = f.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        f.classList.add("show");
      }
    });
  });
// Navbar toggle for mobile
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
  
  // Dark mode toggle
  document.addEventListener("DOMContentLoaded", () => {
    let darkBtn = document.getElementById("darkModeBtn");
    if (darkBtn) {
      darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  });
  
  // Scroll to top button
  let scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Animate features when visible
  let features = document.querySelectorAll(".feature");
  if (features.length > 0) {
    window.addEventListener("scroll", () => {
      let triggerBottom = window.innerHeight * 0.8;
      features.forEach(f => {
        let boxTop = f.getBoundingClientRect().top;
        if (boxTop < triggerBottom) f.classList.add("show");
      });
    });
  }
  
  
  // Contact form submission
  let form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let msg = document.getElementById("message").value;
  
      document.getElementById("formOutput").innerHTML = `
        <h3>✅ Message Sent</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${msg}</p>
      `;
  
      form.reset();
    });
  }
  const testimonials = [
    { text: "This landing page template is amazing!", author: "– Sarah J." },
    { text: "Super easy to use and customize!", author: "– Mike T." },
    { text: "The animations make it feel professional.", author: "– Ananya P." }
  ];
  
  let tIndex = 0;
  function showTestimonial() {
    document.getElementById("testimonialText").innerText = testimonials[tIndex].text;
    document.getElementById("testimonialAuthor").innerText = testimonials[tIndex].author;
    tIndex = (tIndex + 1) % testimonials.length;
  }
  setInterval(showTestimonial, 3000);
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
  
    if (name && email.includes("@") && msg) {
      document.getElementById("formMsg").innerText = "✅ Message sent successfully!";
      document.getElementById("formMsg").style.color = "green";
      e.target.reset();
    } else {
      document.getElementById("formMsg").innerText = "❌ Please fill out all fields correctly.";
      document.getElementById("formMsg").style.color = "red";
    }
  });
  
     