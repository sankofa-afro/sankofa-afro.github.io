// Scroll reveal
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

function checkReveals() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveals);
window.addEventListener('load', checkReveals);

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        const isOpen = navlist.style.display === 'flex';
        navlist.style.display = isOpen ? 'none' : 'flex';
        navlist.style.flexDirection = 'column';
        navlist.style.position = 'absolute';
        navlist.style.top = '100%';
        navlist.style.left = '0';
        navlist.style.right = '0';
        navlist.style.background = 'var(--paper)';
        navlist.style.padding = '16px 0';
        navlist.style.borderBottom = '3px solid var(--black)';
        navlist.style.zIndex = '999';
        if (isOpen) navlist.removeAttribute('style');
    });
}
