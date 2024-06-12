"use strict"


document.addEventListener("DOMContentLoaded", function () {
  
  // popup

  if (document.querySelector("#popup")) {

    const popupTrigger = document.getElementById('popuptrigger');
    const popup = document.getElementById('popup');
    const popupClose = document.getElementById('popupclose');

    popupTrigger.addEventListener('click', function () {
      popup.style.display = "block";
      document.body.classList.add('_lock');
    })

    popupClose.addEventListener('click', function () {
      popup.style.display = "none";
      document.body.classList.remove('_lock');
    })

    if (popup) {
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#popup') && (!e.target.closest('#popuptrigger'))) {
          popup.style.display = "none";
          document.body.classList.remove('_lock');
        }
      })
    }
  }
});


