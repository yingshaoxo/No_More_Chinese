chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "fuck") {
            chrome.tabs.remove(sender.tab.id, function() { })
        }
    });
