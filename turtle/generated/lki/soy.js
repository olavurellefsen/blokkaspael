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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">\u0644\u0627\u06A9 \u067E\u0634\u062A \u0631\u0627 \u0628\u0647 \u0645\u0642\u062F\u0627\u0631 \u0645\u0634\u062E\u0635\u200C\u0634\u062F\u0647 \u062C\u0644\u0648 \u06CC\u0627 \u0639\u0642\u0628 \u0645\u0646\u062A\u0642\u0644 \\n\u0645\u06CC\u200C\u06A9\u0646\u062F. </span><span id="Turtle_moveForward">\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u062C\u0644\u0648 \u062A\u0627</span><span id="Turtle_moveBackward">\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u067E\u0634\u062A \u062A\u0627</span><span id="Turtle_turnTooltip">\u0686\u0631\u062E\u0627\u0646\u062F\u0646 \u0644\u0627\u06A9 \u067E\u0634\u062A \u0628\u0647 \u0686\u067E \u06CC\u0627 \u0631\u0627\u0633\u062A \u0628\u0627 \u0639\u062F\u062F \u0645\u0634\u062E\u0635\u200C\u0634\u062F\u0647\u0654 \\n\u062F\u0631\u062C\u0647. </span><span id="Turtle_turnRight">\u0686\u0631\u062E\u0634 \u0628\u0647 \u0631\u0627\u0633\u062A \u0628\u0647 \u0645\u0642\u062F\u0627\u0631</span><span id="Turtle_turnLeft">\u0686\u0631\u062E\u0634 \u0628\u0647 \u0686\u067E \u0628\u0647 \u0645\u0642\u062F\u0627\u0631</span><span id="Turtle_widthTooltip">\u067E\u0647\u0646\u0627\u06CC \u0642\u0644\u0645 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u0645\u06CC\u200C\u062F\u0647\u062F.</span><span id="Turtle_setWidth">\u062A\u0646\u0638\u06CC\u0645 \u067E\u0647\u0646\u0627 \u0628\u0647</span><span id="Turtle_colourTooltip">\u0631\u0646\u06AF \u0642\u0644\u0645 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u0645\u06CC\u200C\u062F\u0647\u062F.</span><span id="Turtle_setColour">\u062A\u0646\u0638\u06CC\u0645 \u0631\u0646\u06AF \u0628\u0647</span><span id="Turtle_penTooltip">\u067E\u0627\u0644\u0627 \u06CC\u0627 \u067E\u0627\u06CC\u06CC\u0646\u200C\u0628\u0631\u062F\u0646 \u0642\u0644\u0645\u060C \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u06CC\u0627 \u067E\u0627\u06CC\u0627\u0646 \u0646\u0642\u0627\u0634\u06CC.</span><span id="Turtle_penUp">\u0642\u0644\u0645 \u062A\u0627</span><span id="Turtle_penDown">\u0642\u0644\u0645 \u067E\u0627\u06CC\u06CC\u0646</span><span id="Turtle_turtleVisibilityTooltip">(\u062F\u0627\u06CC\u0631\u0647 \u0648 \u0641\u0644\u0634) \u0644\u0627\u06A9\u200C\u06A9\u067E\u0634\u062A \u0631\u0627 \u0638\u0627\u0647\u0631 \u06CC\u0627 \u067E\u0646\u0647\u0627\u0646 \u0645\u06CC\u200C\u06A9\u0646\u062F.</span><span id="Turtle_hideTurtle">\u067E\u0646\u0647\u0627\u0646 \u06A9\u0631\u062F\u0646 \u0644\u0627\u06A9\u200C\u200C\u067E\u0634\u062A</span><span id="Turtle_showTurtle">\u0646\u0645\u0627\u06CC\u0634 \u0644\u0627\u06A9\u200C\u067E\u0634\u062A</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">\u06A9\u0634\u06CC\u062F\u0646 \u0645\u062A\u0646 \u062F\u0631 \u062C\u0647\u062A \u0644\u0627\u06A9\u200C\u067E\u0634\u062A \u0648 \u0645\u0648\u0642\u0639\u06CC\u062A\u0634.</span><span id="Turtle_print">\u0686\u0627\u067E</span><span id="Turtle_fontHelpUrl">https://fa.wikipedia.org/wiki/%D9%82%D9%84%D9%85_%28%D8%B1%D8%A7%DB%8C%D8%A7%D9%86%D9%87%29</span><span id="Turtle_fontTooltip">\u0627\u0646\u062F\u0627\u0632\u0647\u0654 \u0642\u0644\u0645 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0686\u0627\u067E \u0628\u0644\u0648\u06A9 \u0631\u0627 \u0645\u0634\u062E\u0635 \\n\u0645\u06CC\u200C\u06A9\u0646\u062F. </span><span id="Turtle_font">\u0642\u0644\u0645</span><span id="Turtle_fontSize">\u0627\u0646\u062F\u0627\u0632\u0647\u0654 \u0642\u0644\u0645</span><span id="Turtle_fontNormal">\u0639\u0627\u062F\u06CC</span><span id="Turtle_fontBold">\u067E\u0631\u0631\u0646\u06AF</span><span id="Turtle_fontItalic">\u06A9\u06C0\u0686/\u0647\u0624\u06C0\u0644</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u06A9\u06CE\u0633\u0629\u0644/\u0644\u0627\u06A9\u067E\u0634\u062A', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> \u0627\u062C\u0631\u0627\u06CC \u0628\u0631\u0646\u0627\u0645\u0647</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> \u0625\u0698 \u062F\u0648\u0648\u0627\u0631\u0629</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Open the gallery of drawings."><img src="common/1x1.gif" class="gallery icon21"> \u0646\u06AF\u0627\u0631\u062E\u0627\u0646\u0647 \u0628\u0624\u06CC\u0646</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your drawing to the gallery."><img src="common/1x1.gif" class="camera icon21"> \u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0646\u06AF\u0627\u0631\u062E\u0627\u0646\u0647</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your drawing to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0626\u0622\u0647\u0648\u0648\u0633\u0627\u0646\u0646/\u0644\u063A\u0648</button><button id="galleryOk" class="secondary" type="submit">\u062A\u0623\u06CC\u06CC\u062F</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0631\u0627\u0647 \u062D\u0644 \u0634\u0645\u0627 \u06A9\u0627\u0631 \u06A9\u0631\u062F\u060C \u0627\u0645\u0627 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647\u062A\u0631\u0634 \u06A9\u0646\u06CC\u062F. ' + ((opt_ijData.level < 3) ? 'Draw the shape with just three blocks.' : 'Draw the star with just four blocks.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Create a program that draws a square.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Change your program to draw a pentagon instead of a square.' : (opt_ijData.level == 3) ? 'There\'s a new block that allows you to change the colour:<div id="sampleHelp3" class="readonly"></div>\u062A\u0631\u0633\u06CC\u0645 \u06CC\u06A9 \u0633\u062A\u0627\u0631\u0647 \u0632\u0631\u062F.' : (opt_ijData.level == 4) ? 'There\'s a new block that allows you to lift your pen off the paper when you move:<div id="sampleHelp4" class="readonly"></div>Draw a small yellow star, then draw a line above it.' : (opt_ijData.level == 5) ? 'Instead of one star, can you draw four stars arranged in a square?' : (opt_ijData.level == 6) ? 'Draw three yellow stars, and one white line.' : (opt_ijData.level == 7) ? 'Draw the stars, then draw four white lines.' : (opt_ijData.level == 8) ? 'Drawing 360 white lines will look like the full moon.' : (opt_ijData.level == 9) ? 'Can you add a black circle so that the moon becomes a crescent?' : (opt_ijData.level == 10) ? 'Draw anything you want. You\'ve got a huge number of new blocks you can explore. Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see what other people have drawn. If you draw something interesting, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u06A9\u06CE\u0633\u0629\u0644/\u0644\u0627\u06A9\u067E\u0634\u062A"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="\u0631\u0629\u0646\u06AF"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="\u0645\u0646\u0637\u0642"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u062D\u0644\u0642\u0647\u200C\u0647\u0627"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="\u0631\u06CC\u0627\u0636\u06CC"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u0644\u06CC\u0633\u062A\u0629\u0644"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0645\u062A\u063A\u06CC\u06CC\u0631\u0647\u0627" custom="VARIABLE"></category><category name="\u062A\u0648\u0627\u0628\u0639" custom="PROCEDURE"></category>' : '<category name="\u06A9\u06CE\u0633\u0629\u0644/\u0644\u0627\u06A9\u067E\u0634\u062A"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="\u0631\u0629\u0646\u06AF"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="\u062D\u0644\u0642\u0647\u200C\u0647\u0627"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}