// ================= MODAL ELEMENTS =================
const infoButton = document.querySelector(".info-button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");

// ================= OPEN MODAL =================
infoButton.addEventListener("click", () => {
  modal.classList.remove("modal--hidden");
  document.body.style.overflow = "hidden";
});

// ================= CLOSE MODAL (X BUTTON) =================
modalCloseButton.addEventListener("click", closeModal);

// ================= CLOSE MODAL (CLICK OUTSIDE) =================
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// ================= CLOSE MODAL (ESC KEY) =================
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("modal--hidden")) {
    closeModal();
  }
});

// ================= CLOSE FUNCTION =================
function closeModal() {
  modal.classList.add("modal--hidden");
  document.body.style.overflow = "";
}