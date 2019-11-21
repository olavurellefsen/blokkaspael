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
  return '<div style="display: none"><span id="Puzzle_animal1">\u00D6nd</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Fja\u00F0rir</span><span id="Puzzle_animal1Trait2">Goggur</span><span id="Puzzle_animal1HelpUrl">http://is.wikipedia.org/wiki/%C3%96nd</span><span id="Puzzle_animal2">K\u00F6ttur</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Vei\u00F0ih\u00E1r</span><span id="Puzzle_animal2Trait2">Feldur</span><span id="Puzzle_animal2HelpUrl">http://is.wikipedia.org/wiki/K%C3%B6ttur</span><span id="Puzzle_animal3">B\u00FDfluga</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Hunang</span><span id="Puzzle_animal3Trait2">Broddur</span><span id="Puzzle_animal3HelpUrl">http://is.wikipedia.org/wiki/B%C3%BDflugur</span><span id="Puzzle_animal4">Snigill</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Skel</span><span id="Puzzle_animal4Trait2">Sl\u00EDm</span><span id="Puzzle_animal4HelpUrl">http://is.wikipedia.org/wiki/Sniglar</span><span id="Puzzle_picture">mynd:</span><span id="Puzzle_legs">f\u00E6tur:</span><span id="Puzzle_legsChoose">veldu...</span><span id="Puzzle_traits">einkenni:</span><span id="Puzzle_error0">Fullkomi\u00F0!\nAllir %1 kubbarnir eru r\u00E9ttir.</span><span id="Puzzle_error1">N\u00E6stum! Einn kubbur er rangur.</span><span id="Puzzle_error2">%1 kubbar eru rangir.</span><span id="Puzzle_tryAgain">Uppl\u00FDsti kubburinn er ekki r\u00E9ttur.\nHaltu \u00E1fram a\u00F0 reyna.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'P\u00FAsl', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Athuga sv\u00F6r</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Fyrir hvert d\u00FDr (gr\u00E6nt) \u00E1 tengja mynd, velja fj\u00F6lda f\u00F3ta og b\u00FAa til st\u00E6\u00F0u \u00FAr einkennum \u00FEess.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
