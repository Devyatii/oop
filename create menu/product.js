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
}

module.exports = {
    Product: Product
  };