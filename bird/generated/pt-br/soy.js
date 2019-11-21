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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">n\u00E3o tem minhocas</span><span id="Bird_heading">dire\u00E7\u00E3o</span><span id="Bird_noWormTooltip">Esse bloco indica quando o p\u00E1ssaro n\u00E3o possui a \\nminhoca. </span><span id="Bird_headingTooltip">Mover na dire\u00E7\u00E3o do \u00E2ngulo indicado: 0 \u00E9 para a \\ndireita, 90 \u00E9 para frente, etc. </span><span id="Bird_positionTooltip">x e y marcam a posi\u00E7\u00E3o do p\u00E1ssaro. \\nQuando x = 0 o p\u00E1ssaro esta pr\u00F3ximo \\nda margem esquerda, quando x = 100 \\nesta perto da margem direita. Quando \\ny = 0 o p\u00E1ssaro esta em baixo, quando \\ny = 100 ele est\u00E1 no topo. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'P\u00E1ssaro', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Rodar o programa que voc\u00EA escreveu."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Parar a execu\u00E7\u00E3o do programa e resetar o nivel."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Trocar o \u00E2ngulo da dire\u00E7\u00E3o para que o p\u00E1ssaro pegue a minhoca e aterrisse em seu ninho.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Usar este bloco para ir em uma posi\u00E7\u00E3o se voc\u00EA tiver a minhoca, ou uma posi\u00E7\u00E3o diferente se voc\u00EA n\u00E3o tiver a minhoca.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' e sua posi\u00E7\u00E3o horizontal atual. Use este bloco para ir em uma dire\u00E7\u00E3o se \'x\' for menor que um numero, ou uma dire\u00E7\u00E3o diferente caso contr\u00E1rio.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Clique no \u00EDcone para modificar o bloco \'se\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Este n\u00EDvel precisa de um bloco \'sen\u00E3o se\' e de um bloco \'sen\u00E3o\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>O bloco "e" somente \u00E9 verdadeiro se as duas entradas forem verdadeiras.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Puxe um bloco "sen\u00E3o" em cima do bloco "se".</td></tr></table></div>' : '');
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
