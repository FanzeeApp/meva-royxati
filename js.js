const input = document.getElementById("text");
const submitBtn = document.getElementById("submit");
const taskList = document.querySelector(".task__list");
const doneList = document.querySelector(".done__list");

// LC tasklarni oldik
let tasks = JSON.parse(localStorage.getItem("tasks"));

// har bitta taskni domga tasklist listiga qushdik
tasks.forEach((value) => {
  // yangi li elementrini value b yaratdik
  const newElement = createElementForTask(value);
  // usha yangi element taskList ro'yhtaiga qushdik.
  taskList.appendChild(newElement);
});

// submit btn obislgan ushadik
submitBtn.addEventListener("click", () => {
  // inputdagi yozilgan qiymat
  const value = input.value;
  // yangi li elementrini value b yaratdik
  const newElement = createElementForTask(value);

  // usha yangi element taskList ro'yhatiga qushdik.
  taskList.appendChild(newElement);

  // task arrayiga ham yangi qoshilgan elemnent nomini qushdik
  tasks.push(value);
  // localstoragega ham qushib yangilab quydik
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

// delete qilamiz delet btn osbilgan funksya chaqriladi
function deleteItem(e) {
  // boisilgan element
  const pressedBtn = e.target;

  // otasini otasiga chiqib listdagi p ni oldik
  const item = pressedBtn.parentElement.parentElement.childNodes[1].innerText;

  // ushani p ni quimaytini arraydan udalit qilmiz
  tasks = tasks.filter((el) => el !== item);

  // ushani p ni quimaytini DOMdan udalit qilmiz
  pressedBtn.parentElement.parentElement.remove();

  // ushani p ni qiymatini local udalit qilamiz
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function moveItem(e) {
  const pressedBtn = e.target;
  console.log(pressedBtn);

  const value = pressedBtn.parentElement.parentElement.childNodes[1].innerText;

  // udalit
  pressedBtn.parentElement.parentElement.remove();

  console.log(value);
  // yangi li yaratib uni done listga qushib quyamiz
  const newEl = document.createElement("li");
  newEl.classList.add("strike");
  newEl.innerText = value;

  // donilistga qushish
  doneList.appendChild(newEl);
}

function createElementForTask(value) {
  const newElement = document.createElement("li");

  newElement.classList.add("task__item");

  newElement.innerHTML = `
    <p>${value}</p>
    <div class="task__controller">
      <button onclick="moveItem(event)">
        <img src="./assets/icons/check.svg" alt="" srcset="" />
      </button>
      <button onclick="deleteItem(event)">
        <img src="./assets/icons/delete.svg" alt="" srcset="" />
      </button>
    </div>
    `;

  return newElement;
}
