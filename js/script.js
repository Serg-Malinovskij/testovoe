"use strict"

// inputMask - находим все инпуты с типом tel на странице:
let inputs = document.querySelectorAll('input[type="tel"]');
// создадим экземпляр объекта Inputmask: передаем строку с маской где 9 -пустое значение - означает любое число
let im = new Inputmask('+7 (999) 999-99-99');
// к созданному экземпляру применим метод mask(), в который передадим наши инпуты inputs
im.mask(inputs);



document.addEventListener("DOMContentLoaded", function () {
  
  // popup

  if (document.querySelector("#popup")) {

    const salePopupTrigger = document.getElementById('salebutton');
    const salePopup = document.getElementById('salepopup');
    const salePopupClose = document.getElementById('popup-close');

    salePopupTrigger.addEventListener('click', function () {
      salePopup.style.display = "block";
    })

    salePopupClose.addEventListener('click', function () {
      salePopup.style.display = "none";
    })

    if (salePopup) {
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#salepopup') && (!e.target.closest('#salebutton'))) {
          salePopup.style.display = "none";
        }
      })
    }
    function showSalePopup() {
      salePopup.style.display = "block";
    }

    setTimeout(showSalePopup, 10000);
  }
});


