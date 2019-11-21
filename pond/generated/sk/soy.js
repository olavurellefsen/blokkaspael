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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">H\u013Ead\u00E1 nepriate\u013Ea. Zadaj smer (0-360). \\nVr\u00E1ti vzdialenos\u0165 od najbli\u017E\u0161ieho \\nnepriate\u013Ea v danom smere. Vr\u00E1ti Nekone\u010Dno \\nak v danom smere nie je \u017Eiadny nepriate\u013E. </span><span id="Pond_cannonTooltip">Vyp\u00E1li z dela. Zadaj smer (0-360) a silu (0-70). </span><span id="Pond_swimTooltip">Pl\u00E1va vpred. Zadaj smer (0-360). </span><span id="Pond_stopTooltip">Skon\u010D\u00ED pl\u00E1vanie. Hr\u00E1\u010D sa pomaly zastav\u00ED. </span><span id="Pond_healthTooltip">Vr\u00E1ti moment\u00E1lne zdravie hr\u00E1\u010Da (0 je m\u0155tvy, \\n100 zdrav\u00FD). </span><span id="Pond_speedTooltip">Vr\u00E1ti moment\u00E1lnu r\u00FDchlos\u0165 hr\u00E1\u010Da (0 stojaci, \\n100 pln\u00E1 r\u00FDchlos\u0165). </span><span id="Pond_locXTooltip">Vr\u00E1ti vodorovn\u00FA (x) s\u00FAradnicu hr\u00E1\u010Da (0 \u013Eav\u00FD \\nokraj, 100 prav\u00FD okraj). </span><span id="Pond_locYTooltip">Vr\u00E1ti zvisl\u00FA (y) s\u00FAradnicu hr\u00E1\u010Da (0 doln\u00FD okraj, \\n100 horn\u00FD okraj). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Zobraz\u00ED dokument\u00E1ciu programovacieho jazyka.">Dokument\u00E1cia</button></td><td><button id="runButton" class="primary" title="Spusti\u0165 nap\u00EDsan\u00FD program."><img src="common/1x1.gif" class="run icon21"> Spusti\u0165</button><button id="resetButton" class="primary" style="display: none" title="Zastavi\u0165 program a vr\u00E1ti\u0165 \u00FArove\u0148 do p\u00F4vodn\u00E9ho \\nstavu. "><img src="common/1x1.gif" class="stop icon21"> Odznova</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
