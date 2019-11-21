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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">ur \u0263ur-s ara ijerme\u1E0D</span><span id="Bird_heading">i\u0263ef</span><span id="Bird_noWormTooltip">Addad ticki ag\u1E0Di\u1E0D ur d-ye\u1E6D\u1E6Dif ara ijermed.</span><span id="Bird_headingTooltip">Ddu di tnila n te\u0263mert yettunefken.\\n0 deg uzelma\u1E0D, 90 deg udem, atg.</span><span id="Bird_positionTooltip">x akked y mmalen-d adig n ug\u1E0Di\u1E0D. \\nTicki x = 0 ag\u1E0Di\u1E0D ad yili di rrif \\nazelma\u1E0D, ticki x = 100 ad yili di \\nrrif ayeffus. Ticki y = 0 ag\u1E0Di\u1E0D ad \\nyili ukesser, ticki y = 100 ad yili \\nukessawen. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Agdi\u1E0D', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Selkem ahil i turi\u1E0D."><img src="common/1x1.gif" class="run icon21"> Selkem ahil</button><button id="resetButton" class="primary" style="display: none" title="Se\u1E25bes ahil sakin ales awennez n uswir."><img src="common/1x1.gif" class="stop icon21"> Ales awennez</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Beddel ti\u0263mert n uqerru akken ag\u1E0Di\u1E0D ad d-ye\u1E6D\u1E6Def ijerme\u1E0D sakin ad yer\u1E63 \u0263ef l\u025Bec-is.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Seqdec i\u1E25der-agi akken ad teddu\u1E0D ar tnila ma \u0263ur-k ijerme\u1E0D, sakin dar tnila-nni\u1E0Den mayella ulac.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' d adig-ik aglawan. Seqdec i\u1E25der-agi akken ad teddu\u1E0D di tnila ma yella \'x\' yezga-d ddwa n n umi\u1E0Dan, di tnila-nni\u1E0Den ma yugar-it.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Senned \u0263ef tignit akken ad tesnifled i\u1E25der \'ma\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Aswir-agi yesra lwa\u1E25id i\u1E25der \'ma\' akked i\u1E25der \'ma ulac\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>I\u1E25der \'akked\' d idetti ma yella sin n inekcam d idettiyen.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Zu\u0263e\u1E5B i\u1E25der \'ma ulac\' ar yi\u1E25der \'ma\'.</td></tr></table></div>' : '');
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
