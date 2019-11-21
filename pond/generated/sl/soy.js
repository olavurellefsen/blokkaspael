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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Skeniraj za nasprotniki. Dolo\u010Di smer (0-360). \\nVrne razdaljo do najbli\u017Ejega nasprotnika v tej \\nsmeri. Vrne Neskon\u010Dno, \u010De ni nasprotnika. </span><span id="Pond_cannonTooltip">Streljaj s topom. Dolo\u010Di smer (0-360) in \\nrazdaljo (0-70). </span><span id="Pond_swimTooltip">Plavaj naprej. Dolo\u010Di smer (0-360). </span><span id="Pond_stopTooltip">Ustavi plavanje. Igralec se bo po\u010Dasi ustavil. </span><span id="Pond_healthTooltip">Vrne trenutno igral\u010Devo zdravje (0 je mrtev, \\n100 je zdrav). </span><span id="Pond_speedTooltip">Vrne trenutno igral\u010Devo hitrost (0 je ustavljen, \\n100 na polni hitrosti). </span><span id="Pond_locXTooltip">Vrne X koordinato igralca (0 je na levem robu, \\n100 je na desnem robu). </span><span id="Pond_locYTooltip">Vrne Y koordinato igralca (0 je na spodnjem \\nrobu, 100 je na zgornjem robu). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Prika\u017Ei dokumentacijo jezika.">Dokumentacija</button></td><td><button id="runButton" class="primary" title="Po\u017Eeni program, ki si ga napisal/-a."><img src="common/1x1.gif" class="run icon21"> Po\u017Eeni program</button><button id="resetButton" class="primary" style="display: none" title="Ustavi program in ponastavi stopnjo."><img src="common/1x1.gif" class="stop icon21"> Ponastavi</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
