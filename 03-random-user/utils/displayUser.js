//* if we export file [ export default getElement  ] then we import file using that method... we can set the name as we wish
import get from "./getElement.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  removeActive(btns);
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    // console.log(btn);
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      // console.log(person[label]);
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive(btns);
      btn.classList.add("active");
    });
  });
};

function removeActive(item) {
  item.forEach((btn) => {
    btn.classList.remove("active");
  });
}

export default displayUser;
