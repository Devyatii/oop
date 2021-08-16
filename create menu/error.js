/** @module Error */

/**
 * Создает экземпляр Error.
 *
 * @constructor
 * @this  {Error}
 * @param {string} message - Текст ошибки.
 */

class Error {
    
    constructor(message) {
        this.message = message || 'Error';
    }
}

module.exports = {
    Error: Error
};
