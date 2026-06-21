console.log("Будуємо секцію ourwork-list")


const dataOurworkList = [
    {
        title: "УВАГА ДО ДЕТАЛЕЙ",
        text: "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."
    },

    {
        title: "ПУНКТУАЛЬНІСТЬ",
        text: "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."
    },

    {
        title: "ПЛАНУВАННЯ",
        text: "Так само консультація з широким активом значною мірою зумовлює."
    },

    {
        title: "СУЧАСНІ ТЕХНОЛОГІЇ",
        text: "Значимість цих проблем настільки очевидна, що реалізація планових завдань."
    }
]

const ourworkList = document.querySelector(".ourwork-list")
console.log("ourworkList:", ourworkList)

const markup = dataOurworkList
    .map((element) =>
    `<li class="ourwork-list__item">
      <h3 class="ourwork-list__title">${element.title}</h3> 
      <p class="ourwork-list__text">${element.text}</p>
    </li>`
).join("");

console.log("markup:", markup)
ourworkList.insertAdjacentHTML("beforeend", markup);
