// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\\n\u6575\u3092\u63A2\u3057\u307E\u3059\u3002\u65B9\u5411\uFF080\uFF5E360\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u306E\u65B9\u5411\u3067\u6700\u3082\u8FD1\u304F\u306B\u3044\u308B\u6575\u3078\u306E\u8DDD\u96E2\u3092\u8FD4\u3057\u307E\u3059\u3002\u6575\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306B\u306F\u7121\u9650\u5927\u3092\u8FD4\u3057\u307E\u3059\u3002 </span><span id="Pond_cannonTooltip">\u5927\u7832\u3092\u767A\u5C04\u3057\u307E\u3059\u3002\u65B9\u5411\uFF080\uFF5E360\uFF09\u3068\u8DDD\u96E2\uFF080\uFF5E70\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002.</span><span id="Pond_swimTooltip">\u524D\u3078\u6CF3\u3050\u3002\u65B9\u5411\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002(0-360)</span><span id="Pond_stopTooltip">\u6C34\u6CF3\u3092\u6B62\u3081\u307E\u3059\u3002\u30D7\u30EC\u30FC\u30E4\u30FC\u306F\u3086\u3063\u304F\u308A\u3068\u6B62\u307E\u308A\u307E\u3059\u3002</span><span id="Pond_healthTooltip">\u30D7\u30EC\u30FC\u30E4\u30FC\u306E\u73FE\u5728\u306E\u5065\u5EB7\u72B6\u614B\uFF080\u306F\u6B7B\u3001100\u306F\u5065\u5EB7\uFF09\u3092\u8FD4\u3057\u307E\u3059\u3002.</span><span id="Pond_speedTooltip">\u30D7\u30EC\u30FC\u30E4\u30FC\u306E\u73FE\u5728\u306E\u901F\u5EA6\uFF080\u306F\u505C\u6B62\u3001100\u306F\u6700\u901F\uFF09\u3092\u8FD4\u3057\u307E\u3059\u3002.</span><span id="Pond_locXTooltip">\u30D7\u30EC\u30FC\u30E4\u30FC\u306EX\u8EF8\u4E0A\u306E\u5024\uFF080\u306F\u5DE6\u7AEF\u3001100\u306F\u53F3\u7AEF\uFF09\u3092\u8FD4\u3057\u307E\u3059\u3002.</span><span id="Pond_locYTooltip">\u30D7\u30EC\u30FC\u30E4\u30FC\u306EY\u8EF8\u4E0A\u306E\u5024\uFF080\u306F\u4E0B\u7AEF\u3001100\u306F\u4E0A\u7AEF\uFF09\u3092\u8FD4\u3057\u307E\u3059\u3002.</span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u8A00\u8A9E\u306E\u89E3\u8AAC\u6587\u3092\u8868\u793A\u3059\u308B\u3002">\u8AAC\u660E\u66F8</button></td><td><button id="runButton" class="primary" title="\u3042\u306A\u305F\u306E\u66F8\u3044\u305F\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u5B9F\u884C\u3002"><img src="common/1x1.gif" class="run icon21"> \u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u5B9F\u884C</button><button id="resetButton" class="primary" style="display: none" title="\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u6B62\u3081\u3066\u3001\u30EC\u30D9\u30EB\u3092\u30EA\u30BB\u30C3\u30C8\u3002"><img src="common/1x1.gif" class="stop icon21"> \u30EA\u30BB\u30C3\u30C8</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
