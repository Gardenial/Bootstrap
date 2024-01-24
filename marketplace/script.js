const addToCartButtons = document.querySelectorAll('section#featured-games button');
const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart p');

let cart = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const game = {
      name: button.parentElement.querySelector('h3').innerText,
      price: parseFloat(button.parentElement.querySelector('p').innerText.replace('$', ''))
    };
    cart.push(game);
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((game, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${game.name} ($${game.price.toFixed(2)})</span><button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
    total += game.price;
  });
  cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}