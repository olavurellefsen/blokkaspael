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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">x-\u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BC1</span><span id="Movie_y1">y-\u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BC1</span><span id="Movie_x2">x-\u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF</span><span id="Movie_y2">y-\u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF</span><span id="Movie_radius">\u0B86\u0BB0\u0BAE\u0BCD</span><span id="Movie_width">\u0B85\u0B95\u0BB2\u0BAE\u0BCD</span><span id="Movie_height">\u0B89\u0BAF\u0BB0\u0BAE\u0BCD</span><span id="Movie_circleTooltip">Draws a circle at the specified location and with the specified radius.</span><span id="Movie_circleDraw">\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD</span><span id="Movie_rectTooltip">Draws a rectangle at the specified location and with the specified width and height.</span><span id="Movie_rectDraw">\u0BA8\u0BC0\u0BB3\u0BCD \u0B9A\u0BA4\u0BC1\u0BB0\u0BAE\u0BCD</span><span id="Movie_lineTooltip">Draws a line from one point to another with the specified width.</span><span id="Movie_lineDraw">\u0B95\u0BCB\u0B9F\u0BC1</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">Changes the colour of the pen.</span><span id="Movie_setColour">set colour to</span><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0BA4\u0BBF\u0BB0\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0B95\u0BBE\u0B9F\u0BCD\u0B9A\u0BBF\u0BAF\u0B95\u0BAA\u0BCD \u0BAA\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0BA3\u0BCD\u0B95."><img src="common/1x1.gif" class="gallery icon21"> \u0B95\u0BBE\u0B9F\u0BCD\u0B9A\u0BBF\u0BAF\u0B95\u0BAE\u0BCD \u0B95\u0BBE\u0BA3\u0BCD\u0B95</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u0B95\u0BBE\u0B9F\u0BCD\u0B9A\u0BBF\u0BAF\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8\u0B9A\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD."><img src="common/1x1.gif" class="camera icon21"> \u0B95\u0BBE\u0B9F\u0BCD\u0B9A\u0BBF\u0BAF\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u0B95\u0BBE\u0B9F\u0BCD\u0B9A\u0BBF\u0BAF\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8\u0B9A\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0B87\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD</button><button id="galleryOk" class="secondary" type="submit">\u0B9A\u0BB0\u0BBF</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0B8E\u0BB3\u0BBF\u0BAF \u0BB5\u0BB0\u0BC8\u0BAA\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0BB5\u0BB0\u0BC8' : (opt_ijData.level == 2) ? 'This level is a movie. You want the person\'s arm to move across the screen. Press the play button to see a preview.<div id="sampleHelp2" class="readonly"></div>As the movie plays, the value of the \'time\' block counts from 0 to 100. Since you want the \'y\' position of the arm to start at 0 and go to 100 this should be easy.' : (opt_ijData.level == 3) ? 'The \'time\' block counts from 0 to 100. But now you want the \'y\' position of the other arm to start at 100 and go to 0. Can you figure out a simple mathematical formula that flips the direction?' : (opt_ijData.level == 4) ? 'Use what you learned in the previous level to make legs that cross.' : (opt_ijData.level == 5) ? 'The mathematical formula for the arm is complicated. Here\'s the answer:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'Give the person a couple of hands.' : (opt_ijData.level == 7) ? 'Use the \'if\' block to draw a small head for the first half of the movie. Then draw a big head for the second half of the movie.' : (opt_ijData.level == 8) ? 'Make the legs reverse direction half way through the movie.' : (opt_ijData.level == 9) ? 'Draw an expanding circle behind the person.' : (opt_ijData.level == 10) ? 'Make a movie of anything you want. You\'ve got a huge number of new blocks you can explore. Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see movies that other people have made. If you make an interesting movie, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u0BA4\u0BBF\u0BB0\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u0BA8\u0BBF\u0BB1\u0BAE\u0BCD"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u0BA4\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAE\u0BCD"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0BAE\u0B9F\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BCD\u0B95\u0B9F\u0BCD\u0B9F\u0BB3\u0BC8"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u0B95\u0BA3\u0BBF\u0BA4\u0BAE\u0BCD"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0BAA\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BB2\u0BCD"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0BAE\u0BBE\u0BB1\u0BBF" custom="VARIABLE"></category><category name="\u0B9A\u0BC6\u0BAF\u0BB2\u0BBE\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB3\u0BCD" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}