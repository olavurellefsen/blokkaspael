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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">nem\u00E1 \u010Derva</span><span id="Bird_heading">sm\u011Br</span><span id="Bird_noWormTooltip">Podm\u00EDnka, kdy\u017E pt\u00E1k nedostal \u010Derva.</span><span id="Bird_headingTooltip">Jdi ve sm\u011Bru, kter\u00FD ud\u00E1v\u00E1 \u00FAhel ve stupn\u00EDch: 0 je \\nvodorovn\u011B doprava, 90 je nahoru apod. </span><span id="Bird_positionTooltip">x a y ozna\u010Duj\u00ED pozici pt\u00E1ka. Pokud x = 0, \\npt\u00E1k je na lev\u00E9m okraji, pokud x = 100, je \\nna prav\u00E9m okraji. Kdy\u017E y = 100, je na horn\u00EDm. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Pt\u00E1k', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Spust\u00ED program, kter\u00FD jste napsali."><img src="common/1x1.gif" class="run icon21"> Spus\u0165 program</button><button id="resetButton" class="primary" style="display: none" title="Zastav\u00ED program a vr\u00E1t\u00ED \u00FArove\u0148 do v\u00FDchoz\u00EDho stavu."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Zm\u011B\u0148 sm\u011Br letu pt\u00E1ka tak aby ulovil \u010Derva a p\u0159ist\u00E1l do hn\u00EDzda.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Pou\u017Eij tento blok pro pohyb jedn\u00EDm sm\u011Brem kdy\u017E m\u00E1\u0161 \u010Derva a jin\u00FDm pokud ho nem\u00E1\u0161,</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' je tvoje sou\u010Dasn\u00E1 vodorovn\u00E1 poloha, Pou\u017Eij tento blok pro pohyb ur\u010Den\u00FDm sm\u011Brem pokud je \'x\' men\u0161\u00ED ne\u017E dan\u00E9 \u010D\u00EDslo, nebo pro jin\u00FD pohyb v opa\u010Dn\u00E9 p\u0159\u00EDpad\u011B.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Pro \u00FApravu bloku \u201Eif\u201C klikn\u011Bte na ikonu</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>V t\u00E9to \u00FArovni jsou t\u0159eba bloky \'nebo pokud\' i \'jinak\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Blok \'a tak\u00E9\' je pravdiv\u00FD jen pokud jsou oba vstupy pravdiv\u00E9.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>P\u0159et\u00E1hni blok \'jinak\' do bloku \'pokud\'.</td></tr></table></div>' : '');
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
