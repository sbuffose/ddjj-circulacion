const fileChooser = document.createElement('input');
fileChooser.type = 'file';
fileChooser.addEventListener('change', function () {
  const file = fileChooser.files[0];
  var reader = new FileReader();
  const certificates = [];
  reader.onload = function () {
    const allData = reader.result;
    const rows = allData.split(/\r\n|\n|↵/);
    const headers = rows[0].split(',');
    rows.splice(1, rows.length - 1).forEach((row) => {
      const data = row.split(',');
      certificates.push(data)
    });
    chrome.storage.sync.set({certificates: certificates, number: 0})
  }
  reader.readAsBinaryString(file);
});

fileChooser.click();


