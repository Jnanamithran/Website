var Typed = new Typed('.text', {
    strings: ["Web Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    const homeTitle = document.getElementById("homeTitle");
    const aboutSection = document.getElementById("about");
    const sections = ["about", "skills", "projects", "contact"];
    
    function updateVisibility() {
      let hash = window.location.hash.substring(1); // Get hash without '#'

      if (!hash) {
        // If no hash, show Home title, hide everything else
        homeTitle.style.display = "block";
        sections.forEach(sec => {
          let element = document.getElementById(sec);
          if (element) element.style.display = "none";
        });
      } else {
        // If a section is selected, hide homeTitle and show the selected section
        homeTitle.style.display = "none";
        sections.forEach(sec => {
          let element = document.getElementById(sec);
          if (element) {
            if (sec === hash) {
              element.style.display = "block";
            } else {
              element.style.display = "none";
            }
          }
        });
      }
    }
    // Check on page load
    updateVisibility();
    // Update visibility when navigation links are clicked
    window.addEventListener("hashchange", updateVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
    const popup_cortex = document.querySelector(".popup-cortex");
    const cortexLink = document.querySelector(".cortex");
    
    cortexLink.addEventListener("mouseover", function () {
        popup_cortex.style.display = "block"; // Show the popup
    });

    // Hide the popup when the mouse leaves
    cortexLink.addEventListener("mouseout", function () {
        popup_cortex.style.display = "none"; // Hide the popup
    });
});
document.addEventListener("DOMContentLoaded", function () { 
    
    const orbitLink = document.querySelector(".orbit");
    const popup_orbit = document.querySelector(".popup-orbit");
    
    orbitLink.addEventListener("mouseover", function () {
        popup_orbit.style.display = "block"; // Show the popup
    });

    // Hide the popup when the mouse leaves
    orbitLink.addEventListener("mouseout", function () {
        popup_orbit.style.display = "none"; // Hide the popup
    });
});