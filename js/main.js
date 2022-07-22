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
      time: '1',
      entryId: 1,
      description: ''
    };
    var day = $submitForm.elements['day-select'].value;
    data.entries[day].push(entry);
  }
}

$addEntryButton.addEventListener('click', clickEntry);
$submitForm.addEventListener('click', clickSubmit);
