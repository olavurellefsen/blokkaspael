// Automatically generated file.  Do not edit!

'use strict';
var d={en:"English",fo:"F\u00f8royskt"},k="ace ar fa he mzn ps ur".split(" "),l=window.BlocklyGamesLang,m=window.BlocklyGamesLanguages,n=/\.html$/.test(window.location.pathname);function p(a,b){return(a=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)")))?decodeURIComponent(a[1].replace(/\+/g,"%20")):b}p("level","NaN");
function q(){document.title=document.getElementById("title").textContent;document.dir=-1!=k.indexOf(l)?"rtl":"ltr";document.head.parentElement.setAttribute("lang",l);var a=document.getElementById("languageMenu");if(a){for(var b=[],c=0;c<m.length;c++){var f=m[c];b.push([d[f],f])}b.sort(function(h,g){return h[0]>g[0]?1:h[0]<g[0]?-1:0});for(c=a.options.length=0;c<b.length;c++){var e=b[c];f=e[1];e=new Option(e[0],f);f==l&&(e.selected=!0);a.options.add(e)}1>=a.options.length&&(a.style.display="none")}for(c=
1;10>=c;c++)a=document.getElementById("level"+c),b=!!r(c),a&&b&&(a.className+=" level_done");(c=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&c.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(t,1)}
function u(){var a=document.getElementById("languageMenu");a=encodeURIComponent(a.options[a.selectedIndex].value);var b=window.location.search;b=1>=b.length?"?lang="+a:/[?&]lang=[^&]*/.test(b)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b}function r(a){var b=v;try{var c=window.localStorage[b+a]}catch(f){}return c}
function t(){if(!n){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(c){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var w=w||{};function x(a,b){function c(){}c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.w=function(f,e,h){return b.prototype[e].apply(f,Array.prototype.slice.call(arguments,2))}}if(!y){var y,z="";"undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent&&(z=navigator.userAgent);var A=0==z.indexOf("Opera");y={A:{o:"ScriptEngine"in window},u:A,s:!A&&-1!=z.indexOf("MSIE"),v:!A&&-1!=z.indexOf("WebKit")}}if(!B)var B={};if(!C)var C={};
if(!D)var D={};if(!E)var E={};if(!F)var F={};if(!G)var G={};var H=w.m?{C:!0}:{};function I(){throw Error("Do not instantiate directly");}I.prototype.g=null;I.prototype.toString=function(){return this.content};function J(a){if(null!=a)switch(a.g){case 1:return 1;case -1:return-1;case 0:return 0}return null}function K(){I.call(this)}x(K,I);K.prototype.h=H;function L(a){return null!=a&&a.h===H?a:M(String(String(a)).replace(N,O),J(a))}
var M=function(a){function b(){}b.prototype=a.prototype;return function(c,f){var e=new b;e.content=String(c);void 0!==f&&(e.g=f);return e}}(K),P={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function O(a){return P[a]}var N=/[\x00\x22\x26\x27\x3c\x3e]/g;var Q,R,S={};
var v="gallery",T=!0,U="";function V(){if(!R&&T){document.getElementById("loading").style.visibility="visible";var a=new XMLHttpRequest,b="/gallery-api/view?app="+encodeURIComponent(Q);U&&(b+="&cursor="+encodeURIComponent(U));a.open("GET",b,!0);a.onload=W;a.send();R=a}}
function W(){var a=R;document.getElementById("loading").style.visibility="hidden";R=null;if(200!==a.status)console.warn("Load returned status "+a.status),T=!1,401===a.status&&(location="/admin");else{a=JSON.parse(a.responseText);a.more||(T=!1);U=a.cursor;for(var b=0;b<a.data.length;b++){var c=a.data[b],f=document.createElement("div");var e=c.app;var h=c.uuid,g=c.thumb,X=c.title,Y=c["public"];c=c.key;e='<div class="galleryThumb">'+(c?'<input type="checkbox" id="publish-'+L(c)+'"'+(Y?" checked ":"")+
'onchange="Gallery.publish(this)">':"")+'<a href="/'+L(e)+"?level=10#"+L(h)+'"><img src="'+L(g)+'"></a></div><div class="galleryTitle"><a href="/'+L(e)+"?level=10#"+L(h)+'">'+L(X)+"</a></div>";f.innerHTML=e;document.getElementById("gallery").appendChild(f)}}}function Z(){document.getElementById("loading").getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)&&V()}
window.addEventListener("load",function(){Q=p("app","");var a="admin"==Q;if(!a&&-1==["turtle","movie","music"].indexOf(Q))throw Error("Unknown app: "+Q);a&&(document.body.className="admin");document.body.innerHTML=S.B({},null,{});if(a)var b="";else{a="Games_"+Q;var c;(c=document.getElementById(a))?(c=c.textContent,c=c.replace(/\\n/g,"\n")):c=null;b=(null===c?"[Unknown message: "+a+"]":c)+" : "}a=document.body;c=document.body.innerHTML;b={lang:l,appName:b,i:n};var f=L(b.appName)+"Savn";f='<table width="100%"><tr><td><h1><span id="title">'+
((b.i?'<a href="index.html?lang='+L(b.lang)+'">':'<a href="./?lang='+L(b.lang)+'">')+"Blokkasp\u00e6l</a> : "+L(f)+"</span>");if(b.level){for(var e=" &nbsp; ",h=b.j+1,g=1;g<h;g++)e+=" "+(g==b.level?'<span class="level_number level_done" id="level'+L(g)+'">'+L(g)+"</span>":g==b.j?'<a class="level_number" id="level'+L(g)+'" href="?lang='+L(b.lang)+"&level="+L(g)+L("")+'">'+L(g)+"</a>":'<a class="level_dot" id="level'+L(g)+'" href="?lang='+L(b.lang)+"&level="+L(g)+L("")+'"></a>');b=e}else b="";a.innerHTML=
c+(f+b+'</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select></td></tr></table><div id="gallery"></div><div id="loading"><img src="common/loading.gif"></div>');V();q();document.getElementById("languageMenu").addEventListener("change",u,!0);setInterval(Z,200)});window.Gallery||(window.Gallery={});
window.Gallery.publish=function(a){var b=a.id.substring(8);a=Number(a.checked);var c=new XMLHttpRequest;c.open("POST","/gallery-api/admin",!0);c.setRequestHeader("Content-type","application/x-www-form-urlencoded");c.send("key="+encodeURIComponent(b)+"&public="+a)};
