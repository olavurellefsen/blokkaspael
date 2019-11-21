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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">linnulla ei ole matoa</span><span id="Bird_heading">kurssi</span><span id="Bird_noWormTooltip">Tila jossa lintu ei ole saanut matoa.</span><span id="Bird_headingTooltip">Siirry annetun kulman suuntaan: 0 tarkoittaa \\noikealle, 90 suoraan yl\u00F6s jne. </span><span id="Bird_positionTooltip">x ja y ilmaisevat linnun sijainnin. \\nKun x = 0, lintu on vasemmassa laidassa; \\nkun taas x = 100, lintu on oikeassa \\nlaidassa. Kun y = 0, lintu on alareunassa; \\nkun taas y = 100, lintu on yl\u00E4laidassa. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Lintu', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Suorita kirjoittamasi ohjelma. "><img src="common/1x1.gif" class="run icon21"> Suorita ohjelma</button><button id="resetButton" class="primary" style="display: none" title="Lopeta ohjelma ja nollaa taso. "><img src="common/1x1.gif" class="stop icon21"> Nollaa</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Vaihda menokulmaa niin, ett\u00E4 lintu saa madon ja laskeutuu pes\u00E4\u00E4ns\u00E4.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>K\u00E4yt\u00E4 t\u00E4t\u00E4 lohkoa siirty\u00E4ksesi tiettyyn kohtaan jos sinulla on mato, tai toiseen kohtaan jos sinulla ei ole matoa.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' on vaakasuora sijaintisi. K\u00E4yt\u00E4 t\u00E4t\u00E4 lohkoa siirty\u00E4ksesi sivuttain jos \'x\' on pienempi kuin jokin numero tai k\u00E4yt\u00E4 jotain toista lohkoa.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Napsauttamalla kuvaketta voit muokata \'jos\'-lohkoa.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>T\u00E4ss\u00E4 teht\u00E4v\u00E4ss\u00E4 tarvitaan sek\u00E4 \'muuten tai\' sek\u00E4 \'muuten\' lohkoja.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'ja\' lohko on totta vain jos molemmat sen ehdot ovat totta.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Ved\u00E4 \'muuten\' lohko \'jos\' lohkon sis\u00E4\u00E4n.</td></tr></table></div>' : '');
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
