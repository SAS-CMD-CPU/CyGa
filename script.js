// Предзагрузка главного экрана (PNG)
const imgPreloader = new Image();
imgPreloader.src = "main-menu.png"; 

window.addEventListener('load', () => {
    
    const startButton = document.getElementById('start-button');
    const loadingScreen = document.getElementById('loading-screen');
    const gameScreen = document.getElementById('game-screen');
    const progressBar = document.querySelector('.progress-bar-container');

    // Кнопка через 5 секунд
    setTimeout(() => {
        progressBar.style.display = 'none';                
        startButton.style.display = 'flex';                
    }, 5000); 

    // Логика перехода
    startButton.addEventListener('click', () => {
        
        // 1. Подготавливаем игру под экраном загрузки
        gameScreen.style.display = "flex"; 
        gameScreen.style.zIndex = "1";
        loadingScreen.style.zIndex = "2";

        // 2. Делаем экран загрузки прозрачным (плавно)
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
        
        // 3. Полностью убираем после завершения анимации
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });
});
