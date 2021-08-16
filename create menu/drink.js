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
    static TYPE_COLA = { name: 'cola', price: 50, calories: 40 };
    static TYPE_COFFEE = { name: 'coffee', price: 80, calories: 20 };

    /**
     * Подсчет стоимости напитка.
     * @returns {number} Стоимость напитка в тугриках.
     */
    calculatePrice() {
        return this.getType().price;
    }

    /**
     * Подсчет калорийности напитка.
     * @returns {number} Калорийность напитка.
     */
    calculateCalories() {
        return this.getType().calories;
    }
}

module.exports = {
    Drink: Drink
};