import get from "./utils/getElement.js";
import displayUser from "./utils/displayUser.js";
import user from "./utils//fetchUser.js";

const btn = get(".btn");
// const btn = document.querySelector(".btn");

const showUser = async () => {
  // get user from API
  const data = await user();
  displayUser(data);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
