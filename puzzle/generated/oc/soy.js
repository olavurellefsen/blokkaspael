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
  return '<div style="display: none"><span id="Puzzle_animal1">Guit</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plumas</span><span id="Puzzle_animal1Trait2">B\u00E8c</span><span id="Puzzle_animal1HelpUrl">https://oc.wikipedia.org/wiki/Guit</span><span id="Puzzle_animal2">Gat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Mostachas</span><span id="Puzzle_animal2Trait2">Forradura</span><span id="Puzzle_animal2HelpUrl">https://oc.wikipedia.org/wiki/Gat</span><span id="Puzzle_animal3">Abelha</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">M\u00E8l</span><span id="Puzzle_animal3Trait2">Fisson</span><span id="Puzzle_animal3HelpUrl">https://oc.wikipedia.org/wiki/Abelha</span><span id="Puzzle_animal4">Cagaraula</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Cl\u00F2sca</span><span id="Puzzle_animal4Trait2">Bava</span><span id="Puzzle_animal4HelpUrl">https://oc.wikipedia.org/wiki/Cagaraula</span><span id="Puzzle_picture">imatge :</span><span id="Puzzle_legs">cambas :</span><span id="Puzzle_legsChoose">causiss\u00E8tz...</span><span id="Puzzle_traits">traits :</span><span id="Puzzle_error0">Perfi\u00E8it !  Totes los %1 bl\u00F2ts son corr\u00E8ctes.</span><span id="Puzzle_error1">Gaireben !  Un bl\u00F2t es incorr\u00E8cte.</span><span id="Puzzle_error2">%1 bl\u00F2ts son incorr\u00E8ctes.</span><span id="Puzzle_tryAgain">Lo bl\u00F2t en susbrilhan\u00E7a es incorr\u00E8cte.  Tornatz ensajar.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Verificatz las responsas</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Per cada animal (en verd), estacar son imatge, causir son nombre de cambas, e far una pila de sos traits caracteristics.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
