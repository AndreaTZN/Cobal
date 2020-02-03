export function activeBurger() {
  const burger = document.querySelector(".burger-menu");
  const overlay = document.querySelector(".overlay");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    overlay.classList.toggle("is-visible");

  });
}