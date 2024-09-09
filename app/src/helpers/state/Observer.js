/**
 * Class representing an observer that watches changes in subjects.
 */
export class Observer {
    constructor() {
        this.subjects = [];
    }

    /**
     * Registers a subject to observe.
     * 
     * @param {Subject} subject - The subject to observe.
     */
    addSubject(subject) {
        this.subjects.push(subject);
        subject.addObserver(this);
    }

    /**
     * Removes a subject from being observed.
     * 
     * @param {Subject} subject - The subject to stop observing.
     */
    removeSubject(subject) {
        this.subjects = this.subjects.filter(sub => sub !== subject);
        subject.removeObserver(this);
    }

    /**
     * Method to update observer state based on subject changes.
     * This method should be overridden in subclasses.
     * 
     * @param {Object} state - The new state of the subject.
     */
    /* eslint-disable no-unused-vars */
    update(state) {
        throw new Error('Update method must be implemented in the subclass');
    }
    /* eslint-disable no-unused-vars */
}