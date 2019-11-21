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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">x \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</span><span id="Movie_y1">y \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</span><span id="Movie_x2">x \u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14</span><span id="Movie_y2">y \u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14</span><span id="Movie_radius">\u0E23\u0E31\u0E28\u0E21\u0E35</span><span id="Movie_width">\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07</span><span id="Movie_height">\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07</span><span id="Movie_circleTooltip">\u0E27\u0E32\u0E14\u0E27\u0E07\u0E01\u0E25\u0E21\u0E14\u0E49\u0E27\u0E22\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E41\u0E25\u0E30\u0E23\u0E31\u0E28\u0E21\u0E35\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38.</span><span id="Movie_circleDraw">\u0E27\u0E07\u0E01\u0E25\u0E21</span><span id="Movie_rectTooltip">\u0E27\u0E32\u0E14\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E21\u0E38\u0E21\u0E09\u0E32\u0E01\u0E14\u0E49\u0E27\u0E22\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07 \\n\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38 </span><span id="Movie_rectDraw">\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E21\u0E38\u0E21\u0E09\u0E32\u0E01</span><span id="Movie_lineTooltip">\\n\u0E27\u0E32\u0E14\u0E40\u0E2A\u0E49\u0E19\u0E15\u0E23\u0E07\u0E08\u0E32\u0E01\u0E08\u0E38\u0E14\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E44\u0E1B\u0E2D\u0E35\u0E01\u0E08\u0E38\u0E14\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38 </span><span id="Movie_lineDraw">\u0E40\u0E2A\u0E49\u0E19\u0E15\u0E23\u0E07</span><span id="Movie_timeTooltip">\u0E04\u0E37\u0E19\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E27\u0E25\u0E32\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E43\u0E19\u0E2D\u0E19\u0E34\u0E40\u0E21\u0E0A\u0E31\u0E48\u0E19(0-100).</span><span id="Movie_colourTooltip">\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E1B\u0E32\u0E01\u0E01\u0E32</span><span id="Movie_setColour">\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E35\u0E40\u0E1B\u0E47\u0E19</span><span id="Movie_submitDisabled">\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27 \u0E43\u0E0A\u0E49\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1A\u0E32\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E14\u0E39\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08 \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E48\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C"><img src="common/1x1.gif" class="gallery icon21"> \u0E14\u0E39\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u0E2A\u0E48\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E"><img src="common/1x1.gif" class="camera icon21"> \u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u0E2A\u0E48\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button><button id="galleryOk" class="secondary" type="submit">\u0E15\u0E01\u0E25\u0E07</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0E22\u0E49\u0E32\u0E22\u0E27\u0E07\u0E01\u0E25\u0E21\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E02\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21 \u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E2D\u0E22\u0E39\u0E48\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E1A\u0E38\u0E04\u0E04\u0E25</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0E27\u0E32\u0E14\u0E23\u0E39\u0E1B\u0E04\u0E19\u0E19\u0E35\u0E49\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49\u0E23\u0E39\u0E1B\u0E23\u0E48\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E07\u0E48\u0E32\u0E22' : (opt_ijData.level == 2) ? '\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E14\u0E48\u0E32\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E02\u0E19\u0E02\u0E2D\u0E07\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E44\u0E1B \u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 Play \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07<div id="sampleHelp2" class="readonly"></div>\n\u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C\u0E40\u0E25\u0E48\u0E19\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07 \'\u0E40\u0E27\u0E25\u0E32\' \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E19\u0E31\u0E1A\u0E08\u0E32\u0E01 0 \u0E16\u0E36\u0E07 100 \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \'y\' \u0E02\u0E2D\u0E07\u0E41\u0E02\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48 0 \u0E41\u0E25\u0E30\u0E44\u0E1B\u0E17\u0E35\u0E48 100 \u0E2A\u0E34\u0E48\u0E07\u0E19\u0E35\u0E49\u0E19\u0E48\u0E32\u0E08\u0E30\u0E07\u0E48\u0E32\u0E22' : (opt_ijData.level == 3) ? '\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'\u0E40\u0E27\u0E25\u0E32\' \u0E19\u0E31\u0E1A\u0E08\u0E32\u0E01 0 \u0E16\u0E36\u0E07 100 \u0E41\u0E15\u0E48\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \'y\' \u0E02\u0E2D\u0E07\u0E41\u0E02\u0E19\u0E2D\u0E35\u0E01\u0E02\u0E49\u0E32\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48 100 \u0E41\u0E25\u0E30\u0E44\u0E1B\u0E17\u0E35\u0E48 0 \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2B\u0E32\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E32\u0E07\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E07\u0E48\u0E32\u0E22\u0E17\u0E35\u0E48\u0E1E\u0E25\u0E34\u0E01\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E44\u0E14\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48' : (opt_ijData.level == 4) ? '\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E02\u0E32\u0E44\u0E02\u0E27\u0E49\u0E01\u0E31\u0E19' : (opt_ijData.level == 5) ? '\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E32\u0E07\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E02\u0E19\u0E19\u0E31\u0E49\u0E19\u0E0B\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19 \u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E04\u0E33\u0E15\u0E2D\u0E1A:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u0E43\u0E2B\u0E49\u0E21\u0E37\u0E2D\u0E2A\u0E2D\u0E07\u0E02\u0E49\u0E32\u0E07\u0E01\u0E31\u0E1A\u0E04\u0E19' : (opt_ijData.level == 7) ? '\u0E43\u0E0A\u0E49\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'if\' \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E14\u0E2B\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E04\u0E23\u0E36\u0E48\u0E07\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C \u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E27\u0E32\u0E14\u0E2B\u0E31\u0E27\u0E42\u0E15\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E04\u0E23\u0E36\u0E48\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E02\u0E2D\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C' : (opt_ijData.level == 8) ? '\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E02\u0E32\u0E01\u0E25\u0E31\u0E1A\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E44\u0E1B\u0E04\u0E23\u0E36\u0E48\u0E07\u0E17\u0E32\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C' : (opt_ijData.level == 9) ? '\n\u0E27\u0E32\u0E14\u0E27\u0E07\u0E01\u0E25\u0E21\u0E02\u0E22\u0E32\u0E22\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E1A\u0E38\u0E04\u0E04\u0E25' : (opt_ijData.level == 10) ? '\u0E27\u0E32\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E01\u0E47\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 \u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25\u0E21\u0E32\u0E44\u0E27\u0E49\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E2A\u0E33\u0E23\u0E27\u0E08 \u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E19\u0E38\u0E01!' + ((! opt_ijData.html) ? '<br><br>\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E1B\u0E38\u0E48\u0E21 \u0E14\u0E39\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39 movie \u0E17\u0E35\u0E48\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E46\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E44\u0E14\u0E49 \u0E16\u0E49\u0E32\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E2A\u0E23\u0E49\u0E32\u0E07 movie \u0E17\u0E35\u0E48\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E25\u0E48\u0E30\u0E01\u0E47\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 \u0E14\u0E39\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48 movie \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u0E20\u0E32\u0E1E\u0E22\u0E19\u0E15\u0E23\u0E4C"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u0E2A\u0E35"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u0E15\u0E23\u0E23\u0E01\u0E30"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0E01\u0E32\u0E23\u0E27\u0E19\u0E0B\u0E49\u0E33"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23" custom="VARIABLE"></category><category name="\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}