const btn = document.getElementById('send');
btn.classList.add('is-success');
btn.addEventListener('click', function send () {
  btn.classList.add('is-loading');
  
  // fake API call
  setTimeout( () => {
    btn.classList.add('is-success');
    btn.classList.remove('is-loading');
    btn.removeEventListener('click', send);
  }, 4000);
});