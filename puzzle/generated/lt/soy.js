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
  return '<div style="display: none"><span id="Puzzle_animal1">Antis</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Plunksnos</span><span id="Puzzle_animal1Trait2">Snapas</span><span id="Puzzle_animal1HelpUrl">https://lt.wikipedia.org/wiki/Antis</span><span id="Puzzle_animal2">Kat\u0117</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u016Asai</span><span id="Puzzle_animal2Trait2">Kailis</span><span id="Puzzle_animal2HelpUrl">https://lt.wikipedia.org/wiki/Kat\u0117</span><span id="Puzzle_animal3">Bit\u0117</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Medus</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://lt.wikipedia.org/wiki/Bit\u0117</span><span id="Puzzle_animal4">Sraig\u0117</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Kiautas</span><span id="Puzzle_animal4Trait2">Gleiv\u0117s</span><span id="Puzzle_animal4HelpUrl">https://lt.wikipedia.org/wiki/Sraig\u0117</span><span id="Puzzle_picture">nuotrauka:</span><span id="Puzzle_legs">kojos:</span><span id="Puzzle_legsChoose">pasirinkti...</span><span id="Puzzle_traits">po\u017Eymiai:</span><span id="Puzzle_error0">Puiku!\nVisi %1 blokai yra teisingi.</span><span id="Puzzle_error1">Beveik! Vienas blokas yra neteisingas.</span><span id="Puzzle_error2">%1 blokai yra neteisingi.</span><span id="Puzzle_tryAgain">Pary\u0161kintas blokas yra neteisingas.\nToliau bandykite.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'D\u0117lion\u0117', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Patikrinti atsakymus</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Kiekvienam gyv\u016Bnui (\u017Eali) prid\u0117k jo paveiksl\u0117l\u012F, parink koj\u0173 skai\u010Di\u0173 ir padaryk jo po\u017Eymi\u0173 kr\u016Bvel\u0119.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
