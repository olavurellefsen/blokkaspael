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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">non ha il verme</span><span id="Bird_heading">direzione</span><span id="Bird_noWormTooltip">La condizione quando l\'uccello non ha preso il \\nverme. </span><span id="Bird_headingTooltip">Sposta nella direzione di un certo angolo: 0 \\nsposta a destra orizzontalmente, 90 sposta \\nperpendicolarmente verso l\'alto e 270 \\nperpendicolarmente verso il basso. </span><span id="Bird_positionTooltip">x e y individuano la posizione dell\'uccello. \\nQuando x=0 l\'uccello si trova nello spigolo a \\nsinistra, quando x=100 \u00E8 vicino allo spigolo \\na destra. Quando y=0 l\'uccello si trova in \\nfondo in basso, quando y=100 \u00E8 in alto. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Uccello', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Esegui il programma che hai scritto."><img src="common/1x1.gif" class="run icon21"> Esegui programma</button><button id="resetButton" class="primary" style="display: none" title="Interrompi il programma e ripristina il livello."><img src="common/1x1.gif" class="stop icon21"> Reimposta</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Modifica il valore dell\'angolo nell\'etichetta in modo che l\'uccello possa raggiungere il verme e arrivare nel suo nido.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Usa questo blocco per andare in una direzione se hai il verme, o in una direzione differente se non hai il verme.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' \u00E8 la posizione orizzontale attuale. Utilizza questo blocco per andare in una direzione se \'x\' \u00E8 minore di un numero, o altrimenti in una direzione diversa.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Fai clic sull\'icona per modificare il blocco \'se\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Questo livello ha bisogno sia di un blocco \'altrimenti se\' sia di un blocco \'altrimenti\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Il blocco \'e\' \u00E8 vero solo se entrambi i suoi input sono veri.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Trascina un blocco \'altrimenti\' in un blocco \'se\'.</td></tr></table></div>' : '');
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
