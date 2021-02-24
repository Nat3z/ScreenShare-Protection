// NJS
/** * The Main Function for NJS * @param Brackets Add '[]' around text to label it as an id * @param Astreiks Use '*' to label the entire body * @param Tags Use HTML Tags ex. h1, h2, h3, b, for all tags in the Body */ function n(obj) { if (obj == "*") { return new body(); } if (contains(obj, "[") && contains(obj, "]")) { let o = obj; o = o.replace("[", ""); o = o.replace("]", ""); return new idbased(o); } return new tagbased(obj); } function contains(ob, string) { if (ob.indexOf(string) >= 0) { return true; } return false; } class tagbased { constructor(object) { this.obj = object; } /** * Deletes The Given Object : Tags, IDs */ del() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.removeChild(element[index]); } } hide() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.style.visibility = "hidden"; element[index].parentNode.removeChild(element[index]); } } } class idbased { constructor(object) { this.obj = object; /** * Returns The Value of Text if the ID Provided is an input : IDs */ this.val = document.getElementById(this.obj).value; } /** * Deletes The Given Object : Tags, IDs */ del() { document.getElementById(this.obj).remove(); } /** * Resets The Value of Object (Only For Inputs) : IDs */ clear() { document.getElementById(this.obj).value = null; } /** * Sets the text of the given ID : IDs * @param text */ setText(text) { document.getElementById(this.obj).textContent = text; } /** * Sets the HTML of the given ID : IDs * @param HTML */ setHTML(text) { document.getElementById(this.obj).innerHTML = text; } /** * Hides the Current Object */ hide() { document.getElementById(this.obj).style.visibility = "hidden"; } /** * Shows the Current Object */ show() { document.getElementById(this.obj).style.visibility = "visible"; } } class body { /** * Adds content to the Body : Body * @param HTML */ add(contents) { document.body.innerHTML += contents; } /** * Create a Static-based PHP (Recommended only for Github Pages) * Credits: * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144 */ getUrlValues(name, url = window.location.href) { name = name.replace(/[\[\]]/g, '\\$&'); var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, ' ')); } }
//

var link = n("*").getUrlValues("w");

document.getElementById("urllink").setAttribute("href", link);
n("[urllink]").setText(link);
document.getElementById("urllink").addEventListener("click", turnoff);

function turnoff() {
    chrome.storage.sync.set({
        sensitiveinfo: false,
    });

    setTimeout(() => {
        chrome.storage.sync.set({
            sensitiveinfo: true,
        });
        
    }, 15000);
}