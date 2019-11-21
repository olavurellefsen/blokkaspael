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
  return '<div style="display: none"><span id="Puzzle_animal1">Ankka</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">H\u00F6yhenet</span><span id="Puzzle_animal1Trait2">Nokka</span><span id="Puzzle_animal1HelpUrl">https://fi.wikipedia.org/wiki/Ankka</span><span id="Puzzle_animal2">Kissa</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Viikset</span><span id="Puzzle_animal2Trait2">Turkki</span><span id="Puzzle_animal2HelpUrl">https://fi.wikipedia.org/wiki/Kissa</span><span id="Puzzle_animal3">Mehil\u00E4inen</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Hunaja</span><span id="Puzzle_animal3Trait2">Pistin</span><span id="Puzzle_animal3HelpUrl">https://fi.wikipedia.org/wiki/Mehil\u00E4iset</span><span id="Puzzle_animal4">Etana</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Kuori</span><span id="Puzzle_animal4Trait2">Lima</span><span id="Puzzle_animal4HelpUrl">https://fi.wikipedia.org/wiki/K\u00E4\u00E4rme</span><span id="Puzzle_picture">kuva:</span><span id="Puzzle_legs">jalkoja:</span><span id="Puzzle_legsChoose">valitse...</span><span id="Puzzle_traits">piirteet:</span><span id="Puzzle_error0">Hienoa!\nKaikki %1 lohkoa ovat oikein.</span><span id="Puzzle_error1">L\u00E4hes oikein! Vain yksi lohko on v\u00E4\u00E4rin.</span><span id="Puzzle_error2">%1 lohkoa ovat virheellisi\u00E4.</span><span id="Puzzle_tryAgain">Korostettu lohko ei ole oikein.\nYrit\u00E4 uudelleen.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Palapeli', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Tarkista vastaukset</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Kullekin el\u00E4imelle (vihre\u00E4), liit\u00E4 oikea kuva, valitse jalkojen lukum\u00E4\u00E4r\u00E4 ja tee pino piirteist\u00E4.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
