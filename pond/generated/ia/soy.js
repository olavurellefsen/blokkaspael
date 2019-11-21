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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Cercar inimicos. Specifica un direction (0-360). \\nRetorna le distantia al inimico le plus proxime in \\nille direction. Retorna Infinite si non trova \\nalcun inimico. </span><span id="Pond_cannonTooltip">Discargar le cannon. Specifica un direction \\n(0-360) e un portata (0-70). </span><span id="Pond_swimTooltip">Natar in avante. Specifica un direction (0-360). </span><span id="Pond_stopTooltip">Cessar de natar. Le jocator se arresta \\nlentemente. </span><span id="Pond_healthTooltip">Retorna le sanitate actual del jocator (0 es \\nmorte, 100 es in optime forma). </span><span id="Pond_speedTooltip">Retorna le velocitate actual del jocator (0 es \\nimmobile, 100 es plen velocitate). </span><span id="Pond_locXTooltip">Retorna le coordinata X del jocator (0 es le \\nbordo sinistre, 100 es le bordo dextre). </span><span id="Pond_locYTooltip">Retorna le coordinata Y del jocator (0 es le \\nbordo inferior, 100 es le bordo superior). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Monstrar le documentation del linguage.">Documentation</button></td><td><button id="runButton" class="primary" title="Executar le programma que tu ha scribite."><img src="common/1x1.gif" class="run icon21"> Executar programma</button><button id="resetButton" class="primary" style="display: none" title="Stoppar le programma e reinitialisar le nivello."><img src="common/1x1.gif" class="stop icon21"> Reinitialisar</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
