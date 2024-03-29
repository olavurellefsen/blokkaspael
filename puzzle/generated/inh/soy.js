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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0411\u043E\u0430\u0431\u0430\u0448\u043A</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0411\u0435\u0434\u0430\u0440\u0433\u0430\u0448</span><span id="Puzzle_animal1Trait2">\u0417I\u043E\u043A</span><span id="Puzzle_animal1HelpUrl">https://inh.wikipedia.org/wiki/\u0411\u043E\u0430\u0431\u0430\u0448\u043A</span><span id="Puzzle_animal2">\u0426\u0438\u0441\u043A</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u041C\u00E9\u043A\u0445\u0430\u0448</span><span id="Puzzle_animal2Trait2">\u041B\u0430\u044C\u0436\u0433</span><span id="Puzzle_animal2HelpUrl">https://inh.wikipedia.org/wiki/\u0426\u0438\u0441\u043A</span><span id="Puzzle_animal3">\u041Do\u043A\u0445\u0430\u0440\u043C\u043E\u0437\u0430</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u041C\u043E\u0434\u0437</span><span id="Puzzle_animal3Trait2">\u042E\u0432</span><span id="Puzzle_animal3HelpUrl">https://inh.wikipedia.org/wiki/\u041D\u043E\u043A\u0445\u0430\u0440\u043C\u043E\u0437\u0430</span><span id="Puzzle_animal4">\u041C\u0438\u0442\u0430\u043B</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0420\u0430\u043A\u0443\u0448\u043A\u0430</span><span id="Puzzle_animal4Trait2">\u0421\u043B\u0438\u0437\u044C</span><span id="Puzzle_animal4HelpUrl">https://inh.wikipedia.org/wiki/\u041C\u0438\u0442\u0430\u043B</span><span id="Puzzle_picture">\u0441\u0443\u0440\u0442:</span><span id="Puzzle_legs">\u043A\u00F3\u0433\u0430\u0448:</span><span id="Puzzle_legsChoose">\u0445\u044C\u0430\u0445\u0430\u0440\u0436\u0430...</span><span id="Puzzle_traits">\u043A\u044A\u0430\u044C\u0441\u0442\u0442\u0430 \u0431\u0435\u043B\u0433\u0430\u043B\u043E\u043D\u0430\u0448:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0413\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0430', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Check Answers</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
