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
  return '<div style="display: none"><span id="Puzzle_animal1">Canard</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumes</span><span id="Puzzle_animal1Trait2">Bec</span><span id="Puzzle_animal1HelpUrl">https://fr.wikipedia.org/wiki/Canard</span><span id="Puzzle_animal2">Chat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Moustaches</span><span id="Puzzle_animal2Trait2">Fourrure</span><span id="Puzzle_animal2HelpUrl">https://fr.wikipedia.org/wiki/Chat</span><span id="Puzzle_animal3">Abeille</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Miel</span><span id="Puzzle_animal3Trait2">Dard</span><span id="Puzzle_animal3HelpUrl">https://fr.wikipedia.org/wiki/Abeille</span><span id="Puzzle_animal4">Escargot</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Coquille</span><span id="Puzzle_animal4Trait2">Bave</span><span id="Puzzle_animal4HelpUrl">https://fr.wikipedia.org/wiki/Escargot</span><span id="Puzzle_picture">image :</span><span id="Puzzle_legs">jambes :</span><span id="Puzzle_legsChoose">choisis...</span><span id="Puzzle_traits">traits :</span><span id="Puzzle_error0">Parfait !\nLes %1 blocs sont tous corrects.</span><span id="Puzzle_error1">Presque ! Un bloc est incorrect.</span><span id="Puzzle_error2">%1 blocks sont incorrects.</span><span id="Puzzle_tryAgain">Le bloc en surbrillance est incorrect.  R\u00E9essaie.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">V\u00E9rifiez les r\u00E9ponses</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Pour chaque animal (en vert), attacher son image, choisir son nombre de jambes, et faire une pile de ses traits caract\u00E9ristiques.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
