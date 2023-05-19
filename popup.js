let my_button = document.getElementById('my_button');

chrome.storage.local.get(['state'], function(result) {
    if (result === undefined) {
        chrome.storage.local.set({'state': "1"}, function() {
            // console.log("set default value");
        });
    } else {
        var state = result.state
        // console.log("get state " + state);

        if (state == "1") {
            my_button.innerHTML = "Disable"
        } else {
            my_button.innerHTML = "Enable"
        }
    }
});


my_button.onclick = function(element) {
    if (my_button.innerHTML == "Disable") {
        my_button.innerHTML = "Enable"
        chrome.storage.local.set({'state': "0"}, function() {
            // console.log("set to 0");
        });
    } else {
        my_button.innerHTML = "Disable"
        chrome.storage.local.set({'state': "1"}, function() {
            // console.log("set to 1");
        });
    }
};
