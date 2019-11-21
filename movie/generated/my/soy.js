// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Movie.soy.
 */

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">x \u1016\u103C\u1004\u1037\u103A\u1005\u1015\u102B\u104B</span><span id="Movie_y1">y \u1016\u103C\u1004\u1037\u103A\u1005\u1015\u102B\u104B</span><span id="Movie_x2">x \u1016\u103C\u1004\u1037\u103A\u1006\u102F\u1036\u1038\u1015\u102B\u104B</span><span id="Movie_y2">y \u1016\u103C\u1004\u1037\u103A\u1006\u102F\u1036\u1038\u1015\u102B\u104B</span><span id="Movie_radius">\u1021\u1001\u103B\u1004\u103A\u1038\u101D\u1000\u103A</span><span id="Movie_width">\u1021\u101C\u103B\u102C\u1038</span><span id="Movie_height">\u1021\u1019\u103C\u1004\u1037\u103A</span><span id="Movie_circleTooltip">\u1021\u1011\u1030\u1038\u1010\u100A\u103A\u1014\u1031\u101B\u102C\u1010\u1005\u103A\u1001\u102F\u1019\u103E \u1021\u1011\u1030\u1038\u1021\u1001\u103B\u1004\u103A\u1038\u101D\u1000\u103A\u1016\u103C\u1004\u1037\u103A \\n\u1005\u1000\u103A\u101D\u102D\u102F\u1004\u103A\u1038\u1015\u102F\u1036\u1010\u1005\u103A\u1015\u102F\u1036\u1006\u103D\u1032\u1015\u102B\u104B </span><span id="Movie_circleDraw">\u1005\u1000\u103A\u101D\u102D\u102F\u1004\u103A\u1038</span><span id="Movie_rectTooltip">\u1021\u1011\u1030\u1038\u1010\u100A\u103A\u1014\u1031\u101B\u102C\u1010\u1005\u103A\u1001\u102F\u1019\u103E \u1021\u1011\u1030\u1038\u1021\u101C\u103B\u102C\u1038\u1014\u103E\u1004\u1037\u103A\u1021\u1019\u103C\u1004\u1037\u103A\u1016\u103C\u1004\u1037\u103A \\n\u1005\u1010\u102F\u101B\u1014\u103A\u1038\u1010\u1005\u103A\u1001\u102F\u1006\u103D\u1032\u1015\u102B\u104B </span><span id="Movie_rectDraw">\u1005\u1010\u102F\u101B\u1014\u103A\u1038</span><span id="Movie_lineTooltip">\u1021\u1019\u103E\u1010\u103A\u1010\u1005\u103A\u1001\u102F\u1019\u103E\u1010\u1005\u103A\u1001\u102F\u101E\u102D\u102F\u1037\u1021\u1011\u1030\u1038\u1021\u101C\u103B\u102C\u1038\u1016\u103C\u1004\u1037\u103A \\n\u1019\u103B\u1009\u103A\u1038\u1010\u1005\u103A\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1006\u103D\u1032\u1015\u102B\u104B </span><span id="Movie_lineDraw">\u1019\u103B\u1009\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038</span><span id="Movie_timeTooltip">\u101C\u103E\u102F\u1015\u103A\u101B\u103E\u102C\u1038\u1019\u103E\u102F\u101B\u102F\u1015\u103A\u1015\u102F\u1036\u1019\u103B\u102C\u1038\u1011\u1032\u1019\u103E \\n\u101C\u1000\u103A\u101B\u103E\u102D\u1021\u1001\u103B\u102D\u1014\u103A\u1000\u102D\u102F\u1015\u103C\u1014\u103A\u101E\u103D\u102C\u1038\u1015\u102B\u104B (\u1040 \\n- \u1041\u1040\u1040) </span><span id="Movie_colourTooltip">Pen \u104F \u1021\u101B\u1031\u102C\u1004\u103A\u1000\u102D\u102F \u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u1032\u1019\u103E\u102F\u1019\u103B\u102C\u1038.</span><span id="Movie_setColour">\u1021\u101B\u1031\u102C\u1004\u103A\u1000\u102D\u102F\u1011\u102C\u1038\u1019\u100A\u103A\u104B</span><span id="Movie_submitDisabled">\u101E\u1004\u103A\u104F\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u101C\u103E\u102F\u1015\u103A\u101B\u103E\u102C\u1038\u1019\u103E\u102F\u1019\u101B\u103E\u102D\u1015\u102B\u104A Block \u1019\u103B\u102C\u1038\u1000\u102D\u102F\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u103C\u102E\u1038 \u1005\u102D\u1010\u103A\u101D\u1004\u103A\u1005\u102C\u1038\u1005\u101B\u102C\u1010\u1005\u103A\u1001\u102F\u1001\u102F\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1015\u102B\u104A \u1011\u102D\u102F\u1037\u1014\u1031\u102C\u1000\u103A \u101E\u1004\u103A\u104F \u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1000\u102D\u102F \u1015\u103C\u1001\u1014\u103A\u1038\u1015\u1031\u102B\u103A\u1010\u103D\u1004\u103A\u1010\u1004\u103A\u1014\u102D\u102F\u1004\u103A\u1015\u102B\u1015\u103C\u102E\u104B</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1015\u103C\u1001\u1014\u103A\u1038\u1000\u102D\u102F \u1016\u103D\u1004\u1037\u103A\u1015\u102B\u104B"><img src="common/1x1.gif" class="gallery icon21"> \u1015\u103C\u1001\u1014\u103A\u1038\u1010\u103D\u1004\u103A\u1000\u103C\u100A\u1037\u103A\u1015\u102B\u104B</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u1015\u103C\u1001\u1014\u103A\u1038\u101E\u102D\u102F\u1037 \u101E\u1004\u103A\u104F\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1000\u102D\u102F\u1010\u1004\u103A\u1015\u102B\u104B."><img src="common/1x1.gif" class="camera icon21"> \u1015\u103C\u1001\u1014\u103A\u1038\u1015\u1031\u102B\u103A\u1010\u1004\u103A\u1019\u100A\u103A\u104B</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u1015\u103C\u1001\u1014\u103A\u1038\u101E\u102D\u102F\u1037 \u101E\u1004\u103A\u104F\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1000\u102D\u102F\u1010\u1004\u103A\u1015\u102B\u104B.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u1001\u1031\u102B\u1004\u103A\u1038\u1005\u1009\u103A: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u1016\u103B\u1000\u103A\u1019\u100A\u103A\u104B</button><button id="galleryOk" class="secondary" type="submit">\u1021\u102D\u102F\u1000\u1031</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u1024\u101C\u1030\u104F\u1015\u102F\u1036\u1000\u102D\u102F\u1006\u103D\u1032\u101B\u1014\u103A \u101B\u102D\u102F\u1038\u101B\u103E\u1004\u103A\u1038\u101E\u1031\u102C\u101B\u102F\u1015\u103A\u1015\u102F\u1036\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u102B\u104B' : (opt_ijData.level == 2) ? '\u1024\u1021\u1006\u1004\u1037\u103A\u101E\u100A\u103A \u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1010\u1005\u103A\u1001\u102F\u1016\u103C\u1005\u103A\u101E\u100A\u103A\u104B \u101E\u1004\u103A\u101E\u100A\u103A \u101C\u1030\u1015\u102F\u1002\u1039\u1002\u102D\u102F\u101C\u103A\u104F\u101C\u1000\u103A\u1019\u1031\u102C\u1004\u103A\u1038\u1000\u102D\u102F \u1019\u103B\u1000\u103A\u1014\u103E\u102C\u1015\u103C\u1004\u103A\u1015\u1031\u102B\u103A\u1010\u103D\u1004\u103A \u101C\u103E\u102D\u1019\u1037\u103A\u1014\u1031\u1005\u1031\u1001\u103B\u1004\u103A\u101E\u100A\u103A\u104B Play \u1001\u101C\u102F\u1010\u103A\u1000\u102D\u102F\u1014\u103E\u102D\u1015\u103A\u104D \u1021\u1005\u1019\u103A\u1038\u1000\u103C\u100A\u1037\u103A\u101B\u103E\u102F\u1015\u102B\u104B<div id="sampleHelp2" class="readonly"></div>\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1015\u103C\u101E\u100A\u1037\u103A\u1021\u1001\u103B\u102D\u1014\u103A\u1010\u103D\u1004\u103A \u1021\u1001\u103B\u102D\u1014\u103A\u104F \u1010\u1014\u103A\u1016\u102D\u102F\u1038\u101E\u100A\u103A \u1040 \u1019\u103E \u1041\u1040\u1040 \u1011\u102D\u101B\u1031\u1010\u103D\u1000\u103A\u101E\u100A\u103A\u104B \u101E\u1004\u1037\u103A\u1021\u1014\u1031\u1016\u103C\u1004\u1037\u103A\u101C\u1000\u103A\u1019\u1031\u102C\u1004\u103A\u1038\u1000\u102D\u102F \'y\' \u1021\u1014\u1031\u1021\u1011\u102C\u1038\u1010\u103D\u1004\u103A\u1011\u102C\u1038\u101B\u103E\u102D\u1015\u103C\u102E\u1038 \u1040 \u1019\u103E \u1041\u1040\u1040 \u1011\u102D\u101E\u103D\u102C\u1038\u1005\u1031\u1001\u103B\u1004\u103A\u101E\u100A\u1037\u103A\u1021\u1010\u103D\u1000\u103A \u101C\u103D\u101A\u103A\u1000\u1030\u1005\u103D\u102C\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1014\u102D\u102F\u1004\u103A\u1015\u102B\u101C\u102D\u1019\u1037\u103A\u1019\u100A\u103A\u104B' : (opt_ijData.level == 3) ? '\u1021\u1001\u103B\u102D\u1014\u103A block \u101E\u100A\u103A \u1040 \u1019\u103E \u1041\u1040\u1040 \u1011\u102D\u101B\u1031\u1010\u103D\u1000\u103A\u101E\u100A\u103A\u104B \u101E\u102D\u102F\u1037\u101E\u1031\u102C\u103A \u1024\u1021\u1001\u103B\u102D\u1014\u103A\u1010\u103D\u1004\u103A \u101E\u1004\u103A\u101E\u100A\u103A \'y\' \u1021\u1014\u1031\u1021\u1011\u102C\u1038\u1010\u103D\u1004\u103A\u101B\u103E\u102D\u1014\u1031\u101E\u1031\u102C \u101C\u1000\u103A\u1019\u1031\u102C\u1004\u103A\u1038\u1000\u102D\u102F \u1041\u1040\u1040 \u1019\u103E \u1040 \u101E\u102D\u102F\u1037\u101E\u103D\u102C\u1038\u1005\u1031\u1001\u103B\u1004\u103A\u101E\u100A\u103A\u104B \u1026\u1038\u1010\u100A\u103A\u101B\u102C\u1000\u102D\u102F \u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u1032\u1015\u1031\u1038\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C \u101B\u102D\u102F\u1038\u101B\u103E\u1004\u103A\u1038\u101E\u100A\u1037\u103A \u101E\u1004\u103A\u1039\u1001\u103B\u102C\u1016\u103C\u1031\u101B\u103E\u1004\u103A\u1038\u1014\u100A\u103A\u1038 \u101E\u1004\u103A\u1005\u1009\u103A\u1038\u1005\u102C\u1038\u1014\u102D\u102F\u1004\u103A\u1015\u102B\u101E\u101C\u102C\u1038\u104B' : (opt_ijData.level == 4) ? '\u1015\u103C\u102E\u1038\u1001\u1032\u1037\u101E\u100A\u1037\u103A \u1021\u1006\u1004\u1037\u103A\u1010\u103D\u1004\u103A \u101E\u1004\u103A\u101E\u1004\u103A\u101A\u1030\u1001\u1032\u1037\u101E\u100A\u1037\u103A\u1021\u101B\u102C\u1000\u102D\u102F \u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u103C\u102E\u1038 \u1001\u103C\u1031\u1011\u1031\u102C\u1000\u103A\u1019\u103B\u102C\u1038 \u1000\u103C\u1000\u103A\u1001\u103C\u1031\u1001\u1010\u103A\u1016\u103C\u1005\u103A\u1021\u1031\u102C\u1004\u103A \u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1015\u102B\u104B' : (opt_ijData.level == 5) ? '\u101C\u1000\u103A\u1019\u1031\u102C\u1004\u103A\u1038\u1021\u1010\u103D\u1000\u103A \u101E\u1004\u103A\u1039\u1001\u103B\u102C\u1015\u102F\u1036\u101E\u1031\u1014\u100A\u103A\u1038\u1019\u103E\u102C \u101B\u103E\u102F\u1015\u103A\u1011\u103D\u1031\u1038\u1015\u102B\u101E\u100A\u103A\u104B \u1021\u1016\u103C\u1031\u1000\n\u1012\u102E\u1019\u103E\u102C\u1015\u102B:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u101C\u1030\u1015\u102F\u1002\u1039\u1002\u102D\u102F\u101C\u103A\u1021\u102C\u1038 \u101C\u1000\u103A\u1014\u103E\u1005\u103A\u1001\u103B\u1031\u102C\u1004\u103A\u1038 \u1015\u1031\u1038\u101C\u102D\u102F\u1000\u103A\u1015\u102B\u104B' : (opt_ijData.level == 7) ? '\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u104F \u1015\u1011\u1019\u1011\u1000\u103A\u101D\u1000\u103A\u1021\u1010\u103D\u1000\u103A \u1001\u1031\u102B\u1004\u103A\u1038\u101E\u1031\u1038\u1010\u1005\u103A\u1001\u102F\u1006\u103D\u1032\u101B\u1014\u103A \'\u1021\u1000\u101A\u103A\u104D\' block \u1000\u102D\u102F\u101E\u102F\u1036\u1038\u1015\u102B\u104B \u1015\u103C\u102E\u1038\u1015\u102B\u1000 \u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u104F \u1012\u102F\u1010\u102D\u101A\u1011\u1000\u103A\u101D\u1000\u103A\u1021\u1010\u103D\u1000\u103A \u1001\u1031\u102B\u1004\u103A\u1038\u1000\u103C\u102E\u1038\u1010\u1005\u103A\u1001\u102F\u1000\u102D\u102F \u1006\u103D\u1032\u101C\u102D\u102F\u1000\u103A\u1015\u102B\u104B' : (opt_ijData.level == 8) ? '\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1011\u1000\u103A\u101D\u1000\u103A\u1001\u1014\u1037\u103A\u1010\u103D\u1004\u103A \u1001\u103C\u1031\u1011\u1031\u102C\u1000\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1026\u1038\u1010\u100A\u103A\u101B\u102C\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1015\u103C\u1014\u103A \u101C\u102F\u1015\u103A\u101C\u102D\u102F\u1000\u103A\u1015\u102B\u104B' : (opt_ijData.level == 9) ? '\u101C\u1030\u1015\u102F\u1002\u1039\u1002\u102D\u102F\u101C\u103A\u1014\u1031\u102C\u1000\u103A\u1000\u103B\u1031\u102C\u1010\u103D\u1004\u103A \u1000\u103B\u101A\u103A\u1000\u102C\u1038\u101C\u102C\u101E\u100A\u1037\u103A\u1005\u1000\u103A\u101D\u102D\u102F\u1004\u103A\u1038\u1010\u1005\u103A\u1001\u102F\u1000\u102D\u102F \u1006\u103D\u1032\u101C\u102D\u102F\u1000\u103A\u1015\u102B\u104B' : (opt_ijData.level == 10) ? '\u101E\u1004\u1037\u103A\u1005\u102D\u1010\u103A\u1000\u103C\u102D\u102F\u1000\u103A\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1010\u1005\u103A\u1001\u102F\u1016\u1014\u103A\u1010\u102E\u1038\u1015\u102B\u104B \u101E\u1004\u1037\u103A\u1011\u1036\u1010\u103D\u1004\u103A \u1005\u102D\u1010\u103A\u1000\u103C\u102D\u102F\u1000\u103A\u101C\u1031\u1037\u101C\u102C\u1005\u1030\u1038\u1005\u1019\u103A\u1038\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C block \u1021\u101E\u1005\u103A\u1015\u1031\u102B\u1004\u103A\u1038\u1019\u103B\u102C\u1038\u1005\u103D\u102C\u101B\u101B\u103E\u102D\u1011\u102C\u1038\u1015\u102B\u1015\u103C\u102E\u104B \u1015\u103B\u1031\u102C\u103A\u101B\u103D\u103E\u1004\u103A\u1015\u102B\u1005\u1031\u104B' + ((! opt_ijData.html) ? '<br><br>\u1021\u1031\u102C\u1000\u103A\u1001\u103C\u1031\u1010\u103D\u1004\u103A \u1021\u1001\u103C\u102C\u1038\u101E\u1030\u1019\u103B\u102C\u1038 \u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1011\u102C\u1038\u101E\u100A\u1037\u103A \u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F\u1000\u103C\u100A\u1037\u103A\u101B\u1014\u103A "\u1015\u103C\u1001\u1014\u103A\u1038\u1011\u1032\u1010\u103D\u1004\u103A\u1000\u103C\u100A\u1037\u103A\u1015\u102B" \u1000\u102D\u102F\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u102B\u104B \u1021\u1000\u101A\u103A\u104D \u101E\u1004\u103A\u101E\u100A\u103A \u1005\u102D\u1010\u103A\u101D\u1004\u103A\u1005\u102C\u1038\u1005\u101B\u102C \u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A\u1010\u1005\u103A\u1001\u102F\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1011\u102C\u1038\u1015\u102B\u1000 "\u1015\u103C\u1001\u1014\u103A\u1038\u101E\u102D\u102F\u1037 \u1011\u100A\u1037\u103A\u101E\u103D\u1004\u103A\u1038\u1015\u102B" \u1000\u102D\u102F\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u104D \u101C\u103D\u103E\u1004\u1037\u103A\u1010\u1004\u103A\u1015\u102B\u104B' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u101B\u102F\u1015\u103A\u101B\u103E\u1004\u103A"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u1021\u101B\u1031\u102C\u1004\u103A"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u101A\u102F\u1010\u1039\u1010\u102D"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u1000\u103D\u1004\u103A\u1038"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u101E\u1004\u103A\u1039\u1001\u103B\u102C"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u1005\u102C\u101B\u1004\u103A\u1038\u1019\u103B\u102C\u1038"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u1021\u1019\u103B\u102D\u102F\u1038\u1019\u103B\u102D\u102F\u1038\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u1032\u1014\u102D\u102F\u1004\u103A\u101E\u1031\u102C" custom="VARIABLE"></category><category name="\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1001\u103B\u1000\u103A\u1019\u103B\u102C\u1038" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}