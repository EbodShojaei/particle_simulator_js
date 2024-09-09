import { initializeGame } from './src/utils/setupUtils.js';
import { menu } from './langs/en/ui/menu.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Set title of the document
    document.title = menu.title;

    // Add a div called 'game-container' to the body of the document
    const gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';
    document.body.appendChild(gameContainer);

    initializeGame(); // Initialize the game setup and handlers
});