// Создать HTML-страницу с большой таблицей.
// При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.
let elementTd = document.querySelectorAll("td");
let elementTh = document.querySelectorAll("th");
let table = document.querySelector("table");
let arrTh = Array.from(elementTh);
let arrTd = Array.from(elementTd);
let arr = [];
let amount = arrTh.length;
let count = 0;
let quantity = 0;
let buttonClick = 0;
console.log(arrTh);
console.log(arrTd);
console.log(amount);

table.onclick = function (event) {
  let target = event.target;
  console.log(event);
  if (target.tagName != "TH") return;
  console.log(target.tagName);
  for (let i = 0; i < arrTh.length; i++) {
    //находим все елемнты из колонки в зависимости который th был нажат
    count++;
    console.log(count);
    if (target.textContent === arrTh[i].textContent) {
      for (let j = i; j < arrTd.length; j++) {
        if (
          typeof Number(arrTd[j].textContent) === "number" &&
          Number(arrTd[j].textContent) < 9999999999999999999
        ) {
          arr.push(Number(arrTd[j].textContent)); //Робимо масив из елементив колонки якшо цифри
        } else if (typeof arrTd[j].textContent) {
          arr.push(arrTd[j].textContent);
        }
        j += amount - 1;
      }
    }
  }

  for (let j = 0; j < arrTh.length; j++) {
    if (target.textContent === arrTh[j].textContent) {
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i] < 9999999999999999999 &&
          arrTh[j].classList.contains("sort") === false
        ) {
          arrTh[j].classList.add("sort");
          arr.sort(function (a, b) {
            return a - b;
          });
          console.log(arr);
          break;
        }
        if (arrTh[j].classList.contains("sort")) {
          arrTh[j].classList.remove("sort");
          arr.sort(function (a, b) {
            return b - a;
          });
          console.log(arr);
          break;
        }

        if (
          typeof arr[i] &&
          arrTh[j].classList.contains("sortWords") === false
        ) {
          arrTh[j].classList.add("sortWords");
          arr.sort();
          console.log(arr);
          break;
        }
        if (typeof arr[i] && arrTh[j].classList.contains("sortWords")) {
          arrTh[j].classList.remove("sortWords");
          arr.reverse();
          break;
        }
      }

      let a = 0;
      for (let i = 0; i < arrTh.length; i++) {
        if (target.textContent === arrTh[i].textContent) {
          for (let k = i; k < arrTd.length; k++) {
            k += amount - 1;
            // console.log(k);

            for (let j = i; j < arrTd.length + arr.length - arr.length; j++) {
              j += amount - 1;
              if (k === j) {
                arrTd[k - (count - 1)].textContent = arr[a];
                // console.log(a);
                a = a + 1;
              }
            }
          }
        }
      }

      count = 0;
      arr = [];
    }
  }
};
