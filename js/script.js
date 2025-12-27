const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
});
