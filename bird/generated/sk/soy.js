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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">nem\u00E1 \u010Derva</span><span id="Bird_heading">smer</span><span id="Bird_noWormTooltip">Podmienka ak e\u0161te vt\u00E1k nechytil \u010Derva.</span><span id="Bird_headingTooltip">Pohybuj sa v smere uhla. 0 je vpravo, \\n90 je nahor at\u010F. </span><span id="Bird_positionTooltip">x a y ozna\u010Duj\u00FA poz\u00EDciu vt\u00E1ka. Ke\u010F x = 0, \\nvt\u00E1k je bl\u00EDzko \u013Eav\u00E9ho okraja, ke\u010F x = 100, \\nje bl\u00EDzko prav\u00E9ho okraja. Ke\u010F y = 100, je \\nnavrchu. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Vt\u00E1k', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Spusti\u0165 nap\u00EDsan\u00FD program."><img src="common/1x1.gif" class="run icon21"> Spusti\u0165</button><button id="resetButton" class="primary" style="display: none" title="Zastavi\u0165 program a vr\u00E1ti\u0165 \u00FArove\u0148 do p\u00F4vodn\u00E9ho \\nstavu. "><img src="common/1x1.gif" class="stop icon21"> Odznova</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Zme\u0148 smer vt\u00E1ka tak, aby chytil \u010Derva a prist\u00E1l v hniezde.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Pou\u017Ei tento blok na pohyb jedn\u00FDm smerom, ak m\u00E1\u0161 \u010Derva, alebo in\u00FDm smerom, ak ho nem\u00E1\u0161.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' je tvoja moment\u00E1lna vodorovn\u00E1 poz\u00EDcia. Pou\u017Ei blok na pohyb jedn\u00FDm smerom, ak \'x\' je menej ako \u010D\u00EDslo, alebo in\u00FDm smerom, ak je to inak.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klikni na inkonku a zme\u0148 blok \'ak\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>V tejto \u00FArovni s\u00FA potrebn\u00E9 bloky \'inak ak\' aj \'inak\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Blok \'a\' je pravda len ak oba jeho vstupy s\u00FA pravdiv\u00E9.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Potiahni blok \'inak\' dovn\u00FAtra bloku \'ak\'.</td></tr></table></div>' : '');
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
