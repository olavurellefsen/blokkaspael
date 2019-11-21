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
  return '<div style="display: none"><span id="Puzzle_animal1">P\u012Ble</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Spalvas</span><span id="Puzzle_animal1Trait2">Kn\u0101bis</span><span id="Puzzle_animal1HelpUrl">https://lv.wikipedia.org/wiki/P%C4%ABle</span><span id="Puzzle_animal2">Ka\u0137is</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u016Asas</span><span id="Puzzle_animal2Trait2">Ka\u017Eoks</span><span id="Puzzle_animal2HelpUrl">https://lv.wikipedia.org/wiki/Ka\u0137is</span><span id="Puzzle_animal3">Bite</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Medus</span><span id="Puzzle_animal3Trait2">Dzelonis</span><span id="Puzzle_animal3HelpUrl">https://lv.wikipedia.org/wiki/Bite</span><span id="Puzzle_animal4">Gliemezis</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u010Caula</span><span id="Puzzle_animal4Trait2">G\u013Cota</span><span id="Puzzle_animal4HelpUrl">https://lv.wikipedia.org/wiki/Gliemezis</span><span id="Puzzle_picture">att\u0113ls:</span><span id="Puzzle_legs">k\u0101jas:</span><span id="Puzzle_legsChoose">izv\u0113lies...</span><span id="Puzzle_traits">\u012Bpa\u0161\u012Bbas:</span><span id="Puzzle_error0">Lieliski!\nVisi %1 bloki ir pareizi.</span><span id="Puzzle_error1">Gandr\u012Bz! Viens bloks nav pareizs.</span><span id="Puzzle_error2">%1 bloki nav pareizi.</span><span id="Puzzle_tryAgain">Iez\u012Bm\u0113tais bloks nav pareizs.\nM\u0113\u0123ini v\u0113l.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Saliekamatt\u0113ls', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">P\u0101rbaud\u012Bt atbildes</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Katram dz\u012Bvniekam (za\u013Cais), pievieno t\u0101 att\u0113lu, \u012Bpa\u0161\u012Bbas un k\u0101ju skaitu.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
