window.addEventListener('load', () => {
    
    const loadingScreen = document.getElementById('loading-screen');
    const gameScreen = document.getElementById('game-screen');

    // Через 5 секунд переключаем экран
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        gameScreen.style.display = 'flex';                
    }, 5000); 
});