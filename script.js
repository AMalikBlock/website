const toggle = document.getElementById('toggleMode');
toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '🌙';
  } else {
    toggle.textContent = '🌞';
  }
});