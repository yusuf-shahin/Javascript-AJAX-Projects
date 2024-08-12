// const getElement = (selection) => {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw new Error("no element selected");
//   }
// };

// //* You can only have one default export in a file.
// export default getElement;

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error("no element selected");
};

//* we can also export using that method...
export default getElement;
