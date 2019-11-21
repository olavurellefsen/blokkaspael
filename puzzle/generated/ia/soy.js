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
  return '<div style="display: none"><span id="Puzzle_animal1">Anate</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumas</span><span id="Puzzle_animal1Trait2">Becco</span><span id="Puzzle_animal1HelpUrl">https://ia.wikipedia.org/wiki/Anate</span><span id="Puzzle_animal2">Catto</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Mustachios</span><span id="Puzzle_animal2Trait2">Pellicia</span><span id="Puzzle_animal2HelpUrl">https://ia.wikipedia.org/wiki/Catto</span><span id="Puzzle_animal3">Ape</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Melle</span><span id="Puzzle_animal3Trait2">Aculeo</span><span id="Puzzle_animal3HelpUrl">https://ia.wikipedia.org/wiki/Ape</span><span id="Puzzle_animal4">Coclea</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Concha</span><span id="Puzzle_animal4Trait2">Bava</span><span id="Puzzle_animal4HelpUrl">https://ia.wikipedia.org/wiki/Coclea</span><span id="Puzzle_picture">imagine:</span><span id="Puzzle_legs">gambas:</span><span id="Puzzle_legsChoose">selige...</span><span id="Puzzle_traits">tractos:</span><span id="Puzzle_error0">Perfecte!\nTote le %1 blocos es correcte.</span><span id="Puzzle_error1">Quasi! Un bloco es incorrecte.</span><span id="Puzzle_error2">%1 blocos es incorrecte.</span><span id="Puzzle_tryAgain">Le bloco marcate non es correcte.\nFace un altere essayo.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Verificar responsas</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Pro cata animal (in verde), attacha su imagine, selige su numero de gambas, e face un pila de su tractos.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
