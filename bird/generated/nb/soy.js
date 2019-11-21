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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">har ikke mark</span><span id="Bird_heading">retning</span><span id="Bird_noWormTooltip">Betingelsen for n\u00E5r fuglen ikke har f\u00E5tt marken.</span><span id="Bird_headingTooltip">Flytt i retningen til den gitte vinkelen: 0 er \\nh\u00F8yre, 90 er rett opp, osv. </span><span id="Bird_positionTooltip">x og y markerer fuglens posisjon. \\nN\u00E5r x = 0 er fuglen n\u00E6r venstre \\nkant, n\u00E5r x = 100 er den n\u00E6r den \\nh\u00F8yre kanten. N\u00E5r y = 0 er fuglen \\nved bunnen, mens y = 100 er den n\u00E6r \\ntoppen. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Fugl', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Kj\u00F8r programmet du skrev."><img src="common/1x1.gif" class="run icon21"> Kj\u00F8r Programmet</button><button id="resetButton" class="primary" style="display: none" title="Stopp programmet og nullstill niv\u00E5et."><img src="common/1x1.gif" class="stop icon21"> Nullstill</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Endre retningsvinkelen for \u00E5 f\u00E5 fuglen til \u00E5 f\u00E5 marken og lande i redet sitt.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Bruk denne blokken for \u00E5 g\u00E5 i \u00E9n retning om du har marken, eller en annen retning om du ikke har marken.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\u00ABx\u00BB er din n\u00E5v\u00E6rende horisontale posisjon. Bruk denne blokken for \u00E5 g\u00E5 i \u00E9n retning om \u00ABx\u00BB er mindre en et nummer, eller en annen retning om \u00ABx\u00BB ikke er det.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klikk ikonet for \u00E5 endre \u00ABif\u00BB-blokken.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Dette niv\u00E5et trenger b\u00E5de en \u00ABelse if\u00BB og en \u00ABelse\u00BB-blokk.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u00ABand\u00BB-blokken er sann bare om begge inndataene er sanne.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Dra en \u00ABelse\u00BB-blokk inn i \u00ABif\u00BB-blokken.</td></tr></table></div>' : '');
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
