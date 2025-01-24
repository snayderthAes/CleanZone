function miBoton() {
  alert(`PRONTO DISPONIBLE
ATT: SNAYDERTH.`);
}

const btnAll = document.querySelector(".btn-test");
const registerContainer = document.querySelector(".box-container");
const btnRegister = document.querySelector(".btn-close");
const bodyBlack = document.querySelector(".bodyBlack");

btnRegister.addEventListener("click", function () {
  if (registerContainer.classList.contains("mostrar")) {
    registerContainer.classList.add("hidden");
    bodyBlack.classList.contains("mostrar");
    bodyBlack.classList.add("hidden");
  }
});

btnAll.addEventListener("click", function () {
  if (registerContainer.classList.contains("hidden")) {
    registerContainer.classList.remove("hidden");
    bodyBlack.classList.remove("hidden");
  }
});

function showElements() {
  registerContainer;
}
