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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">n\'eus pre\u00F1v ebet ganta\u00F1</span><span id="Bird_heading">Penn</span><span id="Bird_noWormTooltip">Ar stad m\'ema\u00F1 al labous pa n\'eo ket deuet \\na-benn da gaout ar pre\u00F1v. </span><span id="Bird_headingTooltip">Mont war-zu ur c\'horn roet : 0 zo war an \\ntu-dehou, 90 zo war-eeun, ha kement zo </span><span id="Bird_positionTooltip">x hag y a verk pelec\'h ema\u00F1 al labous. \\nPa\'z eo par x da 0 ema\u00F1 al labous tost \\nd\'ar vord kleiz, pa\'z eo par x da 100 \\nema\u00F1 al labous tost d\'ar vord dehou. \\nPa\'z eo par y da 0 ema\u00F1 al labous en \\ntrao\u00F1, pa\'z eo par y da 100 ema\u00F1 e krec\'h. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labous', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="La\u00F1sa\u00F1 ar programm ho peus skrivet."><img src="common/1x1.gif" class="run icon21"> La\u00F1sa\u00F1 ar programm</button><button id="resetButton" class="primary" style="display: none" title="Paouez ar programm hag adderaouekaat al live."><img src="common/1x1.gif" class="stop icon21"> Adderaouekaat</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Kit d\'un tu all evit ma c\'hallo al labous tapout ar pre\u00F1v ha mont d\'e neizh.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Implijit ar bloc\'h-ma\u00F1 evit mont war un tu m\'ema\u00F1 ar pre\u00F1v ganeoc\'h, ha d\'un tu all ma n\'ema\u00F1 ket ganeoc\'h.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>"X" zo ho lec\'hiadur a-blaen. Implijit ar bloc\'h-ma\u00F1 evit mont d\'un tu ma\'z eo bihanoc\'h "X" eget un niver, anez-se d\'un tu all ?</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klikit war an arlun evit kemma\u00F1 ar bloc\'h \'ma\'</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Ezhomm en deus al live-ma\u00F1 eus ur bloc\'h "ma" hag unan "anez" war un dro.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Gwir eo ar bloc\'h "ha" mar ha nemet mard eo gwir an daou voned.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Sacha\u00F1 ur bloc\'h "anez" er bloc\'h "ma".</td></tr></table></div>' : '');
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
