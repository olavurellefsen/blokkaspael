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
  return '<div style="display: none"><span id="Puzzle_animal1">Dunna</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Fja\u00F0rar</span><span id="Puzzle_animal1Trait2">Nev</span><span id="Puzzle_animal1HelpUrl">https://fo.wikipedia.org/wiki/Villdunna</span><span id="Puzzle_animal2">Ketta</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Kj\u00E1lkaskegg</span><span id="Puzzle_animal2Trait2">Skinn</span><span id="Puzzle_animal2HelpUrl">https://fo.wikipedia.org/wiki/Kettur</span><span id="Puzzle_animal3">B\u00FDfluga</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Hunangur</span><span id="Puzzle_animal3Trait2">Stingari</span><span id="Puzzle_animal3HelpUrl">https://fo.wikipedia.org/wiki/B%C3%BD</span><span id="Puzzle_animal4">Snigil</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Skel</span><span id="Puzzle_animal4Trait2">Sl\u00EDm</span><span id="Puzzle_animal4HelpUrl">https://fo.wikipedia.org/wiki/Sniglar</span><span id="Puzzle_picture">mynd:</span><span id="Puzzle_legs">bein:</span><span id="Puzzle_legsChoose">vel...</span><span id="Puzzle_traits">ey\u00F0kenni:</span><span id="Puzzle_error0">Einastandandi!\nAllir %1 blokkar eru r\u00E6ttir.</span><span id="Puzzle_error1">N\u00E6stan! Ein blokkur er ikki r\u00E6ttur.</span><span id="Puzzle_error2">%1 blokkar eru ikki r\u00E6ttir.</span><span id="Puzzle_tryAgain">Tann uppl\u00FDsti blokkurin er ikki r\u00E6ttur.\nRoyn aftur.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Putlisp\u00E6l', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Hygg eftir svarunum</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Fyri hv\u00F8rt dj\u00F3r (gr\u00F8nt), kn\u00FDt \u00ED myndina, vel tal av beinum og ger ein stakk av ey\u00F0kennum.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
