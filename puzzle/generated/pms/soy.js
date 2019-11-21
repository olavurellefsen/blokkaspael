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
  return '<div style="display: none"><span id="Puzzle_animal1">Ania</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Piume</span><span id="Puzzle_animal1Trait2">Bech</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Gat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Barbis</span><span id="Puzzle_animal2Trait2">Plissa</span><span id="Puzzle_animal2HelpUrl">https://pms.wikipedia.org/wiki/Gat</span><span id="Puzzle_animal3">Avija</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Amel</span><span id="Puzzle_animal3Trait2">Savuj</span><span id="Puzzle_animal3HelpUrl">https://pms.wikipedia.org/wiki/Avija</span><span id="Puzzle_animal4">Lumassa</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Cuchija</span><span id="Puzzle_animal4Trait2">Bava</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">plancia:</span><span id="Puzzle_legs">gambe:</span><span id="Puzzle_legsChoose">sern...</span><span id="Puzzle_traits">carater\u00ECstiche:</span><span id="Puzzle_error0">P\u00EBrfet! Tuti ij %1 bl\u00F2ch a son giust.</span><span id="Puzzle_error1">Scasi! Un bl\u00F2ch a va nen bin.</span><span id="Puzzle_error2">%1 bl\u00F2ch a van nen bin.</span><span id="Puzzle_tryAgain">\u00CBl bl\u00F2ch evidensi\u00E0 a va nen bin. Preuva torna.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'S-ciapatesta', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Contr\u00F2la le risp\u00F2ste</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">P\u00EBr minca n\'animal (an verd), tacheje soa plancia, serne \u00EBl n\u00F9mer \u00EBd soe pi\u00F2te, e f\u00E9 na col\u00F2na \u00EBd soe carater\u00ECstiche.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
