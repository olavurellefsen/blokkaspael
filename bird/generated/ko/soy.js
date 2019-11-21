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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\uC9C0\uB801\uC774\uAC00 \uC5C6\uB2E4</span><span id="Bird_heading">\uBC29\uD5A5</span><span id="Bird_noWormTooltip">\uC0C8\uAC00 \uC9C0\uB801\uC774\uB97C \uC7A1\uC9C0 \uC54A\uC740 \uACBD\uC6B0.</span><span id="Bird_headingTooltip">\uAC01\uB3C4\uC5D0 \uB530\uB77C \uC6C0\uC9C1\uC785\uB2C8\uB2E4: 0\uC740 \uC624\uB978\uCABD\uC73C\uB85C, 90\uC740 \uC704\uB85C, \uB4F1\uB4F1.</span><span id="Bird_positionTooltip">x\uC640 y\uAC00 \uC0C8\uC758 \uC704\uCE58\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. x = 0\uC77C\uB54C\uB294 \uC0C8\uAC00 \uC67C\uCABD \uB05D\uC5D0 \uC788\uACE0, \\nx = 100\uC77C\uB54C\uB294 \uC624\uB978\uCABD \uB05D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. y = 0\uC77C\uB54C\uB294 \uC0C8\uAC00 \uC544\uB7AB\uCABD \uB05D\uC5D0 \\n\uC788\uACE0, y = 100\uC77C\uB54C\uB294 \uC0C8\uAC00 \uC717\uCABD \uB05D\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\uC0C8', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\uB2F9\uC2E0\uC774 \uC791\uC131\uD55C \uD504\uB85C\uADF8\uB7A8\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4."><img src="common/1x1.gif" class="run icon21"> \uD504\uB85C\uADF8\uB7A8 \uC2E4\uD589</button><button id="resetButton" class="primary" style="display: none" title="\uD504\uB85C\uADF8\uB7A8\uC744 \uBA48\uCD94\uACE0 \uB808\uBCA8\uC744 \uCD08\uAE30\uD654\uD569\uB2C8\uB2E4."><img src="common/1x1.gif" class="stop icon21"> \uB2E4\uC2DC\uD558\uAE30</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\uBC29\uD5A5 \uAC01\uB3C4\uB97C \uBC14\uAFD4\uC11C \uC0C8\uAC00 \uC9C0\uB801\uC774\uB97C \uC7A1\uACE0 \uB465\uC9C0\uB85C \uB3CC\uC544\uAC00\uAC8C \uD558\uC138\uC694.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\uC774 \uBE14\uB7ED\uC744 \uC0AC\uC6A9\uD574\uC11C \uC9C0\uB801\uC774\uAC00 \uC788\uC73C\uBA74 \uD55C \uBC29\uD5A5\uC73C\uB85C, \uC5C6\uC73C\uBA74 \uB2E4\uB978 \uBC29\uD5A5\uC73C\uB85C \uC6C0\uC9C1\uC774\uC138\uC694.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\'\uAC00 \uB2F9\uC2E0\uC774 \uD604\uC7AC \uAC00\uB85C \uC704\uCE58\uC785\uB2C8\uB2E4. \uC774 \uBE14\uB7ED\uC744 \uC0AC\uC6A9\uD574\uC11C \'x\'\uAC00 \uC22B\uC790\uBCF4\uB2E4 \uC791\uC73C\uBA74 \uD55C \uBC29\uD5A5\uC73C\uB85C, \uC544\uB2C8\uBA74 \uB2E4\uB978 \uBC29\uD5A5\uC73C\uB85C \uC6C0\uC9C1\uC774\uC138\uC694.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\uC544\uC774\uCF58\uC744 \uD074\uB9AD\uD558\uC5EC \'\uB9CC\uC57D\' \uBE14\uB7ED\uC744 \uC218\uC815\uD558\uC138\uC694.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\uC774 \uB808\uBCA8\uC740 \'\uB2E4\uB978 \uACBD\uC6B0\'\uC640 \'\uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74\' \uBE14\uB7ED\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'\uADF8\uB9AC\uACE0\' \uBE14\uB7ED\uC740 \uC785\uB825\uB41C \uC870\uAC74\uC774 \uB458 \uB2E4 \uC0AC\uC2E4\uC77C\uB54C\uB9CC \uC0AC\uC2E4\uC785\uB2C8\uB2E4.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\'\uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74\' \uBE14\uB7ED\uC744 \'\uB9CC\uC57D\' \uBE14\uB7ED \uC548\uC73C\uB85C \uB4DC\uB798\uADF8\uD558\uC138\uC694.</td></tr></table></div>' : '');
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
