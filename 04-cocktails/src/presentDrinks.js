import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const showDrinks = async (url) => {
  //# fetch drink
  const data = await fetchDrinks(url);
  // console.log(data);

  //# display drinks
  // displayDrinks(data);
  const section = displayDrinks(data);
  console.log(section);
};

export default showDrinks;
