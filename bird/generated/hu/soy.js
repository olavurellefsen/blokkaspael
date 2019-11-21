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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">nincs n\u00E1la kukac</span><span id="Bird_heading">ir\u00E1ny</span><span id="Bird_noWormTooltip">Az \u00E1llapot, amikor nincs a mad\u00E1rn\u00E1l a kukac.</span><span id="Bird_headingTooltip">A sz\u00F6ggel megadott ir\u00E1nyba mozdul: a 0 fok \\njobbra, a 90 fok f\u00F6lfele, a 180 fok balra \u00E9s \\na 270 fok lefele ir\u00E1nyt jelent. </span><span id="Bird_positionTooltip">x \u00E9s y a mad\u00E1r koordin\u00E1t\u00E1i. Ha x=0, \\na mad\u00E1r a bal sz\u00E9len va. Ha x=100 \\nakkor a jobb sz\u00E9len. Ha y=0 akkor a \\nmad\u00E1r az als\u00F3 sz\u00E9len van, ha y=100 \\nakkor a tetej\u00E9n. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Mad\u00E1r', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Futtasd a programod!"><img src="common/1x1.gif" class="run icon21"> Program futtat\u00E1sa</button><button id="resetButton" class="primary" style="display: none" title="Program le\u00E1ll\u00EDt\u00E1sa, \u00E9s a szint vissza\u00E1ll\u00EDt\u00E1sa."><img src="common/1x1.gif" class="stop icon21"> Vissza\u00E1ll\u00EDt\u00E1s</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Ir\u00E1ny\u00EDtsd a mad\u00E1r rep\u00FCl\u00E9s\u00E9nek ir\u00E1ny\u00E1t, hogy felszedje a kukacot, \u00E9s lesz\u00E1lljon a f\u00E9szk\u00E9re.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Ezzel a blokkal k\u00FCl\u00F6nb\u00F6z\u0151 ir\u00E1nyokba ir\u00E1ny\u00EDthatod a madarat att\u00F3l f\u00FCgg\u0151en hogy n\u00E1la van-e a kukac, vagy m\u00E9g nincs.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' a mad\u00E1r v\u00EDzszintes poz\u00EDci\u00F3ja, azt mondja meg, milyen messze van a k\u00E9p bal sz\u00E9l\u00E9t\u0151l. Haszn\u00E1ld ezt a blokkot hogy m\u00E1s ir\u00E1nyban rep\u00FClj\u00F6n a mad\u00E1r, ha a megadott t\u00E1vols\u00E1gn\u00E1l k\u00F6zelebb van a bal sz\u00E9lhez, \u00E9s egy m\u00E1sikba, ha messzebb van.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Kattints az ikonra, hogy m\u00F3dos\u00EDtsd a \'Ha\' blokk t\u00EDpus\u00E1t.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Ennek a szintnek a megold\u00E1s\u00E1hoz egy \'Egy\u00E9bk\u00E9nt Ha\' \u00E9s egy \'Egy\u00E9bk\u00E9nt\' blokk is kelleni fog.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Az \'\u00C9s\' blokk \u00E9rt\u00E9ke akkor \'igaz\', ha mindk\u00E9t bemenet\u00E9nek \'igaz\' az \u00E9r\u00E9tke.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>H\u00FAzz egy \'Egy\u00E9bk\u00E9nt\' blokkot a \'Ha\' blokkra.</td></tr></table></div>' : '');
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
