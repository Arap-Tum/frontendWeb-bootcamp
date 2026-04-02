import { products } from "./data.js";

const container = document.getElementById("productsContainer");

function renderProducts() {
  let html = "";

  products.forEach((product) => {
    html += `
  <article class="product-card">
    <h3>${product.name}</h3>
    <img src="${product.image}" alt="${product.name}" />
    <p>${product.description}</p>
    <p class="price">Price: ksh ${product.price}</p>
    <button class="add-btn" data-id="${product.id}">Add to Cart</button>
  </article>
`;
  });

  container.innerHTML = html;

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.id);
      addToCart(id);
    });
  });
}

// GLOBAL function so HTML can access it
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  alert(product.name + " added to cart!");
}

renderProducts();
