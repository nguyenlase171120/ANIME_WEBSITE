const $ = document.querySelector.bind(document);

export const styleLinks = (id) => {
  $(id).classList.add("first_navLinks");
  $(id).style.color = "white";
};
