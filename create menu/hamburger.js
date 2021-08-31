/** @module Hamburger */

/**
 *  @see Product - родительский класс Drink.
 *  @see Error - класс, генерирующий сообщение об ошибке.
 */
let Product = require('./product').Product,
    Error = require('./error').Error;

/**
 * Класс, объекты которого описывают параметры гамбургера. 
 *
 * @constructor
 * @this  {Hamburger}
 * @param {Object} product - Специальный объект, хранящий в себе параметры выбранного блюда или напитка.
 * @param {Object} stuffing - Специальный объект, хранящий в себе параметры начинки.
 */
class Hamburger extends Product {
    
    constructor(product, stuffing) {
        super(product);
        this._stuffing = {
            [stuffing.name]: 1
        };
    
    }
    
    /* Параметры бургеров */
    static SIZE_SMALL = { name: 'smallburger', price: 50, calories: 20 };
    static SIZE_BIG = { name: 'bigburger', price: 100, calories: 40 };

    /* Параметры начинок и добавок */
    static STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
    static STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
    static STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

    /* Объект с размерами бургеров */
    static BURGER_SIZES = {
        small: Hamburger.SIZE_SMALL.name,
        big: Hamburger.SIZE_BIG.name
    }

    /* Объект с перечнем начинок и добавок */
    static STUFFING_LIST = {
        cheese: Hamburger.STUFFING_CHEESE,
        salad: Hamburger.STUFFING_SALAD,
        potato: Hamburger.STUFFING_POTATO
      };
    
    /**
     * Получение параметров начинки по ее названию.
     * @returns {Object} Специальный объект, хранящий в себе параметры начинки.
     */
    getStuffingByName(stuffingName) {
        return Hamburger.STUFFING_LIST[stuffingName];
      }
    
    /**
     * Получение параметров всех начинок.
     * @returns {Object} Объект с параметрами и количеством всех начинок, включенных в заказ.
     */
    getStuffingDescription() {
        let stuffingArray = Object.entries(this.getStuffing());
        return stuffingArray.map(item => {
            return {
                [item[0]]: this.getStuffingByName(item[0]), 
                'amount': item[1]
            };
        });
    }

    /**
     * Получение размера бургера.
     * @returns {string} Строку, указывающую размер бургера.
     * @throws Выбрасывает ошибку, если не определен размер бургера.
     */
    getSize() {
        let burgerName = this.getType().name;
        switch (burgerName) {
            case Hamburger.BURGER_SIZES.small:
                return 'SMALL';
            case Hamburger.BURGER_SIZES.big:
                return 'BIG';
            default:
                throw new Error('Unable to define burger size');
        }
    }

    /**
     * Получение параметров начинки по ее названию.
     * @returns {Object} Объект вида: {"название начинки": количество}.
     */
    getStuffing() {
        return this._stuffing;
    }

    /**
     * Получение параметров начинки по ее названию.
     * @returns {number} Количество видов начинки в заказе.
     */
    getStuffingLength() {
        return Object.keys(this.getStuffing()).length;
    }

    /**
     * Добавление новой или увеличение количества существующей начинки в заказе.
     * @param {Object} stuffing - Специальный объект, хранящий в себе параметры начинки.
     */
    addStuffing(stuffing) {
        let stuffingObj = this.getStuffing(),
            stuffingItem = stuffing.name;

        stuffingObj[stuffingItem] = stuffingObj[stuffingItem]++ || 1;
    }

    /**
     * Удаление начинки из заказа.
     * @param {Object} stuffing - Специальный объект, хранящий в себе параметры начинки.
     * @throws Выбрасывает ошибку, если удаляется отсутствующая в заказе начинка.
     * @throws Выбрасывает ошибку, если удаляется последняя начинка из заказа.
     */
    removeStuffing(stuffing) {
        let stuffingObj = this.getStuffing(),
            stuffingItem = stuffing.name;

        if (!stuffingObj[stuffingItem]) {
            throw new Error('This stuffing was not added in order');
        }

        if (stuffingObj[stuffingItem] === 1) {
            if (this.getStuffingLength() === 1) {
                throw new Error('Stuffing can\'t be empty. Add sttufing in order before deleting this stuffing');
            }
            delete stuffingObj[stuffingItem];

        } else {
            stuffingObj[stuffingItem] -= 1;
        }
    }

    /**
     * Подсчет стоимости бургера и начинки.
     * @returns {number} Суммарную стоимость бургера и начинки в тугриках.
     */
    calculatePrice() {
        let hamburgerPrice = super.calculatePrice(),
            stuffingPrice = 0,
            stuffingArray = Object.entries(this.getStuffing());

            for (let stuffing of stuffingArray) {
                let stuffingName = stuffing[0],
                    stuffingAmount = stuffing[1];
               stuffingPrice += this.getStuffingByName(stuffingName).price * stuffingAmount;
            }

        return hamburgerPrice + stuffingPrice;
    }

    /**
     * Подсчет калорийности бургера и начинки.
     * @returns {number} Суммарную калорийность бургера и начинки.
     */
    calculateCalories() {
        let hamburgerCal = super.calculateCalories(),
            stuffingCal = 0,
            stuffingArray = Object.entries(this.getStuffing());

            for (let stuffing of stuffingArray) {
                let stuffingName = stuffing[0],
                    stuffingAmount = stuffing[1];
               stuffingCal += this.getStuffingByName(stuffingName).calories * stuffingAmount;
            }

        return hamburgerCal + stuffingCal;
    }
}

module.exports = {
    Hamburger: Hamburger
};
