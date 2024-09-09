/**
 * Scheduler class to schedule tasks and remove them when needed
 * 
 * @property {Array<number>} tasks - The list of task IDs to manage
 */
export class Scheduler {
    /**
     * Creates a Scheduler instance with an empty list of tasks.
     */
    constructor() {
        this.tasks = [];
    }

    /**
     * Schedules a task to run after a specified delay.
     * 
     * @param {Function} task - The task to run.
     * @param {number} delay - The delay in milliseconds before running the task.
     * @returns {number} - The ID of the scheduled task.
     */
    scheduleTask(task, delay) {
        const timeoutId = setTimeout(() => {
            task();
            this.removeTask(timeoutId);
        }, delay);
        this.tasks.push(timeoutId);
        return timeoutId;
    }

    /**
     * Removes a task from the list of scheduled tasks.
     * 
     * @param {number} taskId - The ID of the task to remove.
     */
    removeTask(taskId) {
        clearTimeout(taskId);
        this.tasks = this.tasks.filter(id => id !== taskId);
    }

    /**
     * Removes all scheduled tasks.
     */
    clearAllTasks() {
        this.tasks.forEach(taskId => clearTimeout(taskId));
        this.tasks = [];
    }
}