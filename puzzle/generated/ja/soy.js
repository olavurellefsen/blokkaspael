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
  return '<div style="display: none"><span id="Puzzle_animal1">\u30A2\u30D2\u30EB</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u7FBD\u6BDB</span><span id="Puzzle_animal1Trait2">\u304F\u3061\u3070\u3057</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">\u732B</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u30D2\u30B2</span><span id="Puzzle_animal2Trait2">\u6BDB\u76AE</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">\u30CF\u30C1</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u30CF\u30C1\u30DF\u30C4</span><span id="Puzzle_animal3Trait2">\u30CF\u30EA</span><span id="Puzzle_animal3HelpUrl">https://ja.wikipedia.org/wiki/\u30CF\u30C1</span><span id="Puzzle_animal4">\u30AB\u30BF\u30C4\u30E0\u30EA</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u30AB\u30E9</span><span id="Puzzle_animal4Trait2">\u30B9\u30E9\u30A4\u30E0</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u7D75:</span><span id="Puzzle_legs">\u8DB3:</span><span id="Puzzle_legsChoose">\u9078\u3093\u3067\u304F\u3060\u3055\u3044...</span><span id="Puzzle_traits">\u7279\u3061\u3087\u3046:</span><span id="Puzzle_error0">\u5B8C\u307A\u304D\u3067\u3059!\n%1 \u500B\u306E\u30D6\u30ED\u30C3\u30AF\u304C\u5168\u554F\u6B63\u89E3\u3067\u3059\u3002</span><span id="Puzzle_error1">\u60DC\u3057\u3044! 1 \u500B\u306E\u30D6\u30ED\u30C3\u30AF\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059\u3002</span><span id="Puzzle_error2">%1 \u500B\u306E\u30D6\u30ED\u30C3\u30AF\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059\u3002</span><span id="Puzzle_tryAgain">\u5F37\u8ABF\u3055\u308C\u3066\u3044\u308B\u30D6\u30ED\u30C3\u30AF\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002\n\u304C\u3093\u3070\u3063\u3066\u304F\u3060\u3055\u3044\u3002</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u30D1\u30BA\u30EB', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u7B54\u3048\u5408\u308F\u305B</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u305D\u308C\u305E\u308C\u306E\u52D5\u7269 (\u7DD1) \u306B\u3064\u3044\u3066\u3001\u7D75\u3092\u3064\u306A\u3052\u3066\u3001\u8DB3\u306E\u6570\u3092\u9078\u3093\u3067\u3001\u5F62\u8CEA\u3092\u4E26\u3079\u3066\u304F\u3060\u3055\u3044\u3002</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
