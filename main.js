let royxat = document.querySelector("#outID");
let mevalar = document.getElementById("mevaInput");
let addMeva = document.getElementById("submitBtn");
let addDel = document.getElementById("submitDel");
let count = 0;

addMeva.addEventListener("click", () => {
  count++;
  if (count <= 20) {
    let addRoyxat = mevalar.value;
    if (addRoyxat == "") {
      alert("Input ga hech narsa kiritmadingiz! Iltimos Meva nomini kiriting!");
      return;
    }
    let aniq = true;
    let arr = Array.from(royxat.children);
    arr.forEach((item) => {
      if (addRoyxat.toUpperCase() === item.innerText.toUpperCase()) {
        alert("Bu meva ro'yxatda mavjud, Iltimos! boshqa meva kiriting!");
        aniq = false;
      }
    });
    if (aniq) {
      let element = document.createElement("li");

      ///////////////////////////////
      let arr = addRoyxat;
      let javob = arr.split(" ");
      oxirgi = [];
      javob.forEach((n) => {
        let bosh = n.charAt(0).toLocaleUpperCase();
        let song = n.slice(1).toLocaleLowerCase();
        let oxiri = bosh + "" + song;
        oxirgi.push(oxiri);
      });
      let oxir = oxirgi.join(" ");
      ////////////////////////////////////////

      element.innerText = oxir;
      royxat.appendChild(element);
    }
  } else {
    alert("Kechirasiz list to'ldi!");
  }
  mevalar.value = "";
});

addDel.addEventListener("click", () => {
  royxat.innerHTML = "";
  count = 0;
});
