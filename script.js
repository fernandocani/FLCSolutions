document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to FLC Solutions!');

    const container = document.querySelector('.container');
    container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.05)';
        container.style.transition = 'transform 0.3s ease-in-out';
    });

    container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
    });
});
