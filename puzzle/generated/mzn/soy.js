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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">\u0686\u06CC\u0646\u0647...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u062E\u0627\u0631\u0647!\n\u062A\u0645\u0648\u0645  %1 \u0628\u0644\u0648\u06A9\u200C\u0647\u0627 \u062F\u0631\u0633\u062A \u0647\u0633\u062A\u0647.</span><span id="Puzzle_error1">\u062A\u0642\u0631\u06CC\u0628\u0627\u064B! \u0627\u062A\u0627 \u0628\u0644\u0648\u06A9 \u063A\u0644\u0637\u0647.</span><span id="Puzzle_error2"> %1 \u0628\u0644\u0648\u06A9\u200C\u0647\u0627 \u063A\u0644\u0637 \u0647\u0633\u062A\u0646\u0647.</span><span id="Puzzle_tryAgain">\u067E\u0631\u0631\u0646\u06AF \u0628\u0644\u0648\u06A9 \u063A\u0644\u0637\u0647.\n\u0627\u064E\u06CC \u062F\u0650\u0628\u0627\u0631\u0647 \u062A\u0650\u0644\u0627\u0634 \u0647\u0627\u06A9\u0646.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u067E\u0627\u0632\u0644', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u062C\u0648\u0627\u0628\u0650 \u0628\u0631\u0631\u0633\u06CC</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
