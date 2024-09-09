/**
 * Displayer class for managing UI updates and notifications in a web application.
 * 
 * This class provides methods to display messages, manage button labels, control timers, 
 * and show notifications. It is designed to handle various UI interactions and feedback 
 * in a web-based environment.
 * 
 * @class Displayer
 */
export class Displayer {
    /**
     * Creates an instance of the Displayer class.
     * Initializes the timerInterval to keep track of the active timer.
     */
    constructor() {
        /**
         * @type {number|null}
         * @private
         */
        this.timerInterval = null;
    }

    /**
     * Displays a message in the UI.
     * 
     * @param {string} message - The message to display.
     * @param {boolean} [isSuccess=false] - Flag indicating whether the message represents success (true) or error (false).
     */
    showMessage(message, isSuccess = false) {
        const messageDisplay = document.getElementById('message-display');
        messageDisplay.textContent = message;
        messageDisplay.className = isSuccess ? 'success-message' : 'error-message';
    }

    /**
     * Updates the text content of a button element to show a number.
     * 
     * @param {HTMLButtonElement} button - The button element to update.
     * @param {number} number - The number to display on the button.
     */
    showButtonNumber(button, number) {
        const buttonElement = document.getElementById(button.id);
        buttonElement.textContent = number;
    }

    /**
     * Starts a countdown timer and updates the UI with the remaining time.
     * 
     * @param {number} duration - The initial duration of the timer in seconds.
     */
    startTimer(duration) {
        const timerDisplay = document.getElementById('timer-display');
        let timeRemaining = duration;

        this.timerInterval = setInterval(() => {
            timerDisplay.textContent = `Time left: ${timeRemaining} seconds`;
            timeRemaining--;

            if (timeRemaining < 0) {
                clearInterval(this.timerInterval);
                timerDisplay.textContent = 'Time\'s up!';
                setTimeout(() => {
                    timerDisplay.textContent = '';
                }, 2000);
            }
        }, 1000);
    }

    /**
     * Stops the active timer.
     */
    stopTimer() {
        clearInterval(this.timerInterval);
    }

    /**
     * Displays a notification banner with a message.
     * 
     * @param {string} message - The notification message to display.
     * @param {boolean} [isSuccess=false] - Flag indicating whether the notification represents success (true) or error (false).
     */
    showNotification(message, isSuccess = false) {
        const banner = document.getElementById('notification-banner');
        banner.textContent = message;
        banner.className = `notification ${isSuccess ? 'success-message' : 'error-message'} visible`;

        setTimeout(() => {
            banner.classList.remove('visible');
        }, 3000);
    }

    /**
     * Clears the content of the message and timer display elements.
     */
    clearCanvas() {
        const messageDisplay = document.getElementById('message-display');
        const timerDisplay = document.getElementById('timer-display');
        messageDisplay.textContent = '';
        timerDisplay.textContent = '';
    }
}
