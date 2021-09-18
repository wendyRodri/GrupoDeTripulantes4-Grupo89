var last_known_scroll_position = 0;
var ticking = false;

function resize(scroll_pos) {
  if (scroll_pos > 140) {
    
    document.querySelector("#main-navbar").classList.add('reduce-height');
    document.querySelector("#main-logo").classList.add('reduce-logo-size');
   

  } else {
    document.querySelector("#main-navbar").classList.remove("reduce-height");
    document.querySelector("#main-logo").classList.remove('reduce-logo-size');
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      resize(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});


