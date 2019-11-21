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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0645\u0631\u062E \u0626\u0627\u0648\u0648\u06CC/\u0645\u0631\u063A\u0627\u0628\u06CC</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u067E\u0631 \u0648 \u0628\u0627\u0644</span><span id="Puzzle_animal1Trait2">\u0646\u0624\u06A9</span><span id="Puzzle_animal1HelpUrl">https://lki.wikipedia.org/wiki/\u0645\u0631\u062E \u0626\u0627\u0648\u0648\u06CC</span><span id="Puzzle_animal2">\u067E\u0650\u0634\u06CC</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0631\u06CC\u0634/\u067E\u0631\u0650\u0686</span><span id="Puzzle_animal2Trait2">\u067E\u0648\u0633\u062A\u06CC\u0646</span><span id="Puzzle_animal2HelpUrl">https://lki.wikipedia.org/wiki/\u067E\u0650\u0634\u06CC</span><span id="Puzzle_animal3">\u06AF\u0624\u0646\u062C/\u0632\u0629\u0646\u0628\u0648\u0631</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0647\u0629\u0633\u0629\u0644</span><span id="Puzzle_animal3Trait2">\u0646\u06CC\u0634 \u062D\u0634\u0631\u0629\u0644</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/\u06AF\u0624\u0650\u0646\u062C</span><span id="Puzzle_animal4">\u0698\u0626\u0631\u0633\u0629\u0631 \u0645\u0627\u0631/\u062D\u0629\u0644\u0629\u0632\u0648\u0648\u0646</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u062A\u0648\u0648\u06A9/\u067E\u0648\u0633\u062A\u0647</span><span id="Puzzle_animal4Trait2">\u062E\u0632\u06CC\u062F\u0646</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/(\u062A\u0648\u0648\u06A9(\u067E\u0648\u0633\u062A\u0647</span><span id="Puzzle_picture">\u0639\u0629\u0633\u06AF:</span><span id="Puzzle_legs">\u067E\u0627\u0647\u0627:</span><span id="Puzzle_legsChoose">\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0629\u0646...</span><span id="Puzzle_traits">\u0648\u06CC\u0698\u06AF\u06CC:</span><span id="Puzzle_error0">\u0639\u0627\u0644\u06CC!\n\u0647\u0631 %1 \u0628\u0644\u0648\u06A9 \u062F\u0631\u0633\u062A \u0627\u0633\u062A.</span><span id="Puzzle_error1">\u062A\u0642\u0631\u06CC\u0628\u0627! \u06CC\u06A9 \u0628\u0644\u0648\u06A9 \u0646\u0627\u062F\u0631\u0633\u062A \u0627\u0633\u062A.</span><span id="Puzzle_error2">%1 \u0628\u0644\u0648\u06A9 \u0646\u0627\u062F\u0631\u0633\u062A \u0627\u0633\u062A.</span><span id="Puzzle_tryAgain">\u0628\u0644\u0648\u06A9 \u067E\u0631\u0631\u0646\u06AF \u0634\u062F\u0647 \u062F\u0631\u0633\u062A \u0646\u06CC\u0633\u062A.\n\u0645\u062C\u062F\u062F\u0627 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u067E\u0627\u0632\u0644', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0628\u0631\u0631\u0633\u06CC \u067E\u0627\u0633\u062E</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0628\u0631\u0627\u06CC \u0647\u0631 \u062C\u0627\u0646\u0648\u0631 (\u0633\u0628\u0632)\u060C \u062F\u0631 \u06A9\u0646\u0627\u0631 \u062A\u0635\u0648\u06CC\u0631\u0634\u0627\u0646\u060C \u062A\u0639\u062F\u0627\u062F\u067E\u0627\u0647\u0627 \u0631\u0627 \u0645\u0634\u062E\u0635 \u06A9\u0646\u06CC\u062F \u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0622\u0646 \u0631\u0627 \u0645\u0634\u062E\u0635 \u06A9\u0646\u06CC\u062F.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
