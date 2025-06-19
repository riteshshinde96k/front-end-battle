window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});