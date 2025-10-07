
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerHTML = `<i class='bx bx-moon'></i>`;
themeToggleBtn.classList.add('theme-toggle');
document.querySelector('header').appendChild(themeToggleBtn);

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    themeToggleBtn.innerHTML = `<i class='bx bx-sun'></i>`;
}

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    themeToggleBtn.innerHTML = isDark ? `<i class='bx bx-sun'></i>` : `<i class='bx bx-moon'></i>`;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const menuToggle = document.getElementById('menu-toggle');
const header = document.querySelector('header');
menuToggle.addEventListener('click', () => {
    header.classList.toggle('active');
});

document.querySelectorAll('.navbar').forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('active');
    });
});

const revealElements = document.querySelectorAll('.boxes, .learn, .main-content, .all-boxes');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('show');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const backToTop = document.createElement('button');
backToTop.innerHTML = `<i class='bx bx-up-arrow-alt'></i>`;
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
});
