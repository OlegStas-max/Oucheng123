const header = document.querySelector('.animated-header');
const logoContainer = document.querySelector('.logo-container');
const text1 = document.querySelector('.animate-text1');
const text2 = document.querySelector('.animate-text2');

setTimeout(() => {
    header.style.height = '150px';
    logoContainer.style.transform = 'scale(0.8) translate(0, 0)';
    logoContainer.style.marginLeft = 'auto';
    logoContainer.style.marginRight = 'auto';
}, 1000);

