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
  return '<div style="display: none"><span id="Puzzle_animal1">Kaczka</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Pi\u00F3ra</span><span id="Puzzle_animal1Trait2">Dzi\u00F3b</span><span id="Puzzle_animal1HelpUrl">https://pl.wikipedia.org/wiki/Kaczka</span><span id="Puzzle_animal2">Kot</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">W\u0105sy</span><span id="Puzzle_animal2Trait2">Futro</span><span id="Puzzle_animal2HelpUrl">https://pl.wikipedia.org/wiki/Kot_domowy</span><span id="Puzzle_animal3">Pszczo\u0142a</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Mi\u00F3d</span><span id="Puzzle_animal3Trait2">\u017B\u0105d\u0142o</span><span id="Puzzle_animal3HelpUrl">https://pl.wikipedia.org/wiki/Pszczo\u0142a</span><span id="Puzzle_animal4">\u015Alimak</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Muszla</span><span id="Puzzle_animal4Trait2">\u015Aluz</span><span id="Puzzle_animal4HelpUrl">https://pl.wikipedia.org/wiki/%C5%9Alimaki</span><span id="Puzzle_picture">zdj\u0119cie:</span><span id="Puzzle_legs">nogi:</span><span id="Puzzle_legsChoose">wybierz...</span><span id="Puzzle_traits">cechy:</span><span id="Puzzle_error0">Doskonale!\nWszystkie z %1 klocl\u00F3w s\u0105 poprawne.</span><span id="Puzzle_error1">Prawie! Jeden klocek jest niepoprawny.</span><span id="Puzzle_error2">%1 klock\u00F3w jest nieprawid\u0142owych.</span><span id="Puzzle_tryAgain">Pod\u015Bwietlony klocek nie jest poprawny.\nSpr\u00F3buj jeszcze raz.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Sprawd\u017A Odpowiedzi</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Dla ka\u017Cdego zwierz\u0119cia (zielonego), do\u0142\u0105cz jego zdj\u0119cie, wybierz liczb\u0119 n\u00F3g, i okre\u015Bl jego cechy.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
