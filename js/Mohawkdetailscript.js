
// Step Explanation Data
const steps = [
    {
      title: "Step 01: Preparation",
      description: "Place the right‑foot inside edge forward."
    },
    {
      title: "Step 02: Entry",
      description: "Transfer weight to the opposite foot, switching edge."
    },
    {
        title: "Step 03: Change Edges",
        description: "Swing arms and turn onto the new edge."
      },
      {
        title: "Step 04: Finish",
        description: "Glide out in the new direction."
      }
];
   
  let currentStep = 0;
  let lastScroll = 0;
  let scrollTimeout = null;
  let isMobile = window.innerWidth <= 768;
  const centerTrigger = 0.35; // central portion to detect step scroll
  
  // Place Step Numbers Around the Circle (boarder)
  function placeStepNumbers() {
    const container = document.getElementById("numbers-container");
    container.innerHTML = "";
  
    const count = steps.length;
    const radius = container.offsetWidth / 2;
    const centerX = radius;
    const centerY = radius;
    const offsetRadius = radius + 12; // numbers to not overlapp with the boarder line
  
    for (let i = 0; i < count; i++) {
      const angleDeg = isMobile
        ? -90 + (360 / count) * i // (top)
        : -90 + (360 / count) * i; // (top)
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = centerX + offsetRadius * Math.cos(angleRad);
      const y = centerY + offsetRadius * Math.sin(angleRad);
  
      const number = document.createElement("div");
      number.className = "step-number";
      number.innerText = String(i + 1).padStart(2, "0");
      number.style.left = x + "px";
      number.style.top = y + "px";
      number.dataset.index = i;
  
      number.addEventListener("click", () => {
        currentStep = i;
        updateStepDisplay();
      });
  
      container.appendChild(number);
    }
  
    updateStepDisplay();
  }
  
  // Step Display
  function updateStepDisplay() {
    const titleEl = document.getElementById("step-title");
    const descEl = document.getElementById("step-description");
    const numbers = document.querySelectorAll(".step-number");
  
    titleEl.textContent = steps[currentStep].title;
    descEl.textContent = steps[currentStep].description;
  
    numbers.forEach((num, index) => {
      num.classList.remove("active");
      num.style.opacity = "0.2";
      num.style.transform = "translate(-50%, -50%) scale(0.9)";
      if (index === currentStep) {
        num.classList.add("active");
        num.style.opacity = "1";
        num.style.transform = "translate(-50%, -50%) scale(1.2)";
      }
    });
  }
  

  
  // Init Related Techniques Auto Slide 
  function initRelatedSlider() {
    const container = document.querySelector(".related-techniques-container");
    let scrollAmount = 0;
  
    function slideLoop() {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
      requestAnimationFrame(slideLoop);
    }
  
    if (container) {
      requestAnimationFrame(slideLoop);
    }
  }
  
  // default js script
  document.addEventListener("DOMContentLoaded", () => {
    isMobile = window.innerWidth <= 890;
    placeStepNumbers();
    updateStepDisplay();
    initRelatedSlider();
  
    window.addEventListener("resize", () => {
      isMobile = window.innerWidth <= 890;
      placeStepNumbers(); // recalculate positions
    });
  
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('nav-active');
    });
  });
  