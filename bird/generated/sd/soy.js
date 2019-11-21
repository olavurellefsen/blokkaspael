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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u06AA\u0648 \u0628\u06C1 \u06AA\u064A\u0626\u0648\u0646 \u0646\u0627\u06BE\u064A</span><span id="Bird_heading">\u0633\u0631\u062E\u064A</span><span id="Bird_noWormTooltip">\u0634\u0631\u0637 \u062C\u068F\u06BE\u0646 \u067E\u06A9\u064A \u06AA\u064A\u0626\u0646\u064A \u06A9\u064A \u0646\u06C1 \u067E\u06AA\u0699\u064A. </span><span id="Bird_headingTooltip">\u068F\u0646\u0644 \u0631\u062E \u062C\u064A \u0637\u0631\u0641 \u06BE\u0644\u0648\u060C 0 \u0645\u0637\u0644\u0628 \u0633\u0627\u0684\u0648\u060C 90 \u0645\u0637\u0644\u0628 \u0633\u068C\u0648 \u0645\u067F\u064A\u060C \\n\u0648\u063A\u064A\u0631\u06BE\u06C1. </span><span id="Bird_positionTooltip">\u0627 \u06FD \u0628 \u062C\u0648\u0646 \u0646\u0634\u0627\u064A\u0648\u0646 \u067E\u06A9\u064A \u062C\u064A \u062C\u0627\u0621\u0650 \u067B\u068C\u0627\u0626\u064A\u0646 \u067F\u064A\u0648\u0646. \\n\u062C\u068F\u06BE\u0646 \u0627 = 0 \u06BE\u062C\u064A \u062A\u06C1 \u067E\u06A9\u064A \u06A9\u0627\u067B\u064A \u067E\u0627\u0633\u064A \u06BE\u0648\u0646\u062F\u064A\u060C \u062C\u068F\u06BE\u0646 \\n\u0627 = 100 \u062C\u064A \u06BE\u062C\u064A \u062A\u06C1 \u0627\u06BE\u0627 \u0633\u0627\u0684\u064A \u067E\u0627\u0633\u064A \u06BE\u0648\u0646\u062F\u064A\u060C \u062C\u064A\u06AA\u068F\u06BE\u0646 \\n\u067B = 0 \u06BE\u062C\u064A \u062A\u06C1 \u067E\u06A9\u064A \u06BE\u064A\u067A\u064A\u0646 \u0637\u0631\u0641 \u06BE\u0648\u0646\u062F\u064A \u06FD \u062C\u068F\u06BE\u0646 \u067B \\n= 100 \u06BE\u062C\u064A \u062A\u06C1 \u067E\u06A9\u064A \u0645\u067F\u064A\u0646 \u0637\u0631\u0641 \u06BE\u0648\u0646\u062F\u064A. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u067E\u06A9\u064A', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u067E\u0646\u06BE\u0646\u062C\u0648 \u0644\u06A9\u064A\u0644 \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u06BE\u0644\u0627\u064A\u0648."><img src="common/1x1.gif" class="run icon21"> \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u0647\u0644\u0627\u064A\u0648</button><button id="resetButton" class="primary" style="display: none" title="\u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u06A9\u064A \u0628\u064A\u06BE\u0627\u0631\u064A \u0645\u0631\u062D\u0644\u064A \u06A9\u064A \u067B\u064A\u0647\u0631 \u062A\u0631\u062A\u064A\u0628 \u068F\u064A\u0648."><img src="common/1x1.gif" class="stop icon21"> \u067B\u064A\u0647\u0631 \u062A\u0631\u062A\u064A\u0628 \u068F\u064A\u0648</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Change the heading angle to make the bird get the worm and land in her nest.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Use this block to go in one heading if you have the worm, or a different heading if you don\'t have the worm.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' is your current horizontal position. Use this block to go in one heading if \'x\' is less than a number, or a different heading otherwise.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Click the icon to modify the \'if\' block.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>This level needs both an \'else if\' and an \'else\' block.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>The \'and\' block is true only if both its inputs are true.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Drag an \'else\' block into the \'if\' block.</td></tr></table></div>' : '');
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
