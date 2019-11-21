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
  return '<div style="display: none"><span id="Puzzle_animal1">\u9E2D\u5B50</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u7FBD\u6BDB</span><span id="Puzzle_animal1Trait2">\u5599</span><span id="Puzzle_animal1HelpUrl">https://zh.wikipedia.org/wiki/\u9E2D</span><span id="Puzzle_animal2">\u732B</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u80E1\u987B</span><span id="Puzzle_animal2Trait2">\u76AE\u6BDB</span><span id="Puzzle_animal2HelpUrl">https://zh.wikipedia.org/wiki/\u732B</span><span id="Puzzle_animal3">\u871C\u8702</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u8702\u871C</span><span id="Puzzle_animal3Trait2">\u87AB\u523A</span><span id="Puzzle_animal3HelpUrl">https://zh.wikipedia.org/wiki/\u871C\u8702</span><span id="Puzzle_animal4">\u8717\u725B</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u58F3</span><span id="Puzzle_animal4Trait2">\u9ECF\u6DB2</span><span id="Puzzle_animal4HelpUrl">https://zh.wikipedia.org/wiki/\u8717\u725B</span><span id="Puzzle_picture">\u7167\u7247\uFF1A</span><span id="Puzzle_legs">\u817F\uFF1A</span><span id="Puzzle_legsChoose">\u8BF7\u9009\u62E9...</span><span id="Puzzle_traits">\u7279\u5F81\uFF1A</span><span id="Puzzle_error0">\u5B8C\u7F8E\uFF01\u6240\u6709%1\u4E2A\u5757\u90FD\u51C6\u786E\u65E0\u8BEF\u3002</span><span id="Puzzle_error1">\u5DEE\u4E0D\u591A\u4E86\uFF01\u8FD8\u6709\u4E00\u4E2A\u5757\u6CA1\u6709\u586B\u5BF9\u3002</span><span id="Puzzle_error2">\u8FD8\u6709 %1 \u4E2A\u5757\u6CA1\u6709\u586B\u5BF9\u3002</span><span id="Puzzle_tryAgain">\u4E0D\u6B63\u786E\u7684\u5757\u5DF2\u7ECF\u9AD8\u4EAE\u663E\u793A\u4E86\uFF0C\u518D\u8BD5\u8BD5\u5427\u3002</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u62FC\u56FE', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u68C0\u67E5\u7B54\u6848</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u5BF9\u4E8E\u6BCF\u4E2A\u52A8\u7269\uFF08\u7EFF\u8272\uFF09\uFF0C\u4E3A\u5176\u6DFB\u52A0\u7167\u7247\u3001\u9009\u62E9\u817F\u7684\u6570\u91CF\uFF0C\u5E76\u4E14\u9009\u62E9\u5B83\u4EEC\u5404\u81EA\u7684\u8EAB\u4F53\u7279\u5F81\u3002</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
