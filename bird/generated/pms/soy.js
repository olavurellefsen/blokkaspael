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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">a l\'ha gnun verm</span><span id="Bird_heading">diression</span><span id="Bird_noWormTooltip">La condission \u00EBd cand l\'osel a l\'ha nen ciap\u00E0 \u00EBl \\nverm. </span><span id="Bird_headingTooltip">Bog\u00E9 ant la diression \u00EBd n\'\u00E0ngol d\u00E0it: 0 a l\'\u00E9 a \\ndrita, 90 drit an facia, e via f\u00F2rt. </span><span id="Bird_positionTooltip">x e y a marco la posission \u00EBd l\'osel. \\nCand x = 0 l\'osel a l\'\u00E9 tac\u00E0 a la bordura \\nsnistra, cand x = 100 a l\'\u00E9 tac\u00E0 a la \\nbordura drita. Cand y = 0 l\'osel a l\'\u00E9 \\nan bass, cand y = 100 a l\'\u00E9 an \u00E0ut. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Osel', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="F\u00E9 and\u00E9 \u00EBl programa ch\'a l\'ha scriv\u00F9."><img src="common/1x1.gif" class="run icon21"> F\u00E9 and\u00E9 \u00EBl programa</button><button id="resetButton" class="primary" style="display: none" title="F\u00EBrm\u00E9 \u00EBl programa e inissialis\u00E9 torna \u00EBl livel."><img src="common/1x1.gif" class="stop icon21"> But\u00E9 torna coma al prinsipi</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Modifich\u00E9 l\'\u00E0ngol dla diression p\u00EBr f\u00E9 an manera che l\'osel a ciapa \u00EBl verm e a atera an s\u00F2 ni.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Dovr\u00E9 \'s bl\u00F2ch p\u00EBr and\u00E9 an na diression si chiel a l\'ha \u00EBl verm, e an n\'\u00E0utra s\'a-l l\'ha pa.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' e a l\'\u00E9 soa posission orisontal atual. Dovr\u00E9 \'s bl\u00F2ch p\u00EBr and\u00E9 an na diression si \'x\' a l\'\u00E9 pi ci che \'n n\u00F9mer, d\u00EBsn\u00F2 an n\'\u00E0utra diression.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Sgnach\u00E9 an sla plancia p\u00EBr modifich\u00E9 \u00EBl bl\u00F2ch \'si\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u00CBs livel a l\'ha damanca sia d\'un bl\u00F2ch \'si\' che d\'un bl\u00F2ch \'d\u00EBsn\u00F2\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u00CBl bl\u00F2ch \'e\' a l\'\u00E9 ver mach si soe doe part a son vere.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Tir\u00E9 un bl\u00F2ch \'d\u00EBsn\u00F2\' ant \u00EBl bl\u00F2ch \'si\'.</td></tr></table></div>' : '');
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
