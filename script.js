const btnGo = document.querySelector(".btn-go");
const btnWrong = document.querySelector(".btn-wrong");

// Sound
btnGo.addEventListener("click", (event) => {
  const goSound = new Audio("./sound/positive-sound.wav");
  goSound.play();
});

btnWrong.addEventListener("click", (event) => {
  const wrongSound = new Audio("./sound/wrong-sound.wav");
  wrongSound.play();
});

// Sidebar
const btnViewSideBar = document.querySelector(".btn-view-sidebar");
const sideBar = document.querySelector(".sidebar");

btnViewSideBar.addEventListener("click", (e) => {
  console.log("Hello World");

  sideBar.classList.toggle("sidebar-active");
});

// Modal
const btnModal = document.querySelector(".btn-modal");
const containerOverlay = document.querySelector(".container-overlay");
const modalContainer = document.querySelector(".modal");

const toggleOverlayAndModal = () => {
  containerOverlay.classList.toggle("active-overlay");
  modalContainer.classList.toggle("active-modal");
};

btnModal.addEventListener("click", (e) => {
  console.log("Modal");

  toggleOverlayAndModal();
});

containerOverlay.addEventListener("click", (e) => {
  toggleOverlayAndModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleOverlayAndModal();
  }
});
