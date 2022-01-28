const $ = document.querySelector.bind(document);

export const white_bg = (data) => ($(data).style.backgroundColor = "white");

export const event_text = (data) => {
  $(data).addEventListener("mouseover", () => {
    $(data).style.color = "#495863";
  });
};
