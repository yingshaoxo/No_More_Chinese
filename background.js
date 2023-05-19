chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "fuck") {
            // console.log("got fuck")
            if (sender.tab) {
                chrome.tabs.remove(sender.tab.id, function() { })
            }
        }
    }
);
