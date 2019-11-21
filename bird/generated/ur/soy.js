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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u06A9\u06CC\u0691\u0627 \u0646\u06C1\u06CC\u06BA \u06C1\u06D2</span><span id="Bird_heading">\u0633\u0631\u062E\u06CC</span><span id="Bird_noWormTooltip">\u0634\u0631\u0637 \u062C\u0628 \u067E\u0631\u0646\u062F\u0648\u06BA \u06A9\u0648 \u06A9\u06CC\u0691\u06D2 \u0646\u06C1\u06CC\u06BA \u0645\u0644\u062A\u06CC \u06C1\u06D2.</span><span id="Bird_headingTooltip">\u062F\u06CC\u0626\u06D2 \u06AF\u0626\u06D2 \u0632\u0627\u0648\u06CC\u06C1 \u06A9\u06CC \u0633\u0645\u062A \u0645\u06CC\u06BA \u0645\u0646\u062A\u0642\u0644 \u06A9\u0631\u06CC\u06BA: 0 \u0635\u062D\u06CC\u062D \u06C1\u06D2\u060C \\n90 \u0628\u0631\u0627\u06C1 \u0631\u0627\u0633\u062A \u06C1\u06D2\u060C \u0648\u063A\u06CC\u0631\u06C1. </span><span id="Bird_positionTooltip">\u0627\u06CC\u06A9\u0633 \u0627\u0648\u0631 Y \u067E\u0631\u0646\u062F\u0648\u06BA \u06A9\u06CC \u067E\u0648\u0632\u06CC\u0634\u0646 \u06A9\u0648 \u0646\u0634\u0627\u0646 \u0632\u062F \u06A9\u0631\u062A\u06D2 \u06C1\u06CC\u06BA. \\n\u062C\u0628 \u0627\u06CC\u06A9\u0633 = 0 \u0628\u0627\u0626\u06CC\u06BA \u0628\u0627\u0626\u06CC\u06BA \u06A9\u0646\u0627\u0631\u06D2 \u06A9\u06D2 \u0642\u0631\u06CC\u0628 \u06C1\u06D2\u060C \u062C\u0628 \u0627\u06CC\u06A9\u0633 \\n= 100 \u06CC\u06C1 \u062F\u0627\u0626\u06CC\u06BA \u06A9\u0646\u0627\u0631\u06D2 \u06A9\u06D2 \u0642\u0631\u06CC\u0628 \u06C1\u06D2. \\n\u062C\u0628 y = 0 \u067E\u0631\u0646\u062F\u06D2 \u0646\u0686\u0644\u06D2 \u062D\u0635\u06D2 \u067E\u0631 \u06C1\u06D2\u060C \u062C\u0628 y = 100 \u06CC\u06C1 \u0633\u0628 \u0633\u06D2 \\n\u0627\u0648\u067E\u0631 \u06C1\u06D2. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u067E\u0631\u0646\u062F\u06C1', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u062C\u0633 \u0645\u06CC\u06BA \u0622\u067E \u0644\u06A9\u06BE\u0627 \u06C1\u06D2 \u0686\u0644\u0627\u0626\u06CC\u06BA."><img src="common/1x1.gif" class="run icon21"> \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u062C\u0633 \u0645\u06CC\u06BA \u0622\u067E \u0646\u06D2 \u0644\u06A9\u06BE\u0627. \u0686\u0644\u0627\u0626\u06CC\u06BA</button><button id="resetButton" class="primary" style="display: none" title="\u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u0628\u0646\u062F \u06A9\u0631\u0648 \u0627\u0648\u0631 \u0633\u0637\u062D \u06A9\u0648 \u062F\u0648\u0628\u0627\u0631\u06C1 \u062A\u0631\u062A\u06CC\u0628 \u062F\u06CC\u06BA."><img src="common/1x1.gif" class="stop icon21"> \u062F\u0648\u0628\u0627\u0631\u06C1 \u0645\u0631\u062A\u0628 \u06A9\u0631\u06CC\u06BA</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u067E\u06C1\u0644\u0648 \u06A9\u0648 \u0632\u0627\u0648\u06CC\u06C1 \u0645\u06CC\u06BA \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \u067E\u06C1\u0644\u0648 \u06A9\u0648 \u0632\u0627\u0648\u06CC\u06C1 \u0645\u06CC\u06BA \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0631\u06CC\u06BA.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\u0627\u06AF\u0631 \u0622\u067E \u06A9\u06CC\u0691\u0627 \u0646\u06C1\u06CC\u06BA \u06C1\u06D2 \u0627\u06AF\u0631 \u0622\u067E \u06A9\u06CC\u0691\u0627 \u06C1\u06D2\u060C \u06CC\u0627 \u0627\u06CC\u06A9 \u0645\u062E\u062A\u0644\u0641 \u0633\u0631\u0646\u06AF \u0627\u06CC\u06A9 \u0633\u0631 \u0645\u06CC\u06BA \u062C\u0627\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \u0627\u0633 \u0628\u0644\u0627\u06A9 \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' \u0622\u067E \u06A9\u0627 \u0645\u0648\u062C\u0648\u062F\u06C1 \u0627\u0641\u0642\u06CC \u067E\u0648\u0632\u06CC\u0634\u0646 \u06C1\u06D2. \u0627\u06AF\u0631 \u06CC\u06C1 \u0627\u06CC\u0631\u0631 \u0628\u0631\u0642\u0631\u0627\u0631 \u0631\u06C1\u06D2 \u062A\u0648 \u06C1\u0645\u0627\u0631\u06D2 \u06C1\u06CC\u0644\u067E \u0688\u06CC\u0633\u06A9 \u0633\u06D2 \u0631\u0627\u0628\u0637\u06C1 \u06A9\u0631\u06CC\u06BA. \u063A\u0644\u0637 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u06CC \u0627\u0637\u0644\u0627\u0639 \u062F\u06CC\u062A\u06D2 \u06C1\u0648\u0626\u06D2 \u0627\u06CC\u0631\u0631 \u0622 \u06AF\u06CC\u0627 \u06C1\u06D2. \u0628\u0631\u0627\u06C1 \u0645\u06C1\u0631\u0628\u0627\u0646\u06CC \u062F\u0648\u0628\u0627\u0631\u06C1 \u06A9\u0648\u0634\u0634 \u06A9\u0631\u06CC\u06BA. \u0627\u06AF\u0631 \u06CC\u06C1 \u0627\u06CC\u0631\u0631 \u0628\u0631\u0642\u0631\u0627\u0631 \u0631\u06C1\u06D2 \u062A\u0648 \u06C1\u0645\u0627\u0631\u06D2 \u06C1\u06CC\u0644\u067E \u0688\u06CC\u0633\u06A9 \u0633\u06D2 \u0631\u0627\u0628\u0637\u06C1 \u06A9\u0631\u06CC\u06BA. \u063A\u0644\u0637 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u06CC \u0627\u0637\u0644\u0627\u0639 \u062F\u06CC\u062A\u06D2 \u06C1\u0648\u0626\u06D2 \u0627\u06CC\u0631\u0631 \u0622 \u06AF\u06CC\u0627 \u06C1\u06D2.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'\u0627\u06AF\u0631\' \u0628\u0644\u0627\u06A9 \u06A9\u0648 \u062A\u0631\u0645\u06CC\u0645 \u06A9\u0631\u0646\u06D2 \u06A9\u06CC\u0644\u0626\u06D2 \u0622\u0626\u06A9\u0646 \u067E\u0631 \u06A9\u0644\u06A9 \u06A9\u0631\u06CC\u06BA.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u0627\u0633 \u0633\u0637\u062D \u06A9\u0648 \'\u0627\u0648\u0631\' \u062F\u0648\u0646\u0648\u06BA \u06A9\u06CC \u0636\u0631\u0648\u0631\u062A \u06C1\u0648\u062A\u06CC \u06C1\u06D2 \u0627\u0648\u0631 \u0627\u06CC\u06A9 \u0627\u0648\u0631 \'\u0628\u0644\u0627\u06A9\' \u06A9\u06CC \u0636\u0631\u0648\u0631\u062A \u06C1\u0648\u062A\u06CC \u06C1\u06D2.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'\u0627\u0648\u0631\' \u0628\u0644\u0627\u06A9 \u0635\u0631\u0641 \u0627\u0633 \u0635\u0648\u0631\u062A \u0645\u06CC\u06BA \u0633\u0686 \u06C1\u06D2 \u0627\u06AF\u0631 \u0627\u0633 \u06A9\u06D2 \u0622\u062F\u0627\u0646\u0648\u06BA \u062F\u0648\u0646\u0648\u06BA \u062F\u0631\u0633\u062A \u06C1\u06CC\u06BA.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\'\u0627\u0648\u0631\' \u0628\u0644\u0627\u06A9 \u06A9\u0648 \'\u0627\u06AF\u0631\' \u0628\u0644\u0627\u06A9 \u0645\u06CC\u06BA \u06AF\u06BE\u0633\u06CC\u0679\u06CC\u06BA.</td></tr></table></div>' : '');
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
