// ==UserScript==
// @name         Outline.com Float Button on Medium
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Read Medium on Outline
// @author       blzbruno
// @match        https://medium.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var d1 = document.getElementsByTagName('body')[0];
    d1.insertAdjacentHTML('afterbegin', '<a target="_blank" href="https://outline.com/'+window.location.href+'"><div  title="Click to read on Outline.com"  class="caixa-flutuante"><img width="50" height="50" src="https://s3.amazonaws.com/static.outline.com/image/apple-icon-180x180.png"></div></a>')

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('.caixa-flutuante{top:45%;z-index:3;right:-3px;width:60px;height:60px;position:fixed;border-radius:6px;background:#fff;border-top:5px solid #8b8b8b;border-left:5px solid #8b8b8b;border-bottom:5px solid #8b8b8b}');

})();
