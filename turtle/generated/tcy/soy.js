// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Turtle.soy.
 */

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">\u0C85\u0C9A\u0CCD\u0C9A\u0CCD \u0CAE\u0CB2\u0CCD\u0CAA\u0CC1\u0CB2\u0CC6</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CCA</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CCA</span><span id="Turtle_fontSize">\u0C85\u0C95\u0CCD\u0CB7\u0CB0\u0CCA\u0CA6 \u0C97\u0CBE\u0CA4\u0CCD\u0CB0\u0CCA</span><span id="Turtle_fontNormal">\u0CB8\u0CBE\u0CA6\u0CBE\u0CB0\u0CA8\u0CCA</span><span id="Turtle_fontBold">\u0CA6\u0CAA\u0CCD\u0CAA\u0CCA</span><span id="Turtle_fontItalic">\u0C87\u0C9F\u0CBE\u0CB2\u0CBF\u0C95\u0CCD</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0C8F\u0CAE\u0CC6', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="\u0C88\u0CB0\u0CCD \u0CAC\u0CB0\u0CC6\u0CAF\u0CBF\u0CA8 \u0CAF\u0CCB\u0C9C\u0CA8\u0CC6\u0CA8\u0CCD \u0CA8\u0CA1\u0CAA\u0CBE\u0CB2\u0CC6."><img src="common/1x1.gif" class="run icon21"> \u0CAF\u0CCB\u0C9C\u0CA8\u0CC6\u0CA8\u0CCD \u0CA8\u0CA1\u0CAA\u0CBE\u0CB2\u0CC6</button><button id="resetButton" class="primary" style="display: none" title="\u0CAF\u0CCB\u0C9C\u0CA8\u0CC6\u0CA8\u0CCD \u0C89\u0C82\u0CA4\u0CBE\u0CB2\u0CC6 \u0CAC\u0CCA\u0C95\u0CCD\u0C95 \u0CAE\u0C9F\u0CCD\u0C9F\u0CCA\u0C97\u0CC1 \u0CAA\u0CBF\u0CB0 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CB2\u0CC6."><img src="common/1x1.gif" class="stop icon21"> \u0CAA\u0CBF\u0CB0 \u0C9C\u0CCB\u0CA1\u0CBF\u0CB8\u0CB2\u0CC6</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Open the gallery of drawings."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your drawing to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your drawing to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0C89\u0C82\u0CA4\u0CBE\u0CB2\u0CC6</button><button id="galleryOk" class="secondary" type="submit">\u0C85\u0CB5\u0CC1</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. ' + ((opt_ijData.level < 3) ? 'Draw the shape with just three blocks.' : 'Draw the star with just four blocks.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Create a program that draws a square.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Change your program to draw a pentagon instead of a square.' : (opt_ijData.level == 3) ? 'There\'s a new block that allows you to change the colour:<div id="sampleHelp3" class="readonly"></div>Draw a yellow star.' : (opt_ijData.level == 4) ? 'There\'s a new block that allows you to lift your pen off the paper when you move:<div id="sampleHelp4" class="readonly"></div>Draw a small yellow star, then draw a line above it.' : (opt_ijData.level == 5) ? 'Instead of one star, can you draw four stars arranged in a square?' : (opt_ijData.level == 6) ? 'Draw three yellow stars, and one white line.' : (opt_ijData.level == 7) ? 'Draw the stars, then draw four white lines.' : (opt_ijData.level == 8) ? 'Drawing 360 white lines will look like the full moon.' : (opt_ijData.level == 9) ? 'Can you add a black circle so that the moon becomes a crescent?' : (opt_ijData.level == 10) ? 'Draw anything you want. You\'ve got a huge number of new blocks you can explore. Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see what other people have drawn. If you draw something interesting, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u0C8F\u0CAE\u0CC6"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="\u0CAC\u0CA8\u0CCD\u0CA8\u0CCA"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="\u0CB5\u0CBE\u0CA6\u0CCA"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u0CB2\u0CC2\u0CAA\u0CCD\u200D\u0CB2\u0CC1"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="\u0CB2\u0CC6\u0C95\u0CCD\u0C95\u0CCA"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u0CAA\u0C9F\u0CCD\u0C9F\u0CBF\u0CB2\u0CC1"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0CB5\u0CCD\u0CAF\u0CA4\u0CCD\u0CAF\u0CAF\u0CCA\u0CB2\u0CC1" custom="VARIABLE"></category><category name="\u0CB2\u0CC7\u0CB8\u0CCD\u200D\u0CB2\u0CC1" custom="PROCEDURE"></category>' : '<category name="\u0C8F\u0CAE\u0CC6"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="\u0CAC\u0CA8\u0CCD\u0CA8\u0CCA"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="\u0CB2\u0CC2\u0CAA\u0CCD\u200D\u0CB2\u0CC1"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}
