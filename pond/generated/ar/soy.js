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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\u0645\u0633\u062D \u0644\u0644\u0623\u0639\u062F\u0627\u0621. \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0627\u062A\u062C\u0627\u0647 (0-360). \\n\u064A\u0639\u064A\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0625\u0644\u0649 \u0623\u0642\u0631\u0628 \u0627\u0644\u0639\u062F\u0648 \u0641\u064A \u0647\u0630\u0627 \\n\u0627\u0644\u0627\u062A\u062C\u0627\u0647. \u064A\u0639\u0648\u062F \u0625\u0644\u0649 \u0645\u0627 \u0644\u0627 \u0646\u0647\u0627\u064A\u0629 \u0625\u0630\u0627 \u0644\u0645 \\n\u064A\u062C\u062F \u0623\u064A \u0639\u062F\u0648. </span><span id="Pond_cannonTooltip">\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0645\u062F\u0641\u0639. \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0627\u062A\u062C\u0627\u0647 (0-360) \u0648\u0645\u062C\u0645\u0648\u0639\u0629 \\n(0-70). </span><span id="Pond_swimTooltip">\u0627\u0644\u0633\u0628\u0627\u062D\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0645\u0627\u0645. \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0627\u062A\u062C\u0627\u0647 (0-360). </span><span id="Pond_stopTooltip">\u0623\u0648\u0642\u0641 \u0627\u0644\u0633\u0628\u0627\u062D\u0629. \u0627\u0644\u0644\u0627\u0639\u0628 \u064A\u062A\u0628\u0627\u0637\u0623 \u062D\u062A\u0649 \u064A\u062A\u0648\u0642\u0641. </span><span id="Pond_healthTooltip">\u064A\u0639\u064A\u062F \u0627\u0644\u0635\u062D\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0627\u0644\u0644\u0627\u0639\u0628 (0 \u0645\u064A\u062A\u060C 100 \u063A\u064A\u0631 \u0635\u062D\u064A).</span><span id="Pond_speedTooltip">\u064A\u0631\u062C\u0639 \u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0644\u0644\u0627\u0639\u0628 (0 \u062A\u0648\u0642\u0641\u060C 100 \u0633\u0631\u0639\u0629 \u0643\u0627\u0645\u0644\u0629).</span><span id="Pond_locXTooltip">\u064A\u0631\u062C\u0639 \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0644\u0627\u0639\u0628 X (0 \u0627\u0644\u062D\u0627\u0641\u0629 \u0627\u0644\u064A\u0633\u0631\u0649\u060C \u0648 100 \\n\u0627\u0644\u062D\u0627\u0641\u0629 \u0627\u0644\u064A\u0645\u0646\u0649). </span><span id="Pond_locYTooltip">\u064A\u0631\u062C\u0639 \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0644\u0627\u0639\u0628 Y (0 \u0627\u0644\u062D\u0627\u0641\u0629 \u0627\u0644\u0633\u0641\u0644\u064A\u0629\u060C \u0648 100 \\n\u0627\u0644\u062D\u0627\u0641\u0629 \u0627\u0644\u0639\u0644\u0648\u064A\u0629). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u0639\u0631\u0636 \u0648\u062B\u0627\u0626\u0642 \u0627\u0644\u0644\u063A\u0629.">\u062A\u0648\u062B\u064A\u0642</button></td><td><button id="runButton" class="primary" title="\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u0643\u062A\u0628\u062A\u0647."><img src="common/1x1.gif" class="run icon21"> \u0634\u063A\u0650\u0651\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C</button><button id="resetButton" class="primary" style="display: none" title="\u0623\u0648\u0642\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0648\u0623\u0639\u062F \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0648\u0649."><img src="common/1x1.gif" class="stop icon21"> \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
