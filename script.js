window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 70) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Initialize AOS animations
window.onload = function () {
    AOS.init({
      duration: 1800, 
      easing: 'ease-in-out', 
      once: true,
    });
  };



  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.8) * 60;
    document.querySelector(".carousel-inner").style.setProperty("--mouse-x", `${x}px`);
});



