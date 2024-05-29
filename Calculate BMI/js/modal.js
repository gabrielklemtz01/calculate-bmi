export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  button: document.querySelector(".closeModal"),
  message: document.querySelector(".modal h2"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

Modal.button.onclick = () => {
  Modal.close();
};
