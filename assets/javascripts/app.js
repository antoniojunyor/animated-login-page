var fields = document.querySelectorAll('.control-group input'),
    labels = document.querySelectorAll('.control-group label');

function activeLabel() {
  Array.prototype.forEach.call(fields, function(el) {
    el.addEventListener('keyup', function() {
      if (el.value !== '') {
        this.parentNode.classList.add('active');
      } else {
        this.parentNode.classList.remove('active');
      }
    });
  });
}

activeLabel();
