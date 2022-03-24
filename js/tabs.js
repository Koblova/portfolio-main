const tabButtons = document.querySelectorAll(".design-list__item")

console.dir(main);

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (event) =>{
    console.log(event.target);
  })
})