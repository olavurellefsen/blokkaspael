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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">k</span><span id="Pond_cannonTooltip">Spara cun su cannoni. Specifica sa \\ndiretzioni(0-360) e sa ghetada(0-70). </span><span id="Pond_swimTooltip">Annada a innantis. Specifica sa diretzioni \\n(0-360). </span><span id="Pond_stopTooltip">Firma de annadai. Su giogadori at a andai a \\nbellu fintzas a si firmai. </span><span id="Pond_healthTooltip">Torrat sa saludi de su giogadori (0 est mortu, \\n100 est in saludi). </span><span id="Pond_speedTooltip">Torrat sa lestresa de su giogadori (0 est firmu, \\n100 est a totu fua). </span><span id="Pond_locXTooltip">Torrat sa cordinada X de su giogadori (0 est \\ns\'oru a manu manca, 100 est a dereta). </span><span id="Pond_locYTooltip">Torrat sa cordinada Y de su giogadori (0 est \\ns\'oru de b\u00E0sciu, 100 est su de susu). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Amosta sa documentatzioni de su lingu\u00E0giu.">Documentatzione</button></td><td><button id="runButton" class="primary" title="Arrollia su programa chi as scritu."><img src="common/1x1.gif" class="run icon21"> Arr\u00F2llia su Programa</button><button id="resetButton" class="primary" style="display: none" title="Firma su programa e anudda su livellu."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
