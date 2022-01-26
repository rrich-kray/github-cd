var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function(name, date) {
  // create li element and append class of 'list-group-item'
  var listEl = $('<li>');
  // concatenate ' on ' with value of date argument, which comes from handleFormSubmit()  
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  // appends skillsListEl to listEl element
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  // prevents page from reloading on form submit
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  // input validation
  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  // Clears values in elements
  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  // autocomplete words from skillNames array
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  // dropdown inline calendar
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  // Sortable allows reording via click-and-drag
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  $('#skills-list').disableSelection();
});
