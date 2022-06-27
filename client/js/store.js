import { getItems, purchaseItem, downloadItem, downloadAll } from "./api.js"

const storeItemTemplate = document.querySelector("#store-item-template")
const storeItemContainer = document.querySelector("[data-store-container]")
const emailForm = document.querySelector("[data-email-form]")
const emailInput = document.querySelector("[data-email-input]")

emailForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  await downloadAll(emailInput.value)
  window.location = "./store.html"
})

export function setupStore() {
  if (storeItemContainer == null) return
  renderStoreItem()
}

async function renderStoreItem() {
  const items = await getItems()

  storeItemContainer.innerHTML = ""
  items.forEach((item) => {
    const storeItem = storeItemTemplate.content.cloneNode(true)

    const container = storeItem.querySelector("[data-store-item]")
    container.dataset.itemId = item.id

    const name = storeItem.querySelector("[data-name]")
    name.textContent = item.name

    const category = storeItem.querySelector("[data-category]")
    category.textContent = item.category

    const image = storeItem.querySelector("[data-image]")
    image.src = item.images

    const price = storeItem.querySelector("[data-price]")
    price.textContent = `$${item.price}`

    const button = storeItem.querySelector("[data-purchase-button]")
    if (item.purchased) {
      button.classList.add("download-btn")
      button.textContent = "Download"
      button.addEventListener("click", () => {
        downloadItem(item.id)
      })
    } else {
      button.classList.add("purchase-btn")
      button.textContent = "Purchase"
      button.addEventListener("click", () => {
        purchaseItem(item.id)
      })
    }

    storeItemContainer.appendChild(storeItem)
  })
}
