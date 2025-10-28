
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerHTML = `<i class='bx bx-moon'></i>`;
themeToggleBtn.classList.add('theme-toggle');

const headerEl = document.querySelector('header') as HTMLElement;
headerEl.appendChild(themeToggleBtn);

const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme: string | null = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    themeToggleBtn.innerHTML = `<i class='bx bx-sun'></i>`;
}

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark: boolean = document.documentElement.classList.contains('dark');
    themeToggleBtn.innerHTML = isDark ? `<i class='bx bx-sun'></i>` : `<i class='bx bx-moon'></i>`;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


const menuToggle = document.getElementById('menu-toggle') as HTMLElement;

menuToggle.addEventListener('click', () => {
    headerEl.classList.toggle('active');
});

document.querySelectorAll<HTMLElement>('.navbar').forEach(link => {
    link.addEventListener('click', () => {
        headerEl.classList.remove('active');
    });
});


const revealElements: NodeListOf<HTMLElement> = document.querySelectorAll('.boxes, .learn, .main-content, .all-boxes');

const revealOnScroll = (): void => {
    const windowHeight: number = window.innerHeight;
    revealElements.forEach((el: HTMLElement) => {
        const revealTop: number = el.getBoundingClientRect().top;
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
