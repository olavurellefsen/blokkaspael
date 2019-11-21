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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\u6307\u5B9A\u4E00\u500B\u65B9\u5411(0-360)\u6383\u63CF\u6575\u4EBA\u4F4D\u7F6E\uFF0C\u4E26\u8FD4\u56DE\u8A72\u65B9\u5411\u6700\u8FD1\u7684\u6575\u4EBA\u8DDD\u96E2\u3002\u7576\u7121\u6CD5\u627E\u5230\u6575\u4EBA\u6642\u5247\u8FD4\u56DE\u7121\u9650\u5927\u3002.</span><span id="Pond_cannonTooltip">\u6307\u5B9A\u4E00\u500B\u65B9\u5411(0-360)\u548C\u4E00\u500B\u7BC4\u570D(0-70)\u4F86\u767C\u5C04\u5927\u70AE\u3002.</span><span id="Pond_swimTooltip">\u6307\u5B9A\u4E00\u500B\u65B9\u5411(0-360)\u4EE5\u5411\u524D\u6E38\u52D5\u3002</span><span id="Pond_stopTooltip">\u505C\u6B62\u6E38\u52D5\u3002\u89D2\u8272\u5C07\u7DE9\u6162\u505C\u6B62\u3002</span><span id="Pond_healthTooltip">\u8FD4\u56DE\u89D2\u8272\u7684\u5065\u5EB7\u72C0\u6CC1\uFF080 \u4EE3\u8868\u6B7B\u4EA1\uFF0C100 \u4EE3\u8868\u5065\u5EB7\uFF09\u3002</span><span id="Pond_speedTooltip">\u8FD4\u56DE\u89D2\u8272\u76EE\u524D\u7684\u901F\u5EA6\uFF080 \u4EE3\u8868\u505C\u6B62\uFF0C100 \u4EE3\u8868\u5168\u901F\uFF09\u3002</span><span id="Pond_locXTooltip">\u8FD4\u56DE\u89D2\u8272\u7684 x \u5EA7\u6A19\u4F4D\u7F6E\uFF080 \u4EE3\u8868\u6700\u5DE6\u908A\uFF0C100 \u4EE3\u8868\u6700\u53F3\u908A\uFF09\u3002.</span><span id="Pond_locYTooltip">\u8FD4\u56DE\u89D2\u8272\u7684 y \u5EA7\u6A19\u4F4D\u7F6E\uFF080 \u4EE3\u8868\u6700\u4E0A\u9762\uFF0C100 \u4EE3\u8868\u6700\u4E0B\u9762\uFF09\u3002.</span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u986F\u793A\u8A9E\u8A00\u8AAA\u660E\u6587\u4EF6\u3002">\u8AAA\u660E\u6587\u4EF6</button></td><td><button id="runButton" class="primary" title="\u904B\u884C\u4F60\u5BEB\u7684\u7A0B\u5F0F\u3002"><img src="common/1x1.gif" class="run icon21"> \u904B\u884C\u7A0B\u5F0F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u7A0B\u5F0F\u4E26\u91CD\u7F6E\u95DC\u5361\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
