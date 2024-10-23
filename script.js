const products = [
  {
    image: "https://res.cloudinary.com/rixotech/image/upload/v1643262655/Test%20Project/watches_PNG9872_ywlrar.png",
    name: "Exclusive Watch",
    price: 53000,
  },
  {
    image: "images/2.jpg",
    name: "Watches",
    price: 999,
  },
  {
    image: "images/3.webp",
    name: "Sunscreen",
    price: 299,
  },
  {
    image: "images/4.webp",
    name: "Footwear",
    price: 349,
  },
  {
    image: "images/5.webp",
    name: "Perfume",
    price: 4999,
  },
];

const container = document.querySelector(".productContainer");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

products.forEach((product, index) => {
  const newProduct = `<div class="card">
          <div class="img">
            <img src=${product.image} alt=${product.name} />
          </div>
          <div class="text">
            <h3>${product.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam sunt numquam cumque hic!</p>
            <h5>$${product.price}</h5>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="btn">
            <button class="cart-shopping" 
             data-name="${product.name}"
             data-price="${product.price}"
             data-image="${product.image}">Add To Cart</button>
          </div>
        </div>`;
  container.innerHTML += newProduct;
});

document.querySelectorAll(".cart-shopping").forEach((cartButton) => {
  cartButton.addEventListener("click", (e) => {
    const product = {
      name: e.target.getAttribute("data-name"),
      price: e.target.getAttribute("data-price"),
      image: e.target.getAttribute("data-image"),
      quantity: 1,
    };
    console.log(product);

    const existingProduct = cart.find((pro) => pro.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart", cart);
  });
});
