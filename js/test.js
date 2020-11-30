loadAddventlistner();
function loadAddventlistner() {
  const form = document.querySelector(".group-form");
  form.addEventListener("submit", addWork);
}

function addWork(event) {
  event.preventDefault();
  const inputWork = document.querySelector(".input-work").Value;
  const inputLocation = document.querySelector(".input-location").value;

  if (inputLocation != "" && inputWork != "") {
    const cardOne = new Card(inputWork, inputLocation);
    Ui.renderToDom(cardOne);
  }
}

class Card {
  constructor(inputWork, inputLocation) {
    this.work = inputWork;
    this.location = inputLocation;
  }
}

class Ui {
  static renderToDom(cardObj) {
    const ul = document.querySelector(".cards");

    let html = `
    <li class="card">
                    <picture>
                        <img src="/img/card1.jpg" alt="Logo" class="card-logo">
                    </picture>
                    <div class="card-right-content">
                        <h4>${cardObj.work}</h4>
                        <p class="location">${cardObj.location}</p>
                        <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita labore distinctio rem ullam aut, omnis sit, facilis ea</p>
                    </div>
                    <figure>
                        <img class="heart" src="/img/huge_heart_default.svg" alt="heart">
                    </figure>
                </li>
    
    `;

    ul.innerHTML += html;
  }
}
