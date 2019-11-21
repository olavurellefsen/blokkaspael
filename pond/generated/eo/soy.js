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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Skani por malamikoj. Specifu direkton (0-360). \\nLiveri la distancon al la plej proksima malamiko \\nen tiu direkto, a\u016D Nefinion se neniu malamiko \\ntrovi\u011Das. </span><span id="Pond_cannonTooltip">Pafi la kanonon al specifitaj direkto (0-360) \\nkaj distanco (0-70). </span><span id="Pond_swimTooltip">Na\u011Di anta\u016Den. Specifu direkton (0-360). </span><span id="Pond_stopTooltip">\u0108esi na\u011Dadon. La ludanto haltos. </span><span id="Pond_healthTooltip">Liveri la aktualan sanon de la ludanto (0 estas \\nmortinteco, 100 estas plena sano) </span><span id="Pond_speedTooltip">Liveri la aktualan rapidon de la ludanto (0 \\nestas haltinteco, 100 estas maksimuma rapido) </span><span id="Pond_locXTooltip">Liveri la X-koordinaton de la ludanto (0 estas \\nla maldekstra rando, 100 estas la dekstra rando) </span><span id="Pond_locYTooltip">Liveri la Y-koordinaton de la ludanto (0 estas \\nla malsupra rando, 100 estas la supra rando) </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Montri la dokumentaron pri la lingvo.">Dokumentado</button></td><td><button id="runButton" class="primary" title="Ruli la programon, kiun vi skribis."><img src="common/1x1.gif" class="run icon21"> Ruli programon</button><button id="resetButton" class="primary" style="display: none" title="Haltigi la programon kaj rekomenci la nivelon."><img src="common/1x1.gif" class="stop icon21"> Remeti</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
