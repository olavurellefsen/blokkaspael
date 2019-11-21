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
  return '<div style="display: none"><span id="Puzzle_animal1">\u041A\u0430\u0447\u043A\u0430</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u041F\u0451\u0440\u044B</span><span id="Puzzle_animal1Trait2">\u0414\u0437\u044E\u0431\u0430</span><span id="Puzzle_animal1HelpUrl">https://be.wikipedia.org/wiki/\u041A\u0430\u0447\u043A\u0430</span><span id="Puzzle_animal2">\u041A\u043E\u0442\u043A\u0430</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0412\u0443\u0441\u044B</span><span id="Puzzle_animal2Trait2">\u0424\u0443\u0442\u0440\u0430</span><span id="Puzzle_animal2HelpUrl">https://be.wikipedia.org/wiki/\u041A\u043E\u0442\u043A\u0430</span><span id="Puzzle_animal3">\u041F\u0447\u0430\u043B\u0430</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u041C\u0451\u0434</span><span id="Puzzle_animal3Trait2">\u0414\u0436\u0430\u043B\u0430</span><span id="Puzzle_animal3HelpUrl">https://be.wikipedia.org/wiki/\u041F\u0447\u0430\u043B\u0430</span><span id="Puzzle_animal4">\u0421\u043B\u0456\u043C\u0430\u043A</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0420\u0430\u043A\u0430\u0432\u0456\u043D\u043A\u0430</span><span id="Puzzle_animal4Trait2">\u0421\u043B\u0456\u0437\u044C</span><span id="Puzzle_animal4HelpUrl">https://be.wikipedia.org/wiki/\u0421\u043B\u0456\u043C\u0430\u043A</span><span id="Puzzle_picture">\u043A\u0430\u0440\u0446\u0456\u043D\u043A\u0430:</span><span id="Puzzle_legs">\u043D\u0430\u0433\u0456:</span><span id="Puzzle_legsChoose">\u0430\u0431\u044F\u0440\u044B...</span><span id="Puzzle_traits">\u0430\u0441\u0430\u0431\u043B\u0456\u0432\u0430\u0441\u0446\u0456:</span><span id="Puzzle_error0">\u0406\u0434\u044D\u0430\u043B\u044C\u043D\u0430!\n\u040E\u0441\u0435 \u0431\u043B\u043E\u043A\u0456 (%1) \u0440\u0430\u0437\u043C\u0435\u0448\u0447\u0430\u043D\u044B \u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430.</span><span id="Puzzle_error1">\u0410\u043C\u0430\u043B\u044C! \u0410\u0434\u0437\u0456\u043D \u0431\u043B\u043E\u043A \u0440\u0430\u0437\u043C\u0435\u0448\u0447\u0430\u043D\u044B \u043D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430.</span><span id="Puzzle_error2">\u041D\u0435\u043A\u0430\u043B\u044C\u043A\u0456 \u0431\u043B\u043E\u043A\u0430\u045E (%1) \u0440\u0430\u0437\u043C\u0435\u0448\u0447\u0430\u043D\u044B\u044F \u043D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430.</span><span id="Puzzle_tryAgain">\u0412\u044B\u0434\u0437\u0435\u043B\u0435\u043D\u044B \u0431\u043B\u043E\u043A \u0440\u0430\u0437\u043C\u0435\u0448\u0447\u0430\u043D\u044B \u043D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430.\n\u041F\u0430\u0441\u043F\u0440\u0430\u0431\u0443\u0439 \u044F\u0448\u0447\u044D.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0413\u0430\u043B\u0430\u0432\u0430\u043B\u043E\u043C\u043A\u0430', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u041F\u0440\u0430\u0432\u0435\u0440\u044B\u0446\u044C \u0432\u044B\u043D\u0456\u043A</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0414\u043B\u044F \u043A\u043E\u0436\u043D\u0430\u0439 \u0436\u044B\u0432\u0451\u043B\u044B (\u0437\u044F\u043B\u0451\u043D\u044B \u0431\u043B\u043E\u043A), \u043F\u0440\u044B\u043C\u0430\u0446\u0443\u0439 \u044F\u0435 \u0432\u044B\u044F\u0432\u0443, \u0430\u0431\u044F\u0440\u044B \u043B\u0456\u043A \u043D\u043E\u0433 \u0456 \u0437\u0431\u044F\u0440\u044B \u044F\u0435 \u0430\u0434\u043C\u0435\u0442\u043D\u044B\u044F \u0440\u044B\u0441\u044B.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
