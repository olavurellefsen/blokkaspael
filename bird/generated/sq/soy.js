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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">nuk ka krimb</span><span id="Bird_heading">drejtimi</span><span id="Bird_noWormTooltip">Gjendja kur zogu nuk e ka fituar krimbin.</span><span id="Bird_headingTooltip">L\u00EBviz n\u00EB drejtim t\u00EB k\u00EBndit t\u00EB dh\u00EBn\u00EB: 0 \u00EBsht\u00EB \\ndjathtas, 90 \u00EBsht\u00EB p\u00EBrpjet\u00EB, etj. </span><span id="Bird_positionTooltip">x dhe y sh\u00EBnojn\u00EB pozicionin e shpend\u00EBve. \\nKur x = 0, zogu \u00EBsht\u00EB af\u00EBr skajit t\u00EB majt\u00EB, \\nkur x = 100 \u00EBsht\u00EB pran\u00EB skajit t\u00EB djatht\u00EB. \\nKur y = 0 zogu \u00EBsht\u00EB n\u00EB fund, kur y = 100 \\n\u00EBsht\u00EB n\u00EB krye. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Zog', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Ekzekuto programin q\u00EB shkrove. "><img src="common/1x1.gif" class="run icon21"> Ekzekuto Programin</button><button id="resetButton" class="primary" style="display: none" title="Ndale programin dhe reseto nivelin."><img src="common/1x1.gif" class="stop icon21"> Riktheje</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Ndryshoni k\u00EBndin e drejtimit p\u00EBr ta b\u00EBr\u00EB zogun t\u00EB marr\u00EB krimb\u00EBn dhe t\u00EB fluturoj n\u00EB fole.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>P\u00EBrdore k\u00EBt\u00EB bllok p\u00EBr t\u00EB shkuar n\u00EB nj\u00EB drejtim n\u00EBse keni krimb, ose nj\u00EB drejtim tjet\u00EBr n\u00EBse nuk keni krimb.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' \u00EBsht\u00EB pozicioni juaj aktual horizontal. P\u00EBrdoreni k\u00EBt\u00EB bllok p\u00EBr t\u00EB shkuar n\u00EB nj\u00EB drejtim n\u00EBse \'x\' \u00EBsht\u00EB m\u00EB pak se nj\u00EB num\u00EBr, ose n\u00EB nj\u00EB drejtim tjet\u00EBr n\u00EBse \u00EBsht\u00EB ndryshe.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klikoni ikon\u00EBn p\u00EBr t\u00EB modifikuar bllokun "n\u00EBse".</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Ky nivel ka nevoj\u00EB edhe p\u00EBr nj\u00EB bllok "p\u00EBrndryshe n\u00EBse" dhe nj\u00EB "tjet\u00EBr" bllok.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Blloku \'dhe\' \u00EBsht\u00EB i v\u00EBrtet\u00EB vet\u00EBm n\u00EBse t\u00EB dyja inputet e tij jan\u00EB t\u00EB v\u00EBrteta.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Zvarrit bllokun \'p\u00EBrndryshe\' n\u00EB bllokun \'n\u00EBse\'.</td></tr></table></div>' : '');
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
