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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u9084\u6C92\u5403\u5230\u87F2</span><span id="Bird_heading">\u9762\u5411</span><span id="Bird_noWormTooltip">\u9CE5\u6C92\u6709\u6349\u5230\u87F2\u5B50\u7684\u689D\u4EF6\u3002</span><span id="Bird_headingTooltip">\u8F49\u5230\u6307\u5B9A\u7684\u65B9\u5411\uFF1A0 \u662F\u5411\u53F3\uFF0C90 \u662F\u5411\u4E0A\u2026</span><span id="Bird_positionTooltip">x \u548C y \u5EA7\u6A19\u7D00\u9304\u9CE5\u7684\u4F4D\u7F6E\u3002\u7576 x = 0 \u6642\u9CE5\u9760\u8FD1\u5DE6\u908A\uFF0C\u7576 x = 100 \u6642\u9760\u8FD1\u53F3\u908A\u3002\u7576 \\ny = 0 \u6642\u9CE5\u5728\u5E95\u90E8\uFF0C\u7576 y = 100 \u6642\u5728\u9802\u90E8\u3002 </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u5C0F\u9CE5', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u904B\u884C\u4F60\u5BEB\u7684\u7A0B\u5F0F\u3002"><img src="common/1x1.gif" class="run icon21"> \u904B\u884C\u7A0B\u5F0F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u7A0B\u5F0F\u4E26\u91CD\u7F6E\u95DC\u5361\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u8B8A\u66F4\u65B9\u5411\uFF0C\u8B93\u9CE5\u53EF\u4EE5\u5403\u5230\u87F2\u5B50\uFF0C\u6700\u5F8C\u964D\u843D\u5728\u7260\u7684\u5DE2\u4E0A\u3002</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\u5982\u679C\u4F60\u9084\u6C92\u6709\u5403\u5230\u87F2\u5B50\uFF0C\u53EF\u4EE5\u7528\u9019\u500B\u5340\u584A\u4F86\u5F80\u55AE\u4E00\u65B9\u5411\u524D\u9032\uFF1B\u5982\u679C\u4F60\u5DF2\u7D93\u5403\u5230\u87F2\u5B50\uFF0C\u5C31\u5F80\u53E6\u4E00\u500B\u65B9\u5411\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\u300Cx\u300D\u662F\u4F60\u73FE\u5728\u7684\u6C34\u5E73\u4F4D\u7F6E\uFF0C\u7528\u9019\u500B\u5340\u584A\u4F86\u5F80\u55AE\u4E00\u65B9\u5411\u524D\u9032\uFF0C\u7576\u300Cx\u300D\u5C0F\u65BC\u67D0\u500B\u6578\u5B57\u7684\u6642\u5019\uFF1B\u5426\u5247\uFF0C\u5247\u5F80\u53E6\u4E00\u500B\u65B9\u5411\u524D\u9032\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u9EDE\u64CA\u5716\u50CF\u4EE5\u4FEE\u6539\u300C\u5982\u679C\u300D\u7A4D\u6728\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u6B64\u95DC\u5361\u9700\u8981\u4E00\u500B\u300C\u5426\u5247\u5982\u679C\u300D\u548C\u4E00\u500B\u300C\u5426\u5247\u300D\u5340\u584A\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u300C\u4E14\u300D\u7A4D\u6728\u53EA\u5728\u5169\u500B\u8F38\u5165\u90FD\u70BA true \u6642\uFF0C\u624D\u6703\u8FD4\u56DE true\u3002</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\u62D6\u66F3\u300C\u5426\u5247\u300D\u5340\u584A\u5230\u300C\u5982\u679C\u300D\u5340\u584A\u90A3\u88E1\u3002</td></tr></table></div>' : '');
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
