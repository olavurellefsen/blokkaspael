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
  return '<div style="display: none"><span id="Puzzle_animal1">Part</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Nokk</span><span id="Puzzle_animal1HelpUrl">https://et.wikipedia.org/wiki/Part</span><span id="Puzzle_animal2">Kass</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Vurrud</span><span id="Puzzle_animal2Trait2">Karvkate</span><span id="Puzzle_animal2HelpUrl">https://et.wikipedia.org/wiki/Kass</span><span id="Puzzle_animal3">Mesilane</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mesi</span><span id="Puzzle_animal3Trait2">M\u00FCrgiastel</span><span id="Puzzle_animal3HelpUrl">https://et.wikipedia.org/wiki/Mesilane</span><span id="Puzzle_animal4">Tigu</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Koda</span><span id="Puzzle_animal4Trait2">Lima</span><span id="Puzzle_animal4HelpUrl">https://et.wikipedia.org/wiki/Teod</span><span id="Puzzle_picture">pilt:</span><span id="Puzzle_legs">jalad:</span><span id="Puzzle_legsChoose">vali...</span><span id="Puzzle_traits">tunnused:</span><span id="Puzzle_error0">T\u00E4iuslik!\nK\u00F5ik %1 plokid on \u00F5iged.</span><span id="Puzzle_error1">Peaaegu! \u00DCks plokk on valesti.</span><span id="Puzzle_error2">%1 plokki on valesti.</span><span id="Puzzle_tryAgain">M\u00E4rgistatud plokk on valesti.\nProovi uuesti.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'pusle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Vaata vastuseid</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Lisa igale (rohelisele) loomale \u00F5ige pilt, vali \u00F5ige jalgade arv ja lisa \u00F5iged tunnused.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
