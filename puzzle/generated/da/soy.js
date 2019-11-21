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
  return '<div style="display: none"><span id="Puzzle_animal1">And</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Fjer</span><span id="Puzzle_animal1Trait2">N\u00E6b</span><span id="Puzzle_animal1HelpUrl">https://da.wikipedia.org/wiki/And</span><span id="Puzzle_animal2">Kat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Knurh\u00E5r</span><span id="Puzzle_animal2Trait2">Pels</span><span id="Puzzle_animal2HelpUrl">https://da.wikipedia.org/wiki/Kat</span><span id="Puzzle_animal3">Bi</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honning</span><span id="Puzzle_animal3Trait2">Brod</span><span id="Puzzle_animal3HelpUrl">https://da.wikipedia.org/wiki/Bi</span><span id="Puzzle_animal4">Snegl</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Skal</span><span id="Puzzle_animal4Trait2">Slim</span><span id="Puzzle_animal4HelpUrl">https://da.wikipedia.org/wiki/Snegl</span><span id="Puzzle_picture">billede:</span><span id="Puzzle_legs">ben:</span><span id="Puzzle_legsChoose">v\u00E6lg...</span><span id="Puzzle_traits">tr\u00E6k:</span><span id="Puzzle_error0">Perfekt!\nAlle %1 blokke er rigtige.</span><span id="Puzzle_error1">N\u00E6sten! \u00C9n blok er forkert.</span><span id="Puzzle_error2">%1 blokke er forkerte.</span><span id="Puzzle_tryAgain">Den fremh\u00E6vede blok er ikke rigtig.\nBliv ved med at pr\u00F8ve.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puslespil', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Kontroller svarene</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For hvert dyr (gr\u00F8n), tilknyt dets billede, v\u00E6lg dets antal ben, og lav en stak af dens tr\u00E6k.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
