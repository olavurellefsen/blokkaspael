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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\u03A3\u03AC\u03C1\u03C9\u03C3\u03B7 \u03B3\u03B9\u03B1 \u03B5\u03B9\u03C3\u03B2\u03BF\u03BB\u03B5\u03AF\u03C2. \u039F\u03C1\u03AF\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 \\n\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7(0-360). \u0391\u03C5\u03C4\u03CC \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \\n\u03C4\u03B7\u03BD \u03B1\u03C0\u03CC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF\u03BD \u03C0\u03BB\u03B7\u03C3\u03B9\u03AD\u03C3\u03C4\u03B5\u03C1\u03BF \u03B5\u03C7\u03B8\u03C1\u03CC \\n\u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7. \u0394\u03B5\u03BD \u03B5\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \\n\u03C4\u03AF\u03C0\u03BF\u03C4\u03B1 \u03B1\u03BD \u03B4\u03B5\u03BD \u03B5\u03BD\u03C4\u03BF\u03C0\u03B9\u03C3\u03C4\u03B5\u03AF \u03B5\u03C7\u03B8\u03C1\u03CC\u03C2. </span><span id="Pond_cannonTooltip">\u03A0\u03C5\u03C1\u03BF\u03B2\u03BF\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF \u03BA\u03B1\u03BD\u03CC\u03BD\u03B9. \u039A\u03B1\u03B8\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 \\n\u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 (0-360) \u03BA\u03B1\u03B9 \u03BC\u03B9\u03B1 \u03B1\u03C0\u03CC\u03C3\u03C4\u03B1\u03C3\u03B7 \\n(0-70). </span><span id="Pond_swimTooltip">\u039A\u03BF\u03BB\u03C5\u03BC\u03C0\u03AE\u03C3\u03C4\u03B5 \u03C0\u03C1\u03BF\u03C2 \u03C4\u03B1 \u03B5\u03BC\u03C0\u03C1\u03CC\u03C2. \u039A\u03B1\u03B8\u03BF\u03C1\u03AF\u03C3\u03C4\u03B5 \u03BC\u03B9\u03B1 \\n\u03BA\u03B1\u03C4\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 (0-360). </span><span id="Pond_stopTooltip">\u03A3\u03C4\u03B1\u03BC\u03AC\u03C4\u03B7\u03BC\u03B1 \u03BA\u03BF\u03BB\u03CD\u03BC\u03B2\u03B7\u03C3\u03B7\u03C2. \u039F \u03C0\u03B1\u03AF\u03BA\u03C4\u03B7\u03C2 \u03B8\u03B1 \u03B5\u03C0\u03B9\u03B2\u03C1\u03B1\u03B4\u03CD\u03BD\u03B5\u03B9 \\n\u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C4\u03B1\u03BC\u03B1\u03C4\u03AE\u03C3\u03B5\u03B9. </span><span id="Pond_healthTooltip">\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03C4\u03B7\u03BD \u03C4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B1 \u03C5\u03B3\u03B5\u03AF\u03B1 \u03C4\u03BF\u03C5 \u03C0\u03B1\u03AF\u03BA\u03C4\u03B7 (0 \\n\u03B5\u03AF\u03BD\u03B1\u03B9 \u03BD\u03B5\u03BA\u03C1\u03CC\u03C2, 100 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C5\u03B3\u03B9\u03AE\u03C2). </span><span id="Pond_speedTooltip">\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03C4\u03B7\u03BD \u03C4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B1 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2 \u03C4\u03BF\u03C5 \\n\u03C0\u03B1\u03AF\u03BA\u03C4\u03B7 (0 \u03C3\u03C4\u03B1\u03BC\u03B1\u03C4\u03B7\u03BC\u03AD\u03BD\u03BF\u03C2, 100 \u03BC\u03B5 \u03C0\u03BB\u03AE\u03C1\u03B7 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1). </span><span id="Pond_locXTooltip">\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03B7 \u03C3\u03C5\u03BD\u03C4\u03B5\u03C4\u03B1\u03B3\u03BC\u03AD\u03BD\u03B7 X \u03C4\u03BF\u03C5 \u03C0\u03B1\u03AF\u03BA\u03C4\u03B7 (\u03C4\u03BF 0 \\n\u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF \u03B1\u03C1\u03B9\u03C3\u03C4\u03B5\u03C1\u03CC \u03AC\u03BA\u03C1\u03BF, 100 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C4\u03BF \u03B4\u03B5\u03BE\u03AF \u03AC\u03BA\u03C1\u03BF). </span><span id="Pond_locYTooltip">\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03AD\u03C6\u03B5\u03B9 \u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03AC\u03BC\u03B5\u03C4\u03C1\u03BF \u03A5 \u03C4\u03BF\u03C5 \u03C0\u03B1\u03AF\u03BA\u03C4\u03B7 (0 \u03C3\u03C4\u03B7\u03BD \\n\u03BA\u03AC\u03C4\u03C9 \u03AC\u03BA\u03C1\u03B7, 100 \u03C3\u03C4\u03B7\u03BD \u03B5\u03C0\u03AC\u03BD\u03C9 \u03AC\u03BA\u03C1\u03B7). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u03A0\u03C1\u03BF\u03B2\u03AC\u03BB\u03B5\u03C4\u03B5 \u03C4\u03B1 \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03B1 \u03C4\u03B7\u03C2 \u03B3\u03BB\u03CE\u03C3\u03C3\u03B1\u03C2 \u03C0\u03BF\u03C5 \u03AD\u03C7\u03B5\u03C4\u03B5 \\n\u03B5\u03C0\u03B9\u03BB\u03AD\u03BE\u03B5\u03B9. ">\u03A4\u03B5\u03BA\u03BC\u03B7\u03C1\u03AF\u03C9\u03C3\u03B7</button></td><td><button id="runButton" class="primary" title="\u0395\u03BA\u03C4\u03B5\u03BB\u03AD\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03B3\u03C1\u03AC\u03C8\u03B1\u03C4\u03B5."><img src="common/1x1.gif" class="run icon21"> \u0395\u03BA\u03C4\u03AD\u03BB\u03B5\u03C3\u03B7 \u03A0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2</button><button id="resetButton" class="primary" style="display: none" title="\u0394\u03B9\u03B1\u03BA\u03BF\u03C0\u03AE \u03C4\u03BF\u03C5 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03C4\u03BF\u03C5 \\n\u03B5\u03C0\u03B9\u03C0\u03AD\u03B4\u03BF\u03C5. "><img src="common/1x1.gif" class="stop icon21"> \u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}