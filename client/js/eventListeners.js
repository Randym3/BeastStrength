const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")
const login = document.querySelector("[data-login]")
const loginContainer = document.getElementById("login-container")
const closeIcon = document.getElementById("close-icon")
const loginWrapper = document.querySelector("[data-login-wrapper]")

export function eventListeners() {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
  })

  login.addEventListener("click", (e) => {
    e.preventDefault()
    loginContainer.classList.toggle("hidden")
    login.classList.add("border-b-2", "border-red-800")
  })

  closeIcon.addEventListener("click", () => {
    loginContainer.classList.toggle("hidden")
    login.classList.remove("border-b-2", "border-red-800")
  })

  loginWrapper.addEventListener("click", () => {
    loginContainer.classList.toggle("hidden")
  })
}
