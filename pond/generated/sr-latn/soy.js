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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Pretraga neprijatelja. Odre\u0111ivanje smera \\n(0-360). Vra\u0107anje udaljenosti najbli\u017Ee mete \\nu tom smeru. Vra\u0107anje beskona\u010Dnosti ako \\nnijedna meta nije prona\u0111ena. </span><span id="Pond_cannonTooltip">Ispaljivanje iz topa. Odre\u0111ivanje smera (0-360) \\ni dometa (0-70). </span><span id="Pond_swimTooltip">Plivanje napred. Odre\u0111ivanje smera (0-360). </span><span id="Pond_stopTooltip">Prestanak plivanja. Igra\u010D \u0107e usporavati dok se \\nne zaustavi. </span><span id="Pond_healthTooltip">Vra\u0107a igra\u010Devo trenutno zdravlje (0 je mrtav, \\n100 je zdrav). </span><span id="Pond_speedTooltip">Vra\u0107a trenutnu brzinu igra\u010Da (0 je zaustavljen, \\n100 je maksimalna brzina). </span><span id="Pond_locXTooltip">Vra\u0107a X koordinatu igra\u010Da (0 je leva ivica, \\n100 je desna ivica). </span><span id="Pond_locYTooltip">Vra\u0107a Y koordinatu igra\u010Da (0 je donja ivica, \\n100 je gornja ivica). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Prikazuje jezik dokumentacije. ">Dokumentacija</button></td><td><button id="runButton" class="primary" title="Pokre\u0107e program koji si napisao."><img src="common/1x1.gif" class="run icon21"> Pokreni program</button><button id="resetButton" class="primary" style="display: none" title="Zaustavlja program i ponovo postavlja nivo."><img src="common/1x1.gif" class="stop icon21"> Ponovo postavi</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
