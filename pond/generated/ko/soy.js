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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\uC801\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uBC29\uD5A5 (0-360)\uC744 \uC785\uB825\uD558\uC138\uC694. \uADF8 \uBC29\uD5A5\uC5D0 \uC788\uB294 \uC81C\uC77C \uAC00\uAE4C\uC6B4 \uC801\uC758 \\n\uAC70\uB9AC\uB97C \uCD9C\uB825\uD558\uACE0 \uC801\uC774 \uC5C6\uC73C\uBA74 \uBB34\uD55C\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4. </span><span id="Pond_cannonTooltip">\uB300\uD3EC\uB97C \uC3E9\uB2C8\uB2E4. \uBC29\uD5A5 (0-360)\uACFC \uAC70\uB9AC (0-70)\uC744 \uC785\uB825\uD558\uC138\uC694. </span><span id="Pond_swimTooltip">\uC55E\uC73C\uB85C \uC218\uC601\uD569\uB2C8\uB2E4. \uBC29\uD5A5 (0-360)\uC744 \uC785\uB825\uD558\uC138\uC694.</span><span id="Pond_stopTooltip">\uD5E4\uC5C4\uCE58\uB294 \uAC83\uC744 \uBA48\uCDA5\uB2C8\uB2E4. \uD50C\uB808\uC774\uC5B4\uC758 \uC18D\uB3C4\uAC00 \uB290\uB824\uC9C0\uBA70 \uBA48\uCDA5\uB2C8\uB2E4. </span><span id="Pond_healthTooltip">\uD50C\uB808\uC774\uC5B4\uC758 \uD604\uC7AC \uCCB4\uB825\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4 (0\uC740 \uC8FD\uC74C, 100\uC740 \uAC74\uAC15).</span><span id="Pond_speedTooltip">\uD50C\uB808\uC774\uC5B4\uC758 \uD604\uC7AC \uC18D\uB3C4\uB97C \uCD9C\uB825\uD569\uB2C8\uB2E4 (0\uC740 \uBA48\uCDA4, 100\uC740 \uCD5C\uB300 \uC18D\uB3C4).</span><span id="Pond_locXTooltip">\uD50C\uB808\uC774\uC5B4\uC758 x \uC88C\uD45C\uB97C \uCD9C\uB825\uD569\uB2C8\uB2E4 (0\uC740 \uC67C\uCABD \uB05D, 100\uC740 \uC624\uB978\uCABD \uB05D).</span><span id="Pond_locYTooltip">\uD50C\uB808\uC774\uC5B4\uC758 y \uC88C\uD45C\uB97C \uCD9C\uB825\uD569\uB2C8\uB2E4 (0\uC740 \uC544\uB7AB\uCABD \uB05D, 100\uC740 \uC717\uCABD \uB05D).</span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\uC5B8\uC5B4\uC5D0 \uB300\uD55C \uC124\uBA85\uC11C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.">\uC99D\uAC70 \uC11C\uB958</button></td><td><button id="runButton" class="primary" title="\uB2F9\uC2E0\uC774 \uC791\uC131\uD55C \uD504\uB85C\uADF8\uB7A8\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4."><img src="common/1x1.gif" class="run icon21"> \uD504\uB85C\uADF8\uB7A8 \uC2E4\uD589</button><button id="resetButton" class="primary" style="display: none" title="\uD504\uB85C\uADF8\uB7A8\uC744 \uBA48\uCD94\uACE0 \uB808\uBCA8\uC744 \uCD08\uAE30\uD654\uD569\uB2C8\uB2E4."><img src="common/1x1.gif" class="stop icon21"> \uB2E4\uC2DC\uD558\uAE30</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
