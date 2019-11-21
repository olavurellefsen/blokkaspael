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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">solucan yoksa</span><span id="Bird_heading">y\u00F6n\u00FC</span><span id="Bird_noWormTooltip">Ku\u015Fun solucan\u0131 almad\u0131\u011F\u0131ndaki durum.</span><span id="Bird_headingTooltip">Verilen a\u00E7\u0131daki y\u00F6nde ilerle: 0 sa\u011Fa, \\n90 yukar\u0131ya, vb. </span><span id="Bird_positionTooltip">x ve y ku\u015Fun yerini belirtir. x = 0 ise ku\u015F sol \\nkenarda, x = 100 ise sa\u011F kenardad\u0131r. \\ny = 0 ise ku\u015F en altta, y = 100 ise en \u00FCsttedir. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Ku\u015F', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Yazd\u0131\u011F\u0131n program\u0131 \u00E7al\u0131\u015Ft\u0131r."><img src="common/1x1.gif" class="run icon21"> Program\u0131 \u00C7al\u0131\u015Ft\u0131r</button><button id="resetButton" class="primary" style="display: none" title="Program\u0131 durdur ve seviyeyi s\u0131f\u0131rla."><img src="common/1x1.gif" class="stop icon21"> Tekrar</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Ku\u015Fun solucan\u0131 almas\u0131 ve yuvas\u0131na ula\u015Fmas\u0131 i\u00E7in y\u00F6n a\u00E7\u0131s\u0131n\u0131 de\u011Fi\u015Ftir.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>E\u011Fer solucan varsa bir y\u00F6nde gitmesi, ya da solucan yoksa ba\u015Fka bir y\u00F6nde gitmesi i\u00E7in bu blo\u011Fu kullan.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' \u015Fuandaki yatay pozisyonun. E\u011Fer \'x\' bir rakamdan daha az ise bir y\u00F6nde, de\u011Filse ba\u015Fka bir y\u00F6nde gitmek i\u00E7in bu blo\u011Fu kullan.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'E\u011Fer\' blo\u011Funu de\u011Fi\u015Ftirmek i\u00E7in simgeyi t\u0131kla.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Bu seviye hem bir \'yoksa\' ve bir \'yoksa e\u011Fer\' blo\u011Fu gerektirir.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'ve\' blo\u011Fu sadece e\u011Fer t\u00FCm girdileri do\u011Fru ise do\u011Frudur.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\'e\u011Fer\' blo\u011Funa bir \'yoksa\' blo\u011Fu s\u00FCr\u00FCkle.</td></tr></table></div>' : '');
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
