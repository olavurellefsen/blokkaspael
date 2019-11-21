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
  return '<div style="display: none"><span id="Puzzle_animal1">Pato</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumas</span><span id="Puzzle_animal1Trait2">Pico</span><span id="Puzzle_animal1HelpUrl">http://es.wikipedia.org/wiki/Pato</span><span id="Puzzle_animal2">Gato</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Bigotes</span><span id="Puzzle_animal2Trait2">Pelaje</span><span id="Puzzle_animal2HelpUrl">http://es.wikipedia.org/wiki/Gato</span><span id="Puzzle_animal3">Abeja</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Miel</span><span id="Puzzle_animal3Trait2">Aguij\u00F3n</span><span id="Puzzle_animal3HelpUrl">http://es.wikipedia.org/wiki/Abeja</span><span id="Puzzle_animal4">Caracol</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Caparaz\u00F3n</span><span id="Puzzle_animal4Trait2">Baba</span><span id="Puzzle_animal4HelpUrl">http://es.wikipedia.org/wiki/Caracol</span><span id="Puzzle_picture">foto:</span><span id="Puzzle_legs">patas:</span><span id="Puzzle_legsChoose">elige...</span><span id="Puzzle_traits">rasgos:</span><span id="Puzzle_error0">\u00A1Perfecto!\nLos %1 bloques est\u00E1n bien colocados.</span><span id="Puzzle_error1">\u00A1Casi! Un bloque est\u00E1 mal colocado.</span><span id="Puzzle_error2">%1 bloques est\u00E1n mal colocados.</span><span id="Puzzle_tryAgain">El bloque destacado est\u00E1 mal colocado.\nSigue intent\u00E1ndolo.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Rompecabezas', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Comprobar las respuestas</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Para cada animal (verde), adjunta su foto, elige la cantidad de patas y lista sus rasgos.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
