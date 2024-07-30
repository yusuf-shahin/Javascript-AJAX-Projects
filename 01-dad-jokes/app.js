// const url = "https://icanhazdadjoke.com/";

// const btn = document.querySelector(".btn");
// const result = document.querySelector(".result");

// btn.addEventListener("click", () => {
//   // console.log("hello world");
//   fetchDadJoke();
// });

// //* create async function
// const fetchDadJoke = async () => {
//   result.innerHTML = `<h3 style="color: purple;">Loading...</h3>`;
//   try {
//     const resp = await fetch(url, {
//       headers: {
//         Accept: "application/json",
//         "User-Agent": "learning app",
//       },
//     });
//     // if (!resp.ok) {
//     //   throw new Error(" error");
//     // }

//     //* if I comment out the throw resp hold value
//     console.log(resp);
//     const data = await resp.json();
//     // console.log(data);
//     result.textContent = data.joke;
//   } catch (error) {
//     //# If the url of API is wrong then it show this meessage...
//     // for example "https://icanhazdadjo.com/" this url is wrong
//     result.innerHTML = `<h3 style="color: brown;">There is no joke... :)</h3>`;
//   }
// };

// //* See the the after opening window , invoke the function outside.
// fetchDadJoke();

//========
//? Practice
//========

// const promise = new Promise((resolve, reject) => {});

// console.log(promise);

const myName = (name) => {
  return `My name is ${name}`;
};

// const promise = new Promise((resolve, reject) => {
//   // const value = true;
//   // value ? resolve("success") : reject("failure");
//   const value = 3 + 5;
//   // value === 9 ? resolve("success") : reject("failure");
//   value === 9 ? resolve(myName("shahin")) : reject(myName("shovo"));
// });

// console.log(promise);
//# If value === true promise gonna fullfill other hand value === false, promise gonna reject. Too catch this value properly , we build a promise chain

// promise.then((mes) => console.log(mes)).catch((mes) => console.log(mes));
// # We add then() method after promise, anything(value, array , obj , func) which gonna resolve in promise ,we gonna find inside then() method.

//# we also add catch() method to catching error. If our promise gonna reject , we get the rejection message inside catch() method...

console.log(fetch());
//# fetch() method is a promise base function ...
