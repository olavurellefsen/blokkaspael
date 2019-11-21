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
  return '<div style="display: none"><span id="Puzzle_animal1">Shot\u00EB</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Puplat</span><span id="Puzzle_animal1Trait2">Sqepi</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Mace</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Mustaqet</span><span id="Puzzle_animal2Trait2">G\u00EBzofi</span><span id="Puzzle_animal2HelpUrl">https://sq.wikipedia.org/wiki/Macja</span><span id="Puzzle_animal3">Blet\u00EB</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mjalt\u00EB</span><span id="Puzzle_animal3Trait2">Thumbues</span><span id="Puzzle_animal3HelpUrl">https://sq.wikipedia.org/wiki/Bleta</span><span id="Puzzle_animal4">K\u00EBrmill</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Guask\u00EB</span><span id="Puzzle_animal4Trait2">Jarg\u00EB</span><span id="Puzzle_animal4HelpUrl">https://sq.wikipedia.org/wiki/K%C3%ABrmilli</span><span id="Puzzle_picture">foto:</span><span id="Puzzle_legs">k\u00EBmb\u00EBt:</span><span id="Puzzle_legsChoose">zgjedh...</span><span id="Puzzle_traits">tiparet:</span><span id="Puzzle_error0">Perfekt!\nT\u00EB gjitha blloqet %1 jan\u00EB t\u00EB sakta.</span><span id="Puzzle_error1">Pothuajse. Nj\u00EB bllok nuk \u00EBsht\u00EB korrekt.</span><span id="Puzzle_error2">%1 blloqet nuk jan\u00EB korrekt.</span><span id="Puzzle_tryAgain">Blloku i theksuar nuk \u00EBsht\u00EB korrekt.\nProvo prap.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Gj\u00EBegj\u00EBz\u00EB', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Kontrollo P\u00EBrgjigjen</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">P\u00EBr \u00E7do kafsh\u00EB (t\u00EB gjelb\u00EBr), bashk\u00EBngjitni pamjen e saj, zgjidhni numrin e k\u00EBmb\u00EBve dhe b\u00EBni nj\u00EB list\u00EB t\u00EB tipareve t\u00EB saj.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
