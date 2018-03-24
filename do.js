// alert("test");
/*for (var i = 0; document.images.length; i++) {
    document.images[i].src = "https://github.com/yingshaoxo/yingshaoxo.github.io/raw/master/yingshaoxo_files/YS.png"
};*/

var string = document.body.innerText.replace(/[\n– »’`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
var en = string.match(/[a-z]/ig)
var cn = string.match(/[^ -~]/g)

var en_length = en.length
var cn_length = cn.length

// console.log(en)
// console.log(cn)
// console.log(en_length)
// console.log(cn_length)

if (en_length < cn_length) {
    console.log("It's a Chinses page")
    chrome.runtime.sendMessage({greeting: "fuck"}, function(response) {});
} else {
    console.log("It's a English page")
}
