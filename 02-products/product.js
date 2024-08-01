const productDOM = document.querySelector(".product");
const url =
  "https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading ...</h4>`;
    //# It help us to know the search location.
    console.log(window.location.search);
    const pramas = new URLSearchParams(window.location.search);
    const id = pramas.get("id");
    console.log(id);

    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There is a problem to loading the product, please try again latter</p>`;
  }
};

const show = async () => {
  const data = await fetchProduct();
  displayProducts(data);
};

//* display all product function, which fetch from API
const displayProducts = (product) => {
  // console.log(product);
  ////  company, colors, description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  //? colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorsList}
            
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

show();
