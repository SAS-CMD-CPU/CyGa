// Предзагрузка ПУСТОГО фона игры (PNG)
const imgPreloader = new Image();
imgPreloader.src = "game-bg.png"; 

// Предзагрузка всех иконок, чтобы они появились мгновенно
const icons = ["icon-settings.png", "icon-expedition.png", "icon-clan.png", "icon-shop.png", "icon-battle.png"];
icons.forEach(src => {
    const img = new Image();
    img.src = src;
});

window.addEventListener('load', () => {
    
    const startButton = document.getElementById('start-button');
    const loadingScreen = document.getElementById('loading-screen');
    const gameScreen = document.getElementById('game-screen');
    const progressBar = document.querySelector('.progress-bar-container');

    // Кнопка "Начать" появляется через 5 секунд (когда полоса заполнилась)
    setTimeout(() => {
        if(progressBar) progressBar.style.display = 'none';                
        if(startButton) startButton.style.display = 'flex';                
    }, 5000); 

    // Логика перехода с загрузки на игру
    startButton.addEventListener('click', () => {
        
        // 1. Сначала подготавливаем игру ПОД экраном загрузки
        gameScreen.style.display = "flex"; 
        gameScreen.style.zIndex = "1";
        loadingScreen.style.zIndex = "2";

        // 2. Делаем экран загрузки прозрачным (плавно за 0.5с)
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
        
        // 3. Полностью убираем loading-screen после завершения анимации
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });

    // =========================================
    // --- ОБРАБОТКА КЛИКОВ НА ИКОНКИ ---
    // =========================================

    document.getElementById('btn-settings').addEventListener('click', () => {
        alert('Нажаты Настройки');
    });

    document.getElementById('btn-expedition').addEventListener('click', () => {
        alert('Нажата Экспедиция');
    });

    document.getElementById('btn-clan').addEventListener('click', () => {
        alert('Нажат Клан');
    });

    document.getElementById('btn-shop').addEventListener('click', () => {
        alert('Нажат Магазин');
    });

    document.getElementById('btn-battle').addEventListener('click', () => {
        alert('В БОЙ!');
    });
});
