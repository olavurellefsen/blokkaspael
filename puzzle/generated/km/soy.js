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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u179B\u17D2\u17A2\u178E\u17B6\u179F\u17CB!\n\u1795\u17D2\u1782\u17BB\u17C6\u178F\u17D2\u179A\u17BC\u179C\u1794\u17D2\u179B\u17BB\u1780\u1785\u17C6\u1793\u17BD\u1793%1\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u17A0\u17BE\u1799\u17D4</span><span id="Puzzle_error1">\u1787\u17B7\u178F\u17A0\u17BE\u1799\u17D7! \u1793\u17C5\u179F\u179B\u17CB\u178F\u17C2\u1794\u17D2\u179B\u17BB\u1780\u1798\u17BD\u1799\u1791\u17C0\u178F\u1798\u17B7\u1793\u1791\u17B6\u1793\u17CB\u178F\u17D2\u179A\u17BC\u179C\u17D4</span><span id="Puzzle_error2">\u1793\u17C5\u179F\u179B\u17CB\u1794\u17D2\u179B\u17BB\u1780\u1785\u17C6\u1793\u17BD\u1793 %1 \u1791\u17C0\u178F\u1798\u17B7\u1793\u1791\u17B6\u1793\u17CB\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D4</span><span id="Puzzle_tryAgain">\u1794\u17D2\u179B\u17BB\u1780\u178A\u17C2\u179B\u178A\u17B6\u1780\u17CB\u1796\u178E\u17CC\u17A0\u17CA\u17BB\u17C6\u1798\u17B7\u1793\u1791\u17B6\u1793\u17CB\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1791\u17C1\u17D4\n\u179F\u17BC\u1798\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1794\u1793\u17D2\u178F\u17D4</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u179B\u17D2\u1794\u17C2\u1784\u1795\u17D2\u1782\u17BB\u17C6\u1794\u17D2\u179B\u17BB\u1780', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u1785\u1798\u17D2\u179B\u17BE\u1799</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
