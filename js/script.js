window.onload = function () {
  lax.init();

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  }, { frameStep: 1 });

  lax.addElements("#name", {
    scrollY: {
      translateY: [[-400, 0, 100], [300, 0, 100]],
      scale: [[100, "screenHeight"], [0.75, 65]],
      opacity: [[0, "screenHeight/2", "screenHeight"], [1, 1, 0]],
    }
  });

  // Animation for Project 1
  lax.addElements("#project1", {
    scrollY: {
      translateY: [["elInY", "elOutY"], [0, -200]],
      opacity: [[0, "elCenterY"], [0, 1]]
    }
  });

  // Animation for Project 2
  lax.addElements("#project2", {
    scrollY: {
      translateY: [["elInY", "elOutY"], [0, 200]],
      opacity: [[0, "elCenterY"], [0, 1]]
    }
  });

  // Animation for Scroll Button
  lax.addElements("#scroll-button", {
    scrollY: {
      translateY: [[0, 200], [0, 200]],
      opacity: [[0, "screenHeight"], [1, 0]]
    }
  });

  // Animation for Contact Section
  lax.addElements("#contact-section", {
    scrollY: {
      translateX: [["elInY", "elOutY"], [-100, 100]],
      opacity: [[0, "elCenterY"], [0, 1]]
    }
  });
};
