import Ui from "./Userinterface.js";
import Card from "./card.js";

(function RunRightAway() {
  loadApp();
  function loadApp() {
    const form = document.querySelector(".group-form");
    form.addEventListener("submit", addWork);
  }

  function addWork(e) {
    e.preventDefault();

    const inputWork = document.querySelector(".input-work").value;
    const inputLocation = document.querySelector(".input-location").value;

    if (inputWork != "" && inputLocation != "") {
      const cardOne = new Card(inputWork, inputLocation);

      Ui.renderToDom(cardOne);

      Ui.clearInputFields();
    }
  }
})();
