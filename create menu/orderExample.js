/**
 *  @see Order - класс, создающий экземпляр заказа.
 *  @see Hamburger - класс, создающий экземпляр позиции заказа на гамбургер и начинку к нему.
 *  @see Drink - класс, создающий экземпляр позиции заказа на напиток. 
 *  @see Salad - класс, создающий экземпляр позиции заказа на салат.  
 */
let Order = require('./order').Order,
    Hamburger = require('./hamburger').Hamburger,
    Drink = require('./drink').Drink,
    Salad = require('./salad').Salad;

// Создаем новый экземпляр заказа.
let order = new Order(); 

// Создаем позицию заказа с маленьким гамбургером и сырной начинкой.
let smallBurger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);  

// Добавляем созданную позицию заказа в общий заказ.
order.addToOrder(smallBurger);

// Создаем позицию заказа с большим гамбургером и начинкой из салата.
let bigBurger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);

// Добавляем 3 начинки из картофеля. 
bigBurger.addStuffing(Hamburger.STUFFING_POTATO);
bigBurger.addStuffing(Hamburger.STUFFING_POTATO);
bigBurger.addStuffing(Hamburger.STUFFING_POTATO);

// Удаляем из заказа начинку из салата
bigBurger.removeStuffing(Hamburger.STUFFING_SALAD);

// Добавляем в заказ позицию заказа с большим бургером и 3 начинками из картофеля.
order.addToOrder(bigBurger);

// Создаем позицию заказа с 300г салата Цезарь.
let saladOlive = new Salad(Salad.CAESAR, 300);

// Создаем позицию заказа с 300г салата Цезарь. Меняем массу салата на 150г.
saladOlive.changeWeight(150);

// Добавляем в заказ позицию заказа с 150г салата Цезарь.
order.addToOrder(saladOlive);

// Создаем позицию заказа с колой.
let cola = new Drink(Drink.COLA);

// Добавляем в заказ позицию заказа с колой.
order.addToOrder(cola);

// Удаляем из заказа 3-ю позицию (салат Цезарь 150г.)
order.deletePositionFromOrder(3);

// Получаем общую стоимость заказа.
console.log('total price: ' + order.calculateTotalPrice());

// Получаем общую калорийность заказа.
console.log('total calories: ' + order.calculateTotalCalories());

// Оплачиваем заказ.
order.pay();

// Пробуем добавить позицию заказа в оплаченный заказ.
order.addToOrder(smallBurger); // Выбрасывает ошибку: 'Adding new positions is not available, order is closed' 
