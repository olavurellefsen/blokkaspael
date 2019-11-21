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
  return '<div style="display: none"><span id="Puzzle_animal1">\u09B9\u09BE\u0981\u09B8</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u09AA\u09BE\u09B2\u0995</span><span id="Puzzle_animal1Trait2">\u09A0\u09CB\u0981\u099F</span><span id="Puzzle_animal1HelpUrl">https://bn.wikipedia.org/wiki/\u09B9\u09BE\u0981\u09B8</span><span id="Puzzle_animal2">\u09AC\u09BF\u09A1\u09BC\u09BE\u09B2</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0997\u09CB\u0981\u09AB</span><span id="Puzzle_animal2Trait2">\u09AA\u09B6\u09AE</span><span id="Puzzle_animal2HelpUrl">https://bn.wikipedia.org/wiki/\u09AC\u09BF\u09A1\u09BC\u09BE\u09B2</span><span id="Puzzle_animal3">\u09AE\u09CC\u09AE\u09BE\u099B\u09BF</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u09AE\u09A7\u09C1</span><span id="Puzzle_animal3Trait2">\u09AA\u09CB\u0995\u09BE\u09B0 \u0986\u09B2</span><span id="Puzzle_animal3HelpUrl">https://bn.wikipedia.org/wiki/\u09AE\u09CC\u09AE\u09BE\u099B\u09BF</span><span id="Puzzle_animal4">\u09B6\u09BE\u09AE\u09C1\u0995</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0996\u09CB\u09B2</span><span id="Puzzle_animal4Trait2">\u0986\u09A0\u09BE\u09B2\u09CB</span><span id="Puzzle_animal4HelpUrl">https://bn.wikipedia.org/wiki/\u09B6\u09BE\u09AE\u09C1\u0995</span><span id="Puzzle_picture">\u099B\u09AC\u09BF:</span><span id="Puzzle_legs">\u09AA\u09BE:</span><span id="Puzzle_legsChoose">\u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C1\u09A8...</span><span id="Puzzle_traits">\u09AC\u09C8\u09B6\u09BF\u09B7\u09CD\u099F\u09CD\u09AF:</span><span id="Puzzle_error0">\u09A8\u09BF\u0996\u09C1\u0981\u09A4!\n\u09B8\u0995\u09B2 %1 \u09AC\u09CD\u09B2\u0995 \u09B8\u09A0\u09BF\u0995\u0964</span><span id="Puzzle_error1">\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09B8\u09AC \u09A0\u09BF\u0995! \u098F\u0995\u099F\u09BF \u09AC\u09CD\u09B2\u0995 \u09AD\u09C1\u09B2\u0964</span><span id="Puzzle_error2">%1 \u09AC\u09CD\u09B2\u0995 \u09AD\u09C1\u09B2\u0964</span><span id="Puzzle_tryAgain">\u09AC\u09BF\u09B6\u09C7\u09B7 \u09B8\u09CD\u09AA\u09B7\u09CD\u099F \u09AC\u09CD\u09B2\u0995\u099F\u09BF \u09B8\u09A0\u09BF\u0995 \u09A8\u09AF\u09BC\u0964 \u0985\u09BE\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u09A7\u09BE\u0981\u09A7\u09BE', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0989\u09A4\u09CD\u09A4\u09B0 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C1\u09A8</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09BE\u09A3\u09C0\u09B0 (\u09B8\u09AC\u09C1\u099C) \u099C\u09A8\u09CD\u09AF, \u09A4\u09BE\u09B0 \u099B\u09AC\u09BF \u09B8\u0982\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8, \u09AA\u09BE\u09AF\u09BC\u09C7\u09B0 \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09A0\u09BF\u0995 \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u09A4\u09BE\u09B0 \u09AC\u09C8\u09B6\u09BF\u09B7\u09CD\u099F\u09CD\u09AF\u0997\u09C1\u09B2\u09CB \u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8\u0964</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
