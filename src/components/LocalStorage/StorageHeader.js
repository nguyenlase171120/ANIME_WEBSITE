export const saveValueStorage = (newId) => {
  const previousId = localStorage.getItem("previousId");
  if (!previousId) {
    localStorage.setItem("previousId", newId);
    console.log("no click");
  } else {
    document.querySelector(previousId).classList.remove("first_navLinks");
    document.querySelector(previousId).style.color = "#899ead";

    localStorage.setItem("previousId", newId);
  }
};
