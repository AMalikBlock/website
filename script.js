const toggle = document.getElementById('toggleMode');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  }
});

// Keep user choice after refresh
window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '🌙';
  } else {
    toggle.textContent = '🌞';
  }
});