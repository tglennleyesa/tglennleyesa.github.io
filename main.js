// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark');
    toggle.textContent = '☀️';
} else {
    toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀️' : '🌙';
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('download-resume').addEventListener('click', (e) => {
    e.preventDefault();

    const a = document.createElement('a');
    a.href = './assets/cv/Trisvan Glenn Leyesa - 2025.pdf';
    a.download = 'Trisvan_Glenn_Leyesa_Resume_2025.pdf';
    a.target = '_blank'; // Opens in new tab if download fails
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});