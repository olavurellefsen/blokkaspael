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
  return '<div style="display: none"><span id="Puzzle_animal1">Ente</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Federn</span><span id="Puzzle_animal1Trait2">Schnabel</span><span id="Puzzle_animal1HelpUrl">https://de.wikipedia.org/wiki/Entenv\u00F6gel</span><span id="Puzzle_animal2">Katze</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Schnurrhaare</span><span id="Puzzle_animal2Trait2">Fell</span><span id="Puzzle_animal2HelpUrl">https://de.wikipedia.org/wiki/Hauskatze</span><span id="Puzzle_animal3">Biene</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honig</span><span id="Puzzle_animal3Trait2">Stachel</span><span id="Puzzle_animal3HelpUrl">https://de.wikipedia.org/wiki/Bienen</span><span id="Puzzle_animal4">Schnecke</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Schale</span><span id="Puzzle_animal4Trait2">Schleim</span><span id="Puzzle_animal4HelpUrl">https://de.wikipedia.org/wiki/Schnecken</span><span id="Puzzle_picture">Bild:</span><span id="Puzzle_legs">Beine:</span><span id="Puzzle_legsChoose">ausw\u00E4hlen \u2026</span><span id="Puzzle_traits">Eigenschaften:</span><span id="Puzzle_error0">Perfekt! \nAlle %1 Bausteine sind richtig.</span><span id="Puzzle_error1">Fast! Ein Baustein ist falsch.</span><span id="Puzzle_error2">%1 Bausteine sind falsch.</span><span id="Puzzle_tryAgain">Der hervorgehobene Baustein ist falsch. Versuche es noch einmal.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Antworten \u00FCberpr\u00FCfen</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">H\u00E4nge f\u00FCr jedes Tier (gr\u00FCn) sein Bild an, w\u00E4hle seine Anzahl der Beine aus und mache einen Stapel mit seinen Eigenschaften.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
