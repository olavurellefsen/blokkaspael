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
  return '<div style="display: none"><span id="Puzzle_animal1">Houad</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plu\u00F1v</span><span id="Puzzle_animal1Trait2">Beg</span><span id="Puzzle_animal1HelpUrl">https://br.wikipedia.org/wiki/Houad</span><span id="Puzzle_animal2">Kazh</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Mourro\u00F9</span><span id="Puzzle_animal2Trait2">Feur</span><span id="Puzzle_animal2HelpUrl">https://br.wikipedia.org/wiki/Kazh</span><span id="Puzzle_animal3">Gwenanenn</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mel</span><span id="Puzzle_animal3Trait2">Flemm</span><span id="Puzzle_animal3HelpUrl">https://br.wikipedia.org/wiki/Gwenanenn</span><span id="Puzzle_animal4">Maligorn</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Krogenn</span><span id="Puzzle_animal4Trait2">Babouz</span><span id="Puzzle_animal4HelpUrl">https://br.wikipedia.org/wiki/Maligorn</span><span id="Puzzle_picture">Skeudenn :</span><span id="Puzzle_legs">Pavio\u00F9 :</span><span id="Puzzle_legsChoose">dibab...</span><span id="Puzzle_traits">perzhio\u00F9 :</span><span id="Puzzle_error0">Dispar !\nReizh eo an/ar %1 bloc\'h.</span><span id="Puzzle_error1">Tost ! Chom a ra ur bloc\'h direizh.</span><span id="Puzzle_error2">%1 bloc\'h zo direizh.</span><span id="Puzzle_tryAgain">Direizh eo ar bloc\'h usskedet.\nKendalc\'hit da bleustri\u00F1.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Miltamm', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Gwiria\u00F1 ar responto\u00F9</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Evit kement loen(e gwer), staga\u00F1 he skeudenn, dibab pet pav zo dezha\u00F1, ha bernia\u00F1 he ferzhio\u00F9.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
