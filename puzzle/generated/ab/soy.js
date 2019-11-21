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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0410\u043A\u04D9\u0430\u0442\u0430</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">\u0430\u04A7\u0441\u0430\u0430\u0442\u04D9 \u0430\u04A7\u044B\u043D\u04B5\u0430</span><span id="Puzzle_animal1HelpUrl">https://ru.wikipedia.org/wiki/\u0410\u043A\u04D9\u0430\u0442\u0430</span><span id="Puzzle_animal2">\u0410\u0446\u0433\u04D9\u044B</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0410\u04A7\u0430\u04B5\u0430\u049B\u04D9\u0430</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://ru.wikipedia.org/wiki/\u0410\u0446\u0433\u04D9\u044B</span><span id="Puzzle_animal3">\u0410\u0448\u044C\u0445\u044B\u043C\u04E1\u0430</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0410\u0446\u0445\u0430</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://ru.wikipedia.org/wiki/\u0410\u0448\u044C\u0445\u044B\u0446</span><span id="Puzzle_animal4">\u0410\u043A\u0430\u043C\u044B\u0440\u0448\u0448\u0430</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0410\u0440\u0430\u043A\u0443\u0448\u043A\u0430</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://ru.wikipedia.org/wiki/\u0410\u043A\u0430\u043C\u044B\u0440\u0448\u0448\u0430</span><span id="Puzzle_picture">\u0430\u0441\u0430\u0445\u044C\u0430:</span><span id="Puzzle_legs">\u0430\u0448\u044C\u0430\u043F\u049B\u04D9\u0430:</span><span id="Puzzle_legsChoose">\u0438\u0430\u043B\u044B\u0448\u04D9\u0445...</span><span id="Puzzle_traits">\u0430\u04B7\u044B\u0434\u0430\u0440\u0430\u049B\u04D9\u0430:</span><span id="Puzzle_error0">\u0418\u0431\u0437\u0438\u043E\u0443\u043F!\n\u0410\u0431\u043B\u043E\u043A\u049B\u04D9\u0430 (%1) \u0437\u0435\u0433\u044C\u044B \u0438\u0430\u0445\u044C\u0440\u044B\u0445\u04D9\u04AD\u043E\u0443 \u0438\u0440\u0433\u044B\u043B\u043E\u0443\u043F.</span><span id="Puzzle_error1">\u0425\u04D9\u044B\u04B7\u044B\u043A \u0430\u0433\u0443\u043F! \u0411\u043B\u043E\u043A\u043A \u0430\u0445\u044C\u0433\u044B\u043B\u043E \u0430\u04AD\u044B\u04A7 \u0438\u0430\u0448\u0430\u04E1\u0430\u043C.</span><span id="Puzzle_error2">\u0410\u0431\u043B\u043E\u043A\u049B\u04D9\u0430 (%1) \u04A7\u044B\u04AD\u043A \u0438\u0430\u0445\u044C\u0440\u044B\u0445\u04D9\u04AD\u043E\u0443 \u0438\u0440\u0433\u044B\u043B\u0430\u043C.</span><span id="Puzzle_tryAgain">\u0418\u0430\u043B\u043A\u0430\u0430\u0443 \u0430\u0431\u043B\u043E\u043A \u0438\u0430\u0445\u044C\u0433\u044B\u043B\u043E \u0430\u04AD\u044B\u04A7 \u0438\u0430\u0448\u0430\u04E1\u0430\u043C.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0410\u0445\u044B\u04A7\u04BD\u044B\u0433\u0430', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0418\u0433\u04D9\u0430\u04AD\u0430\u0442\u04D9\u0443\u043F \u0410\u043B\u04B5\u0448\u04D9\u0430</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
