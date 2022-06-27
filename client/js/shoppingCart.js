// // import items from "../../../items.json"
// // import formatCurrency from "../util/formatCurrency.js"
// import addGlobalEventListener from "../util/addGlobalEventListener.js"
// import { getItems, purchaseItem } from "./api.js"

// const cartButton = document.querySelector("[data-cart-button]")
// const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]")
// let shoppingCart = []
// const cartItemTemplate = document.querySelector("#cart-item-template")
// const cartItemContainer = document.querySelector("[data-cart-items]")
// const cartQuantity = document.querySelector("[data-cart-quantity]")
// const cartTotal = document.querySelector("[data-cart-total]")
// const cart = document.querySelector("[data-cart]")
// const SESSION_STORAGE_KEY = "SHOPPING_CART-cart"

// export function setupShoppingCart() {
//   addGlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
//     const id = parseInt(e.target.closest("[data-item]").dataset.itemId)
//     removeFromCart(id)
//   })

//   shoppingCart = loadCart()
//   renderCart()
//   //Show/Hide the cart when clicked
//   cartButton.addEventListener("click", () => [cartItemsWrapper.classList.toggle("invisible")])
// }

// function saveCart() {
//   sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart))
// }

// function loadCart() {
//   const cart = sessionStorage.getItem(SESSION_STORAGE_KEY)
//   return JSON.parse(cart) || []
// }

// //Add items to cart
// export function addToCart(id) {
//   const existingItem = shoppingCart.find((entry) => entry.id === id)
//   if (existingItem) {
//     existingItem.quantity++
//   } else {
//     shoppingCart.push({ id: id, quantity: 1 })
//   }
//   renderCart()
//   saveCart()
// }

// function removeFromCart(id) {
//   const existingItem = shoppingCart.find((entry) => entry.id === id)
//   if (existingItem == null) return
//   shoppingCart = shoppingCart.filter((entry) => entry.id !== id)
//   renderCart()
//   saveCart()
// }

// function renderCart() {
//   if (shoppingCart.length === 0) {
//     hideCart()
//   } else {
//     showCart()
//     renderCartItems()
//   }
// }

// function hideCart() {
//   cart.classList.add("invisible")
//   cartItemsWrapper.classList.add("invisible")
// }

// function showCart() {
//   cart.classList.remove("invisible")
// }

// async function renderCartItems() {
//   const items = await getItems()

//   cartQuantity.textContent = shoppingCart.length

//   const totalCents = shoppingCart.reduce((sum, entry) => {
//     const item = items.find((i) => entry.id === i.id)
//     return sum + item.price * entry.quantity
//   }, 0)

//   cartTotal.textContent = `$${totalCents}`

//   cartItemContainer.innerHTML = ""
//   shoppingCart.forEach((entry) => {
//     const item = items.find((i) => entry.id === i.id)
//     const cartItem = cartItemTemplate.content.cloneNode(true)

//     const container = cartItem.querySelector("[data-item]")
//     container.dataset.itemId = item.id

//     const name = cartItem.querySelector("[data-name]")
//     name.textContent = item.name

//     const image = cartItem.querySelector("[data-image]")
//     image.src = item.images

//     if (entry.quantity > 1) {
//       const quantity = cartItem.querySelector("[data-quantity]")
//       quantity.textContent = `x${entry.quantity}`
//     }

//     const price = cartItem.querySelector("[data-price]")
//     price.textContent = `$${item.price * entry.quantity}`

//     cartItemContainer.appendChild(cartItem)
//   })
// }
