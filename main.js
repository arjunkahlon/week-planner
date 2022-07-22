var $addEntryButton = document.querySelector('#entry-button');
var $modalContainer = document.querySelector('.modal-container');
var $submitForm = document.querySelector('form');

function clickEntry(event){
  if(event.target.tagName === 'BUTTON'){
    $modalContainer.classList.remove('hidden');
  }
  console.log();
}

function clickSubmit(event){
  event.preventDefault();
  if(event.target.tagName === 'BUTTON'){
    $modalContainer.classList.add('hidden');
  }
}

$addEntryButton.addEventListener('click', clickEntry);
$submitForm.addEventListener('click', clickSubmit);
