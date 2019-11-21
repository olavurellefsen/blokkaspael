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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">\u0627</span><span id="Movie_y">\u0628</span><span id="Movie_x1">\u0627 \u0634\u0631\u0648\u0639 \u06AA\u064A\u0648</span><span id="Movie_y1">\u0628 \u0634\u0631\u0648\u0639 \u06AA\u064A\u0648</span><span id="Movie_x2">\u0627 \u062E\u062A\u0645 \u06AA\u064A\u0648</span><span id="Movie_y2">\u0628 \u062E\u062A\u0645 \u06AA\u064A\u0648</span><span id="Movie_radius">\u0646\u064A\u0645 \u0642\u0637\u0631</span><span id="Movie_width">\u0648\u064A\u06AA\u0631</span><span id="Movie_height">\u0627\u0648\u0686\u0627\u0626\u064A</span><span id="Movie_circleTooltip">\u06BE\u06AA \u0645\u062E\u0635\u0648\u0635 \u062C\u06B3\u06BE\u06C1 \u062A\u064A \u062F\u0627\u0626\u0631\u0648 \u067A\u0627\u06BE\u064A\u0646\u062F\u0648 \u0645\u062E\u0635\u0648\u0635 \u0646\u064A\u0645 \u0642\u0637\u0631 \u0633\u0627\u0646.</span><span id="Movie_circleDraw">\u062F\u0627\u0626\u0631\u0648</span><span id="Movie_rectTooltip">\u06BE\u06AA \u0645\u062E\u0635\u0648\u0635 \u062C\u06B3\u06BE\u06C1 \u062A\u064A \u0686\u0648\u06AA\u0646\u068A\u0648 \u067A\u0627\u06BE\u064A\u0646\u062F\u0648\u060C \u0645\u062E\u0635\u0648\u0635 \u0648\u064A\u06AA\u0631 \u06FD \\n\u0627\u0648\u0686\u0627\u0626\u064A \u0633\u0627\u0646. </span><span id="Movie_rectDraw">\u0686\u0648\u06AA\u0646\u068A\u0648</span><span id="Movie_lineTooltip">\u0647\u06AA \u0646\u0642\u0637\u064A \u06A9\u0627\u0646 \u067B\u064A \u0646\u0642\u0637\u064A \u062A\u0627\u0626\u064A\u0646 \u0684\u0627\u06BB\u0627\u064A\u0644 \u0648\u064A\u06AA\u0631 \u062C\u064A \u0644\u064A\u06AA \\n\u0686\u0650\u067D\u064A \u067F\u0648. </span><span id="Movie_lineDraw">\u0644\u064A\u06AA\u064E</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">\u0642\u0644\u0645 \u062C\u0648 \u0631\u0646\u06AF \u0628\u062F\u0644\u0627\u0626\u064A \u067F\u0648.</span><span id="Movie_setColour">\u0631\u0646\u06AF \u0637\u064E\u064A \u06AA\u0631\u064A\u0648</span><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0641\u0644\u0645', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Open the gallery of movies."><img src="common/1x1.gif" class="gallery icon21"> \u06AF\u064A\u0644\u0631\u064A \u068F\u0633\u0648</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your movie to the gallery."><img src="common/1x1.gif" class="camera icon21"> \u06AF\u064A\u0644\u0631\u064A \u06FE \u062C\u0645\u0639 \u06AA\u0631\u0627\u064A\u0648</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your movie to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0639\u0646\u0648\u0627\u0646: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0631\u062F</button><button id="galleryOk" class="secondary" type="submit">\u067A\u064A\u06AA</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0647\u064A\u0621\u064F \u0641\u0631\u062F \u0686\u0650\u067D\u06BB \u0644\u0627\u0621\u0650 \u0633\u0627\u062F\u0627 \u068A\u0648\u0644 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06AA\u0631\u064A\u0648.' : (opt_ijData.level == 2) ? 'This level is a movie. You want the person\'s arm to move across the screen. Press the play button to see a preview.<div id="sampleHelp2" class="readonly"></div>As the movie plays, the value of the \'time\' block counts from 0 to 100. Since you want the \'y\' position of the arm to start at 0 and go to 100 this should be easy.' : (opt_ijData.level == 3) ? 'The \'time\' block counts from 0 to 100. But now you want the \'y\' position of the other arm to start at 100 and go to 0. Can you figure out a simple mathematical formula that flips the direction?' : (opt_ijData.level == 4) ? 'Use what you learned in the previous level to make legs that cross.' : (opt_ijData.level == 5) ? 'The mathematical formula for the arm is complicated. Here\'s the answer:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'Give the person a couple of hands.' : (opt_ijData.level == 7) ? 'Use the \'if\' block to draw a small head for the first half of the movie. Then draw a big head for the second half of the movie.' : (opt_ijData.level == 8) ? 'Make the legs reverse direction half way through the movie.' : (opt_ijData.level == 9) ? 'Draw an expanding circle behind the person.' : (opt_ijData.level == 10) ? 'Make a movie of anything you want. You\'ve got a huge number of new blocks you can explore. Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see movies that other people have made. If you make an interesting movie, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u0641\u0644\u0645"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u0631\u0646\u06AF"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u0645\u0646\u0637\u0642"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0686\u06AA\u0631"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u0631\u064A\u0627\u0636\u064A"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0641\u06BE\u0631\u0633\u062A"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u06A6\u0631\u06BB\u0627" custom="VARIABLE"></category><category name="\u0639\u0645\u0644" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}