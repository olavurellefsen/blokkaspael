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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">S\u00F8g efter fjender. Angiv en retning (0-360). \\nReturnerer afstanden til den n\u00E6rmeste fjende \\ni den retning. Returnerer \'Infinity\' (uendeligt), \\nhvis den ikke fandt nogen fjender. </span><span id="Pond_cannonTooltip">Affyrer kanonen. Angiv retning (0-360) og \\nafstand (0-70). </span><span id="Pond_swimTooltip">Sv\u00F8m fremad. Angiv en retning (0-360). </span><span id="Pond_stopTooltip">Stop med at sv\u00F8mme. Spilleren vil neds\u00E6tte \\nhastigheden til den stopper. </span><span id="Pond_healthTooltip">Returnerer spillerens nuv\u00E6rende helbred (0 er \\nd\u00F8d, 100 er sundt). </span><span id="Pond_speedTooltip">Returnerer spillerens aktuelle hastighed (0 er \\nstoppet, 100 er fuld fart). </span><span id="Pond_locXTooltip">Returnerer spillerens X-koordinat (0 er den \\nvenstre kant, 100 er den h\u00F8jre kant). </span><span id="Pond_locYTooltip">Returnerer spillerens Y-koordinat (0 er den \\nnederste kant, 100 er den \u00F8verste kant). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Vis sprogdokumentationen.">Dokumentation</button></td><td><button id="runButton" class="primary" title="K\u00F8r det program, du skrev."><img src="common/1x1.gif" class="run icon21"> K\u00F8r program</button><button id="resetButton" class="primary" style="display: none" title="Stop programmet og nulstil niveauet."><img src="common/1x1.gif" class="stop icon21"> Nulstil</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
