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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0BB5\u0BBE\u0BA4\u0BCD\u0BA4\u0BC1</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0B87\u0BB0\u0B95\u0BCD\u0B95\u0BC8</span><span id="Puzzle_animal1Trait2">\u0B85\u0BB2\u0B95\u0BC1</span><span id="Puzzle_animal1HelpUrl">https://ta.wikipedia.org/wiki/%E0%AE%B5%E0%AE%BE%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81</span><span id="Puzzle_animal2">\u0BAA\u0BC2\u0BA9\u0BC8</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0BAE\u0BC0\u0B9A\u0BC8</span><span id="Puzzle_animal2Trait2">\u0BAE\u0BC6\u0BA9\u0BCD\u0BAE\u0BAF\u0BBF\u0BB0\u0BCD</span><span id="Puzzle_animal2HelpUrl">https://ta.wikipedia.org/wiki/%E0%AE%AA%E0%AF%82%E0%AE%A9%E0%AF%88</span><span id="Puzzle_animal3">\u0BA4\u0BC7\u0BA9\u0BC0</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0BA4\u0BC7\u0BA9\u0BCD</span><span id="Puzzle_animal3Trait2">\u0B95\u0BCA\u0B9F\u0BCD\u0B9F\u0BBF</span><span id="Puzzle_animal3HelpUrl">https://ta.wikipedia.org/wiki/%E0%AE%A4%E0%AF%87%E0%AE%A9%E0%AF%80</span><span id="Puzzle_animal4">\u0BA8\u0BA4\u0BCD\u0BA4\u0BC8</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0BA8\u0BA4\u0BCD\u0BA4\u0BC8</span><span id="Puzzle_animal4Trait2">\u0B95\u0BCB\u0BB4\u0BC8</span><span id="Puzzle_animal4HelpUrl">https://ta.wikipedia.org/wiki/\u0BA8\u0BA4\u0BCD\u0BA4\u0BC8</span><span id="Puzzle_picture">\u0BAA\u0B9F\u0BAE\u0BCD:</span><span id="Puzzle_legs">\u0B95\u0BBE\u0BB2\u0BCD\u0B95\u0BB3\u0BCD:</span><span id="Puzzle_legsChoose">\u0BA4\u0BC7\u0BB0\u0BCD\u0B95...</span><span id="Puzzle_traits">\u0BAA\u0BA3\u0BCD\u0BAA\u0BC1\u0B95\u0BCD\u0B95\u0BC2\u0BB1\u0BC1\u0B95\u0BB3\u0BCD:</span><span id="Puzzle_error0">\u0B85\u0BB1\u0BCD\u0BAA\u0BC1\u0BA4\u0BAE\u0BCD. \u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 %1 \u0B95\u0B9F\u0BCD\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0BAE\u0BCD \u0B9A\u0BB0\u0BBF\u0BAF\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1.</span><span id="Puzzle_error1">\u0BA8\u0BC7\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BBF\u0BAF\u0BBE\u0B9A\u0BCD\u0B9A\u0BC1, \u0B92\u0BA9\u0BCD\u0BB1\u0BC1 \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BB4\u0BC8!</span><span id="Puzzle_error2">%1 \u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB4\u0BC8</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0BAA\u0BC1\u0BA4\u0BBF\u0BB0\u0BCD', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0BB5\u0BBF\u0B9F\u0BC8\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BCB\u0BA4\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
