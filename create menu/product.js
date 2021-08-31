/** @module Product */

/**
 * Класс создает экземпляр Product.
 *
 * @constructor
 * @this  {Product}
 * @param {Object} product - Специальный объект, хранящий в себе параметры выбранного блюда или напитка.
 */

class Product {
    
    constructor(product) {
        this._product = product;
    }

    /**
     * Узнать тип пункта меню.
     * @returns {Object} - Специальный объект, хранящий в себе параметры выбранного блюда или напитка.
     */
    
    getType() {
        return this._product;
    }

    /**
     * Подсчет стоимости продукта.
     * @returns {number} Стоимость продукта в тугриках.
     */
    calculatePrice() {
        return this.getType().price;
    }
    
    /**
     * Подсчет калорийности продукта.
     * @returns {number} Калорийность продукта.
     */
    calculateCalories() {
        return this.getType().calories;
    }
}

module.exports = {
    Product: Product
  };
  