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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0628\u062F\u06AA</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u06A9\u0646\u0680</span><span id="Puzzle_animal1Trait2">\u0686\u0646\u0647\u0628</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/\u0628\u062F\u06AA</span><span id="Puzzle_animal2">\u067B\u0644\u064A</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0634\u06BE\u067E\u0631</span><span id="Puzzle_animal2Trait2">\u067E\u0634\u0645</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/\u067B\u0644\u064A</span><span id="Puzzle_animal3">\u0645\u06A9</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0645\u0627\u06A9\u064A</span><span id="Puzzle_animal3Trait2">\u068F\u0646\u06AF\u064A\u0646\u062F\u0699</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/\u0645\u06A9</span><span id="Puzzle_animal4">\u0633\u0633\u062A</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u06A9\u0648\u067E\u0648</span><span id="Puzzle_animal4Trait2">\u06AF\u067E</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u062A\u0635\u0648\u064A\u0631:</span><span id="Puzzle_legs">\u067D\u0646\u06AF\u0648\u0646:</span><span id="Puzzle_legsChoose">\u0686\u0648\u0646\u068A\u064A\u0648...</span><span id="Puzzle_traits">\u0644\u06AA\u064A\u0631\u0648\u0646</span><span id="Puzzle_error0">\u0632\u0628\u0631\u062F\u0633\u062A!\n\u0633\u0628 %1 \u0628\u0644\u0627\u06AA\u0648\u0646 \u062F\u0631\u0633\u062A \u0622\u06BE\u0646.</span><span id="Puzzle_error1">\u0644\u06B3 \u0680\u06B3! \u06BE\u06AA \u0628\u0644\u0627\u06AA \u062F\u0631\u0633\u062A \u0646\u0627\u06BE\u064A.</span><span id="Puzzle_error2">%1 \u0628\u0644\u0627\u06AA \u062F\u0631\u0633\u062A \u0646\u0627\u06BE\u064A.</span><span id="Puzzle_tryAgain">\u0646\u0645\u0627\u064A\u0627\u0646 \u06AA\u064A\u0644 \u0628\u0644\u0627\u06AA \u062F\u0631\u0633\u062A \u0646\u0627\u06BE\u064A.\n\u06AA\u0648\u0634\u0634 \u06AA\u0646\u062F\u0627 \u0631\u06BE\u0648.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u06B3\u062C\u0647\u0627\u0631\u062A', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u062C\u0648\u0627\u0628 \u0686\u06AA\u0627\u0633\u064A\u0648</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u06BE\u0631 \u06BE\u06AA \u062C\u0627\u0646\u0648\u0631 (\u0633\u0627\u0626\u0648)\u060C \u0644\u0627\u0621\u0650 \u062A\u0635\u0648\u064A\u0631 \u0644\u06B3\u0627\u064A\u0648\u060C \u0627\u0646\u06BE\u0646 \u062C\u064A \u067D\u0646\u06AF\u0646 \u062C\u0648 \u062A\u0639\u062F\u0627\u062F \u067B\u068C\u0627\u064A\u0648\u060C \u06FD \u0627\u0646 \u062C\u064A \u062E\u0635\u0648\u0635\u064A\u062A\u0646 \u062C\u0648 \u0632\u062E\u064A\u0631\u0648 \u062C\u0648\u0699\u064A\u0648.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
