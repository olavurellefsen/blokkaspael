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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Leita a\u00F0 \u00F3vinum. Tilgreindu stefnu (0-360). \\nGefur fjarl\u00E6g\u00F0ina a\u00F0 n\u00E1l\u00E6gasta \u00F3vini \u00ED \u00FE\u00E1 \\nstefnu. Gefur \u00F3endanleika (Infinity) ef enginn \\n\u00F3vinur finnst. </span><span id="Pond_cannonTooltip">Skj\u00F3ta me\u00F0 fallbyssunni. Tilgreindu stefnu \\n(0-360) og vegalengd (0-70). </span><span id="Pond_swimTooltip">Synda \u00E1fram. Tilgreindu stefnu (0-360). </span><span id="Pond_stopTooltip">H\u00E6tta a\u00F0 synda. Leikvera mun h\u00E6gja \u00E1 s\u00E9r og \\nst\u00F6\u00F0vast. </span><span id="Pond_healthTooltip">Gefur heilsu leikveru n\u00FA (0 er dau\u00F0, \\n100 er full heilsa). </span><span id="Pond_speedTooltip">Gefur hra\u00F0a leikveru n\u00FA (0 er kyrr, \\n100 er h\u00E1markshra\u00F0i). </span><span id="Pond_locXTooltip">Gefur X hnit leikverunnar (0 er vinstri br\u00FAn, \\n100 er h\u00E6gri br\u00FAn). </span><span id="Pond_locYTooltip">Gefur Y hnit leikverunnar (0 er ne\u00F0ri br\u00FAn, \\n100 er efri br\u00FAn). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="S\u00FDna skj\u00F6lun fyrir tungum\u00E1li\u00F0. ">Skj\u00F6lun</button></td><td><button id="runButton" class="primary" title="Keyra forriti\u00F0 sem \u00FE\u00FA skrifa\u00F0ir."><img src="common/1x1.gif" class="run icon21"> Keyra forriti\u00F0</button><button id="resetButton" class="primary" style="display: none" title="St\u00F6\u00F0va forriti\u00F0 og n\u00FAllstilla \u00E1fangann."><img src="common/1x1.gif" class="stop icon21"> Byrja aftur</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
