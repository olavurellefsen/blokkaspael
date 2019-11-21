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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">hat keinen Wurm</span><span id="Bird_heading">Steuerkurs</span><span id="Bird_noWormTooltip">Die Bedingung, wenn der Vogel nicht den Wurm \\nbekommen hat. </span><span id="Bird_headingTooltip">Bewege dich in die Richtung des angegebenen \\nWinkels: 0 ist nach rechts, 90 ist geradeaus \\netc. </span><span id="Bird_positionTooltip">x und y markieren die Position des Vogels. \\nWenn x = 0, ist der Vogel in der N\u00E4he der \\nlinken Kante, wenn x = 100, ist er in der \\nN\u00E4he der rechten Kante. Wenn y = 0, ist der \\nVogel unten, wenn y = 100, ist er oben. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Vogel', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Das geschriebene Programm ausf\u00FChren."><img src="common/1x1.gif" class="run icon21"> Programm ausf\u00FChren</button><button id="resetButton" class="primary" style="display: none" title="Stoppt das Programm und setzt das Level zur\u00FCck."><img src="common/1x1.gif" class="stop icon21"> Zur\u00FCcksetzen</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u00C4ndere den Winkel des Steuerkurses, damit der Vogel den Wurm bekommt und in seinem Nest landet.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Verwende diesen Block, um in einen Steuerkurs zu gehen, falls du den Wurm hast, oder in einen anderen Steuerkurs, falls du den Wurm nicht hast.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\u201Ex\u201C ist deine aktuelle horizontale Position. Verwende diesen Block, um in einen Steuerkurs zu gehen, falls \u201Ex\u201C weniger ist als eine Zahl oder anderenfalls in einen anderen Steuerkurs.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klicke auf das Symbol, um den \u201Eif\u201C-Block zu \u00E4ndern.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Dieses Level ben\u00F6tigt sowohl einen \u201Esonst-wenn\u201C- als auch einen \u201Esonst\u201C-Block.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Der \u201Eund\u201C-Block ist nur wahr, wenn beide Eingaben wahr sind.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Zieht einen \u201Esonst\u201C-Block in den \u201Ewenn\u201C-Block.</td></tr></table></div>' : '');
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
