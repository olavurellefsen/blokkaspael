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
  return '<div style="display: none"><span id="Puzzle_animal1">Anaso</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumoj</span><span id="Puzzle_animal1Trait2">Beko</span><span id="Puzzle_animal1HelpUrl">https://eo.wikipedia.org/wiki/Anaso</span><span id="Puzzle_animal2">Kato</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Vangoharoj</span><span id="Puzzle_animal2Trait2">Pelto</span><span id="Puzzle_animal2HelpUrl">https://eo.wikipedia.org/wiki/Hejma_kato</span><span id="Puzzle_animal3">Abelo</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mielo</span><span id="Puzzle_animal3Trait2">Pikilo</span><span id="Puzzle_animal3HelpUrl">https://eo.wikipedia.org/wiki/Abelo</span><span id="Puzzle_animal4">Heliko</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Konko</span><span id="Puzzle_animal4Trait2">\u015Climo</span><span id="Puzzle_animal4HelpUrl">https://eo.wikipedia.org/wiki/Heliko</span><span id="Puzzle_picture">bildo:</span><span id="Puzzle_legs">kruroj:</span><span id="Puzzle_legsChoose">elektu...</span><span id="Puzzle_traits">trajtoj:</span><span id="Puzzle_error0">Perfekta! \n\u0108iuj %1 blokoj estas korektaj.</span><span id="Puzzle_error1">Preska\u016D! Unu bloko estas mal\u011Dusta.</span><span id="Puzzle_error2">%1 blokoj estas mal\u011Dustaj.</span><span id="Puzzle_tryAgain">La elstarigita bloko estas mal\u011Dusta.\nPlu klopodu.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzlo', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Kontroli respondojn</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Por \u0109iu besto (verda) aneksu \u011Dian bildon, elektu la nombron de kruroj kaj staku \u011Diajn trajtojn.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
