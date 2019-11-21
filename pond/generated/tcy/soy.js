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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360).</span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop.</span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, 100 is healthy).</span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is stopped, 100 is full speed).</span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the left edge, 100 is the right edge).</span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the bottom edge, 100 is the top edge).</span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">\u0CA6\u0CBE\u0C95\u0CB2\u0CC0\u0C95\u0CB0\u0CA8\u0CCA</button></td><td><button id="runButton" class="primary" title="\u0C88\u0CB0\u0CCD \u0CAC\u0CB0\u0CC6\u0CAF\u0CBF\u0CA8 \u0CAF\u0CCB\u0C9C\u0CA8\u0CC6\u0CA8\u0CCD \u0CA8\u0CA1\u0CAA\u0CBE\u0CB2\u0CC6."><img src="common/1x1.gif" class="run icon21"> \u0CAF\u0CCB\u0C9C\u0CA8\u0CC6\u0CA8\u0CCD \u0CA8\u0CA1\u0CAA\u0CBE\u0CB2\u0CC6</button><button id="resetButton" class="primary" style="display: none" title="\u0CAF\u0CCB\u0C9C\u0CA8\u0CC6\u0CA8\u0CCD \u0C89\u0C82\u0CA4\u0CBE\u0CB2\u0CC6 \u0CAC\u0CCA\u0C95\u0CCD\u0C95 \u0CAE\u0C9F\u0CCD\u0C9F\u0CCA\u0C97\u0CC1 \u0CAA\u0CBF\u0CB0 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CB2\u0CC6."><img src="common/1x1.gif" class="stop icon21"> \u0CAA\u0CBF\u0CB0 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CB2\u0CC6</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
