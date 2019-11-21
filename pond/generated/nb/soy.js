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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">S\u00F8k etter fiender. Angi en retning (0\u2013360). \\nReturnerer avstanden til n\u00E6rmeste fiende i \\nden retningen. Returnerer uendelighet om ingen \\nfiender finnes. </span><span id="Pond_cannonTooltip">Fyr av kanonen. Angi en retning (0\u2013360) og en \\navstand (0\u201370). </span><span id="Pond_swimTooltip">Sv\u00F8m forover. Angi en retning (0\u2013360). </span><span id="Pond_stopTooltip">Slutt \u00E5 sv\u00F8mme. Spilleren vil sakke ned til den \\nstopper. </span><span id="Pond_healthTooltip">Returnerer spillerens n\u00E5v\u00E6rende helse (0 er d\u00F8d, \\n100 er sunn). </span><span id="Pond_speedTooltip">Returnerer spillerens n\u00E5v\u00E6rende fart (0 er \\nstoppet, 100 er full fart). </span><span id="Pond_locXTooltip">Returnerer spillerens X-koordinat (0 er venstre \\nkant, 100 er h\u00F8yre kant). </span><span id="Pond_locYTooltip">Returnerer spillerens Y-koordinat (0 er bunnen, \\n100 er toppen). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Viser spr\u00E5kdokumentasjonen.">Dokumentasjon</button></td><td><button id="runButton" class="primary" title="Kj\u00F8r programmet du skrev."><img src="common/1x1.gif" class="run icon21"> Kj\u00F8r Programmet</button><button id="resetButton" class="primary" style="display: none" title="Stopp programmet og nullstill niv\u00E5et."><img src="common/1x1.gif" class="stop icon21"> Nullstill</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
