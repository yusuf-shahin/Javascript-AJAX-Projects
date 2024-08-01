const url = "https://www.course-api.com/javascript-store-products";

const productDOM = document.querySelector(".products-center");

//? fetchData() --> fetch the Api and convert it to data, and hold that data as promise.

const fetchData = async () => {
  try {
    productDOM.innerHTML = `<div class='loading'></div>`;
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    // displayProducts(data);
    return data;
  } catch (error) {
    // console.log("error");
    productDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};

//* every async function return a promise
const show = async () => {
  //* In console we see a promise ...
  // console.log(fetchData());
  // const data = await fetchData();
  // displayProducts(data);
  console.log("hello world");
};

//? Display all product :-
const displayProducts = (list) => {
  // console.log(list);

  //* all product fetch from api
  const productList = list
    .map((product) => {
      //? id ,title, name ,price ,img
      const { id } = product;
      // console.log(id);
      const { name, price, title } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // price /= 100;

      //* in href ?id=${id}&name=yusuf is query string parameter
      return `<a href="product.html?id=${id}&name=yusuf" class="single-product">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");

  productDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

show();
