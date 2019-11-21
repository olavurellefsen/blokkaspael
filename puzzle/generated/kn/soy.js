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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0CAC\u0CBE\u0CA4\u0CC1\u0C95\u0CCB\u0CB3\u0CBF</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0C97\u0CB0\u0CBF\u0C97\u0CB3\u0CC1</span><span id="Puzzle_animal1Trait2">\u0C95\u0CCA\u0C95\u0CCD\u0C95\u0CC1</span><span id="Puzzle_animal1HelpUrl">https://kn.wikipedia.org/wiki/\u0CAC\u0CBE\u0CA4\u0CC1\u0C95\u0CCB\u0CB3\u0CBF</span><span id="Puzzle_animal2">\u0CAC\u0CC6\u0C95\u0CCD\u0C95\u0CC1</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0CAE\u0CC0\u0CB8\u0CC6</span><span id="Puzzle_animal2Trait2">\u0CA4\u0CC1\u0CAA\u0CCD\u0CAA\u0CB3</span><span id="Puzzle_animal2HelpUrl">https://kn.wikipedia.org/wiki/\u0CAC\u0CC6\u0C95\u0CCD\u0C95\u0CC1</span><span id="Puzzle_animal3">\u0C9C\u0CC7\u0CA8\u0CC1\u0CA8\u0CCA\u0CA3</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0C9C\u0CC7\u0CA8\u0CC1\u0CA4\u0CC1\u0CAA\u0CCD\u0CAA</span><span id="Puzzle_animal3Trait2">\u0C95\u0CC1\u0C9F\u0CC1\u0C95\u0CC1\u0CB5</span><span id="Puzzle_animal3HelpUrl">https://kn.wikipedia.org/wiki/\u0C9C\u0CC7\u0CA8\u0CC1_\u0CB9\u0CC1\u0CB3\u0CC1</span><span id="Puzzle_animal4">\u0CAC\u0CB8\u0CB5\u0CA8 \u0CB9\u0CC1\u0CB3\u0CC1</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0C9A\u0CBF\u0CAA\u0CCD\u0CAA\u0CC1</span><span id="Puzzle_animal4Trait2">\u0C9C\u0CBF\u0C97\u0CC1\u0C9F\u0CC1</span><span id="Puzzle_animal4HelpUrl">https://kn.wikipedia.org/wiki/\u0CAC\u0CB8\u0CB5\u0CA8_\u0CB9\u0CC1\u0CB3\u0CC1</span><span id="Puzzle_picture">\u0C9A\u0CBF\u0CA4\u0CCD\u0CB0:</span><span id="Puzzle_legs">\u0C95\u0CBE\u0CB2\u0CC1\u0C97\u0CB3\u0CC1:</span><span id="Puzzle_legsChoose">\u0C86\u0CB0\u0CBF\u0CB8\u0CBF...</span><span id="Puzzle_traits">\u0CB2\u0C95\u0CCD\u0CB7\u0CA3\u0C97\u0CB3\u0CC1:</span><span id="Puzzle_error0">\u0C85\u0CA4\u0CCD\u0CAF\u0CC1\u0CA4\u0CCD\u0CA4\u0CAE!\\n\u0C8E\u0CB2\u0CCD\u0CB2 %1 \u0CAC\u0CCD\u0CB2\u0CBE\u0C95\u0CCD \u0C97\u0CB3\u0CC1 \u0CB8\u0CB0\u0CBF\u0CAF\u0CBE\u0C97\u0CBF\u0CB5\u0CC6.</span><span id="Puzzle_error1">\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95! \u0C92\u0C82\u0CA6\u0CC1 \u0CAC\u0CCD\u0CB2\u0CBE\u0C95\u0CCD \u0CB8\u0CB0\u0CBF \u0C87\u0CB2\u0CCD\u0CB2.</span><span id="Puzzle_error2">%1 \u0CAC\u0CCD\u0CB2\u0CBE\u0C95\u0CCD \u0C97\u0CB3\u0CC1 \u0CB8\u0CB0\u0CBF \u0C87\u0CB2\u0CCD\u0CB2.</span><span id="Puzzle_tryAgain">\u0C87\u0CB2\u0CCD\u0CB2\u0CBF \u0CAA\u0CCD\u0CB0\u0C95\u0CBE\u0CB6\u0CBF\u0CB8\u0CBF\u0CB0\u0CC1\u0CB5 \u0CAC\u0CCD\u0CB2\u0CBE\u0C95\u0CCD \u0CB8\u0CB0\u0CBF \u0C87\u0CB2\u0CCD\u0CB2.\n\u0C87\u0CA8\u0CCD\u0CA8\u0CCA\u0CAE\u0CCD\u0CAE\u0CC6 \u0CAA\u0CCD\u0CB0\u0CAF\u0CA4\u0CCD\u0CA8\u0CBF\u0CB8\u0CBF.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0C92\u0C97\u0C9F\u0CC1', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0C89\u0CA4\u0CCD\u0CA4\u0CB0\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CBF</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0CAA\u0CCD\u0CB0\u0CA4\u0CBF \u0CAA\u0CCD\u0CB0\u0CBE\u0CA3\u0CBF\u0CAF(\u0CB9\u0CB8\u0CBF\u0CB0\u0CC1) \u0C9A\u0CBF\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB2\u0C97\u0CA4\u0CCD\u0CA4\u0CBF\u0CB8\u0CBF, \u0C85\u0CA6\u0CB0 \u0C95\u0CBE\u0CB2\u0CC1\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0C8E\u0CA3\u0CBF\u0CB8\u0CBF \u0C86\u0CAF\u0CCD\u0C95\u0CC6\u0CAE\u0CBE\u0CA1\u0CBF, \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 \u0C85\u0CA6\u0CB0 \u0CB5\u0CBF\u0CB6\u0CBF\u0CB7\u0CCD\u0C9F \u0CB8\u0CCD\u0CB5\u0CAD\u0CBE\u0CB5\u0C97\u0CB3 \u0CB8\u0C82\u0C97\u0CCD\u0CB0\u0CB9 \u0CAE\u0CBE\u0CA1\u0CBF.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
