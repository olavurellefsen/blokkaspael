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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">hevur ikki ma\u00F0k</span><span id="Bird_heading">yvirskrift</span><span id="Bird_noWormTooltip">Treytin t\u00E1 fuglurin ikki hevur fingi\u00F0 ma\u00F0kin.</span><span id="Bird_headingTooltip">Flyt samsvarandi vinklinum: 0 er til h\u00F8gru, \\n90 er beint upp, o.s.fr. </span><span id="Bird_positionTooltip">x og y v\u00EDsa hvar fulgurin er staddur. \\nT\u00E1 x = 0 er fuglurin \u00E1 vinstra kanti, \\nt\u00E1 x = 100 er hann \u00E1 h\u00F8gra kanti. \\nT\u00E1 y = 0 er fuglurin \u00E1 ni\u00F0asta kanti, \\nt\u00E1 y = 100 er hann \u00E1 ovara kanti. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Fuglur', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Koyr forriti\u00F0, sum t\u00FA skriva\u00F0i."><img src="common/1x1.gif" class="run icon21"> Koyr forriti\u00F0</button><button id="resetButton" class="primary" style="display: none" title="Ste\u00F0ga forritinum og nullstilla stigi\u00F0."><img src="common/1x1.gif" class="stop icon21"> Nullstilla</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Broyt vinkulin fyri at f\u00E1a fuglin at fanga ma\u00F0kin og lenda \u00ED rei\u00F0rinum.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Br\u00FAka henda blokkin fyri at fara \u00ED ein r\u00E6tning, um t\u00FA hevur ma\u00F0kin, ella \u00ED ein annan r\u00E6tning, um t\u00FA ikki hevur ma\u00F0kin.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' er t\u00EDn n\u00FAverandi vatnr\u00E6tta st\u00F8\u00F0a. Br\u00FAka henda blokkin fyri at fara \u00ED ein r\u00E6tning um \'x\' er minni enn eitt tal, og far annars \u00ED ein annan r\u00E6ttning.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klikka \u00E1 ikonina fyri at broyta \'um\' blokkin.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Hetta stigi\u00F0 hevur br\u00FAk fyri b\u00E6\u00F0i ein \'annars um\' og ein \'annars\' blokk.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'Og\' blokkurin er einans sannur um b\u00E1\u00F0ir partar av blokkinum eru sannir.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>H\u00E1la ein \'annars\' blokk inn \u00ED \'um\' blokkin.</td></tr></table></div>' : '');
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
