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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0423\u0442\u043A\u0430</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u041F\u0435\u0440\u044C\u044F</span><span id="Puzzle_animal1Trait2">\u041A\u043B\u044E\u0432</span><span id="Puzzle_animal1HelpUrl">https://ru.wikipedia.org/wiki/%D0%A3%D1%82%D0%BA%D0%B8</span><span id="Puzzle_animal2">\u041A\u043E\u0448\u043A\u0430</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0423\u0441\u044B</span><span id="Puzzle_animal2Trait2">\u041C\u0435\u0445</span><span id="Puzzle_animal2HelpUrl">https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0</span><span id="Puzzle_animal3">\u041F\u0447\u0435\u043B\u0430</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u041C\u0451\u0434</span><span id="Puzzle_animal3Trait2">\u0416\u0430\u043B\u043E</span><span id="Puzzle_animal3HelpUrl">https://ru.wikipedia.org/wiki/%D0%9F%D1%87%D1%91%D0%BB%D1%8B</span><span id="Puzzle_animal4">\u0423\u043B\u0438\u0442\u043A\u0430</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0420\u0430\u043A\u0443\u0448\u043A\u0430</span><span id="Puzzle_animal4Trait2">\u0421\u043B\u0438\u0437\u044C</span><span id="Puzzle_animal4HelpUrl">https://ru.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_(%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D0%B0)</span><span id="Puzzle_picture">\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430:</span><span id="Puzzle_legs">\u043D\u043E\u0433\u0438:</span><span id="Puzzle_legsChoose">\u0432\u044B\u0431\u0435\u0440\u0438...</span><span id="Puzzle_traits">\u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438:</span><span id="Puzzle_error0">\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E!\n\u0412\u0441\u0435 \u0431\u043B\u043E\u043A\u0438 (%1) \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.</span><span id="Puzzle_error1">\u041F\u043E\u0447\u0442\u0438! \u041E\u0434\u0438\u043D \u0431\u043B\u043E\u043A \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.</span><span id="Puzzle_error2">\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u043B\u043E\u043A\u043E\u0432 (%1) \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044B \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.</span><span id="Puzzle_tryAgain">\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0431\u043B\u043E\u043A \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.\n\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0413\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0430', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E (\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0431\u043B\u043E\u043A), \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u0438 \u0435\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0432\u044B\u0431\u0435\u0440\u0438 \u0447\u0438\u0441\u043B\u043E \u043D\u043E\u0433 \u0438 \u0441\u043E\u0431\u0435\u0440\u0438 \u0435\u0433\u043E \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u044B.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
