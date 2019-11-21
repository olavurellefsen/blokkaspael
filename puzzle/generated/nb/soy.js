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
  return '<div style="display: none"><span id="Puzzle_animal1">And</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Fj\u00E6r</span><span id="Puzzle_animal1Trait2">Nebb</span><span id="Puzzle_animal1HelpUrl">https://no.wikipedia.org/wiki/And</span><span id="Puzzle_animal2">Katt</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">V\u00E6rh\u00E5r</span><span id="Puzzle_animal2Trait2">Pels</span><span id="Puzzle_animal2HelpUrl">https://no.wikipedia.org/wiki/Katt</span><span id="Puzzle_animal3">Bie</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honning</span><span id="Puzzle_animal3Trait2">Brodd</span><span id="Puzzle_animal3HelpUrl">https://no.wikipedia.org/wiki/Bier</span><span id="Puzzle_animal4">Snegle</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Skall</span><span id="Puzzle_animal4Trait2">Slim</span><span id="Puzzle_animal4HelpUrl">https://no.wikipedia.org/wiki/Snegler</span><span id="Puzzle_picture">bilde:</span><span id="Puzzle_legs">bein:</span><span id="Puzzle_legsChoose">velg\u2026</span><span id="Puzzle_traits">trekk:</span><span id="Puzzle_error0">Perfekt!\nAlle %1 blokker er riktig.</span><span id="Puzzle_error1">Nesten! En blokk er feil.</span><span id="Puzzle_error2">%1 blokker er feil.</span><span id="Puzzle_tryAgain">Den merkede blokken er ikke riktig.\nFortsett \u00E5 pr\u00F8ve.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puslespill', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Sjekk svar</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For hvert dyr (gr\u00F8nt), legg til dets bilde, velg antall bein, og legg en stabel med dets trekk.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
