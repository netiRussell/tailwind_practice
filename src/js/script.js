"use strict";

const mobile_opener = document.getElementById("mobile_open");

if (mobile_opener) {
  const mobile_closer = document.getElementById("mobile_close");
  const mobile_menu = document.getElementById("mobile_menu");

  const mobile_functionality = function () {
    mobile_menu.classList.toggle("flex");
    mobile_menu.classList.toggle("hidden");
  };

  mobile_opener.addEventListener("click", mobile_functionality);
  mobile_closer.addEventListener("click", mobile_functionality);
}
