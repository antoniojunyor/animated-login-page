var fields = document.querySelectorAll('.control-group input');

function activeControlGroup() {
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

activeControlGroup();
