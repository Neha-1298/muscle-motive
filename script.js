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
      duration: 1800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing function
      once: true, // Animation runs only once
    // Start animation when element is 100px away from the viewport
    });
  };



  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.8) * 60; // Scale down movement
    document.querySelector(".carousel-inner").style.setProperty("--mouse-x", `${x}px`);
});



// var medium = 20;
// var fast = 15;

// var docHeight = $(document).height();
// var docWidth = $(document).width();

// $(document).mousemove(function(event) {
//     var docHeight = $(document).height();
//     var docWidth = $(document).width();
//     var x = event.pageX;
//     var y = event.pageY;
    
//     $("#shape-1").offset({top:(docHeight*.05)+y/slow,left:(docWidth*.03)+x/slow});
//     $("#shape-2").offset({top:(docHeight*.50)-y/slow,left:(docWidth*.75)-x/slow});
//     $("#shape-3").offset({top:(docHeight*.20)+y/medium,left:(docWidth*.85)-x/medium});
//     $("#shape-4").offset({top:(docHeight*.40)+y/veryfast,left:(docWidth*.05)+x/medium});
//     $("#shape-5").offset({top:(docHeight*.10)+y/fast,left:(docWidth*.20)-x/medium});
//     $("#shape-6").offset({top:(docHeight*.85)-y/fast,left:(docWidth*.90)-x/fast});
//     $("#shape-7").offset({top:(docHeight*.75)-y/medium,left:(docWidth*.20)-x/medium});
//     $("#shape-8").offset({top:-20-y/medium,left:(docWidth*.6)+x/medium});
//     $("#shape-9").offset({top:(docHeight*.5)-y/medium,left:(docWidth*.3)+x/medium});
//     $("#shape-10").offset({top:(docHeight*.90)-y/medium,left:(docWidth*.65)-x/veryfast});
// });
