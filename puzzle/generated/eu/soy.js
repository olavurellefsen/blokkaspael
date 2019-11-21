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
  return '<div style="display: none"><span id="Puzzle_animal1">Ahatea</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Lumak</span><span id="Puzzle_animal1Trait2">Mokoa</span><span id="Puzzle_animal1HelpUrl">https://eu.wikipedia.org/wiki/Ahate</span><span id="Puzzle_animal2">Katua</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Biboteak</span><span id="Puzzle_animal2Trait2">Ilajea</span><span id="Puzzle_animal2HelpUrl">https://eu.wikipedia.org/wiki/Katu</span><span id="Puzzle_animal3">Erlea</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Eztia</span><span id="Puzzle_animal3Trait2">Eztena</span><span id="Puzzle_animal3HelpUrl">https://eu.wikipedia.org/wiki/Erle</span><span id="Puzzle_animal4">Barraskiloa</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Oskola</span><span id="Puzzle_animal4Trait2">Lirdinga</span><span id="Puzzle_animal4HelpUrl">https://eu.wikipedia.org/wiki/Barraskilo</span><span id="Puzzle_picture">irudia:</span><span id="Puzzle_legs">hankak:</span><span id="Puzzle_legsChoose">aukeratu...</span><span id="Puzzle_traits">ezaugarriak:</span><span id="Puzzle_error0">Bikain!\n%1 blokeak zuzen daude.</span><span id="Puzzle_error1">Ia-ia! Bloke bat ez dago ondo.</span><span id="Puzzle_error2">%1 bloke ez dira zuzenak.</span><span id="Puzzle_tryAgain">Markatuta agertzen den blokea ez da zuzena.\nSaiatu berriro.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Erantzunak egiaztatu</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Animalia bakoitzari (berdea), argazkia jarri, bere hanka kopurua aukeratu, eta bere berezitasunak ere.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
