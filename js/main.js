/* eslint-disable no-unused-vars */
/* global data */

var $addEntryButton = document.querySelector('#entry-button');
var $modalContainer = document.querySelector('.modal-container');
var $submitForm = document.querySelector('form');
var $dayWrapper = document.querySelector('#day-wrapper');
// console.log($dayWrapper);
function clickEntry(event) {
  $modalContainer.classList.remove('hidden');
}

function clickSubmit(event) {
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    $modalContainer.classList.add('hidden');
    var entry = {
      time: $submitForm['time-select'].value,
      entryId: data.nextEntryId,
      description: $submitForm.description.value
    };
    var day = $submitForm['day-select'].value;
    data.entries[day].push(entry);
    data.nextEntryId++;
  }
  // console.log(entry);
}

function clickDay(event) {
  if (event.target.tagName === 'BUTTON') {
    var eventDay = event.target.getAttribute('data-day');
    var renderDay = data.entries[eventDay];
    var $initBody = document.querySelector('#initial-body');
    // console.log($initBody);
    var replacementBody = renderTable(renderDay);
    $initBody.replaceWith(replacementBody);
    renderTable(renderDay);
    // console.log(eventDay);
    // console.log(data.entries[eventDay]);
  }
}

function renderTable(renderDay) {
  var renderTableBody = document.createElement('tbody');
  for (let i = 0; i < renderDay.length; i++) {
    var tableRow = document.createElement('tr');
    renderTableBody.appendChild(tableRow);
    var timeTd = document.createElement('td');
    timeTd.textContent = renderDay[i].time;
    var descTd = document.createElement('td');
    descTd.textContent = renderDay[i].description;
    tableRow.appendChild(timeTd);
    tableRow.appendChild(descTd);
  }
  renderTableBody.setAttribute('id', 'initial-body');
  return renderTableBody;
}

$dayWrapper.addEventListener('click', clickDay);
$addEntryButton.addEventListener('click', clickEntry);
$submitForm.addEventListener('click', clickSubmit);
