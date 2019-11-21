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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">\u0A1A\u0A41\u0A23\u0A4B...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u0A2C\u0A39\u0A41\u0A24 \u0A35\u0A27\u0A40\u0A06!\n\u0A38\u0A3E\u0A30\u0A47 $1 \u0A2C\u0A32\u0A3E\u0A15 \u0A38\u0A39\u0A40 \u0A39\u0A28\u0964</span><span id="Puzzle_error1">\u0A2C\u0A38 \u0A39\u0A4B \u0A17\u0A3F\u0A06 \u0A38\u0A40! \u0A07\u0A71\u0A15 \u0A2C\u0A32\u0A3E\u0A15 \u0A17\u0A3C\u0A32\u0A24 \u0A38\u0A40\u0964</span><span id="Puzzle_error2">%1 \u0A2C\u0A32\u0A3E\u0A15 \u0A17\u0A3C\u0A32\u0A24 \u0A39\u0A28\u0964</span><span id="Puzzle_tryAgain">\u0A09\u0A71\u0A2D\u0A30\u0A3F\u0A06 \u0A39\u0A4B\u0A07\u0A06 \u0A2C\u0A32\u0A3E\u0A15 \u0A17\u0A3C\u0A32\u0A24 \u0A39\u0A48\u0964\n\u0A15\u0A4B\u0A38\u0A3C\u0A3F\u0A38\u0A3C \u0A15\u0A30\u0A26\u0A47 \u0A30\u0A39\u0A4B\u0964</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0A2C\u0A41\u0A1D\u0A3E\u0A30\u0A24', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0A1C\u0A41\u0A06\u0A2C \u0A1A\u0A48\u0A71\u0A15 \u0A15\u0A30\u0A4B</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
