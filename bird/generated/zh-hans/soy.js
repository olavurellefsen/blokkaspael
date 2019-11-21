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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u8FD8\u6CA1\u6349\u5230\u866B\u5B50</span><span id="Bird_heading">\u98DE\u884C\u65B9\u5411</span><span id="Bird_noWormTooltip">\u9E1F\u8FD8\u6CA1\u6709\u6349\u5230\u866B\u5B50\u65F6\uFF0C\u8BE5\u6761\u4EF6\u6210\u7ACB\u3002</span><span id="Bird_headingTooltip">\u5411\u7740\u6307\u5B9A\u89D2\u5EA6\u7684\u65B9\u5411\u98DE\u884C\uFF1A0\u8868\u793A\u6B63\u53F3\uFF0C90\u8868\u793A\u6B63\u4E0A\u65B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002.</span><span id="Bird_positionTooltip">\u6A2A\u5750\u6807x\u548C\u7EB5\u5750\u6807y\u8BB0\u5F55\u9E1F\u7684\u5F53\u524D\u4F4D\u7F6E\u3002\u5F53 x = 0 \u65F6\u9E1F\u8D34\u7740\u5DE6\u4FA7\u8FB9\u7F18\uFF0C\u5F53 x = 100 \\n\u65F6\u8D34\u7740\u53F3\u4FA7\u8FB9\u7F18\u3002\u5F53 y = 0 \u65F6\u5728\u6700\u5E95\u7AEF\uFF0C\u5F53 y = 100 \u65F6\u5728\u6700\u4E0A\u7AEF\u3002 </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u9E1F', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u8FD0\u884C\u60A8\u7F16\u5199\u7684\u7A0B\u5E8F\u3002"><img src="common/1x1.gif" class="run icon21"> \u8FD0\u884C\u7A0B\u5E8F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u7A0B\u5E8F\u8FD0\u884C\u5E76\u91CD\u7F6E\u672C\u5173\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u6539\u53D8\u9E1F\u7684\u98DE\u884C\u65B9\u5411\uFF0C\u8BA9\u9E1F\u6349\u5230\u866B\u5B50\u5E76\u4E14\u98DE\u56DE\u5B83\u7684\u5DE2\u3002</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\u4F7F\u7528\u8FD9\u4E2A\u5757\uFF0C\u8BA9\u4F60\u80FD\u591F\u5728\u6CA1\u6293\u5230\u866B\u5B50\u65F6\u98DE\u5411\u4E00\u4E2A\u65B9\u5411\uFF0C\u800C\u6293\u5230\u866B\u5B50\u4E4B\u540E\u98DE\u5411\u53E6\u4E00\u4E2A\u65B9\u5411\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\u201Cx\u201D\u8868\u793A\u4F60\u5F53\u524D\u7684\u6A2A\u5750\u6807\u4F4D\u7F6E\u3002\u4F7F\u7528\u8FD9\u4E2A\u5757\uFF0C\u8BA9\u4F60\u5728\u201Cx\u201D\u5C0F\u4E8E\u67D0\u4E2A\u6570\u503C\u65F6\u98DE\u5411\u4E00\u4E2A\u65B9\u5411\uFF0C\u5426\u5219\u98DE\u5411\u53E6\u4E00\u4E2A\u65B9\u5411\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u70B9\u51FB\u56FE\u6848\u6765\u4FEE\u6539\u201Cif\u201D\u5757\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u8FD9\u4E00\u5173\u65E2\u9700\u8981\u201Celse if\u201D\u5757\uFF0C\u53C8\u9700\u8981\u201Celse\u201D\u5757\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u201Cand\u201D\u65B9\u5757\u53EA\u6709\u5F53\u5176\u8F93\u5165\u90FD\u4E3A\u771F\u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A\u771F\u3002</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\u5C06\u4E00\u4E2A\u201Celse\u201D\u5757\u62D6\u5165\u201Cif\u201D\u5757\u91CC\u3002</td></tr></table></div>' : '');
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
