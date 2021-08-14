((d) => {
  const burger = d.getElementById('burger');
  const menu = d.getElementById('mobileNav');
  const closeButton = d.getElementById('closeButton');

  const toggleView = () => {
    menu.classList.toggle("show");
  }

  burger.addEventListener("click", toggleView);
  closeButton.addEventListener("click", toggleView);

})(document)