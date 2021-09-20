var last_known_scroll_position = 0;
var ticking = false;

function resize(scroll_pos) {

  let main_navbar = document.querySelector("#main-navbar");
  let main_logo = document.querySelector("#main-logo");
  let social_menu_main = document.querySelector('.social-menu-main');
  
  if (scroll_pos > 130) {
    
    main_navbar.classList.add('reduce-height');
    main_logo.classList.add('reduce-logo-size');
   

  } else {
    main_navbar.classList.remove("reduce-height");
    main_logo.classList.remove('reduce-logo-size');
  }

  if(scroll_pos > 870){
    social_menu_main.classList.add('d-none');
  }else{
    social_menu_main.classList.remove('d-none');
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




