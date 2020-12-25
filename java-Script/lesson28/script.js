// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


let listShoping = [
    {
        name: "sugar",
        amount: 4,
        buy: true,
      },
    {
        name: "bread",
        amount: 3,
        buy: false,
      },
    {
        name: "banan",
        amount: 5,
        buy: true,
      },
      {
        name: "cheese",
        amount: 3,
        buy: false,
      },
        {
        name: "fish",
        amount: 3,
        buy: false,
      },
    ]
    let name = "name";
    
    // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
    function withdrawalOrder(listShoping) {
      for (let item of  listShoping ){
        if(item.buy == false){
              console.log(item.name);
        } 
        }
     for (let item of  listShoping ){
        if(item.buy){
              console.log(item.name);
        } 
        }
    return
      }
    
    // //Количество определеного товара
    
    // function itemQuantity(listShoping){
    //   for(let item of Object.keys(listShoping)){
    //    let amount = listShoping[item];
    //     for (let items of Object.keys(amount)){
    //        let amounts = amount[items];
    //       console.log(amounts);
         
    //     }
    //   }
    // }
    // itemQuantity(listShoping)
    
    // // добавить новую покупку
    function addShopping(newItem , listShoping){
      let count;
      let newArray = listShoping;
      withdrawalOrder(newArray);
    }
    // // добавляем то количество товаров которое нам нужно
    let newItem =  listShoping.push({
        name: "potato",
        amount: 5,
        buy: true,
      },
      {
        name: "water",
        amount: 3,
        buy: false
      });
    let newShopping = addShopping(newItem , listShoping);
    
    // console.log(newShopping);
    
    //Покупка продукта
    function productPurchase(nameProduct, listShoping){
       let m;
      let b;
      for(let item of listShoping){
        
        if(item.buy == false && nameProduct == item.name){
          b = item.name;
          m = item.buy;
          m = true;
           // console.log(`Имя:${item.name} Куплен:${m}`)
        } 
      }
    
      console.log(`Имя:${b} Куплен:${m}`);
    }
    
    
    productPurchase("cheese", listShoping)
    ////////////////////////////////////////////////////////////////////////////

    

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

let check = [
    {
      name: "sugar",
      total: 4,
      price: 12,
      buy: true,
    },
      {
      name: "bread",
      total: 3,
      price: 2,
      buy: false,
    },
    {
      name: "banan",
      total: 5,
      price: 6,
      buy: true,
    }
  ]
  let name = "name";
  
  function info(shoppingList) {
    for (let item of shoppingList) {
      console.log(`You buy ${item[name]}`);
    }
  }
  
  function totalPrice(shoppingList) {
    let result = 0;
    for (let item of shoppingList) {
      result += item.total * item.price;
    }
    console.log(result);
  }
  
  function maxPrice(shoppingList) {
    let mostExspensive = 0;
    let mostExspensiveItem;
    for (let item of shoppingList) {
      if (mostExspensive < item.total * item.price) {
        mostExspensive = item.total * item.price;
        mostExspensiveItem = item.name;
      } 
    }
    return mostExspensiveItem;
  }
  
  function averagePrice(shoppingList) {
    let sum = 0;
    for (let item of shoppingList) {
      sum += item.price;
    }
    console.log(sum / shoppingList.length);
  }
  
  console.log(maxPrice(check));
  info(check);
  totalPrice(check);
  averagePrice(check);

  // Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
let style = [
    {
      propertyName: color,
      propertyValue: red
    },
    {
      propertyName: font-size,
      propertyValue: 20px
    }  
  ]
  
  function textStyle(style, text) {
    let string = "";
    for (let element of style) {
      string += ${element.propertyName}:${element.propertyValue};
  }
    console.log(string);
    document.write(<p style=${string}>${text}</p>)
  }
  
  
  textStyle(style, askdasdlkasdjl);

//   4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^