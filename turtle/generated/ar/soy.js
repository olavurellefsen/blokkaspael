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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0645\u0627\u0645 \u0623\u0648 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641 \u0628\u0645\u0642\u062F\u0627\u0631 \u0645\u062D\u062F\u062F.</span><span id="Turtle_moveForward">\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0645\u0627\u0645 \u0628\u0648\u0627\u0633\u0637\u0629</span><span id="Turtle_moveBackward">\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641 \u0628\u0648\u0627\u0633\u0637\u0629</span><span id="Turtle_turnTooltip">\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629 \u0627\u0644\u0649 \u0627\u0644\u0623\u064A\u0645\u0646 \u0623\u0648 \u0627\u0644\u0623\u064A\u0633\u0631 \u0628\u0639\u062F\u062F \u0645\u0639\u064A\u0646 \u0645\u0646 \\n\u0627\u0644\u062F\u0631\u062C\u0627\u062A. </span><span id="Turtle_turnRight">\u0627\u0633\u062A\u062F\u0631 \u063A\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646 \u0628\u0648\u0627\u0633\u0637\u0629</span><span id="Turtle_turnLeft">\u0627\u0633\u062A\u062F\u0631 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631 \u0628\u0648\u0627\u0633\u0637\u0629</span><span id="Turtle_widthTooltip">\u062A\u063A\u064A\u064A\u0631 \u0639\u0631\u0636 \u0627\u0644\u0642\u0644\u0645.</span><span id="Turtle_setWidth">\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0639\u0631\u0636 \u0625\u0644\u0649</span><span id="Turtle_colourTooltip">\u062A\u063A\u064A\u064A\u0631 \u0644\u0648\u0646 \u0627\u0644\u0642\u0644\u0645.</span><span id="Turtle_setColour">\u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0644\u0648\u0646 \u0625\u0644\u0649</span><span id="Turtle_penTooltip">\u064A\u0631\u0641\u0639 \u0623\u0648 \u064A\u062E\u0641\u0636 \u0627\u0644\u0642\u0644\u0645\u060C \u0644\u064A\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0623\u0648 \u0628\u062F\u0621 \u0627\u0644\u0631\u0633\u0645.</span><span id="Turtle_penUp">\u0631\u0641\u0639 \u0627\u0644\u0642\u0644\u0645</span><span id="Turtle_penDown">\u0627\u0646\u0632\u0627\u0644 \u0627\u0644\u0642\u0644\u0645</span><span id="Turtle_turtleVisibilityTooltip">\u062C\u0639\u0644 \u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629 (\u062F\u0627\u0626\u0631\u0629 \u0648\u0633\u0647\u0645) \u0645\u0631\u0626\u064A\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0645\u0631\u0626\u064A\u0629.</span><span id="Turtle_hideTurtle">\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629</span><span id="Turtle_showTurtle">\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">\u0631\u0633\u0645/\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0646\u0635 \u0641\u064A \u0641\u064A \u0645\u0648\u0642\u0639 \u0627\u062A\u062C\u0627\u0647 \u0633\u0644\u062D\u0641\u0627\u0629.</span><span id="Turtle_print">\u0625\u0637\u0628\u0639</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">\u064A\u0636\u0628\u0637 \u0627\u0644\u062E\u0637 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0648\u0627\u0633\u0637\u0629 \u0628\u0644\u0648\u0643 \u0627\u0644\u0637\u0628\u0627\u0639\u0629.</span><span id="Turtle_font">\u0627\u0644\u062E\u0637</span><span id="Turtle_fontSize">\u062D\u062C\u0645 \u0627\u0644\u062E\u0637</span><span id="Turtle_fontNormal">\u0639\u0627\u062F\u064A</span><span id="Turtle_fontBold">\u063A\u0627\u0645\u0642</span><span id="Turtle_fontItalic">\u0645\u0627\u0626\u0644</span><span id="Turtle_submitDisabled">\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u062D\u062A\u0649 \u064A\u062A\u0648\u0642\u0641\u060C \u062B\u0645 \u064A\u0645\u0643\u0646\u0643 \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0631\u0633\u0645 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u0643\u062A\u0628\u062A\u0647."><img src="common/1x1.gif" class="run icon21"> \u0634\u063A\u0650\u0651\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C</button><button id="resetButton" class="primary" style="display: none" title="\u0623\u0648\u0642\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0648\u0623\u0639\u062F \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0648\u0649."><img src="common/1x1.gif" class="stop icon21"> \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0627\u0641\u062A\u062D \u0645\u0639\u0631\u0636 \u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A."><img src="common/1x1.gif" class="gallery icon21"> \u0627\u0646\u0638\u0631 \u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u0623\u0631\u0633\u0644 \u0631\u0633\u0645\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636."><img src="common/1x1.gif" class="camera icon21"> \u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0645\u0639\u0631\u0636</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u0623\u0631\u0633\u0644 \u0631\u0633\u0645\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0627\u0644\u0639\u0646\u0648\u0627\u0646: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0625\u0644\u063A\u0627\u0621</button><button id="galleryOk" class="secondary" type="submit">\u0645\u0648\u0627\u0641\u0642</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u062D\u0644\u0643 \u064A\u0639\u0645\u0644\u060C \u0644\u0643\u0646 \u064A\u0645\u0643\u0646\u0643 \u0623\u0646 \u062A\u0642\u0648\u0645 \u0628\u0627\u0644\u0623\u0641\u0636\u0644. ' + ((opt_ijData.level < 3) ? '\u0631\u0633\u0645 \u0627\u0644\u0634\u0643\u0644 \u0641\u064A \u062B\u0644\u0627\u062B \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0641\u0642\u0637.' : '\u0631\u0633\u0645 \u0627\u0644\u0646\u062C\u0645 \u0641\u064A \u0623\u0631\u0628\u0639 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0641\u0642\u0637.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u0630\u064A \u064A\u0631\u0633\u0645 \u0645\u0631\u0628\u0639\u0627.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? '\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0644\u0631\u0633\u0645 \u062E\u0645\u0627\u0633\u064A \u0627\u0644\u0623\u0636\u0644\u0627\u0639 \u0628\u062F\u0644\u0627 \u0645\u0646 \u0627\u0644\u0645\u0631\u0628\u0639.' : (opt_ijData.level == 3) ? '\u0647\u0646\u0627\u0643 \u0645\u062C\u0645\u0648\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u062A\u0633\u0645\u062D \u0644\u0643 \u0628\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u0648\u0646:<div id="sampleHelp3" class="readonly"></div>\u0625\u0631\u0633\u0645 \u0646\u062C\u0645\u0629 \u0635\u0641\u0631\u0627\u0621.' : (opt_ijData.level == 4) ? '\u0647\u0646\u0627\u0643 \u0645\u062C\u0645\u0648\u0639\u0629 \u062C\u062F\u064A\u062F\u0629 \u062A\u0633\u0645\u062D \u0644\u0643 \u0628\u0631\u0641\u0639 \u0627\u0644\u0642\u0644\u0645 \u0628\u0639\u064A\u062F\u0627 \u0639\u0646 \u0627\u0644\u0648\u0631\u0642\u0629 \u0639\u0646\u062F \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644:<div id="sampleHelp4" class="readonly"></div>\u0631\u0633\u0645 \u0646\u062C\u0645\u0629 \u0635\u0641\u0631\u0627\u0621 \u0635\u063A\u064A\u0631\u0629\u060C \u062B\u0645 \u0631\u0633\u0645 \u062E\u0637 \u0641\u0648\u0642\u0647\u0627.' : (opt_ijData.level == 5) ? '\u0628\u062F\u0644\u0627 \u0645\u0646 \u0646\u062C\u0645 \u0648\u0627\u062D\u062F\u060C \u0647\u0644 \u064A\u0645\u0643\u0646\u0643 \u0631\u0633\u0645 \u0627\u0644\u0646\u062C\u0648\u0645 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0639\u0644\u0649 \u0634\u0643\u0644 \u0645\u0631\u0628\u0639\u061F' : (opt_ijData.level == 6) ? '\u0631\u0633\u0645 \u062B\u0644\u0627\u062B\u0629 \u0646\u062C\u0648\u0645 \u0635\u0641\u0631\u0627\u0621\u060C \u0648\u062E\u0637 \u0648\u0627\u062D\u062F \u0623\u0628\u064A\u0636.' : (opt_ijData.level == 7) ? '\u0631\u0633\u0645 \u0627\u0644\u0646\u062C\u0648\u0645\u060C \u062B\u0645 \u0631\u0633\u0645 \u0623\u0631\u0628\u0639\u0629 \u062E\u0637\u0648\u0637 \u0628\u064A\u0636\u0627\u0621.' : (opt_ijData.level == 8) ? '\u0631\u0633\u0645 360 \u062E\u0637\u064B\u0627 \u0628\u064A\u0636\u0627\u0621 \u0633\u064A\u0628\u062F\u0648\u0646 \u0643\u0627\u0644\u0642\u0645\u0631 \u0627\u0644\u0643\u0627\u0645\u0644.' : (opt_ijData.level == 9) ? '\u0647\u0644 \u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u062F\u0627\u0626\u0631\u0629 \u0633\u0648\u062F\u0627\u0621 \u0628\u062D\u064A\u062B \u064A\u0635\u0628\u062D \u0627\u0644\u0642\u0645\u0631 \u0647\u0644\u0627\u0644\u0627\u061F' : (opt_ijData.level == 10) ? '\u0627\u0631\u0633\u0645 \u0623\u064A \u0634\u064A\u0621 \u062A\u0631\u064A\u062F\u0647; \u0643\u0646\u062A \u0642\u062F \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u0645\u0646 \u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646 \u0627\u0633\u062A\u0643\u0634\u0627\u0641\u0647\u0627.\u0627\u0633\u062A\u0645\u062A\u0639!' + ((! opt_ijData.html) ? '<br><br>\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0632\u0631 "\u061B\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0636" \u0644\u0631\u0624\u064A\u0629 \u0645\u0627 \u0631\u0633\u0645\u0647 \u0627\u0644\u0622\u062E\u0631\u0648\u0646\u060C \u0625\u0630\u0627 \u0631\u0633\u0645\u062A \u0634\u064A\u0626\u0627 \u0645\u062B\u064A\u0631\u0627 \u0644\u0644\u0627\u0647\u062A\u0645\u0627\u0645\u060C \u0641\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0632\u0631 "\u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636" \u0644\u0646\u0634\u0631\u0647.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>\u0627\u062E\u062A\u0631 \u062A\u0635\u0646\u064A\u0641\u064B\u0627 \u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="\u0644\u0648\u0646"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="\u0645\u0646\u0637\u0642"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u0627\u0644\u062D\u0644\u0642\u0627\u062A"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="\u0631\u064A\u0627\u0636\u064A\u0627\u062A"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u0642\u0648\u0627\u0626\u0645"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0645\u062A\u063A\u064A\u0631\u0627\u062A" custom="VARIABLE"></category><category name="\u0625\u062C\u0631\u0627\u0621\u0627\u062A" custom="PROCEDURE"></category>' : '<category name="\u0627\u0644\u0633\u0644\u062D\u0641\u0627\u0629"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="\u0644\u0648\u0646"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="\u0627\u0644\u062D\u0644\u0642\u0627\u062A"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}