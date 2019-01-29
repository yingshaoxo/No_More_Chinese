var string = document.body.innerText.replace(/[\n– »’`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
var en = string.match(/[a-z]/ig)
var cn = string.match(/[^ -~]/g)

var en_length = en.length
var cn_length = cn.length

function take_action() {
    if (en_length < cn_length) {
        console.log("It's a Chinses page")
        chrome.runtime.sendMessage({greeting: "fuck"}, function(response) {});
    } else {
        console.log("It's a English page")
    }
}

chrome.storage.local.get(['state'], function(result) {
    console.log(result)
    if (result === undefined) {
        chrome.storage.local.set({'state': "1"}, function() {
            console.log("set default value");
        });
    } else {
        var state = result.state
        console.log("get state " + state);
        if (state == "1") {
            take_action();
        }
    }
});
