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
  return '<div style="display: none"><span id="Puzzle_animal1">Kacsa</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Tollak</span><span id="Puzzle_animal1Trait2">Cs\u0151r</span><span id="Puzzle_animal1HelpUrl">http://hu.wikipedia.org/wiki/T%C5%91k%C3%A9s_r%C3%A9ce</span><span id="Puzzle_animal2">Macska</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Bajusz</span><span id="Puzzle_animal2Trait2">Sz\u0151rme</span><span id="Puzzle_animal2HelpUrl">https://hu.wikipedia.org/wiki/Macska</span><span id="Puzzle_animal3">M\u00E9hecske</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">M\u00E9z</span><span id="Puzzle_animal3Trait2">Full\u00E1nk</span><span id="Puzzle_animal3HelpUrl">http://hu.wikipedia.org/wiki/H%C3%A1zim%C3%A9h</span><span id="Puzzle_animal4">Csiga</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">H\u00E1z</span><span id="Puzzle_animal4Trait2">Ny\u00E1lka</span><span id="Puzzle_animal4HelpUrl">http://hu.wikipedia.org/wiki/Csig%C3%A1k</span><span id="Puzzle_picture">k\u00E9p:</span><span id="Puzzle_legs">l\u00E1bak:</span><span id="Puzzle_legsChoose">v\u00E1lassz\u2026</span><span id="Puzzle_traits">jellemz\u0151k:</span><span id="Puzzle_error0">T\u00F6k\u00E9letes!\nMind a %1 blokk a hely\u00E9n van.</span><span id="Puzzle_error1">Majdnem siker\u00FClt! Egy blokk rossz helyre ker\u00FClt.</span><span id="Puzzle_error2">%1 blokk rossz helyre ker\u00FClt.</span><span id="Puzzle_tryAgain">A kiemelt blokk nincs a hely\u00E9n.\nPr\u00F3b\u00E1ld \u00FAjra\u01C3</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Kirak\u00F3s', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">V\u00E1laszok ellen\u0151rz\u00E9se</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Minden, \u00E1llathoz (z\u00F6ld), kapcsold hozz\u00E1 a k\u00E9p\u00E9t, \u00E1ll\u00EDtsd be a l\u00E1bainak sz\u00E1m\u00E1t, , \u00E9s egy\u00E9b jellemvon\u00E1sait.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
