let changeBackGroundDiv = document.querySelectorAll(
  ".changeBackGround-Items__circle"
);
let headerBackground = document.querySelector("header");
let count = 0;


let sliderHeader = function () {
  for (let i = 0; i < changeBackGroundDiv.length; i++) {
    changeBackGroundDiv[i].addEventListener("click", function (event) {
      if (changeBackGroundDiv[i].classList.contains("li-Active") === false) {
        for (let j = 0; j < changeBackGroundDiv.length; j++) {
          if (changeBackGroundDiv[j].classList.contains("li-Active")) {
            changeBackGroundDiv[j].classList.remove("li-Active");
          }
        }
        changeBackGroundDiv[i].classList.add("li-Active");
      }

      if (count === 1) {
        headerBackground.classList.remove("active-changeBackGround");
        count = 0;
      } else if (
        headerBackground.classList.contains("active-changeBackGround") ===
          false &&
        count === 0
      ) {
        headerBackground.classList.add("active-changeBackGround");
        count += 1;
        console.log(count);
      }
    });
  }
};

sliderHeader();

// }

//
