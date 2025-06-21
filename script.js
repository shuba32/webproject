 const products = [
  { id: 1, name: "Smartphone", price: 9999, img: "https://via.placeholder.com/200x150?text=Phone" },
  { id: 2, name: "Laptop", price: 49999, img: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 3, name: "Headphones", price: 1999, img: "https://via.placeholder.com/200x150?text=Headphones" },
  { id: 4, name: "Smartwatch", price: 2999, img: "https://via.placeholder.com/200x150?text=Watch" }
];

let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartCount = cart.length;
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-total").textContent = cartTotal;
}

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

renderProducts();
