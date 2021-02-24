var btn = document.createElement('button');

btn.style.backgroundColor = '#0E72ED';
btn.style.color = 'white';
btn.textContent = 'Activate Screen Share Tools';
btn.style.width = '210px';
btn.style.fontSize = '17px';
btn.style.border = 'none';
btn.style.borderRadius = '8px';
btn.style.position = 'relative';
btn.style.float = 'left';
btn.id = 'sstoolsbutton';
btn.style.textAlign = 'center'
btn.style.right = '-10px';
document.body.appendChild(btn);


function save_options() {
    chrome.storage.sync.set({
      sensitiveinfo: true,
      studentinfo: true
    });
}

document.getElementById('sstoolsbutton').addEventListener('click', save_options);