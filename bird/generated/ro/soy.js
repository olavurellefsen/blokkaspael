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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">nu are vierme</span><span id="Bird_heading">titlu</span><span id="Bird_noWormTooltip">Situa\u021Bia c\u00E2nd pas\u0103rea nu a dob\u00E2ndit viermele.</span><span id="Bird_headingTooltip">Deplasa\u021Bi-v\u0103 \u00EEn direc\u021Bia unghiului dat: 0 este \\n\u00EEn dreapta, 90 este \u00EEn sus, etc. </span><span id="Bird_positionTooltip">x \u0219i y marcheaz\u0103 pozi\u021Bia p\u0103s\u0103rii. \\nC\u00E2nd x = 0 pas\u0103rea se afl\u0103 l\u00E2ng\u0103 \\nmarginea din st\u00E2nga, atunci c\u00E2nd x \\n= 100 se afl\u0103 l\u00E2ng\u0103 marginea dreapt\u0103. \\nC\u00E2nd y = 0 pas\u0103rea este \u00EEn partea \\nde jos, c\u00E2nd y = 100 este \u00EEn partea \\nde sus. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'P\u0103s\u0103ri', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Rula\u021Bi programul pe care l-a\u021Bi scris."><img src="common/1x1.gif" class="run icon21"> Ruleaz\u0103 programul</button><button id="resetButton" class="primary" style="display: none" title="Opri\u021Bi programul \u0219i reseta\u021Bi nivelul."><img src="common/1x1.gif" class="stop icon21"> Reseteaz\u0103</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Modifica\u021Bi unghiul de \u00EEnclinare pentru a face pas\u0103rea s\u0103 primeasc\u0103 viermele \u0219i ateriza \u00EEn cuibul ei.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Utiliza\u021Bi acest bloc pentru a merge \u00EEntr-o singur\u0103 pozi\u021Bie dac\u0103 ave\u021Bi viermele sau o alt\u0103 rubric\u0103 dac\u0103 nu ave\u021Bi viermele.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>"x" reprezint\u0103 pozi\u021Bia orizontal\u0103 actual\u0103. Utiliza\u021Bi acest bloc pentru a merge \u00EEntr-o singur\u0103 pozi\u021Bie dac\u0103 \'x\' este mai mic dec\u00E2t un num\u0103r sau alt titlu.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Face\u021Bi clic pe pictograma pentru a modifica blocul "if".</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Acest nivel necesit\u0103 at\u00E2t un bloc \'else if\', c\u00E2t \u0219i un \'else\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Blocul \'and\' este valabil numai dac\u0103 ambele intr\u0103ri sunt adev\u0103rate.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Trage\u021Bi un bloc \'else\' \u00EEn blocul \'if\'.</td></tr></table></div>' : '');
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
