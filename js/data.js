/* exported data */

var data = {
  entries: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('weekly-entries-local');
if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}

function storeEntries() {
  var saveEntries = JSON.stringify(data);
  localStorage.setItem('weekly-entries-local', saveEntries);
}

window.addEventListener('beforeunload', storeEntries);
