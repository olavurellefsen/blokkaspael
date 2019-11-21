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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">S\u00F6k efter fiender. Ange en riktning (0-360). \\nReturnerar avst\u00E5ndet till den n\u00E4rmaste fienden \\ni den riktningen. Returnerar O\u00E4ndligt om ingen \\nfiende hittas. </span><span id="Pond_cannonTooltip">Skjut med kanonen. Ange en riktning (0-360) och \\nett avst\u00E5nd (0-70). </span><span id="Pond_swimTooltip">Simma fram\u00E5t. Ange en riktning (0-360). </span><span id="Pond_stopTooltip">Sluta simma. Spelaren kommer att bromsa tills \\nden stannar. </span><span id="Pond_healthTooltip">Returnerar spelarens nuvarande h\u00E4lsa (0 \u00E4r d\u00F6d, \\n100 \u00E4r frisk). </span><span id="Pond_speedTooltip">Returnerar spelarens aktuella hastigheten (0 \u00E4r \\nstopp, 100 \u00E4r full fart). </span><span id="Pond_locXTooltip">Returnerar spelarens X-koordinat (0 \u00E4r den \\nv\u00E4nstra kanten, 100 \u00E4r den h\u00F6gra kanten). </span><span id="Pond_locYTooltip">Returnerar spelarens Y-koordinat (0 \u00E4r den \\nnedersta kanten, 100 \u00E4r den \u00F6versta kanten). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Visa spr\u00E5kets dokumentation.">Dokumentation</button></td><td><button id="runButton" class="primary" title="K\u00F6r programmet du skrev."><img src="common/1x1.gif" class="run icon21"> K\u00F6r program</button><button id="resetButton" class="primary" style="display: none" title="Stoppa programmet och \u00E5terst\u00E4ll niv\u00E5n."><img src="common/1x1.gif" class="stop icon21"> \u00C5terst\u00E4ll</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
