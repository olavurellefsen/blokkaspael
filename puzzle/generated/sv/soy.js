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
  return '<div style="display: none"><span id="Puzzle_animal1">Anka</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Fj\u00E4drar</span><span id="Puzzle_animal1Trait2">N\u00E4bb</span><span id="Puzzle_animal1HelpUrl">https://sv.wikipedia.org/wiki/Anka</span><span id="Puzzle_animal2">Katt</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Morrh\u00E5r</span><span id="Puzzle_animal2Trait2">P\u00E4ls</span><span id="Puzzle_animal2HelpUrl">https://sv.wikipedia.org/wiki/Katt</span><span id="Puzzle_animal3">Bi</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honung</span><span id="Puzzle_animal3Trait2">Gadd</span><span id="Puzzle_animal3HelpUrl">https://sv.wikipedia.org/wiki/Bin</span><span id="Puzzle_animal4">Snigel</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Skal</span><span id="Puzzle_animal4Trait2">Slem</span><span id="Puzzle_animal4HelpUrl">https://sv.wikipedia.org/wiki/Sn%C3%A4ckor</span><span id="Puzzle_picture">bild:</span><span id="Puzzle_legs">ben:</span><span id="Puzzle_legsChoose">v\u00E4lj...</span><span id="Puzzle_traits">egenskaper:</span><span id="Puzzle_error0">Perfekt!\nAlla %1 block \u00E4r r\u00E4tt.</span><span id="Puzzle_error1">N\u00E4stan! Ett block \u00E4r fel.</span><span id="Puzzle_error2">%1 block \u00E4r fel.</span><span id="Puzzle_tryAgain">Det markerade blocket \u00E4r inte r\u00E4tt.\nF\u00F6rs\u00F6k igen.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Pussel', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Kontrollera svar</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">F\u00F6r varje djur (gr\u00F6n), l\u00E4gg till bilden, v\u00E4lj antalet ben och skapa en lista med dess egenskaper.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
