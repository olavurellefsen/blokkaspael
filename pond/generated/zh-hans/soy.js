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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\\n\u641C\u5BFB\u654C\u4EBA\u3002\u6307\u5B9A\u4E00\u4E2A\u65B9\u5411\uFF08\u8303\u56F4\u662F0-360\uFF09\u3002\u8FD4\u56DE\u5728\u8BE5\u65B9\u5411\u4E0A\u79BB\u4F60\u6700\u8FD1\u654C\u4EBA\u7684\u8DDD\u79BB\u3002\u5982\u679C\u5728\u8BE5\u65B9\u5411\u4E0A\u6CA1\u6709\u53D1\u73B0\u654C\u4EBA\u7684\u8BDD\uFF0C\u5C31\u8FD4\u56DE\u65E0\u9650\u5927\u3002 </span><span id="Pond_cannonTooltip">\u53D1\u5C04\u5927\u70AE\u3002\u6307\u5B9A\u5F00\u70AE\u7684\u65B9\u5411\uFF08\u8303\u56F40-360\uFF09\u548C\u8DDD\u79BB\uFF08\u8303\u56F40-70\uFF09\u3002.</span><span id="Pond_swimTooltip">\u5411\u524D\u6E38\u52A8\uFF0C\u6307\u5B9A\u6E38\u52A8\u65B9\u5411\uFF08\u8303\u56F4\u662F0-360\uFF09\u3002</span><span id="Pond_stopTooltip">\u505C\u6B62\u6E38\u52A8\u3002\u89D2\u8272\u4F1A\u7F13\u6162\u5730\u505C\u4E0B\u6765\u3002</span><span id="Pond_healthTooltip">\u8FD4\u56DE\u89D2\u8272\u7684\u5F53\u524D\u7684\u751F\u547D\u503C\uFF080\u662F\u6B7B\u4E86\uFF0C100\u662F\u6EE1\u8840\uFF09\u3002</span><span id="Pond_speedTooltip">\u8FD4\u56DE\u89D2\u8272\u7684\u5F53\u524D\u7684\u901F\u5EA6\uFF080\u8868\u793A\u6B63\u505C\u7740\uFF0C100\u8868\u793A\u6B63\u5168\u901F\u524D\u8FDB\uFF09\u3002.</span><span id="Pond_locXTooltip">\u8FD4\u56DE\u89D2\u8272\u7684X\u5750\u6807\uFF080\u8868\u793A\u5DE6\u4FA7\u8FB9\u7F18\uFF0C100\u8868\u793A\u53F3\u4FA7\u8FB9\u7F18\uFF09\u3002</span><span id="Pond_locYTooltip">\u8FD4\u56DE\u73A9\u5BB6\u7684Y\u5750\u6807\uFF080\u8868\u793A\u5728\u6700\u5E95\u7AEF\uFF0C100\u8868\u793A\u5728\u6700\u9876\u7AEF\uFF09\u3002</span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u663E\u793A\u8BED\u8A00\u6587\u6863\u3002">\u6587\u6863</button></td><td><button id="runButton" class="primary" title="\u8FD0\u884C\u60A8\u7F16\u5199\u7684\u7A0B\u5E8F\u3002"><img src="common/1x1.gif" class="run icon21"> \u8FD0\u884C\u7A0B\u5E8F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u7A0B\u5E8F\u8FD0\u884C\u5E76\u91CD\u7F6E\u672C\u5173\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
