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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0628\u0637\u0629</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0631\u064A\u0634</span><span id="Puzzle_animal1Trait2">\u0645\u0646\u0642\u0627\u0631</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">\u0642\u0637\u0629</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0634\u0627\u0631\u0628</span><span id="Puzzle_animal2Trait2">\u0641\u0631\u0648</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">\u0646\u062D\u0644\u0629</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0639\u0633\u0644</span><span id="Puzzle_animal3Trait2">\u0627\u0644\u0644\u0627\u0633\u0639</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">\u062D\u0644\u0632\u0648\u0646</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0635\u062F\u0641\u0629</span><span id="Puzzle_animal4Trait2">\u0645\u062E\u0627\u0637</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u0627\u0644\u0635\u0648\u0631\u0629:</span><span id="Puzzle_legs">\u0623\u0631\u062C\u0644:</span><span id="Puzzle_legsChoose">\u0627\u062E\u062A\u0631...</span><span id="Puzzle_traits">\u0633\u0645\u0629:</span><span id="Puzzle_error0">\u0645\u0645\u062A\u0627\u0632!\n\u0643\u0644 \u0627\u0644\u0643\u062A\u0644 %1 \u0635\u062D\u064A\u062D\u0629.</span><span id="Puzzle_error1">\u0627\u0642\u062A\u0631\u0628\u062A! \u0643\u062A\u0644\u0629 \u0648\u0627\u062D\u062F\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D.</span><span id="Puzzle_error2">%1 \u0643\u062A\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629.</span><span id="Puzzle_tryAgain">\u0627\u0644\u0643\u062A\u0644\u0651\u0629 \u0627\u0644\u0645\u064F\u0628\u0631\u064E\u0632\u064E\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629.\n\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0623\u062D\u062C\u064A\u0629', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u062A\u062D\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0625\u062C\u0627\u0628\u0627\u062A</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0644\u0643\u0644 \u062D\u064A\u0648\u0627\u0646(\u0628\u0627\u0644\u0623\u062E\u0636\u0631) \u0635\u0644 \u0635\u0648\u0631\u062A\u0647 \u0648 \u0627\u062E\u062A\u0631 \u0639\u062F\u062F \u0627\u0631\u062C\u0644\u0647 \u0648 \u0627\u062C\u0645\u0639 \u0633\u0645\u0627\u062A\u0647.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
