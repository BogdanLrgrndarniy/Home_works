let tabItems = document.querySelectorAll(".tab");
let farCryTabDescription = document.querySelectorAll(".farCryTab-description");
let icon = document.querySelectorAll(".icon");
let whileLine = document.querySelectorAll(".whileLine");

for (let item of tabItems) {
  item.addEventListener("click", function () {
    console.log(item.dataset.tab);
    for (let item2 of farCryTabDescription) {
      for (item3 of icon) {
        for (let item4 of whileLine) {
          if (item.dataset.tab !== item2.dataset.description) {
            item2.classList.remove("is-active");
          } else {
            item2.classList.add("is-active");
          }
          if (item.dataset.tab !== item3.dataset.icon) {
            item3.classList.remove("active");
          } else {
            item3.classList.add("active");
          }
          console.log(item2.index);
          if (item.dataset.tab !== item4.dataset.line) {
            item4.classList.remove("whileLineActive");
          } else {
            item4.classList.add("whileLineActive");
          }
        }
        console.log(item2.index);
      }
    }
  });
}
