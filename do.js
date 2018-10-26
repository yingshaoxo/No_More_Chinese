var string = document.body.innerText.replace(/[\n– »’`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
var en = string.match(/[a-z]/ig)
var cn = string.match(/[^ -~]/g)

var en_length = en.length
var cn_length = cn.length

if (en_length < cn_length) {
    console.log("It's a Chinses page")
    chrome.runtime.sendMessage({greeting: "fuck"}, function(response) {});
} else {
    console.log("It's a English page")
}
