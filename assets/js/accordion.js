
document.addEventListener("DOMContentLoaded", function(){
  var li = document.getElementsByClassName("products-content-text-list-item");
  var active = document.getElementsByClassName('active');

  Array.from(li).forEach(function(item, i, li) {
    item.addEventListener('click', function(e) {
      var currentLi = this;
      setTimeout(function(){      
        if (active.length > 0 && active[0] !== currentLi) {
        active[0].classList.remove('active'); 
      }
        currentLi.classList.add('active');
      },400)
    });
  });
});



  