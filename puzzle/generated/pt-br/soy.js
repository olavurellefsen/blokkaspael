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
  return '<div style="display: none"><span id="Puzzle_animal1">Pato</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Penas</span><span id="Puzzle_animal1Trait2">Bico</span><span id="Puzzle_animal1HelpUrl">http://pt.wikipedia.org/wiki/Pato</span><span id="Puzzle_animal2">Gato</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Bigodes</span><span id="Puzzle_animal2Trait2">Pelo</span><span id="Puzzle_animal2HelpUrl">http://pt.wikipedia.org/wiki/Gato</span><span id="Puzzle_animal3">Abelha</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mel</span><span id="Puzzle_animal3Trait2">Ferr\u00E3o</span><span id="Puzzle_animal3HelpUrl">http://pt.wikipedia.org/wiki/Abelha</span><span id="Puzzle_animal4">Caracol</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Concha</span><span id="Puzzle_animal4Trait2">Gosma</span><span id="Puzzle_animal4HelpUrl">http://pt.wikipedia.org/wiki/Caracol</span><span id="Puzzle_picture">imagem:</span><span id="Puzzle_legs">patas:</span><span id="Puzzle_legsChoose">escolha...</span><span id="Puzzle_traits">tra\u00E7os:</span><span id="Puzzle_error0">Perfeito!\nTodos os %1 blocos est\u00E3o corretos.</span><span id="Puzzle_error1">Quase! Um bloco est\u00E1 incorreto.</span><span id="Puzzle_error2">%1 blocos est\u00E3o incorretos.</span><span id="Puzzle_tryAgain">O bloco destacado est\u00E1 incorreto. Continue tentando.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Quebra-Cabe\u00E7a', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Checar respostas</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Para cada animal (verde), anexe sua imagem, escolha seu numero de pernas, e fa\u00E7a uma lista de seus tra\u00E7os.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
