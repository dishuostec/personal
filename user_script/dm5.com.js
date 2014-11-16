// ==UserScript==
// @name         书签新漫画提醒
// @namespace    https://github.com/dishuostec/personal/blob/master/user_script/dm5.com.js
// @version      0.1
// @description  高亮显示新的未读漫画
// @author       dishuostec
// @match        http://*.dm5.com/bookmarker/
// @grant        none
// ==/UserScript==

$(function(){
    $('#divBookmarkers').find('ul').each(function(){
        var $this = $(this);
        var $li = $this.find('li');
        var $new = $li.eq(1).find('a').last();
        var $last = $li.eq(3).find('a').first();

        if ($new.attr('href') !== $last.attr('href')) {
            $this.css({
                color: '#fff',
                background: '#f88'
            }).find('a').css('color', '#fff');
        } else {
            $this.css({
                background: '#888'
            });
        }
    });
});
