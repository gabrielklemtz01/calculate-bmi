export const alertError = {
  retorno: document.querySelector(".alert-error"),
  open() {
    alertError.retorno.classList.add("open");
  },
  close() {
    alertError.retorno.classList.remove("open");
  },
};
