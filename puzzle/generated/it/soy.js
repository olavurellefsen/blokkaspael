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
  return '<div style="display: none"><span id="Puzzle_animal1">Anatra</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Piume</span><span id="Puzzle_animal1Trait2">Becco</span><span id="Puzzle_animal1HelpUrl">https://it.wikipedia.org/wiki/Anatra</span><span id="Puzzle_animal2">Gatto</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Baffi</span><span id="Puzzle_animal2Trait2">Pelliccia</span><span id="Puzzle_animal2HelpUrl">https://it.wikipedia.org/wiki/Felis_silvestris_catus</span><span id="Puzzle_animal3">Ape</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Miele</span><span id="Puzzle_animal3Trait2">Pungiglione</span><span id="Puzzle_animal3HelpUrl">https://it.wikipedia.org/wiki/Anthophila</span><span id="Puzzle_animal4">Lumaca</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Guscio</span><span id="Puzzle_animal4Trait2">Bava</span><span id="Puzzle_animal4HelpUrl">https://it.wikipedia.org/wiki/Chiocciola</span><span id="Puzzle_picture">immagine:</span><span id="Puzzle_legs">gambe:</span><span id="Puzzle_legsChoose">scegli...</span><span id="Puzzle_traits">caratteristiche:</span><span id="Puzzle_error0">Perfetto!\nTutti i %1 blocchi sono corretti.</span><span id="Puzzle_error1">Quasi! Un blocco non \u00E8 corretto.</span><span id="Puzzle_error2">%1 blocchi non sono corretti.</span><span id="Puzzle_tryAgain">Il blocco evidenziato non \u00E8 corretto.\nProva ancora.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Controlla le risposte</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Per ogni animale (verde), attaccaci la sua immagine, scegli il numero delle gambe e fai la lista dei suoi tratti.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
