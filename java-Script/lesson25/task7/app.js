

let price = prompt('Ведіть сумму вашої покупки');
let discountedPrice;

if ( price >= 200 && price < 300) {
    discountedPrice = Math.round(((price * 3) / 100));
    discountedPrice = price - discountedPrice;
    alert(`Ваша вартість товару з урахуванням знижки ${discountedPrice}`);
  }
  
 else if ( price >= 300 && price < 500) {
    discountedPrice = Math.round(((price * 5) / 100));
    discountedPrice = price - discountedPrice;
    alert(`Ваша вартість товару з урахуванням знижки ${discountedPrice}`);
  }
  
 else if ( price >= 500) {
    discountedPrice = Math.round(((price * 7) / 100));
    discountedPrice = price - discountedPrice;
    alert(`Ваша вартість товару з урахуванням знижки ${discountedPrice}`);
  } else {
    discountedPrice = price;
    alert('Для вашого товару знижки не має');
    }