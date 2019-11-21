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
  return '<div style="display: none"><span id="Puzzle_animal1">Patka</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Perje</span><span id="Puzzle_animal1Trait2">Kljun</span><span id="Puzzle_animal1HelpUrl">https://sr.wikipedia.org/sr-ec/Patka</span><span id="Puzzle_animal2">Ma\u010Dka</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Brkovi</span><span id="Puzzle_animal2Trait2">Krzno</span><span id="Puzzle_animal2HelpUrl">https://sr.wikipedia.org/wiki/Ma\u010Dka</span><span id="Puzzle_animal3">P\u010Dela</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Med</span><span id="Puzzle_animal3Trait2">\u017Daoka</span><span id="Puzzle_animal3HelpUrl">https://sr.wikipedia.org/wiki/P\u010Dela</span><span id="Puzzle_animal4">Pu\u017E</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Lju\u0161tura</span><span id="Puzzle_animal4Trait2">Sluz</span><span id="Puzzle_animal4HelpUrl">https://sr.wikipedia.org/wiki/Pu\u017E</span><span id="Puzzle_picture">slika:</span><span id="Puzzle_legs">noge:</span><span id="Puzzle_legsChoose">izaberi\u2026</span><span id="Puzzle_traits">osobine:</span><span id="Puzzle_error0">Savr\u0161eno!\nSvih %1 blokova je ispravno postavljeno.</span><span id="Puzzle_error1">Zamalo! Jedan blok je neispravno postavljen.</span><span id="Puzzle_error2">%1 blokova je neispravno postavljeno.</span><span id="Puzzle_tryAgain">Ozna\u010Deni blok nije ispravan.\nNastavi da poku\u0161ava\u0161.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Slagalica', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Proveri odgovore</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Za svaku \u017Eivotinju (zeleno), prilo\u017Ei njenu sliku, izaberi njen broj nogu, i nasla\u017Ei njene osobine.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
