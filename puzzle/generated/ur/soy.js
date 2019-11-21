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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0628\u0637\u062E</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u067E\u0631</span><span id="Puzzle_animal1Trait2">\u0628\u06CC\u06A9</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">\u0628\u0644\u06CC</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0645\u0648\u0646\u0686\u06BE\u06CC\u06BA</span><span id="Puzzle_animal2Trait2">\u0628\u0627\u0644</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">\u0645\u06A9\u06BE\u06CC</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0634\u06C1\u062F</span><span id="Puzzle_animal3Trait2">\u0688\u0646\u06A9</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">\u0633\u0633\u062A</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0686\u06BE\u06CC\u0644\u06A9\u06C1</span><span id="Puzzle_animal4Trait2">\u0644\u0639\u0627\u0628</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u062A\u0635\u0648\u06CC\u0631:</span><span id="Puzzle_legs">:\u0679\u0627\u0646\u06AF\u06CC\u06BA</span><span id="Puzzle_legsChoose">...\u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA</span><span id="Puzzle_traits">:\u0639\u0644\u0627\u0645\u0627\u062A</span><span id="Puzzle_error0">\u0628\u06C1\u062A\u0631\u06CC\u0646!\n\u062A\u0645\u0627\u0645 1\u0641\u06CC\u0635\u062F%1  \u0628\u0644\u0627\u06A9\u0633 \u062F\u0631\u0633\u062A \u06C1\u06CC\u06BA.</span><span id="Puzzle_error1">\u0642\u0631\u06CC\u0628! \u0627\u06CC\u06A9 \u0628\u0644\u0627\u06A9 \u062F\u0631\u0633\u062A \u0646\u06C1\u06CC\u06BA\u06D4</span><span id="Puzzle_error2"> (%1) \u0641\u06CC\u0635\u062F1  \u0628\u0644\u0627\u06A9 \u062F\u0631\u0633\u062A \u0646\u06C1\u06CC\u06BA</span><span id="Puzzle_tryAgain">\u0646\u0645\u0627\u06CC\u0627\u06BA \u06A9\u0631\u062F\u06C1 \u0628\u0644\u0627\u06A9 \u0635\u062D\u06CC\u062D \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\n\u06A9\u0648\u0634\u0634 \u062C\u0627\u0631\u06CC \u0631\u06A9\u06BE\u06CC\u06BA</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u067E\u06C1\u06CC\u0644\u06CC', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u062C\u0648\u0627\u0628\u0627\u062A \u0686\u06CC\u06A9 \u06A9\u0631\u06CC\u06BA</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u06C1\u0631 \u062C\u0627\u0646\u0648\u0631 \u06A9\u06D2 \u0644\u0626\u06D2 (\u0633\u0628\u0632) \u0627\u0633 \u06A9\u06CC \u062A\u0635\u0648\u06CC\u0631 \u0633\u06D2 \u0645\u0646\u0633\u0644\u06A9 \u06A9\u0631\u06CC\u06BA\u060C \u0627\u0633 \u06A9\u06CC \u062A\u0639\u062F\u0627\u062F \u0645\u06CC\u06BA \u0679\u0627\u0646\u06AF\u0648\u06BA \u06A9\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0631\u06CC\u06BA \u0627\u0648\u0631 \u0627\u0633 \u06A9\u06CC \u0639\u0644\u0627\u0645\u0627\u062A \u06A9\u0627 \u0627\u06CC\u06A9 \u0627\u0633\u0679\u06CC\u06A9 \u0628\u0646\u0627\u0626\u06CC\u06BA</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
