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
  return '<div style="display: none"><span id="Puzzle_animal1">\u9D28\u5B50</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u7FBD\u6BDB</span><span id="Puzzle_animal1Trait2">\u9CE5\u5634</span><span id="Puzzle_animal1HelpUrl">https://zh.wikipedia.org/wiki/\u9D28</span><span id="Puzzle_animal2">\u8C93</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u9B0D\u9B1A</span><span id="Puzzle_animal2Trait2">\u6BDB\u76AE</span><span id="Puzzle_animal2HelpUrl">https://zh.wikipedia.org/wiki/\u8C93</span><span id="Puzzle_animal3">\u871C\u8702</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u8702\u871C</span><span id="Puzzle_animal3Trait2">\u8702\u523A</span><span id="Puzzle_animal3HelpUrl">https://zh.wikipedia.org/wiki/\u8702</span><span id="Puzzle_animal4">\u8778\u725B</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u8C9D\u6BBC</span><span id="Puzzle_animal4Trait2">\u9ECF\u6DB2</span><span id="Puzzle_animal4HelpUrl">https://zh.wikipedia.org/wiki/\u8778\u725B</span><span id="Puzzle_picture">\u5716\u7247\uFF1A</span><span id="Puzzle_legs">\u817F\uFF1A</span><span id="Puzzle_legsChoose">\u9078\u64C7\u2026</span><span id="Puzzle_traits">\u7279\u5FB5</span><span id="Puzzle_error0">\u592A\u5B8C\u7F8E\u4E86\uFF01\n\u6240\u6709\u7684 %1 \u500B\u5340\u584A\u90FD\u6B63\u78BA\u3002</span><span id="Puzzle_error1">\u5DEE\u4E0D\u591A\u4E86\uFF01\u53EA\u5269 1 \u500B\u7A4D\u6728\u4E0D\u6B63\u78BA\u3002</span><span id="Puzzle_error2">%1 \u500B\u5340\u584A\u4E0D\u6B63\u78BA\u3002</span><span id="Puzzle_tryAgain">\u9AD8\u4EAE\u986F\u793A\u7684\u5340\u584A\u4E0D\u6B63\u78BA\uFF0C\u518D\u8A66\u8A66\u770B\u3002</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u62FC\u5716', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u6AA2\u67E5\u7B54\u6848</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u70BA\u6BCF\u500B\u52D5\u7269\uFF08\u7DA0\u8272\uFF09\u52A0\u4E0A\u5B83\u7684\u5716\u7247\u3001\u9078\u64C7\u817F\u7684\u6578\u91CF\u4E26\u52A0\u5165\u5176\u64C1\u6709\u7684\u7279\u5FB5\u3002</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
