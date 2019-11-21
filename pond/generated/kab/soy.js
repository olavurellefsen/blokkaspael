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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Nadi icenga. Mudd tanila (0-360). \\nAd d-yerr ameccaq n ucengu iqerben \\ndi tnila. Ad d-yerr ife\u1E0D ma ulac \\nula d yiwen n ucengu. </span><span id="Pond_cannonTooltip">Wwet s umrud. Mudd tanila (0-360) akked talast \\ntafellayt n umeccaq (0-70). </span><span id="Pond_swimTooltip">Rdeb. Mudd tanila (0-360).</span><span id="Pond_stopTooltip">Se\u1E25es ardab. Amyurar ad isen\u0263e\u1E63 arured akken ad \\nye\u1E25bes. </span><span id="Pond_healthTooltip">Ad d-yerr tazmert tamirant n umyurar (0 yemmut, \\n100 ye\u01E7\u01E7hedd a\u1E6Das). </span><span id="Pond_speedTooltip">Ad d-yerr arured amiran n umyurar (0 ye\u1E25bes, \\n100 yettazzal a\u1E6Das). </span><span id="Pond_locXTooltip">Ad d-yerr amsideg X n umyurar (0 d rrif azelma\u1E0D, \\n100 d rrif ayeffus). </span><span id="Pond_locYTooltip">Ad d-yerr amsideg y n umyurar (0 d rrif n \\nukesser, 100 d rrif n usawen). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Ad d-yesken tasemlit \u0263ef tutlayt.">Tasemlit</button></td><td><button id="runButton" class="primary" title="Selkem ahil i turi\u1E0D."><img src="common/1x1.gif" class="run icon21"> Selkem ahil</button><button id="resetButton" class="primary" style="display: none" title="Se\u1E25bes ahil sakin ales awennez n uswir."><img src="common/1x1.gif" class="stop icon21"> Ales awennez</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
