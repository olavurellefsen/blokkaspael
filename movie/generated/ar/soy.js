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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">\u0633</span><span id="Movie_y">\u0635</span><span id="Movie_x1">\u0628\u062F\u0627\u064A\u0629 \u0633</span><span id="Movie_y1">\u0628\u062F\u0627\u064A\u0629 \u0635</span><span id="Movie_x2">\u0646\u0647\u0627\u064A\u0629 \u0633</span><span id="Movie_y2">\u0646\u0647\u0627\u064A\u0629 \u0635</span><span id="Movie_radius">\u0646\u0635\u0641 \u0627\u0644\u0642\u0637\u0631</span><span id="Movie_width">\u0627\u0644\u0639\u0631\u0636</span><span id="Movie_height">\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639</span><span id="Movie_circleTooltip">\u0625\u0631\u0633\u0645 \u062F\u0627\u0626\u0631\u0629\u0641\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u062D\u062F\u062F \u0648\u0628\u0646\u0635\u0641 \u0627\u0644\u0642\u0637\u0631 \u0627\u0644\u0645\u062D\u062F\u062F.</span><span id="Movie_circleDraw">\u062F\u0627\u0626\u0631\u0629</span><span id="Movie_rectTooltip">\u0625\u0631\u0633\u0645 \u0645\u0633\u062A\u0637\u064A\u0644 \u0641\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u062D\u062F\u062F \u0648\u0628\u0627\u0644\u0637\u0648\u0644 \u0648\u0627\u0644\u0639\u0631\u0636 \\n\u0627\u0644\u0645\u062D\u062F\u062F\u064A\u0646. </span><span id="Movie_rectDraw">\u0645\u0633\u062A\u0637\u064A\u0644</span><span id="Movie_lineTooltip">\u0625\u0631\u0633\u0645 \u062E\u0637 \u0645\u0646 \u0646\u0642\u0637\u0629 \u0627\u0644\u0649 \u0646\u0642\u0637\u0629 \u0627\u062E\u0631\u0649 \u0648\u0628\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062D\u062F\u062F.</span><span id="Movie_lineDraw">\u062E\u0637</span><span id="Movie_timeTooltip">\u0625\u0631\u062C\u0627\u0639 \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629 (0-100).</span><span id="Movie_colourTooltip">\u062A\u063A\u064A\u064A\u0631 \u0644\u0648\u0646 \u0627\u0644\u0642\u0644\u0645.</span><span id="Movie_setColour">\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0644\u0648\u0646 \u0625\u0644\u0649</span><span id="Movie_submitDisabled">\u0627\u0644\u0641\u064A\u0644\u0645 \u0644\u0627 \u064A\u062A\u062D\u0631\u0643; \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u062C\u0645\u0648\u0639\u0629 \u0644\u0635\u0646\u0639 \u0634\u064A\u0626\u0627 \u0645\u062B\u064A\u0631\u0627 \u0644\u0644\u0627\u0647\u062A\u0645\u0627\u0645\u060C \u062B\u0645 \u064A\u0645\u0643\u0646\u0643 \u062A\u0642\u062F\u064A\u0645 \u0641\u064A\u0644\u0645\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0641\u0644\u0645', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0627\u0641\u062A\u062D \u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0641\u0644\u0627\u0645."><img src="common/1x1.gif" class="gallery icon21"> \u0627\u0646\u0638\u0631 \u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u0623\u0631\u0633\u0644 \u0641\u064A\u0644\u0645\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636."><img src="common/1x1.gif" class="camera icon21"> \u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0645\u0639\u0631\u0636</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u0623\u0631\u0633\u0644 \u0641\u064A\u0644\u0645\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0627\u0644\u0639\u0646\u0648\u0627\u0646: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0625\u0644\u063A\u0627\u0621</button><button id="galleryOk" class="secondary" type="submit">\u0645\u0648\u0627\u0641\u0642</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0627\u0646\u0642\u0644 \u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0625\u0644\u0649 \u0623\u0639\u0644\u0649 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C\u060C \u062B\u0645 \u0633\u0648\u0641 \u062A\u0638\u0647\u0631 \u062E\u0644\u0641 \u0627\u0644\u0634\u062E\u0635.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0628\u0633\u064A\u0637\u0629 \u0644\u0631\u0633\u0645 \u0647\u0630\u0627 \u0627\u0644\u0634\u062E\u0635.' : (opt_ijData.level == 2) ? '\u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0641\u064A\u0644\u0645\u060C \u062A\u0631\u064A\u062F \u0623\u0646 \u064A\u062A\u062D\u0631\u0643 \u0630\u0631\u0627\u0639 \u0627\u0644\u0634\u062E\u0635 \u0639\u0628\u0631 \u0627\u0644\u0634\u0627\u0634\u0629\u060C \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0644\u0631\u0624\u064A\u0629 \u0645\u0639\u0627\u064A\u0646\u0629.<div id="sampleHelp2" class="readonly"></div>\u0623\u062B\u0646\u0627\u0621 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u064A\u0644\u0645\u060C \u064A\u062A\u0645 \u062D\u0633\u0627\u0628 \u0642\u064A\u0645\u0629 \u0643\u062A\u0644\u0629 "\u0627\u0644\u0648\u0642\u062A" \u0645\u0646 0 \u0625\u0644\u0649 100\u060C \u0628\u0645\u0627 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0623\u0646 \u064A\u0628\u062F\u0623 \u0627\u0644\u0648\u0636\u0639 \'y\' \u0639\u0646\u062F 0 \u0648\u0627\u0644\u0630\u0647\u0627\u0628 \u0625\u0644\u0649 100\u060C \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0630\u0644\u0643 \u0633\u0647\u0644\u0627.' : (opt_ijData.level == 3) ? '\u064A\u062A\u0645 \u062D\u0633\u0627\u0628 \u0643\u062A\u0644\u0629 "\u0627\u0644\u0648\u0642\u062A" \u0645\u0646 0 \u0625\u0644\u0649 100\u060C \u0648\u0644\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u062A\u0631\u064A\u062F \u0623\u0646 \u064A\u0628\u062F\u0623 \u0627\u0644\u0648\u0636\u0639 "y" \u0641\u064A \u0627\u0644\u0630\u0631\u0627\u0639 \u0627\u0644\u0623\u062E\u0631\u0649 \u0639\u0646\u062F 100 \u0648\u064A\u0630\u0647\u0628 \u0625\u0644\u0649 0\u060C \u0647\u0644 \u064A\u0645\u0643\u0646\u0643 \u0645\u0639\u0631\u0641\u0629 \u0635\u064A\u063A\u0629 \u0631\u064A\u0627\u0636\u064A\u0629 \u0628\u0633\u064A\u0637\u0629 \u062A\u0642\u0644\u0628 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u061F' : (opt_ijData.level == 4) ? '\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0627 \u062A\u0639\u0644\u0645\u062A\u0647 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0633\u0627\u0628\u0642 \u0644\u062C\u0639\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0646 \u062A\u062A\u0642\u0627\u0637\u0639\u0627\u0646.' : (opt_ijData.level == 5) ? '\u0627\u0644\u0635\u064A\u063A\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0644\u0644\u0630\u0631\u0627\u0639 \u0645\u0639\u0642\u062F\u0629\u060C \u0648\u0647\u0646\u0627 \u0627\u0644\u062C\u0648\u0627\u0628:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u0627\u0645\u0646\u062D \u0627\u0644\u0634\u062E\u0635 \u064A\u062F\u064A\u0646.' : (opt_ijData.level == 7) ? '\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0643\u062A\u0644\u0629 "if" \u0644\u0631\u0633\u0645 \u0631\u0623\u0633 \u0635\u063A\u064A\u0631 \u0644\u0644\u0646\u0635\u0641 \u0627\u0644\u0623\u0648\u0644 \u0645\u0646 \u0627\u0644\u0641\u064A\u0644\u0645\u060C \u062B\u0645 \u0627\u0631\u0633\u0645 \u0631\u0623\u0633\u0627 \u0643\u0628\u064A\u0631\u0627 \u0644\u0644\u0646\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0645\u0646 \u0627\u0644\u0641\u064A\u0644\u0645.' : (opt_ijData.level == 8) ? '\u062C\u0639\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0646 \u0641\u064A \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0639\u0627\u0643\u0633 \u0641\u064A \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0637\u0631\u064A\u0642 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0641\u064A\u0644\u0645.' : (opt_ijData.level == 9) ? '\u0627\u0631\u0633\u0645 \u062F\u0627\u0626\u0631\u0629 \u0645\u062A\u0648\u0633\u0639\u0629 \u062E\u0644\u0641 \u0627\u0644\u0634\u062E\u0635.' : (opt_ijData.level == 10) ? '\u0627\u0635\u0646\u0639 \u0641\u064A\u0644\u0645 \u0645\u0646 \u0623\u064A \u0634\u064A\u0621 \u062A\u0631\u064A\u062F\u0647; \u0643\u0646\u062A \u0642\u062F \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u0645\u0646 \u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646 \u0627\u0633\u062A\u0643\u0634\u0627\u0641\u0647\u0627.\u0627\u0633\u062A\u0645\u062A\u0639!' + ((! opt_ijData.html) ? '<br><br>\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0632\u0631 "\u061B\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0636" \u0644\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0627\u0644\u062A\u064A \u0635\u0646\u0639\u0647\u0627 \u0623\u0634\u062E\u0627\u0635 \u0622\u062E\u0631\u0648\u0646\u060C \u0625\u0630\u0627 \u0635\u0646\u0639\u062A \u0641\u064A\u0644\u0645\u0627 \u0645\u062B\u064A\u0631\u0627 \u0644\u0644\u0627\u0647\u062A\u0645\u0627\u0645\u060C \u0641\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0632\u0631 "\u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636" \u0644\u0646\u0634\u0631\u0647.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u0641\u0644\u0645"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u0644\u0648\u0646"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u0645\u0646\u0637\u0642"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0627\u0644\u062D\u0644\u0642\u0627\u062A"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u0631\u064A\u0627\u0636\u064A\u0627\u062A"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0642\u0648\u0627\u0626\u0645"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0645\u062A\u063A\u064A\u0631\u0627\u062A" custom="VARIABLE"></category><category name="\u0625\u062C\u0631\u0627\u0621\u0627\u062A" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
