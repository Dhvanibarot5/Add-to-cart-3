// const books = JSON.parse(localStorage.getItem("books")) || [];
// const error = document.getElementById("error");
// const bookTableBody = document.getElementById("bookTableBody");

// const handleEdit = (index) => {
//   console.log(index);
// };
// const handleDelete = (index) => {
//   books.splice(index, 1);
//   localStorage.setItem("books", JSON.stringify(books));
//   PrintTable();
// };

// // console.log(books);

// const PrintTable = () => {
//   bookTableBody.innerHTML = "";

//   books.map((book, index) => {
//     const newRow = document.createElement("tr"); //<tr></tr>

//     newRow.innerHTML = `
//               <td class="py-2 px-4 border-b">${book.title}</td>
//               <td class="py-2 px-4 border-b">${book.author}</td>
//               <td class="py-2 px-4 border-b">${book.publisher}</td>
//               <td class="py-2 px-4 border-b">${book.publishedDate}</td>
//               <td class="py-2 px-4 border-b">${book.price}</td>
//               <td class="py-2 px-4 border-b">
//                 <button onClick="handleEdit(${index})">edit</button>
//               </td>
//               <td class="py-2 px-4 border-b">
//                 <button onClick="handleDelete(${index})">delete</button>
//               </td>`;
//     bookTableBody.appendChild(newRow);
//   });
// };

// PrintTable();

// document.getElementById("btn").addEventListener("click", (e) => {
//   e.preventDefault();
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const publisher = document.getElementById("publisher").value;
//   const publishedDate = document.getElementById("published_date").value;
//   const price = document.getElementById("price").value;

//   if (!title || !author || !publisher || !publishedDate || !price) {
//     error.innerHTML = "All fields are required.";
//   } else {
//     error.innerHTML = "";

//     const newData = {
//       title,
//       author,
//       publisher,
//       publishedDate,
//       price,
//     };

//     books.push(newData);

//     localStorage.setItem("books", JSON.stringify(books));
//     console.log(books);

//     PrintTable();

//     document.getElementById("title").value = "";
//     document.getElementById("author").value = "";
//     document.getElementById("publisher").value = "";
//     document.getElementById("published_date").value = "";
//     document.getElementById("price").value = "";
//   }
// });

const products = [
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
  const newProduct = ` <div class="w-3">
            <div class="t_img1">
              <div class="content">
                <div class="teamCardImg">
                  <img class="teamImg" src=${product.image} alt="" />
                </div>
                <h2>${product.name}</h2>
                <p>Price $${product.price}</p> 
                <i data-name="${product.name}"
                  data-price="${product.price}"
                  data-image="${product.image}"
                   class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>`;

  container.innerHTML += newProduct;
});

document.querySelectorAll(".fa-cart-shopping").forEach((cartButton) => {
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
