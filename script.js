const tombolSapa = document.getElementById('sapaButton');
tombolSapa.addEventListener('click', function() {
  alert('Halo! Terima kasih sudah berkunjung!');
});

const tombolMode = document.getElementById('toggleMode');

tombolMode.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
