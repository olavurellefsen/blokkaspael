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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">D\u00FC\u015Fmanlar\u0131n\u0131 g\u00F6r\u00FCnt\u00FCle. Bir y\u00F6n(0-360) belirt. \\nBu y\u00F6ndeki en yak\u0131n d\u00FC\u015Fmana uzakl\u0131\u011F\u0131 d\u00F6nd\u00FCr. \\nE\u011Fer d\u00FC\u015Fman yok ise sonsuzluk i\u015Fareti d\u00F6nd\u00FCr\u00FCr. </span><span id="Pond_cannonTooltip">Topu ate\u015Fle. Bir y\u00F6n (0-360) ve bir aral\u0131k(0-70) \\nbelirt. </span><span id="Pond_swimTooltip">\u0130leri y\u00FCz. Bir y\u00F6n (0-360) belirt. </span><span id="Pond_stopTooltip">Y\u00FCzmeyi durdur. Oyuncu durmak i\u00E7in yava\u015Flayacak. </span><span id="Pond_healthTooltip">Oyuncunun mevcut sa\u011Fl\u0131\u011F\u0131n\u0131(0 \u00F6lm\u00FC\u015F, \\n100 sa\u011Fl\u0131kl\u0131) d\u00F6nd\u00FCr\u00FCr. </span><span id="Pond_speedTooltip">Oyuncunun mevcut s\u00FCratini(0 durmu\u015F, \\n100 tam s\u00FCrat) d\u00F6nd\u00FCr\u00FCr. </span><span id="Pond_locXTooltip">Oyuncunun X koordinat\u0131n\u0131(0 sol kenard\u0131r, \\n100 sa\u011F kenard\u0131r) d\u00F6nd\u00FCr\u00FCr. </span><span id="Pond_locYTooltip">Oyuncunun Y koordinat\u0131n\u0131(0 alt kenard\u0131r, \\n100 \u00FCst kenard\u0131r) d\u00F6nd\u00FCr\u00FCr. </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Dil belgesini g\u00F6ster.">Belgeleme</button></td><td><button id="runButton" class="primary" title="Yazd\u0131\u011F\u0131n program\u0131 \u00E7al\u0131\u015Ft\u0131r."><img src="common/1x1.gif" class="run icon21"> Program\u0131 \u00C7al\u0131\u015Ft\u0131r</button><button id="resetButton" class="primary" style="display: none" title="Program\u0131 durdur ve seviyeyi s\u0131f\u0131rla."><img src="common/1x1.gif" class="stop icon21"> Tekrar</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
