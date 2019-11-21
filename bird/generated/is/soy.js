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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">hefur ekki orm</span><span id="Bird_heading">stefna</span><span id="Bird_noWormTooltip">Skilyr\u00F0i\u00F0 \u00FEegar fuglinn hefur ekki n\u00E1\u00F0 orminum.</span><span id="Bird_headingTooltip">Fara \u00ED \u00FE\u00E1 \u00E1tt sem uppgefi\u00F0 horn s\u00FDnir: 0 er til \\nh\u00E6gri, 90 er beint upp, o.s.frv. </span><span id="Bird_positionTooltip">x og y t\u00E1kna sta\u00F0 fuglsins. \u00DEegar x = 0 er \\nfuglinn vi\u00F0 vinstri br\u00FAnina, \u00FEegar x = 100 \\ner hann vi\u00F0 h\u00E6gri br\u00FAnina. \u00DEegar y = 0 er \\nfuglinn ne\u00F0st ni\u00F0ri, \u00FEegar y = 100 er hann \\nefst uppi. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Fugl', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Keyra forriti\u00F0 sem \u00FE\u00FA skrifa\u00F0ir."><img src="common/1x1.gif" class="run icon21"> Keyra forriti\u00F0</button><button id="resetButton" class="primary" style="display: none" title="St\u00F6\u00F0va forriti\u00F0 og n\u00FAllstilla \u00E1fangann."><img src="common/1x1.gif" class="stop icon21"> Byrja aftur</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Breyttu gr\u00E1\u00F0u stefnunnar til a\u00F0 l\u00E1ta fuglinn n\u00E1 orminum og lenda \u00ED hrei\u00F0rinu.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Nota\u00F0u \u00FEennan kubb til a\u00F0 fara \u00ED eina \u00E1tt ef \u00FE\u00FA ert me\u00F0 orminn en \u00ED a\u00F0ra \u00E1tt ef \u00FE\u00FA ert ekki me\u00F0 hann.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' er sta\u00F0ur \u00FEinn n\u00FA l\u00E1r\u00E9tt. Nota\u00F0u \u00FEennan kubb til a\u00F0 fara \u00ED eina \u00E1tt ef \'x\' er minna en talan, annars \u00ED a\u00F0ra \u00E1tt.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Smelltu \u00E1 t\u00E1kni\u00F0 til a\u00F0 breyta \'if\' kubbnum.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u00CD \u00FEessum \u00E1fanga \u00FEarf b\u00E6\u00F0i "annars ef" og "annars" kubba.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Til a\u00F0 \'og\' kubburinn s\u00E9 sannur \u00FEurfa b\u00E6\u00F0i innt\u00F6kin a\u00F0 vera s\u00F6nn.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Drag\u00F0u \'annars\' kubb inn \u00ED \'ef\' kubbinn.</td></tr></table></div>' : '');
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
