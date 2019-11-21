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
  return '<div style="display: none"><span id="Puzzle_animal1">Cor\u00EDu</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumes</span><span id="Puzzle_animal1Trait2">Picu</span><span id="Puzzle_animal1HelpUrl">https://ast.wikipedia.org/wiki/Cor%C3%ADu</span><span id="Puzzle_animal2">Gatu</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Bigotes</span><span id="Puzzle_animal2Trait2">Pelame</span><span id="Puzzle_animal2HelpUrl">https://ast.wikipedia.org/wiki/Gatu</span><span id="Puzzle_animal3">Abeya</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Miel</span><span id="Puzzle_animal3Trait2">Aguiy\u00F3n</span><span id="Puzzle_animal3HelpUrl">https://ast.wikipedia.org/wiki/Abeya</span><span id="Puzzle_animal4">Cascoxu</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Cascu</span><span id="Puzzle_animal4Trait2">Baba</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">semeya:</span><span id="Puzzle_legs">pates:</span><span id="Puzzle_legsChoose">escueye...</span><span id="Puzzle_traits">traces:</span><span id="Puzzle_error0">\u00A1Perfeutu!\nLos %1 bloques t\u00E1n bien asitiaos.</span><span id="Puzzle_error1">\u00A1Casi! Un bloque ta mal asiti\u00E1u.</span><span id="Puzzle_error2">%1 bloques t\u00E1n mal asitiaos.</span><span id="Puzzle_tryAgain">El bloque destac\u00E1u ta mal asiti\u00E1u.\nSigui tentando.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Rompecabeces', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Comprobar les respuestes</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Pa cada animal (verde), axunta la so semeya, escueye la cantid\u00E1 de pates y llista les sos traces.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
