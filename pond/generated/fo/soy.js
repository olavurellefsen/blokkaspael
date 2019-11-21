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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Skanna eftir f\u00EDggindum. \u00C1set eina k\u00F3s (0-360). \\nGevur fr\u00E1st\u00F8\u00F0una til n\u00E6rmasta f\u00EDggindan \u00ED \u00E1settu \\nk\u00F3sini. Gevur \u00F3endaligt, um eingin f\u00EDggindi ver\u00F0ur \\nfunnin. </span><span id="Pond_cannonTooltip">Skj\u00F3t vi\u00F0 kan\u00F3nini. \u00C1set eina k\u00F3s (0-360) og \\neina fr\u00E1st\u00F8\u00F0u (0-70). </span><span id="Pond_swimTooltip">Svim frameftir. \u00C1set eina k\u00F3s (0-360). </span><span id="Pond_stopTooltip">Gevst at svimja. Sp\u00E6larin minkar um fer\u00F0ina til \\nhann ste\u00F0gar. </span><span id="Pond_healthTooltip">Gevur n\u00FAverandi heilsuna hj\u00E1 sp\u00E6laranum (0 er \\ndey\u00F0ur, 100 er fr\u00EDskur). </span><span id="Pond_speedTooltip">Gevur n\u00FAverandi fer\u00F0ina hj\u00E1 sp\u00E6laranum (0 er \\nste\u00F0ga\u00F0ur, 100 er full fer\u00F0). </span><span id="Pond_locXTooltip">Gevur X krosstali\u00F0 hj\u00E1 sp\u00E6laranum (0 er vinstri \\nkantur, 100 er h\u00F8gri kantur). </span><span id="Pond_locYTooltip">Gevur Y krosstali\u00F0 hj\u00E1 sp\u00E6laranum (0 er ni\u00F0ari \\nkantur, 100 er ovari kantur). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="V\u00EDs m\u00E1l skjalfestingina.">Skjalfesting</button></td><td><button id="runButton" class="primary" title="Koyr forriti\u00F0, sum t\u00FA skriva\u00F0i."><img src="common/1x1.gif" class="run icon21"> Koyr forriti\u00F0</button><button id="resetButton" class="primary" style="display: none" title="Ste\u00F0ga forritinum og nullstilla stigi\u00F0."><img src="common/1x1.gif" class="stop icon21"> Nullstilla</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
