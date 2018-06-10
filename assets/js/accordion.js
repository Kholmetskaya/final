
document.addEventListener("DOMContentLoaded", function(){
  var li = document.getElementsByClassName("products-content-text-list-item");
  var active = document.getElementsByClassName('active');

  Array.from(li).forEach(function(item, i, li) {
    item.addEventListener('click', function(e) {
      if (active.length > 0 && active[0] !== this) {
        active[0].classList.remove('active'); 
      }
      this.classList.add('active');
      if (active) {
        active.classList.remove('active');     
      } 
    });
  });
});



  