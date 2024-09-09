/**
 * Class representing a subject that can be observed.
 */
export class Subject {
    constructor() {
        this.observers = [];
        this.state = {};
    }

    /**
     * Adds an observer to this subject.
     * 
     * @param {Observer} observer - The observer to add.
     */
    addObserver(observer) {
        this.observers.push(observer);
    }

    /**
     * Removes an observer from this subject.
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
     * Gets the current state of the subject.
     * 
     * @returns {Object} - The current state.
     */
    getState() {
        return this.state;
    }
}