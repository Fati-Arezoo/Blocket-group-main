class Ui {
  static renderToDom(cardObj) {
    const ul = document.querySelector(".cards");

    ul.innerHTML += `
              <li class="card">
                  <picture>
                      <img src="https://source.unsplash.com/150x90/?${
                        cardObj.work
                      }
                      " alt="Logo" class="card-logo">
                  </picture>
                  <div class="card-right-content">
                      <h4 class="card-title">${
                        cardObj.work.charAt(0).toUpperCase() +
                        cardObj.work.slice(1)
                      }</h4>
                  <p class="location">${
                    cardObj.location.charAt(0).toUpperCase() +
                    cardObj.location.slice(1)
                  }</p>
                      <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita labore distinctio rem ullam aut, omnis sit, facilis ea</p>
                  </div>
                  <figure>
                      <img class="heart" src="/img/huge_heart_default.svg" alt="heart">
                  </figure>
              </li>
          `;
  }

  static clearInputFields() {
    const inputWork = document.querySelector(".input-work");
    const inputLocation = document.querySelector(".input-location");

    inputWork.value = "";
    inputLocation.value = "";
  }
}

export default Ui;
