// Saves options to chrome.storage
function save_options() {
    var sensitiveinfoen = document.getElementById('sensitiveinfo').checked;
    var studentinfoen = document.getElementById('studentinfo').checked;
    chrome.storage.sync.set({
      sensitiveinfo: sensitiveinfoen,
      studentinfo: studentinfoen,
      pasturl: "notaurlfound"
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value sensitiveinfo = true.
    chrome.storage.sync.get({
        sensitiveinfo: true,
        studentinfo: true,
        pasturl: "notaurlfound"
    }, function(items) {
      document.getElementById('sensitiveinfo').checked = items.sensitiveinfo;
      document.getElementById('studentinfo').checked = items.studentinfo;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('sensitiveinfo').addEventListener('click',
      save_options);
  document.getElementById('studentinfo').addEventListener('click',
      save_options);