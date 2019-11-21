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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">kh\u00F4ng c\u00F3 s\u00E2u</span><span id="Bird_heading">bay \u0111i</span><span id="Bird_noWormTooltip">L\u00FAc chim ch\u01B0a c\u00F3 s\u00E2u.</span><span id="Bird_headingTooltip">Di chuy\u1EC3n theo h\u01B0\u1EDBng c\u1EE7a g\u00F3c \u0111\u01B0\u1EE3c ch\u1ECDn: 0 l\u00E0 \\nsang ph\u1EA3i, 90 l\u00E0 \u0111i th\u1EB3ng \u0111\u1EE9ng l\u00EAn. </span><span id="Bird_positionTooltip">x v\u00E0 y \u0111\u00E1nh d\u1EA5u v\u1ECB tr\u00ED c\u1EE7a chim. \\nKhi x = 0 chim g\u1EA7n v\u1EDBi m\u00E9p tr\u00E1i, \\nkhi x = 100 n\u00F3 g\u1EA7n v\u1EDBi m\u00E9p ph\u1EA3i. \\nKhi y = 0 chim \u1EDF \u0111\u00E1y trang, khi y \\n= 100 n\u00F3 \u1EDF \u0111\u1EA7u trang. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Chim', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh b\u1EA1n vi\u1EBFt."><img src="common/1x1.gif" class="run icon21"> Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh</button><button id="resetButton" class="primary" style="display: none" title="D\u1EEBng ch\u01B0\u01A1ng tr\u00ECnh v\u00E0 thi\u1EBFt l\u1EADp l\u1EA1i level."><img src="common/1x1.gif" class="stop icon21"> L\u00E0m l\u1EA1i</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Thay \u0111\u1ED5i h\u01B0\u1EDBng bay \u0111\u1EC3 chim l\u1EA5y \u0111\u01B0\u1EE3c s\u00E2u v\u00E0 tha v\u1EC1 t\u1ED5 c\u1EE7a n\u00F3.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>S\u1EED d\u1EE5ng m\u1EA3nh n\u00E0y \u0111\u1EC3 chim c\u00F3 th\u1EC3 bay theo m\u1ED9t h\u01B0\u1EDBng n\u1EBFu \u0111\u00E3 l\u1EA5y \u0111\u01B0\u1EE3c s\u00E2u, c\u00F2n n\u1EBFu kh\u00F4ng th\u00EC bay theo h\u01B0\u1EDBng kh\u00E1c.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' l\u00E0 v\u1ECB tr\u00ED n\u1EB1m ngang hi\u1EC7n t\u1EA1i c\u1EE7a con chim. S\u1EED d\u1EE5ng m\u1EA3nh n\u00E0y \u0111\u1EC3 con chim c\u1EE7a b\u1EA1n bay theo m\u1ED9t h\u01B0\u1EDBng n\u1EBFu \'x\' nh\u1ECF h\u01A1n m\u1ED9t s\u1ED1 n\u00E0o \u0111\u00F3, ho\u1EB7c n\u1EBFu kh\u00F4ng th\u00EC bay theo h\u01B0\u1EDBng kh\u00E1c.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Nh\u1EA5p v\u00E0o k\u00ED t\u1EF1 n\u00E0y \u0111\u1EC3 s\u1EEDa \u0111\u1ED5i m\u1EA3nh \'n\u1EBFu\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>C\u1EA5p \u0111\u1ED9 n\u00E0y c\u1EA7n c\u1EA3 hai m\u1EA3nh \'n\u1EBFu kh\u00F4ng n\u1EBFu\' v\u00E0 \'n\u1EBFu kh\u00F4ng\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>M\u1EA3nh \'v\u00E0\' ch\u1EC9 \u0111\u00FAng n\u1EBFu c\u1EA3 hai \u0111i\u1EC1u ki\u1EC7n nh\u1EADp v\u00E0o \u0111\u1EC1u \u0111\u00FAng.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>K\u00E9o m\u1EA3nh \'n\u1EBFu kh\u00F4ng\' cho v\u00E0o m\u1EA3nh \'n\u1EBFu\'.</td></tr></table></div>' : '');
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
