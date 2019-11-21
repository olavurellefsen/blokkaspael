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
  return '<div style="display: none"><span id="Puzzle_animal1">Ab\u1E5Bak</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Rric</span><span id="Puzzle_animal1Trait2">Aqamum</span><span id="Puzzle_animal1HelpUrl">https://kab.wikipedia.org/wiki/Abrak</span><span id="Puzzle_animal2">Amcic</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Cla\u0263em</span><span id="Puzzle_animal2Trait2">Ta\u1E25idurt</span><span id="Puzzle_animal2HelpUrl">https://kab.wikipedia.org/wiki/Amcic</span><span id="Puzzle_animal3">Tizizwitt</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Tamment</span><span id="Puzzle_animal3Trait2">Tisiqqest</span><span id="Puzzle_animal3HelpUrl">https://kab.wikipedia.org/wiki/Tizizwit</span><span id="Puzzle_animal4">A\u025Barus</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Aje\u0263lal</span><span id="Puzzle_animal4Trait2">Alda</span><span id="Puzzle_animal4HelpUrl">https://kab.wikipedia.org/wiki/A\u025Barus</span><span id="Puzzle_picture">tugna:</span><span id="Puzzle_legs">i\u1E0Da\u1E5B\u1E5Ben:</span><span id="Puzzle_legsChoose">fren...</span><span id="Puzzle_traits">ijerri\u1E0Den:</span><span id="Puzzle_error0">Igarrez!\nAkk i\u1E25edran %1 d ime\u0263ta.</span><span id="Puzzle_error1">Qrib! Al yiwen n i\u1E25der ur yellin d ame\u0263tu.</span><span id="Puzzle_error2">%1 n i\u1E25edran ma\u010D\u010Di d ime\u0263ta.</span><span id="Puzzle_tryAgain">I\u1E25der s ubru\u1E5Beq ma\u010D\u010Di d ame\u0263tu. \u0190re\u1E0D tikelt-nni\u1E0Den.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Puzzle', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Senqed tiririyin</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">I yal a\u0263ersiw (azegzaw), sente\u1E0D tugna-is s ufran n wu\u1E6D\u1E6Dun n i\u1E0Darren-is, sakin sers ayen ixeddem awal \u0263ef wawal.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
