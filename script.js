window.addEventListener('load', () => {
    
    const loadingText = document.getElementById('loading-text');
    const startButton = document.getElementById('start-button');
    const loadingScreen = document.getElementById('loading-screen');
    const gameScreen = document.getElementById('game-screen');

    // 1. Имитация загрузки
    // Через 6 секунд (когда дракон улетел и название появилось)
    setTimeout(() => {
        // Скрываем текст загрузки
        loadingText.style.display = 'none';
        
        // Показываем кнопку "Начать"
        startButton.style.display = 'block';
    }, 6000); 

    // 2. Обработка нажатия на кнопку
    startButton.addEventListener('click', () => {
        // Небольшая задержка, чтобы игрок увидел анимацию нажатия кнопки (:active в CSS)
        setTimeout(() => {
            // Плавное исчезновение экрана загрузки
            loadingScreen.style.transition = 'opacity 0.5s';
            loadingScreen.style.opacity = '0';
            
            // Через время исчезновения показываем игру
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                gameScreen.style.display = 'flex'; // ВКЛЮЧАЕМ ГЛАВНЫЙ ЭКРАН
            }, 500);
            
        }, 150); // Задержка для анимации кнопки
    });
});
