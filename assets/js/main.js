document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');

    function createSnowFlake() {
        const snowFlake = document.createElement('div');
        snowFlake.classList.add('snowFlake');
        snowFlake.textContent = '*';
        snowFlake.style.left = `${Math.random() * 100}vw`;
        snowFlake.style.fontSize = `${Math.random() * 12 + 10}px`
        snowFlake.style.opacity = Math.random();
        snowFlake.style.animationDuration =  `${Math.random() * 3 + 2}s`
        snowContainer.appendChild(snowFlake);

        setTimeout(() => {
            snowFlake.remove();
        }, 5000);
    }

    setInterval(createSnowFlake, 50);
});