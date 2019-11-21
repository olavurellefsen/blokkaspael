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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u05DC\u05D0 \u05DE\u05D7\u05D6\u05D9\u05E7\u05D4 \u05EA\u05D5\u05DC\u05E2\u05EA</span><span id="Bird_heading">\u05D1\u05DB\u05D9\u05D5\u05D5\u05DF</span><span id="Bird_noWormTooltip">\u05D4\u05EA\u05E0\u05D0\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D4\u05E6\u05D9\u05E4\u05D5\u05E8 \u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05D4 \u05D0\u05EA \u05D4\u05EA\u05D5\u05DC\u05E2\u05EA.</span><span id="Bird_headingTooltip">Move in the direction of the given angle: 0 is to the right, 90 is straight up, etc.</span><span id="Bird_positionTooltip">x and y mark the bird\'s position. When x = 0 the bird is near the left edge, when x = 100 it\'s near the right edge. When y = 0 the bird is at the bottom, when y = 100 it\'s at the top.</span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u05E6\u05D9\u05E4\u05D5\u05E8', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u05D4\u05E8\u05E5 \u05D0\u05EA \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05DB\u05EA\u05D1\u05EA."><img src="common/1x1.gif" class="run icon21"> \u05D4\u05E8\u05E5 \u05EA\u05DB\u05E0\u05D9\u05EA</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> \u05D0\u05D9\u05E4\u05D5\u05E1</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Change the heading angle to make the bird get the worm and land in her nest.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Use this block to go in one heading if you have the worm, or a different heading if you don\'t have the worm.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' is your current horizontal position. Use this block to go in one heading if \'x\' is less than a number, or a different heading otherwise.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05E1\u05DE\u05DC\u05D9\u05DC \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D1\u05DC\u05D5\u05E7 \u05D4-\'if\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>This level needs both an \'else if\' and an \'else\' block.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>The \'and\' block is true only if both its inputs are true.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\u05D2\u05E8\u05D5\u05E8 \u05D1\u05DC\u05D5\u05E7 \'else\' \u05DC\u05EA\u05D5\u05DA \u05D1\u05DC\u05D5\u05E7 \u05D4-\'if\'.</td></tr></table></div>' : '');
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
