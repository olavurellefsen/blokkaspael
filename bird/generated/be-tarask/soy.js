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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u043D\u044F \u043C\u0430\u0435 \u0447\u0430\u0440\u0432\u044F\u043A\u0430</span><span id="Bird_heading">\u043D\u0430\u043A\u0456\u0440\u0443\u043D\u0430\u043A</span><span id="Bird_noWormTooltip">\u0421\u0442\u0430\u043D, \u043A\u0430\u043B\u0456 \u043F\u0442\u0443\u0448\u043A\u0430 \u044F\u0448\u0447\u044D \u043D\u0435 \u0437\u043B\u0430\u0432\u0456\u043B\u0430 \u0447\u0430\u0440\u0432\u044F\u043A\u0430.</span><span id="Bird_headingTooltip">\u0420\u0443\u0445\u0430\u0446\u0446\u0430 \u045E \u043A\u0456\u0440\u0443\u043D\u043A\u0443, \u0437\u0430\u0434\u0430\u0434\u0437\u0435\u043D\u044B\u043C \u043A\u0443\u0442\u043E\u043C: 0 \u043D\u0430\u043F\u0440\u0430\u0432\u0430, \\n90 \u0443\u0432\u0435\u0440\u0445 \u0456 \u0433.\u00A0\u0434. </span><span id="Bird_positionTooltip">x \u0456 y \u0430\u0434\u0437\u043D\u0430\u0447\u0430\u044E\u0446\u044C \u043F\u0430\u0437\u044B\u0446\u044B\u044E \u043F\u0442\u0443\u0448\u043A\u0456. \\n\u041A\u0430\u043B\u0456 x = 0 \u043F\u0442\u0443\u0448\u043A\u0430 \u0437\u043D\u0430\u0445\u043E\u0434\u0437\u0456\u0446\u0446\u0430 \u043A\u0430\u043B\u044F \\n\u043B\u0435\u0432\u0430\u0433\u0430 \u043A\u0440\u0430\u044E, \u043A\u0430\u043B\u0456 x = 100 \u044F\u043D\u0430 \u043A\u0430\u043B\u044F \\n\u043F\u0440\u0430\u0432\u0430\u0433\u0430 \u043A\u0440\u0430\u044E. \u041A\u0430\u043B\u0456 y = 0 \u043F\u0442\u0443\u0448\u043A\u0430 \\n\u0437\u043D\u0430\u0445\u043E\u0434\u0437\u0456\u0446\u0446\u0430 \u045E\u043D\u0456\u0437\u0435, \u043A\u0430\u043B\u0456 y = 100 \u043D\u0430 \\n\u0441\u0430\u043C\u044B\u043C \u0432\u0435\u0440\u0441\u0435. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u041F\u0442\u0443\u0448\u043A\u0430', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u0417\u0430\u043F\u0443\u0441\u044C\u0446\u0456\u0446\u044C \u043F\u0440\u0430\u0433\u0440\u0430\u043C\u0443, \u044F\u043A\u0443\u044E \u0412\u044B \u043D\u0430\u043F\u0456\u0441\u0430\u043B\u0456."><img src="common/1x1.gif" class="run icon21"> \u0417\u0430\u043F\u0443\u0441\u044C\u0446\u0456\u0446\u044C \u043F\u0440\u0430\u0433\u0440\u0430\u043C\u0443</button><button id="resetButton" class="primary" style="display: none" title="\u0421\u043F\u044B\u043D\u0456\u0446\u044C \u043F\u0440\u0430\u0433\u0440\u0430\u043C\u0443 \u0456 \u0441\u043A\u0456\u043D\u0443\u0446\u044C \u0443 \u043F\u0430\u0447\u0430\u0442\u043A\u043E\u0432\u044B \u0441\u0442\u0430\u043D."><img src="common/1x1.gif" class="stop icon21"> \u0421\u043A\u0430\u0441\u0430\u0432\u0430\u0446\u044C</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u0417\u044C\u043C\u044F\u043D\u0456\u0446\u044C \u043A\u0456\u0440\u0443\u043D\u0430\u043A \u0440\u0443\u0445\u0443 \u043F\u0442\u0443\u0448\u043A\u0456, \u043A\u0430\u0431 \u044F\u043D\u0430 \u0437\u043B\u0430\u0432\u0456\u043B\u0430 \u0447\u0430\u0440\u0432\u044F\u043A\u0430 \u0456 \u0441\u0435\u043B\u0430 \u045E \u0441\u0432\u0430\u0451 \u0433\u043D\u044F\u0437\u0434\u043E.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\u0412\u044B\u043A\u0430\u0440\u044B\u0441\u0442\u043E\u045E\u0432\u0430\u0439\u0446\u0435 \u0433\u044D\u0442\u044B \u0431\u043B\u0451\u043A, \u043A\u0430\u0431 \u0440\u0443\u0445\u0430\u0446\u0446\u0430 \u045E \u0430\u0434\u043D\u044B\u043C \u043A\u0456\u0440\u0443\u043D\u043A\u0443, \u043A\u0430\u043B\u0456 \u0447\u0430\u0440\u0432\u044F\u043A \u0437\u043B\u043E\u045E\u043B\u0435\u043D\u044B \u0456 \u045E \u0456\u043D\u0448\u044B\u043C, \u043A\u0430\u043B\u0456 \u0447\u0430\u0440\u0432\u044F\u043A \u043D\u044F \u0437\u043B\u043E\u045E\u043B\u0435\u043D\u044B.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\u00ABx\u00BB \u2014 \u0433\u044D\u0442\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u0430\u0440\u044B\u0437\u0430\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u0437\u044B\u0446\u044B\u044F. \u0412\u044B\u043A\u0430\u0440\u044B\u0441\u0442\u043E\u045E\u0432\u0430\u0439\u0446\u0435 \u0433\u044D\u0442\u044B \u0431\u043B\u0451\u043A, \u043A\u0430\u0431 \u0440\u0443\u0445\u0430\u0446\u0446\u0430 \u045E \u0430\u0434\u043D\u044B\u043C \u043A\u0456\u0440\u0443\u043D\u043A\u0443, \u043A\u0430\u043B\u0456 \u00ABx\u00BB \u043C\u0435\u043D\u0435\u0439 \u0437\u0430 \u043B\u0456\u043A, \u0446\u0456 \u045E \u0456\u043D\u0448\u044B\u043C \u043A\u0456\u0440\u0443\u043D\u043A\u0443 \u045E \u0430\u0434\u0432\u0430\u0440\u043E\u0442\u043D\u044B\u043C \u0432\u044B\u043F\u0430\u0434\u043A\u0443.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u041D\u0430\u0446\u0456\u0441\u044C\u043D\u0456\u0446\u0435 \u043D\u0430 \u0456\u043A\u043E\u043D\u043A\u0443, \u043A\u0430\u0431 \u0437\u044C\u043C\u044F\u043D\u0456\u0446\u044C \u0431\u043B\u0451\u043A \u00AB\u043A\u0430\u043B\u0456\u00BB.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u041D\u0430 \u0433\u044D\u0442\u044B\u043C \u0443\u0437\u0440\u043E\u045E\u043D\u0456 \u043F\u0430\u0442\u0440\u0430\u0431\u0443\u044E\u0446\u0446\u0430 \u0431\u043B\u0451\u043A\u0456 \u00AB\u0456\u043D\u0430\u043A\u0448 \u043A\u0430\u043B\u0456\u00BB \u0456 \u00AB\u0456\u043D\u0430\u043A\u0448\u00BB.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u0411\u043B\u0451\u043A \u00AB\u0456\u00BB \u043C\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u044C\u043D\u0435 \u0456\u0441\u044C\u0446\u0456\u043D\u0430, \u043A\u0430\u043B\u0456 \u0430\u0431\u043E\u0434\u0432\u0430 \u043F\u0430\u0440\u0430\u043C\u044D\u0442\u0440\u044B \u0456\u0441\u044C\u0446\u0456\u043D\u043D\u044B\u044F.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\u041F\u0435\u0440\u0430\u0446\u044F\u0433\u043D\u0456\u0446\u0435 \u0431\u043B\u0451\u043A \u00AB\u0456\u043D\u0430\u043A\u0448\u00BB \u0443 \u0431\u043B\u0451\u043A \u00AB\u043A\u0430\u043B\u0456\u00BB.</td></tr></table></div>' : '');
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