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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">\u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u0DC0\u0DD2\u0DC1\u0DD2\u0DC2\u0DCA\u0DA8\u0DBA\u0DD2!\n\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 %1 \u0D9A\u0DDC\u0DA7\u0DC3\u0DCA \u0DB1\u0DD2\u0DC0\u0DBB\u0DAF\u0DD2\u0DBA\u0DD2.</span><span id="Puzzle_error1">\u0DB6\u0DDC\u0DC4\u0DDD \u0DAF\u0DD4\u0DBB\u0DA7 \u0DB1\u0DD2\u0DC0\u0DBB\u0DAF\u0DD2\u0DBA\u0DD2!\u0D91\u0D9A\u0DCA \u0D9A\u0DDC\u0DA7\u0DC3\u0D9A\u0DCA \u0DC0\u0DD0\u0DBB\u0DAF\u0DD2\u0DBA\u0DD2.</span><span id="Puzzle_error2">%1 \u0D9A\u0DDC\u0DA7\u0DC3\u0DCA \u0DC0\u0DD0\u0DBB\u0DAF\u0DD2\u0DBA\u0DD2.</span><span id="Puzzle_tryAgain">\u0D89\u0DC3\u0DCA\u0DB8\u0DAD\u0DD4 \u0D9A\u0DBD \u0D9A\u0DDC\u0DA7\u0DC3\u0DCA \u0DC0\u0DD0\u0DBB\u0DAF\u0DD2\u0DBA\u0DD2.\u0D8B\u0DAD\u0DCA\u0DC3\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0DB4\u0DD2\u0DC5\u0DD2\u0DAD\u0DD4\u0DBB\u0DD4 \u0DB4\u0DBB\u0DD2\u0D9A\u0DCA\u0DC2\u0DCF \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
