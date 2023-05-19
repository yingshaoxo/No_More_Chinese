function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait_until_it_is_not_null(obj) {
    while (obj == null) {
        await sleep(200)
    }
}

async function main() {
    await wait_until_it_is_not_null(document.body)

    var string = document.body.innerText.replace(/[\n– »’`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    var en = string.match(/[a-z]/ig)
    var cn = string.match(/[^ -~]/g)

    var en_length = en?.length
    var cn_length = cn?.length

    function take_action() {
        if (en_length < cn_length) {
            console.log("It's a Chinses page")
            chrome.runtime.sendMessage({greeting: "fuck"}, function(response) {});
        } else {
            console.log("It's a English page")
            document.body.style.visibility = "visible";
        }
    }

    chrome.storage.local.get(['state'], function(result) {
        // console.log(result)
        if (result === undefined) {
            chrome.storage.local.set({'state': "1"}, function() {
                // console.log("set default value");
            });
        } else {
            var state = result.state
            // console.log("get state " + state);
            if (state == "1") {
                take_action();
            }
        }
    });
}

main();


