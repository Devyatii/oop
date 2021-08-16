/** @module Salad */

/**
 *  @see Product - родительский класс Drink.
 *  @see Error - класс, генерирующий сообщение об ошибке. 
 */
let Product = require('./product').Product,
    Error = require('./error').Error;

/**
 * Класс, объекты которого описывают параметры салата. 
 *
 * @constructor
 * @this  {Salad}
 * @param {Object} product - Специальный объект, хранящий в себе параметры выбранного блюда или напитка.
 * @param {number} weight - Вес салата в граммах.
 */
class Salad extends Product {
    
    constructor(product, weight = 100) {
        super(product);
        this._weight = weight;
    }
    
    /* Параметры салатов. Цена и калории указаны за 100г. */
    static TYPE_CAESAR = { name: 'caesar', price: 100, calories: 20 };
    static TYPE_OLIVIER = { name: 'olivier', price: 50, calories: 80 };

    /**
     * Получение массы салата.
     * @returns {number} Заданную массу салата в граммах.
     */
    getWeight() {
        return this._weight;
    }

    /**
     * Переопределение массы салата.
     * @param {number} value - Новая масса салата в граммах. 
     * @throws Выбрасывает ошибку, если задана масса салата менее 100 грамм.
     */
    changeWeight(value) {
        if (value >= 100) {
          this._weight = value;
        } else {
          throw new Error('Salad weight can\'t be less than 100g');
        }
    }

    /**
     * Подсчет стоимости салата.
     * @returns {number} Стоимость салата в тугриках.
     */
    calculatePrice() {
        let price = this.getType().price,
            pricePerGram = price / 100;

        return this.getWeight() * pricePerGram;
    }

    /**
     * Подсчет калорийности салата.
     * @returns {number} Калорийность салата.
     */
    calculateCalories() {
        let calories = this.getType().calories,
            caloriesInGram = calories / 100;

        return this.getWeight() * caloriesInGram;
    }
}

module.exports = {
    Salad: Salad
};
