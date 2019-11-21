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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Igeri egin aurrera. Zehaztu norabidea (0-360). </span><span id="Pond_stopTooltip">Gelditu igeriketa. Jokalaria gelditu egingo da \\nstopean. </span><span id="Pond_healthTooltip">Jokalariari uneko osasuna bueltatzen zaio (0 \\nhilda da, 100 osasuntsu da). </span><span id="Pond_speedTooltip">Jokalaria uneko abiadurara bueltatzen da (0 \\ngeldi da, 100 guztizko abiadura da). </span><span id="Pond_locXTooltip">Jokalariaren X koordenada bueltatzen da (0 \\nezkerreko muturra da, 100 eskumako muturra \\nda). </span><span id="Pond_locYTooltip">Jokalariaren Y koordenada bueltatzen da (0 \\nbeheko muturra da, 100 goiko muturra da). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Hizkuntza dokumentazioa erakutsi.">Dokumentazioa</button></td><td><button id="runButton" class="primary" title="Zuk idatzitako programa exekutatu."><img src="common/1x1.gif" class="run icon21"> Programa exekutatu</button><button id="resetButton" class="primary" style="display: none" title="Gelditu programa eta berrezarri maila."><img src="common/1x1.gif" class="stop icon21"> Berriz hasi</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
