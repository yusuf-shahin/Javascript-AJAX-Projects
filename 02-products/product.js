const productDOM = document.querySelector(".product");
const url =
  "https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

const fetchProduct = async () => {
  productDOM.innerHTML = `<h4 class="product-loading">Loading ...</h4>`;

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<h4 class="error">There is a problem to loading the product, please try again latter</h4>`;
  }
};

const start = async () => {
  const data = await fetchProduct();
  displayProducts(data);
};

const displayProducts = (product) => {
  console.log(product);
};

start();
