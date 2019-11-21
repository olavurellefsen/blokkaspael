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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0CAC\u0CBE\u0CA4\u0CCD\u200D\u0C95\u0CCB\u0CB0\u0CBF</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0CB8\u0CC1\u0CAF\u0CBF\u0C95\u0CC1\u0CB2\u0CC1</span><span id="Puzzle_animal1Trait2">\u0C95\u0CCA\u0C95\u0CCD\u0C95\u0CC1</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/\u0CAC\u0CBE\u0CA4\u0CCD\u200C\u0C95\u0CCB\u0CB0\u0CBF</span><span id="Puzzle_animal2">\u0CAA\u0CC1\u0C9A\u0CCD\u0C9A\u0CC6</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0CAE\u0CC0\u0CB8\u0CC6</span><span id="Puzzle_animal2Trait2">\u0C85\u0CAE\u0CC6\u0CB8\u0CC1\u0CAF\u0CBF</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/\u0CAA\u0CC1\u0C9A\u0CCD\u0C9A\u0CC6</span><span id="Puzzle_animal3">\u0C9A\u0CC0\u0CAF\u0CCA\u0CA6 \u0C95\u0CC6\u0CB2\u0CC6\u0C82\u0C9C\u0CBF</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0C9A\u0CC0\u0CAF\u0CCA</span><span id="Puzzle_animal3Trait2">\u0C95\u0CCA\u0CA1\u0CAA\u0CCD\u0CAA\u0CC1</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/\u0C9A\u0CC0\u0CAF\u0CCA</span><span id="Puzzle_animal4">\u0CAA\u0CC1\u0CB5\u0CCA\u0C9A\u0CCD\u0C9A\u0CBF</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0C95\u0CCB\u0CB2\u0CCD\u200D\u0C9A\u0CBF\u0CAA\u0CCD\u0CAA\u0CBF</span><span id="Puzzle_animal4Trait2">\u0C95\u0CC6\u0CB8\u0CB0\u0CCD</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/\u0CAA\u0CC2\u0CB5\u0CCA\u0C9A\u0CCD\u0C9A\u0CBF</span><span id="Puzzle_picture">\u0C9A\u0CBF\u0CA4\u0CCD\u0CB0\u0CCA:</span><span id="Puzzle_legs">\u0C95\u0CBE\u0CB0\u0CCD\u200D\u0CB2\u0CC1:</span><span id="Puzzle_legsChoose">\u0CAA\u0CC6\u0C9C\u0CCD...</span><span id="Puzzle_traits">\u0CB2\u0C9A\u0CCD\u0C9A\u0CA8\u0CCA\u0CB2\u0CC1:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0C92\u0C97\u0C9F\u0CCD\u200D', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Check Answers</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
