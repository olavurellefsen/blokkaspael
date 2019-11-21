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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Etsi vihollisia. M\u00E4\u00E4rit\u00E4 suunta (0-360). \\nPalauttaa kyseisess\u00E4 suunnassa l\u00E4himp\u00E4n\u00E4 \\nolevan vihollisen et\u00E4isyyden. Palauttaa \\n\u00E4\u00E4rett\u00F6m\u00E4n arvon, jos vihollista ei l\u00F6ydy. </span><span id="Pond_cannonTooltip">Ammu tykill\u00E4. M\u00E4\u00E4rit\u00E4 suunta (0-360) ja kantama \\n(0-70). </span><span id="Pond_swimTooltip">Ui eteenp\u00E4in. M\u00E4\u00E4rittele suunta (0-360). </span><span id="Pond_stopTooltip">Lopeta uiminen. Pelaaja hidastaa vauhtia ja \\npys\u00E4htyy. </span><span id="Pond_healthTooltip">Palauttaa pelaajan terveyden (0 on kuollut, \\n100 terve) </span><span id="Pond_speedTooltip">Palauttaa pelajaan nopeuden (0 tarkoittaa \\npys\u00E4htynytt\u00E4, 100 t\u00E4ytt\u00E4 nopeutta). </span><span id="Pond_locXTooltip">Palauttaa pelaajan X-koordinaatin (0 on vasen \\nreuna, 100 on oikea reuna) </span><span id="Pond_locYTooltip">Palauttaa pelaajan Y-koordinaatin (0 on \\nalareuna, 100 on yl\u00E4reuna) </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="N\u00E4yt\u00E4 kieliohje">Ohjeet</button></td><td><button id="runButton" class="primary" title="Suorita kirjoittamasi ohjelma. "><img src="common/1x1.gif" class="run icon21"> Suorita ohjelma</button><button id="resetButton" class="primary" style="display: none" title="Lopeta ohjelma ja nollaa taso. "><img src="common/1x1.gif" class="stop icon21"> Nollaa</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
