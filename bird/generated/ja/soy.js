// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Bird.soy.
 */

goog.provide('Bird.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Bird.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u866B\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u306A\u3089</span><span id="Bird_heading">\u9032\u3080</span><span id="Bird_noWormTooltip">\u9CE5\u304C\u866B\u3092\u6355\u307E\u3048\u3066\u3044\u306A\u3044\u72B6\u614B\u3002</span><span id="Bird_headingTooltip">\u4E0E\u3048\u3089\u308C\u305F\u89D2\u5EA6\u306E\u65B9\u5411\u3078\u52D5\u304F\uFF1A0\u306F\u53F3\u300190\u306F\u4E0A\u306A\u3069\u3002</span><span id="Bird_positionTooltip">x\u3068y\u306F\u9CE5\u306E\u4F4D\u7F6E\u3092\u793A\u3057\u307E\u3059\u3002\u9CE5\u306F\u3001x = 0 \u306E\u3068\u304D\u306B\u306F\u5DE6\u8FBA\u8FD1\u304F\u3001x = 100 \\n\u306E\u3068\u304D\u306B\u306F\u53F3\u8FBA\u8FD1\u304F\u306B\u3044\u307E\u3059\u3002\u3000\u9CE5\u306F\u3001y = 0 \u306E\u3068\u304D\u306B\u306F\u4E0B\u8FBA\u306B\u3044\u3066\u3001y = 100 \\n\u306E\u3068\u304D\u306B\u306F\u4E0A\u8FBA\u306B\u3044\u307E\u3059\u3002 </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u9CE5', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u3042\u306A\u305F\u306E\u66F8\u3044\u305F\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u5B9F\u884C\u3002"><img src="common/1x1.gif" class="run icon21"> \u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u5B9F\u884C</button><button id="resetButton" class="primary" style="display: none" title="\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u6B62\u3081\u3066\u3001\u30EC\u30D9\u30EB\u3092\u30EA\u30BB\u30C3\u30C8\u3002"><img src="common/1x1.gif" class="stop icon21"> \u30EA\u30BB\u30C3\u30C8</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u9CE5\u304C\u866B\u3092\u6355\u3089\u3048\u3066\u5DE3\u306B\u5E30\u308C\u308B\u3088\u3046\u306B\u9032\u3080\u89D2\u5EA6\u3092\u5909\u3048\u3066\u304F\u3060\u3055\u3044\u3002</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\u866B\u3092\u6301\u3063\u3066\u3044\u308B\u5834\u5408\u306B\u3042\u308B\u65B9\u5411\u3078\u884C\u304D\u3001\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u306F\u7570\u306A\u308B\u65B9\u5411\u3078\u884C\u304F\u306E\u306B\u3053\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u4F7F\u3044\u307E\u3059\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\'\u306F\u73FE\u5728\u306E\u6C34\u5E73\u4F4D\u7F6E\u3067\u3059\u3002\u3082\u3057\'x\'\u304C\u3042\u308B\u6570\u3088\u308A\u5C0F\u3055\u3044\u5834\u5408\u306B\u306F\u3042\u308B\u65B9\u5411\u306B\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u7570\u306A\u308B\u65B9\u5411\u306B\u884C\u304F\u3088\u3046\u306B\u3053\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u4F7F\u3044\u307E\u3059\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'if\' \u30D6\u30ED\u30C3\u30AF\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u3053\u306E\u30EC\u30D9\u30EB\u3092\u30AF\u30EA\u30A2\u3059\u308B\u306B\u306F\u3001\'else if\' \u3068 \'else\' \u30D6\u30ED\u30C3\u30AF\u306E2\u3064\u304C\u5FC5\u8981\u3067\u3059\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'and\' \u30D6\u30ED\u30C3\u30AF\u306F\u30012\u3064\u306E\u5165\u529B\u304C\u4E21\u65B9\u3068\u3082 true \u306E\u6642\u306B\u3001true \u306B\u306A\u308A\u307E\u3059\u3002</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\'else\' \u30D6\u30ED\u30C3\u30AF\u3092 \'if\' \u30D6\u30ED\u30C3\u30AF\u306E\u4E2D\u306B\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Bird.soy.start.soyTemplateName = 'Bird.soy.start';
}


Bird.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="bird_heading"></block>' + ((opt_ijData.level >= 2) ? ((opt_ijData.level == 4 || opt_ijData.level == 5) ? '<block type="bird_noWorm" disabled="true"></block>' : '<block type="bird_noWorm"></block>') + ((opt_ijData.level >= 4) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="bird_and"></block>' : '') : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Bird.soy.toolbox.soyTemplateName = 'Bird.soy.toolbox';
}
