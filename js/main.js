/* eslint-disable no-unused-vars */
/* global data */

var $addEntryButton = document.querySelector('#entry-button');
var $modalContainer = document.querySelector('.modal-container');
var $submitForm = document.querySelector('form');

function clickEntry(event) {
  $modalContainer.classList.remove('hidden');
}

function clickSubmit(event) {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    $modalContainer.classList.add('hidden');
    var entry = {
      time: $submitForm['time-select'].value,
      entryId: 1,
      description: $submitForm.description.value
    };
    var day = $submitForm['day-select'].value;
    data.entries[day].push(entry);
    data.nextEntryId++;
  }
  // console.log(entry);
}

$addEntryButton.addEventListener('click', clickEntry);
$submitForm.addEventListener('click', clickSubmit);
