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
  return '<div style="display: none"><span id="Puzzle_animal1">\u041A\u0430\u0447\u043A\u0430</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u041F\u0456\u0440\'\u044F</span><span id="Puzzle_animal1Trait2">\u0414\u0437\u044C\u043E\u0431</span><span id="Puzzle_animal1HelpUrl">https://uk.wikipedia.org/wiki/\u041A\u0430\u0447\u043A\u0438</span><span id="Puzzle_animal2">\u041A\u0456\u0442</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0412\u0443\u0441\u0430</span><span id="Puzzle_animal2Trait2">\u0425\u0443\u0442\u0440\u043E</span><span id="Puzzle_animal2HelpUrl">https://uk.wikipedia.org/wiki/\u041A\u0456\u0442_\u0441\u0432\u0456\u0439\u0441\u044C\u043A\u0438\u0439</span><span id="Puzzle_animal3">\u0411\u0434\u0436\u043E\u043B\u0430</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u041C\u0435\u0434</span><span id="Puzzle_animal3Trait2">\u0416\u0430\u043B\u043E</span><span id="Puzzle_animal3HelpUrl">https://uk.wikipedia.org/wiki/\u0411\u0434\u0436\u043E\u043B\u0438</span><span id="Puzzle_animal4">\u0420\u0430\u0432\u043B\u0438\u043A</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0427\u0435\u0440\u0435\u043F\u0430\u0448\u043A\u0430</span><span id="Puzzle_animal4Trait2">\u0421\u043B\u0438\u0437</span><span id="Puzzle_animal4HelpUrl">https://uk.wikipedia.org/wiki/\u0420\u0430\u0432\u043B\u0438\u043A</span><span id="Puzzle_picture">\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F:</span><span id="Puzzle_legs">\u043B\u0430\u043F\u0438:</span><span id="Puzzle_legsChoose">\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C...</span><span id="Puzzle_traits">\u043E\u0437\u043D\u0430\u043A\u0438:</span><span id="Puzzle_error0">\u0412\u0456\u0434\u043C\u0456\u043D\u043D\u043E!\n\n\u0412\u0441\u0456 \u0431\u043B\u043E\u043A\u0438 (%1) \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0456 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!</span><span id="Puzzle_error1">\u041C\u0430\u0439\u0436\u0435! \u041E\u0434\u0438\u043D \u0431\u043B\u043E\u043A \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0438\u0439 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.</span><span id="Puzzle_error2">\u0414\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0431\u043B\u043E\u043A\u0456\u0432 (%1) \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043E \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.</span><span id="Puzzle_tryAgain">\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u0438\u0439 \u0431\u043B\u043E\u043A \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0438\u0439 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.\n\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0413\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0430', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0414\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0442\u0432\u0430\u0440\u0438\u043D\u0438 (\u0437\u0435\u043B\u0435\u043D\u0456 \u0431\u043B\u043E\u043A\u0438) \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u0456\u0442\u044C \u0457\u0457 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043B\u0430\u043F \u0456 \u0437\u0431\u0435\u0440\u0456\u0442\u044C \u043E\u0437\u043D\u0430\u043A\u0438.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
