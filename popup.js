let my_button = document.getElementById('my_button');

my_button.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.executeScript({code: 'alert("test");'});
    /*chrome.tabs.executeScript({
        file: 'do.js'
    });*/
};
