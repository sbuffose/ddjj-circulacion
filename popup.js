function listenClick() {
  const button = document.getElementById('send-data');
  const upload = document.getElementById('upload')
  upload.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/upload-data.js'
    });
  })
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/send-data.js'
    });
  })
}

listenClick();
