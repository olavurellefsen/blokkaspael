// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Puzzle.soy.
 */

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">\u05D1\u05E8\u05D5\u05D5\u05D6</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u05E0\u05D5\u05E6\u05D5\u05EA</span><span id="Puzzle_animal1Trait2">\u05DE\u05E7\u05D5\u05E8</span><span id="Puzzle_animal1HelpUrl">https://he.wikipedia.org/wiki/\u05D1\u05E8\u05D5\u05D5\u05D6</span><span id="Puzzle_animal2">\u05D7\u05EA\u05D5\u05DC</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u05E9\u05E4\u05DD</span><span id="Puzzle_animal2Trait2">\u05E4\u05E8\u05D5\u05D5\u05D4</span><span id="Puzzle_animal2HelpUrl">https://he.wikipedia.org/wiki/\u05D7\u05EA\u05D5\u05DC</span><span id="Puzzle_animal3">\u05D3\u05D1\u05D5\u05E8\u05D4</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u05D3\u05D1\u05E9</span><span id="Puzzle_animal3Trait2">\u05E2\u05D5\u05E7\u05E5</span><span id="Puzzle_animal3HelpUrl">https://he.wikipedia.org/wiki/\u05D3\u05D1\u05D5\u05E8\u05D4</span><span id="Puzzle_animal4">\u05D7\u05D9\u05DC\u05D6\u05D5\u05DF</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u05E7\u05D5\u05E0\u05DB\u05D9\u05D9\u05D4</span><span id="Puzzle_animal4Trait2">\u05E8\u05D9\u05E8</span><span id="Puzzle_animal4HelpUrl">https://he.wikipedia.org/wiki/\u05D7\u05D9\u05DC\u05D6\u05D5\u05DF</span><span id="Puzzle_picture">\u05EA\u05DE\u05D5\u05E0\u05D4:</span><span id="Puzzle_legs">\u05E8\u05D2\u05DC\u05D9\u05D9\u05DD:</span><span id="Puzzle_legsChoose">\u05D1\u05D7\u05D9\u05E8\u05D4\u2026</span><span id="Puzzle_traits">\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD:</span><span id="Puzzle_error0">\u05DE\u05D5\u05E9\u05DC\u05DD!\n\u05DB\u05DC %1 \u05E7\u05D8\u05E2\u05D9 \u05D4\u05E7\u05D5\u05D3 \u05E0\u05DB\u05D5\u05E0\u05D9\u05DD.</span><span id="Puzzle_error1">\u05DB\u05DE\u05E2\u05D8! \u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \u05D0\u05D7\u05D3 \u05DC\u05D0 \u05E0\u05DB\u05D5\u05DF.</span><span id="Puzzle_error2">%1 \u05E7\u05D8\u05E2\u05D9 \u05E7\u05D5\u05D3 \u05D0\u05D9\u05E0\u05DD \u05E0\u05DB\u05D5\u05E0\u05D9\u05DD.</span><span id="Puzzle_tryAgain">\u05E7\u05D8\u05E2 \u05D4\u05E7\u05D5\u05D3 \u05D4\u05DE\u05D5\u05D3\u05D2\u05E9 \u05D0\u05D9\u05E0\u05D5 \u05E0\u05DB\u05D5\u05DF.\n\u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u05E4\u05D0\u05D6\u05DC', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u05D1\u05E9\u05D1\u05D9\u05DC \u05DB\u05DC \u05D7\u05D9\u05D4 (\u05D1\u05D9\u05E8\u05D5\u05E7), \u05E6\u05E8\u05E4\u05D5 \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4, \u05D1\u05D7\u05E8\u05D5 \u05D0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E8\u05D2\u05DC\u05D9\u05D9\u05DD \u05E9\u05DC\u05D4, \u05D5\u05E2\u05E9\u05D5 \u05E2\u05E8\u05DE\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05E9\u05DC\u05D4.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
