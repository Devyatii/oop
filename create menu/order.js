/** @module Hamburger */

/** @see Error - класс, генерирующий сообщение об ошибке */
let Error = require('./error').Error;

/**
 * Создает экземпляр Order.
 *
 * @constructor
 * @this  {Order}
 * @param {boolean} isPaid - Оплачен ли заказ.
 * @param {Array} dishes - Массив объектов - блюд в заказе.
 */
class Order {
    constructor() {
        this._dishes = [];
        this._isPaid = false;
    }

    /**
     * Получение статуса оплаты заказа.
     * @returns {boolean} Статус оплаты заказа.
     */
    getPaidStatus() {
        return this._isPaid;
    }

    /**
     * Получение статуса оплаты заказа.
     * @returns {Array} Перечень добавленных в заказ блюд.
     */
    getDishes() {
        return this._dishes;
    }

    /**
     * Добавление позиции в заказ.
     * @param {Object} product - Специальный объект, хранящий в себе параметры выбранного блюда или напитка.
     * @throws Выбрасывает ошибку, если заказ оплачен и закрыт.
     */
    addToOrder(product) {
        if (!this.getPaidStatus()) {
            this._dishes.push(product);

        } else {
          throw new Error('Adding new positions is not available, order is closed');
        }
    }

    /**
     * Удаление позиции из заказа по индексу.
     * @param {number} index - Порядковый номер позиции в заказе (начинается с 1), которую требуется удалить. 
     * @throws Выбрасывает ошибку, если заказ оплачен и закрыт.
     */
    deletePositionFromOrder(index) {
        if (!this.getPaidStatus()) {
          let dishPosition = index - 1;
          this.getDishes().splice(dishPosition, 1);

        } else {
          throw new Error('Deletion of product is not available, order is closed');
        }
    }

    /**
     * Подсчет общей стоимости заказа.
     * @returns {number} Стоимость всего заказа в тугриках.
     * @throws Выбрасывает ошибку, если в заказе нет позиций.
     */
    calculateTotalPrice() {
        let thisOrder = this.getDishes();
        if (thisOrder.length > 0) {
          let totalPrice = 0;
          
          thisOrder.forEach(item => {
            totalPrice += item.calculatePrice();
          });

          return totalPrice;
        
        } else {
          throw new Error('Calculation price is not available, order is empty');
        }
    }
    
    /**
     * Подсчет общей калорийности заказа.
     * @returns {number} Калорийность всего заказа.
     * @throws Выбрасывает ошибку, если в заказе нет позиций.
     */
    calculateTotalCalories() {
      let thisOrder = this.getDishes();
      if (thisOrder.length > 0) {
        let totalCalories = 0;

        thisOrder.forEach(item => {
          totalCalories += item.calculateCalories();
        });

        return totalCalories;

      } else {
        throw new Error('Calculation calories is not available, order is empty');
      }
    }
    
    /**
     * Оплата заказа.
     * После оплаты заказ закрывается и недоступен к редактированию.
     */
    pay() {
      this._isPaid = true;
      Object.freeze(this._dishes);
    }        
}
  
module.exports = {
  Order: Order
};
