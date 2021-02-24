// NJS
/** * The Main Function for NJS * @param Brackets Add '[]' around text to label it as an id * @param Astreiks Use '*' to label the entire body * @param Tags Use HTML Tags ex. h1, h2, h3, b, for all tags in the Body */ function n(obj) { if (obj == "*") { return new body(); } if (contains(obj, "[") && contains(obj, "]")) { let o = obj; o = o.replace("[", ""); o = o.replace("]", ""); return new idbased(o); } return new tagbased(obj); } function contains(ob, string) { if (ob.indexOf(string) >= 0) { return true; } return false; } class tagbased { constructor(object) { this.obj = object; } /** * Deletes The Given Object : Tags, IDs */ del() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.removeChild(element[index]); } } hide() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.style.visibility = "hidden"; element[index].parentNode.removeChild(element[index]); } } } class idbased { constructor(object) { this.obj = object; /** * Returns The Value of Text if the ID Provided is an input : IDs */ this.val = document.getElementById(this.obj).value; } /** * Deletes The Given Object : Tags, IDs */ del() { document.getElementById(this.obj).remove(); } /** * Resets The Value of Object (Only For Inputs) : IDs */ clear() { document.getElementById(this.obj).value = null; } /** * Sets the text of the given ID : IDs * @param text */ setText(text) { document.getElementById(this.obj).textContent = text; } /** * Sets the HTML of the given ID : IDs * @param HTML */ setHTML(text) { document.getElementById(this.obj).innerHTML = text; } /** * Hides the Current Object */ hide() { document.getElementById(this.obj).style.visibility = "hidden"; } /** * Shows the Current Object */ show() { document.getElementById(this.obj).style.visibility = "visible"; } } class body { /** * Adds content to the Body : Body * @param HTML */ add(contents) { document.body.innerHTML += contents; } /** * Create a Static-based PHP (Recommended only for Github Pages) * Credits: * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144 */ getUrlValues(name, url = window.location.href) { name = name.replace(/[\[\]]/g, '\\$&'); var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, ' ')); } }
//

// Saves options to chrome.storage
function save_options() {
    if (document.getElementById('ss').getAttribute('src') === "../img/togoff.png") {
      document.getElementById('ss').setAttribute('src', "../img/togon.png");
      chrome.storage.sync.set({
        sensitiveinfo: true
      });
    } else if (document.getElementById('ss').getAttribute('src') === "../img/togon.png") {
      document.getElementById('ss').setAttribute('src', "../img/togoff.png");
      chrome.storage.sync.set({
        sensitiveinfo: false
      });
    }
}

function save_options_sinfo() {
  if (document.getElementById('sinfo').getAttribute('src') === "../img/togon.png") {
    document.getElementById('sinfo').setAttribute('src', "../img/togoff.png");
    chrome.storage.sync.set({
      studentinfo: false
    });
  } else if (document.getElementById('sinfo').getAttribute('src') === "../img/togoff.png") {
    document.getElementById('sinfo').setAttribute('src', "../img/togon.png");
    chrome.storage.sync.set({
      studentinfo: true
    });
  }
}
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value sensitiveinfo = true.
    chrome.storage.sync.get({
        sensitiveinfo: true,
        studentinfo: true
    }, function(items) {
      if (items.sensitiveinfo === true) {
        document.getElementById('ss').setAttribute('src', "../img/togon.png");
      } else if (items.sensitiveinfo === false) {
        document.getElementById('ss').setAttribute('src', "../img/togoff.png");
      }

      if (items.studentinfo === true) {
        document.getElementById('sinfo').setAttribute('src', "../img/togon.png");
      } else if (items.studentinfo === false) {
        document.getElementById('sinfo').setAttribute('src', "../img/togoff.png");
      }

    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('ss').addEventListener('click', save_options);
  document.getElementById('sinfo').addEventListener('click', save_options_sinfo);

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

      if (tabs[0].url.indexOf("classroom.google.com/") != -1 || tabs[0].url.indexOf("mail.google.com") != -1 || tabs[0].url.indexOf("my+ip") != -1 || tabs[0].url.indexOf("my+locat") != -1  || tabs[0].url.indexOf("amazon.com") != -1 || tabs[0].url.indexOf("chase.com") != -1 || tabs[0].url.indexOf("bankofamerica.com") != -1 ) {
        document.getElementById('status').textContent = "Website Contains Sensitive Info"
        document.getElementById('status').style.color = '#ad1c11';
      }
      else if (tabs[0].url.indexOf("clever.com") != -1 || tabs[0].url.indexOf("youtube.com") != -1 ) {
        document.getElementById('status').textContent = "Website May Contain Sensitive Info"
        document.getElementById('status').style.color = '#ebbe0e';
        document.getElementById('status').style.fontSize = '12px';
      } else {
        document.getElementById('status').textContent = "Website Looking Good!";
      }

  })