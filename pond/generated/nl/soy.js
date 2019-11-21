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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Zoek naar vijanden. Geef een richting op \\n(0-360). Geeft de afstand tot de dichtstbijzijnde \\nvijand in die richting. Geeft oneindig op \\nals er geen vijand te vinden is. </span><span id="Pond_cannonTooltip">Vuur het kanon af. Geef een richting (0-360) en \\neen bereik op (0-70). </span><span id="Pond_swimTooltip">Zwem vooruit. Geef een richting (0-360) op. </span><span id="Pond_stopTooltip">Stop met zwemmen. De speler komt langzaam tot \\nstilstand. </span><span id="Pond_healthTooltip">Geeft de huidige levenspunten van de speler \\nterug (0 is dood, 100 is gezond). </span><span id="Pond_speedTooltip">Geeft de huidige snelheid van de speler terug (0 \\nis staat stil, 100 is volle snelheid). </span><span id="Pond_locXTooltip">Geeft het X-co\u00F6rdinaat van de speler terug (0 is \\nde linkerkant, 100 is de rechterkant). </span><span id="Pond_locYTooltip">Geeft het Y-co\u00F6rdinaat van de speler terug (0 is \\nde onderkant, 100 is de bovenkant). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Documentatie van de programmeertaal weergeven.">Documentatie</button></td><td><button id="runButton" class="primary" title="Het door u geschreven programma uitvoeren."><img src="common/1x1.gif" class="run icon21"> Programma uitvoeren</button><button id="resetButton" class="primary" style="display: none" title="Stop het programma en begin het niveau opnieuw."><img src="common/1x1.gif" class="stop icon21"> Opnieuw instellen</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
