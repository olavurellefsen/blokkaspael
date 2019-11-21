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
  return '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Gato</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Bigoteira</span><span id="Puzzle_animal2Trait2">Cabelo</span><span id="Puzzle_animal2HelpUrl">https://gl.wikipedia.org/wiki/Gato</span><span id="Puzzle_animal3">Abella</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mel</span><span id="Puzzle_animal3Trait2">Ferr\u00F3n/Aguill\u00F3n</span><span id="Puzzle_animal3HelpUrl">https://gl.wikipedia.org/wiki/Abella</span><span id="Puzzle_animal4">Caracol</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Cuncha</span><span id="Puzzle_animal4Trait2">Baba</span><span id="Puzzle_animal4HelpUrl">https://gl.wikipedia.org/wiki/Caracol</span><span id="Puzzle_picture">imaxe:</span><span id="Puzzle_legs">patas:</span><span id="Puzzle_legsChoose">escolle...</span><span id="Puzzle_traits">trazos:</span><span id="Puzzle_error0">Perfecto!\nOs %1 bloques son correctos.</span><span id="Puzzle_error1">Por pouco! Un bloque \u00E9 incorrecto.</span><span id="Puzzle_error2">%1 bloques son incorrectos.</span><span id="Puzzle_tryAgain">O bloque destacado non \u00E9 correcto.\nSigue intent\u00E1ndoo.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Crebacabezas', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Comprobar as respostas</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">A cada animal (en verde), faille corresponder a s\u00FAa foto, sinala o seu n\u00FAmero de patas e api\u00F1a os seus trazos.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
