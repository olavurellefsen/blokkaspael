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
  return '<div style="display: none"><span id="Puzzle_animal1">Eend</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Veren</span><span id="Puzzle_animal1Trait2">Snavel</span><span id="Puzzle_animal1HelpUrl">https://nl.wikipedia.org/wiki/Eenden</span><span id="Puzzle_animal2">Kat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Snorharen</span><span id="Puzzle_animal2Trait2">Vacht</span><span id="Puzzle_animal2HelpUrl">https://nl.wikipedia.org/wiki/Kat_(dier)</span><span id="Puzzle_animal3">Bij</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honing</span><span id="Puzzle_animal3Trait2">Angel</span><span id="Puzzle_animal3HelpUrl">https://nl.wikipedia.org/wiki/Bijen</span><span id="Puzzle_animal4">Slak</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Huisje</span><span id="Puzzle_animal4Trait2">Slijm</span><span id="Puzzle_animal4HelpUrl">https://nl.wikipedia.org/wiki/Slakken</span><span id="Puzzle_picture">afbeelding:</span><span id="Puzzle_legs">benen:</span><span id="Puzzle_legsChoose">kiezen...</span><span id="Puzzle_traits">eigenschappen:</span><span id="Puzzle_error0">Perfect\nAlle %1 blokken zijn correct.</span><span id="Puzzle_error1">Bijna! E\u00E9n blok is onjuist.</span><span id="Puzzle_error2">%1 blokken zijn onjuist.</span><span id="Puzzle_tryAgain">Het gemarkeerde blok is niet correct.\nBlijf het proberen.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzel', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Antwoorden controleren</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Kies voor ieder dier (groen) een afbeelding, het aantal poten en maak een stapel van de eigenschappen van het dier.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
