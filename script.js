// 1. Предзагрузка главного экрана (ВАЖНО: тут PNG)
const imgPreloader = new Image();
imgPreloader.src = "main-menu.png"; 

window.addEventListener('load', () => {
    
    const startButton = document.getElementById('start-button');
    const loadingScreen = document.getElementById('loading-screen');
    const gameScreen = document.getElementById('game-screen');
    const progressBar = document.querySelector('.progress-bar-container');

    // Показываем кнопку через 5 секунд (когда жидкость заполнилась)
    setTimeout(() => {
        progressBar.style.display = 'none'; // Скрываем полосу
        startButton.style.display = 'flex'; // Показываем кнопку (flex для центрирования текста)
    }, 5000); 

    // Логика перехода
    startButton.addEventListener('click', () => {
        
        // 1. Сначала подготавливаем игру под экраном загрузки
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
