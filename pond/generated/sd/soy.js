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
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">\u062F\u0633\u062A\u0627\u0648\u064A\u0632\u0633\u0627\u0632\u064A</button></td><td><button id="runButton" class="primary" title="\u067E\u0646\u06BE\u0646\u062C\u0648 \u0644\u06A9\u064A\u0644 \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u06BE\u0644\u0627\u064A\u0648."><img src="common/1x1.gif" class="run icon21"> \u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u0647\u0644\u0627\u064A\u0648</button><button id="resetButton" class="primary" style="display: none" title="\u067E\u0631\u0648\u06AF\u0631\u0627\u0645 \u06A9\u064A \u0628\u064A\u06BE\u0627\u0631\u064A \u0645\u0631\u062D\u0644\u064A \u06A9\u064A \u067B\u064A\u0647\u0631 \u062A\u0631\u062A\u064A\u0628 \u068F\u064A\u0648."><img src="common/1x1.gif" class="stop icon21"> \u067B\u064A\u0647\u0631 \u062A\u0631\u062A\u064A\u0628 \u068F\u064A\u0648</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
