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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">\u0D24\u0D3F\u0D30\u0D1E\u0D4D\u0D1E\u0D46\u0D1F\u0D41\u0D15\u0D4D\u0D15\u0D41\u0D15:</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u0D15\u0D4A\u0D33\u0D4D\u0D33\u0D3E\u0D02!\n\u0D0E\u0D32\u0D4D\u0D32\u0D3E %1 \u0D24\u0D1F\u0D2F\u0D32\u0D41\u0D15\u0D33\u0D41\u0D02 \u0D36\u0D30\u0D3F\u0D2F\u0D3E\u0D23\u0D4D.</span><span id="Puzzle_error1">\u0D15\u0D41\u0D34\u0D2A\u0D4D\u0D2A\u0D2E\u0D3F\u0D32\u0D4D\u0D32! \u0D12\u0D30\u0D41 \u0D24\u0D1F\u0D2F\u0D7D \u0D36\u0D30\u0D3F\u0D2F\u0D32\u0D4D\u0D32.</span><span id="Puzzle_error2">%1 \u0D24\u0D1F\u0D2F\u0D32\u0D41\u0D15\u0D7E \u0D36\u0D30\u0D3F\u0D2F\u0D32\u0D4D\u0D32.</span><span id="Puzzle_tryAgain">\u0D2A\u0D4D\u0D30\u0D2E\u0D41\u0D16\u0D2E\u0D3E\u0D15\u0D4D\u0D15\u0D3F \u0D15\u0D3E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28 \u0D24\u0D1F\u0D2F\u0D7D \u0D36\u0D30\u0D3F\u0D2F\u0D32\u0D4D\u0D32.\n\u0D35\u0D40\u0D23\u0D4D\u0D1F\u0D41\u0D02 \u0D36\u0D4D\u0D30\u0D2E\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0D2A\u0D4D\u0D30\u0D39\u0D47\u0D33\u0D3F\u0D15', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0D09\u0D24\u0D4D\u0D24\u0D30\u0D19\u0D4D\u0D19\u0D7E \u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
