/** @module Drink */

/** @see Product - родительский класс Drink. */
let Product = require('./product').Product;

/**
 * Класс, объекты которого описывают параметры напитка. 
 *
 * @constructor
 * @this  {Drink}
 * @param {Object} product - Специальный объект, хранящий в себе параметры выбранного блюда или напитка.
 */
class Drink extends Product {

    /* Параметры напитков */
    static COLA = { name: 'cola', price: 50, calories: 40 };
    static COFFEE = { name: 'coffee', price: 80, calories: 20 };

}

module.exports = {
    Drink: Drink
};
