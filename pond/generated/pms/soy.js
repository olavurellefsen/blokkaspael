// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">S\u00EBrch\u00E9 dij nemis. Spessifich\u00E9 na diression \\n(0-360). A r\u00EBspond con la distansa dal nemis \\npi davzin an cola diression. A r\u00EBspond Infin\u00EC \\ns\'a treuva gnun nemis. </span><span id="Pond_cannonTooltip">Spar\u00E9 con \u00EBl canon. Spessifich\u00E9 na diression \\n(0-360) e na port\u00E0 (0-70). </span><span id="Pond_swimTooltip">No\u00E9. Spessifich\u00E9 na diression (0-360). </span><span id="Pond_stopTooltip">Chit\u00E9 \u00EBd no\u00E9. \u00CBl giugador a ralentr\u00E0 p\u00EBr \\nf\u00EBrmesse. </span><span id="Pond_healthTooltip">A r\u00EBspond con la salute atual d\u00EBl giugador (0 a \\nl\'\u00E9 m\u00F2rt, 100 a l\'\u00E9 an pien-a forma). </span><span id="Pond_speedTooltip">A smon l\'andi atual d\u00EBl giugador (0 a l\'\u00E9 ferm, \\n100 a l\'\u00E9 a andi pien). </span><span id="Pond_locXTooltip">A smon la coordin\u00E0 X d\u00EBl giugador (0 a l\'\u00E9 \u00EBl \\nb\u00F2rd \u00EBsnistr, 100 a l\'\u00E9 \u00EBl b\u00F2rd drit). </span><span id="Pond_locYTooltip">A smon la coordin\u00E0 Y d\u00EBl giugador (0 a l\'\u00E9 \u00EBl \\nbass, 100 a l\'\u00E9 l\'\u00E0ut). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="A smon la documentassion an sla lenga.">Documentassion</button></td><td><button id="runButton" class="primary" title="F\u00E9 and\u00E9 \u00EBl programa ch\'a l\'ha scriv\u00F9."><img src="common/1x1.gif" class="run icon21"> F\u00E9 and\u00E9 \u00EBl programa</button><button id="resetButton" class="primary" style="display: none" title="F\u00EBrm\u00E9 \u00EBl programa e inissialis\u00E9 torna \u00EBl livel."><img src="common/1x1.gif" class="stop icon21"> But\u00E9 torna coma al prinsipi</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
