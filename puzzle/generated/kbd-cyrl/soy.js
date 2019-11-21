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
  return '<div style="display: none"><span id="Puzzle_animal1">\u041F\u0441\u044B\u0434\u0436\u044D\u0434</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://ru.wikipedia.org/wiki/%D0%A3%D1%82%D0%BA%D0%B8</span><span id="Puzzle_animal2">\u0414\u0436\u044D\u0434\u0443</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u041F\u0430\u0449I\u044D</span><span id="Puzzle_animal2Trait2">\u0426\u044B</span><span id="Puzzle_animal2HelpUrl">https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0</span><span id="Puzzle_animal3">\u0411\u0436\u044C\u044D</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0424\u043E</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://ru.wikipedia.org/wiki/%D0%9F%D1%87%D1%91%D0%BB%D1%8B</span><span id="Puzzle_animal4">\u041D\u044D\u0449I\u044D\u043F\u043AI\u044D</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0425\u044C\u044D\u043C\u043B\u0430\u0448\u043AI\u0443\u044D</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://ru.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B8%D1%82%D0%BA%D0%B0_(%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D0%B0)</span><span id="Puzzle_picture">\u0441\u0443\u0440\u044D\u0442:</span><span id="Puzzle_legs">\u043B\u044A\u043F\u043A\u044A\u0443\u044D\u0445\u044D\u0440:</span><span id="Puzzle_legsChoose">\u043A\u044A\u044B\u0445\u044D\u0445...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u0429\u044B\u043F\u043A\u044A\u0430\u0431\u0437\u044D!\n\u0411\u043B\u043E\u043A\u044B\u0443\u0445\u044A\u0443\u0430\u0440 (%1) \u044F\u043FI\u044D \u0438\u0442\u0449.</span><span id="Puzzle_error1">\u0423\u0431\u043B\u044D\u0446I\u044D\u0444\u0442\u0430! \u0417\u044B \u0431\u043B\u043E\u043A \u0438\u043FI\u044D \u0438\u0442\u043A\u044A\u044B\u043C.</span><span id="Puzzle_error2">\u0411\u043B\u043E\u043A \u0437\u044B\u0431\u0436\u0430\u043D\u044D (%1) \u044F\u043FI\u044D \u0438\u0442\u043A\u044A\u044B\u043C</span><span id="Puzzle_tryAgain">\u0411\u043B\u043E\u043A \u043A\u044A\u044B\u0445\u044D\u0433\u044A\u044D\u0449\u0430\u0440 \u0438\u043FI\u044D \u0438\u0442\u043A\u044A\u044B\u043C.\n\u0417\u044D \u0435\u043F\u043B\u044A\u044B\u0436.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0423\u0437\u044B\u0433\u044A\u044D\u0433\u0443\u043F\u0441\u044B\u0441\u044D', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u041A\u044A\u044B\u0449I\u044D\u043AI\u0430\u0440 \u043A\u044A\u044D\u043F\u0449\u044B\u0442\u044D\u043D</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
