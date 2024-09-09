/**
 * Class to manage the state of the application and notify observers of changes.
 */
export class StateManager {
    constructor() {
        this.state = {};
        this.observers = [];
    }

    /**
     * Sets a new state and notifies observers of the change.
     * 
     * @param {Object} newState - The new state to set.
     */
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notifyObservers();
    }

    /**
     * Gets the current state of the application.
     * 
     * @returns {Object} - The current state.
     */
    getState() {
        return this.state;
    }

    /**
     * Resets the state to its initial value and notifies observers.
     */
    resetState() {
        this.state = {};
        this.notifyObservers();
    }

    /**
     * Adds an observer to this state manager.
     * 
     * @param {Observer} observer - The observer to add.
     */
    addObserver(observer) {
        this.observers.push(observer);
    }

    /**
     * Removes an observer from this state manager.
     * 
     * @param {Observer} observer - The observer to remove.
     */
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    /**
     * Notifies all observers of a state change.
     */
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.state));
    }
}