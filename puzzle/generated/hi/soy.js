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
  return '<div style="display: none"><span id="Puzzle_animal1">\u092A\u0902\u0916</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u092A\u0902\u0916</span><span id="Puzzle_animal1Trait2">\u091A\u094B\u0902\u091A</span><span id="Puzzle_animal1HelpUrl">https://hi.wikipedia.org/wiki/\u092C\u0924\u094D\u0924\u0916</span><span id="Puzzle_animal2">\u092C\u093F\u0932\u094D\u0932\u0940</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u092E\u0942\u0902\u091B</span><span id="Puzzle_animal2Trait2">\u092B\u0930</span><span id="Puzzle_animal2HelpUrl">https://hi.wikipedia.org/wiki/\u092C\u093F\u0932\u094D\u0932\u0940</span><span id="Puzzle_animal3">\u092E\u0927\u0941\u092E\u0915\u094D\u0916\u0940</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0936\u0939\u0926</span><span id="Puzzle_animal3Trait2">\u0921\u0902\u0915</span><span id="Puzzle_animal3HelpUrl">https://hi.wikipedia.org/wiki/\u092E\u0927\u0941\u092E\u0915\u094D\u0916\u0940</span><span id="Puzzle_animal4">\u0918\u094B\u0902\u0918\u093E</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0916\u094B\u0932</span><span id="Puzzle_animal4Trait2">\u0915\u0940\u091A\u0921\u093C</span><span id="Puzzle_animal4HelpUrl">https://hi.wikipedia.org/wiki/\u0938\u094D\u0925\u0932\u0940\u092F_\u0918\u094B\u0902\u0918\u093E</span><span id="Puzzle_picture">\u0924\u0938\u094D\u0935\u0940\u0930:</span><span id="Puzzle_legs">\u092A\u0948\u0930:</span><span id="Puzzle_legsChoose">\u091A\u0941\u0928\u0947\u0902...</span><span id="Puzzle_traits">\u0932\u0915\u094D\u0937\u0923:</span><span id="Puzzle_error0">\u092C\u0939\u0941\u0924 \u092C\u0922\u093C\u093F\u092F\u093E!\n\u0938\u092D\u0940 %1 \u092C\u094D\u0932\u0949\u0915 \u0938\u0939\u0940 \u0939\u0948\u0902\u0964</span><span id="Puzzle_error1">\u0932\u0917\u092D\u0917 \u0939\u094B \u0917\u092F\u093E! \u090F\u0915 \u092C\u094D\u0932\u0949\u0915 \u0917\u0932\u0924 \u0939\u0948\u0964</span><span id="Puzzle_error2">%1 \u092C\u094D\u0932\u0949\u0915 \u0917\u0932\u0924 \u0939\u0948\u0902\u0964</span><span id="Puzzle_tryAgain">\u0939\u093E\u0907\u0932\u093E\u0907\u091F \u0915\u093F\u090F \u0917\u092F\u093E \u092C\u094D\u0932\u0949\u0915 \u0938\u0939\u0940 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964\n\u0915\u094B\u0936\u093F\u0936 \u0915\u0930\u0924\u0947 \u0930\u0939\u0947\u0902\u0964</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u092A\u0939\u0947\u0932\u0940', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0909\u0924\u094D\u0924\u0930 \u091C\u093E\u0902\u091A \u0915\u0930\u0947\u0902</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u091C\u093E\u0928\u0935\u0930 (\u0939\u0930\u093E) \u0915\u0947 \u0932\u093F\u090F, \u0907\u0938\u0915\u0940 \u0924\u0938\u094D\u0935\u0940\u0930 \u0938\u0902\u0932\u0917\u094D\u0928 \u0915\u0930\u0947\u0902, \u0907\u0938\u0915\u0940 \u092A\u0948\u0930\u094B\u0902 \u0915\u0940 \u0938\u0902\u0916\u094D\u092F\u093E \u091A\u0941\u0928\u0947\u0902, \u0914\u0930 \u0905\u092A\u0928\u0947 \u0917\u0941\u0923\u094B\u0902 \u0915\u093E \u090F\u0915 \u0922\u0947\u0930 \u092C\u0928\u093E\u090F\u0902\u0964</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
