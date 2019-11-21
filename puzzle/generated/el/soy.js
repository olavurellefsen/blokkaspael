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
  return '<div style="display: none"><span id="Puzzle_animal1">\u03A0\u03AC\u03C0\u03B9\u03B1</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u03A6\u03C4\u03B5\u03C1\u03AC</span><span id="Puzzle_animal1Trait2">\u03A1\u03AC\u03BC\u03C6\u03BF\u03C2</span><span id="Puzzle_animal1HelpUrl">https://el.wikipedia.org/wiki/%CE%A0%CE%AC%CF%80%CE%B9%CE%B1</span><span id="Puzzle_animal2">\u0393\u03AC\u03C4\u03B1</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u039C\u03BF\u03C5\u03C3\u03C4\u03AC\u03BA\u03B9\u03B1</span><span id="Puzzle_animal2Trait2">\u0393\u03BF\u03CD\u03BD\u03B1</span><span id="Puzzle_animal2HelpUrl">https://el.wikipedia.org/wiki/%CE%93%CE%AC%CF%84%CE%B1</span><span id="Puzzle_animal3">\u039C\u03AD\u03BB\u03B9\u03C3\u03C3\u03B1</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u039C\u03AD\u03BB\u03B9</span><span id="Puzzle_animal3Trait2">\u039A\u03B5\u03BD\u03C4\u03C1\u03AF</span><span id="Puzzle_animal3HelpUrl">https://el.wikipedia.org/wiki/%CE%9C%CE%AD%CE%BB%CE%B9%CF%83%CF%83%CE%B1</span><span id="Puzzle_animal4">\u03A3\u03B1\u03BB\u03B9\u03B3\u03BA\u03AC\u03C1\u03B9</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u039A\u03AD\u03BB\u03C5\u03C6\u03BF\u03C2</span><span id="Puzzle_animal4Trait2">\u0393\u03BB\u03AF\u03C4\u03C3\u03B1</span><span id="Puzzle_animal4HelpUrl">https://el.wikipedia.org/wiki/%CE%A3%CE%B1%CE%BB%CE%B9%CE%B3%CE%BA%CE%AC%CF%81%CE%B9</span><span id="Puzzle_picture">\u03B5\u03B9\u03BA\u03CC\u03BD\u03B1:</span><span id="Puzzle_legs">\u03C0\u03CC\u03B4\u03B9\u03B1:</span><span id="Puzzle_legsChoose">\u03B4\u03B9\u03AC\u03BB\u03B5\u03BE\u03B5...</span><span id="Puzzle_traits">\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC:</span><span id="Puzzle_error0">\u03A4\u03AD\u03BB\u03B5\u03B9\u03B1!\n\u039A\u03B1\u03B9 \u03C4\u03B1 %1 \u03BC\u03C0\u03BB\u03BF\u03BA \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03C9\u03C3\u03C4\u03AC.</span><span id="Puzzle_error1">\u03A3\u03C7\u03B5\u03B4\u03CC\u03BD! \u0388\u03BD\u03B1 \u03BC\u03C0\u03BB\u03BF\u03BA \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BB\u03AC\u03B8\u03BF\u03C2.</span><span id="Puzzle_error2">%1 \u03BC\u03C0\u03BB\u03BF\u03BA \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BB\u03AC\u03B8\u03BF\u03C2.</span><span id="Puzzle_tryAgain">\u03A4\u03BF \u03B5\u03C0\u03B9\u03C3\u03B7\u03BC\u03B1\u03C3\u03BC\u03AD\u03BD\u03BF \u03BC\u03C0\u03BB\u03BF\u03BA \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03C9\u03C3\u03C4\u03CC.\n\u03A3\u03C5\u03BD\u03AD\u03C7\u03B9\u03C3\u03B5 \u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03C3\u03C0\u03AC\u03B8\u03B5\u03B9\u03B1.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u03A0\u03B1\u03B6\u03BB', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0388\u03BB\u03B5\u03B3\u03BE\u03B5 \u03C4\u03B9\u03C2 \u03B1\u03C0\u03B1\u03BD\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0393\u03B9\u03B1 \u03BA\u03AC\u03B8\u03B5 \u03B6\u03CE\u03BF (\u03C0\u03C1\u03AC\u03C3\u03B9\u03BD\u03B1 \u03BC\u03C0\u03BB\u03BF\u03BA), \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B5 \u03C4\u03B7\u03BD \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 \u03C4\u03BF\u03C5, \u03B4\u03B9\u03AC\u03BB\u03B5\u03BE\u03B5 \u03C4\u03B1 \u03C0\u03CC\u03B4\u03B9\u03B1 \u03C4\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03BA\u03AC\u03BD\u03B5 \u03BC\u03B9\u03B1 \u03C3\u03C4\u03BF\u03AF\u03B2\u03B1 \u03BC\u03B5 \u03C4\u03B1 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC \u03C4\u03BF\u03C5.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
