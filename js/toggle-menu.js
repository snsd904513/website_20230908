window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-side-menu');
    var $menuLinks = document.querySelectorAll('.side-menu a');
  
    $button.addEventListener('click', function () {
      $menu.classList.toggle('is-show');
    });
  
    $menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        $menu.classList.remove('is-show');
      });
    });
  });
  