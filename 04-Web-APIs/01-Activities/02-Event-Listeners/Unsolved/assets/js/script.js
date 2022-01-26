var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:

// variables that target the increment and decrement buttons in the HTML, and the section that will contain the counter
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: Add a comment describing the functionality of the following code:
// Sets the counter section to the current counter 
function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});



//bonus