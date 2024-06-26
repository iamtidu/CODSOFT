window.addEventListener('scroll', function() {
    var fixedDiv = document.getElementById('navdiv');
    if (window.scrollY > fixedDiv.offsetTop) {
      fixedDiv.classList.add('sticky');
    } else {
      fixedDiv.classList.remove('sticky');
    }
  });
