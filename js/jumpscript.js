document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const categories = document.querySelectorAll(".jump-category");
    const searchInput = document.getElementById("searchInput");
    const jumpItems = document.querySelectorAll(".jump-item");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        categories.forEach(cat => {
          cat.style.display = "none";
        });

        const categoryToShow = document.querySelector(
          `.jump-category[data-category="${tab.dataset.category}"]`
        );
        if (categoryToShow) {
          categoryToShow.style.display = "block";
        }
      });
    });
  

    function filterCards() {
      const query = searchInput.value.toLowerCase();
      let matchFound = false;
  
      cards.forEach(card => {
        const name = card.dataset.name?.toLowerCase() || "";
        const text = card.textContent.toLowerCase();
  
        //text or name include then display
        if (name.includes(query) || text.includes(query)) {
          card.style.display = "block";
          matchFound = true;
        } else {
          card.style.display = "none";
        }
      });

      const errorMsg = document.getElementById("errorMsg");
    if (!matchFound && query !== "") {
      errorMsg.style.display = "block";
      errorMsg.textContent = `'can't find' ${query}.`;
    } else {
      errorMsg.style.display = "none";
    }
  }

    // work after search btn click
    searchBtn.addEventListener("click", filterCards);

    // and enter to work
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        filterCards();
      }
    });
  });
  


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('nav-active');
  });
});