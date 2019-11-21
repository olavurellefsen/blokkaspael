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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Ellenf\u00E9l felder\u00EDt\u00E9se. Adj meg egy ir\u00E1nyt \\n(0-360), \u00E9s megkapod, milyen messze van az \\nadott ir\u00E1nyban a legk\u00F6zelebbi ellenf\u00E9l. \\nHa nincs arra senki, v\u00E9gtelent ad vissza. </span><span id="Pond_cannonTooltip">T\u00FCzelj az \u00E1gyuval! Adj meg egy ir\u00E1nyt (0-360) \u00E9s \\negy t\u00E1vols\u00E1got (0-70). </span><span id="Pond_swimTooltip">Kezdj el \u00FAszni a megadott ir\u00E1nyba (0-360).</span><span id="Pond_stopTooltip">\u00C1llj meg!</span><span id="Pond_healthTooltip">Visszaadja a j\u00E1t\u00E9kos \u00E9let\u00E9t (0: halott, \\n100: teljesen eg\u00E9szs\u00E9ges). </span><span id="Pond_speedTooltip">Visszaadja a j\u00E1t\u00E9kos aktu\u00E1lis sebess\u00E9g\u00E9t (0: \\n\u00E1ll, 100: maxim\u00E1lis sebess\u00E9ggel halad) </span><span id="Pond_locXTooltip">Visszaadja a j\u00E1t\u00E9kos x koordin\u00E1t\u00E1j\u00E1t (0: bal \\nsz\u00E9l, 100: jobb sz\u00E9l) </span><span id="Pond_locYTooltip">Visszaadja a j\u00E1t\u00E9kos x koordin\u00E1t\u00E1j\u00E1t (0: lent, \\n100: fent) </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Programoz\u00E1si nyelv dokument\u00E1ci\u00F3ja.">Dokument\u00E1ci\u00F3</button></td><td><button id="runButton" class="primary" title="Futtasd a programod!"><img src="common/1x1.gif" class="run icon21"> Program futtat\u00E1sa</button><button id="resetButton" class="primary" style="display: none" title="Program le\u00E1ll\u00EDt\u00E1sa, \u00E9s a szint vissza\u00E1ll\u00EDt\u00E1sa."><img src="common/1x1.gif" class="stop icon21"> Vissza\u00E1ll\u00EDt\u00E1s</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
