const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const followModal = document.querySelector(".modal-follow");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  followModal.classList.remove("active");
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const openFollowModal = () => {
  console.log("Modal is Open");
  followModal.classList.add("active");
  overlay.classList.add("overlayactive");
};


