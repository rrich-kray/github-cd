var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches('.box')){
    if (element.dataset.state === "hidden") {
      element.dataset.state = "visible";
      element.textContent = element.dataset.number;
    } else {
      element.dataset.state = "hidden";
      element.textContent = '';
    }
    return;
  } 
});
