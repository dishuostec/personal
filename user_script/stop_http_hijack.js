// ==UserScript==
// @name		  Frame Killer
// @namespace    https://github.com/dishuostec/personal/blob/master/user_script/stop_http_hijack.js
// @version      0.1
// @description	  联通http劫持
// @author       dishuostec
// @include      *
// @grant        none
// ==/UserScript==
var frames=document.evaluate("//frame", document, null,
    XPathResult.ANY_TYPE, null);
var f;
var src = [];
while (f = frames.iterateNext()) {
    src.push(f.src);
}
if (src.pop() === location.href) {
    alert('http劫持');
    location.reload();
}
