window.addEventListener('load', () => {
    
    const startButton = document.getElementById('start-button');
    const loadingScreen = document.getElementById('loading-screen');
    const gameScreen = document.getElementById('game-screen');
    const progressBar = document.querySelector('.progress-bar-container');

    // Кнопка появляется после заполнения полосы (5 секунд)
    setTimeout(() => {
        progressBar.style.display = 'none'; // Скрываем полосу
        startButton.style.display = 'block'; // Показываем кнопку
    }, 5000); 

    // Логика перехода
    startButton.addEventListener('click', () => {
        // 1. Сразу поднимаем z-index игры, чтобы она была готова
        gameScreen.style.zIndex = "20"; 
        gameScreen.style.display = "flex"; // Начинаем прогрузку картинки

        // 2. Делаем экран загрузки прозрачным
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
        
        // 3. После завершения анимации прозрачности убираем экран загрузки совсем
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });
});
