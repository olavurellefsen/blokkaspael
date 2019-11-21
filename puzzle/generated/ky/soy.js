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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">\u0442\u0430\u043D\u0434\u0430\u04A3\u044B\u0437...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">\u041C\u044B\u043A\u0442\u044B!\n\u0411\u0430\u0440\u0434\u044B\u043A \u0431\u043B\u043E\u043A\u0442\u043E\u0440 %1 \u0442\u0443\u0443\u0440\u0430 \u0436\u0430\u0439\u0433\u0430\u0448\u043A\u0430\u043D.</span><span id="Puzzle_error1">\u0410\u0437 \u043A\u0430\u043B\u0434\u044B!\n\u0411\u0438\u0440 \u0431\u043B\u043E\u043A \u0433\u0430\u043D\u0430 \u0442\u0443\u0443\u0440\u0430 \u044D\u043C\u0435\u0441 \u0436\u0430\u0439\u0433\u0430\u0448\u043A\u0430\u043D.</span><span id="Puzzle_error2">\u0411\u0438\u0440 \u043D\u0435\u0447\u0435 \u0431\u043B\u043E\u043A (%1) \u0442\u0443\u0443\u0440\u0430 \u044D\u043C\u0435\u0441 \u0436\u0430\u0439\u0433\u0430\u0448\u043A\u0430\u043D.</span><span id="Puzzle_tryAgain">\u0411\u0435\u043B\u0433\u0438\u043B\u0435\u043D\u0433\u0435\u043D \u0431\u043B\u043E\u043A \u0442\u0443\u0443\u0440\u0430 \u044D\u043C\u0435\u0441 \u0436\u0430\u0439\u0433\u0430\u0448\u043A\u0430\u043D.\n\u0414\u0430\u0433\u044B \u0430\u0440\u0430\u043A\u0435\u0442 \u043A\u044B\u043B\u044B\u04A3\u044B\u0437.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0411\u0430\u0448 \u043A\u0430\u0442\u044B\u0440\u043C\u0430.', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0416\u043E\u043E\u043F\u0442\u043E\u0440\u0434\u0443 \u0442\u0435\u043A\u0448\u0435\u0440\u04AF\u04AF</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
