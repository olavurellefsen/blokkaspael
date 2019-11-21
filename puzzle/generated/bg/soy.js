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
  return '<div style="display: none"><span id="Puzzle_animal1">\u041F\u0430\u0442\u0438\u0446\u0430</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u041F\u0435\u0440\u0430</span><span id="Puzzle_animal1Trait2">\u041A\u043B\u044E\u043D</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">\u041A\u043E\u0442\u043A\u0430</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u041C\u0443\u0441\u0442\u0430\u0446\u0438</span><span id="Puzzle_animal2Trait2">\u041A\u043E\u0437\u0438\u043D\u0430</span><span id="Puzzle_animal2HelpUrl">https://bg.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%BA%D0%B0</span><span id="Puzzle_animal3">\u041F\u0447\u0435\u043B\u0430</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u041C\u0435\u0434</span><span id="Puzzle_animal3Trait2">\u0416\u0438\u043B\u043E</span><span id="Puzzle_animal3HelpUrl">https://bg.wikipedia.org/wiki/%D0%9F%D1%87%D0%B5%D0%BB%D0%B0</span><span id="Puzzle_animal4">\u041E\u0445\u043B\u044E\u0432</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0427\u0435\u0440\u0443\u043F\u043A\u0430</span><span id="Puzzle_animal4Trait2">\u0421\u043B\u0443\u0437</span><span id="Puzzle_animal4HelpUrl">https://bg.wikipedia.org/wiki/%D0%9E%D1%85%D0%BB%D1%8E%D0%B2</span><span id="Puzzle_picture">\u0441\u043D\u0438\u043C\u043A\u0430:</span><span id="Puzzle_legs">\u043A\u0440\u0430\u043A\u0430:</span><span id="Puzzle_legsChoose">\u0438\u0437\u0431\u0438\u0440\u0430\u043D\u0435...</span><span id="Puzzle_traits">\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438:</span><span id="Puzzle_error0">\u041E\u0442\u043B\u0438\u0447\u043D\u043E!\n\u0412\u0441\u0438\u0447\u043A\u0438 %1 \u0431\u043B\u043E\u043A\u043E\u0432\u0435 \u0441\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u043D\u0438.</span><span id="Puzzle_error1">\u041F\u043E\u0447\u0442\u0438! \u0421\u0430\u043C\u043E \u0435\u0434\u0438\u043D \u0431\u043B\u043E\u043A \u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u0435\u043D.</span><span id="Puzzle_error2">%1 \u0431\u043B\u043E\u043A\u043E\u0432\u0435 \u0441\u0430 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u043D\u0438.</span><span id="Puzzle_tryAgain">\u041E\u0442\u0431\u0435\u043B\u044F\u0437\u0430\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u043A \u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u0435\u043D.\n\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0430\u0432\u0430\u0439 \u0434\u0430 \u043E\u043F\u0438\u0442\u0432\u0430\u0448.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u041F\u044A\u0437\u0435\u043B', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u041F\u0440\u043E\u0432\u0435\u0440\u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0417\u0430 \u0432\u0441\u044F\u043A\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E (\u0432 \u0437\u0435\u043B\u0435\u043D\u0438\u044F \u0431\u043B\u043E\u043A), \u043F\u0440\u0438\u043A\u0430\u0447\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u043F\u043E\u0441\u043E\u0447\u0438 \u0431\u0440\u043E\u044F \u043D\u0430 \u043A\u0440\u0430\u043A\u0430\u0442\u0430 \u0438 \u0441\u044A\u0431\u0435\u0440\u0438 \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u0435\u043B\u043D\u0438\u0442\u0435 \u043C\u0443 \u0447\u0435\u0440\u0442\u0438.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
