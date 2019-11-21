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
  return '<div style="display: none"><span id="Puzzle_animal1">Kachna</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Pe\u0159\u00ED</span><span id="Puzzle_animal1Trait2">Zob\u00E1k</span><span id="Puzzle_animal1HelpUrl">https://cs.wikipedia.org/wiki/Kachna</span><span id="Puzzle_animal2">Ko\u010Dka</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Vousy</span><span id="Puzzle_animal2Trait2">Srst</span><span id="Puzzle_animal2HelpUrl">https://cs.wikipedia.org/wiki/Ko%C4%8Dka_dom%C3%A1c%C3%AD</span><span id="Puzzle_animal3">V\u010Dela</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Med</span><span id="Puzzle_animal3Trait2">\u017Dihadlo</span><span id="Puzzle_animal3HelpUrl">https://cs.wikipedia.org/wiki/V%C4%8Dela</span><span id="Puzzle_animal4">\u0160nek</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Ulita</span><span id="Puzzle_animal4Trait2">Sliz</span><span id="Puzzle_animal4HelpUrl">https://cs.wikipedia.org/wiki/Hlem%C3%BD%C5%BE%C4%8F_zahradn%C3%AD</span><span id="Puzzle_picture">obr\u00E1zek:</span><span id="Puzzle_legs">nohy:</span><span id="Puzzle_legsChoose">vyber...</span><span id="Puzzle_traits">vlastnosti:</span><span id="Puzzle_error0">V\u00FDborn\u011B!\nV\u0161ech %1 blok\u016F je um\u00EDst\u011Bno spr\u00E1vn\u011B.</span><span id="Puzzle_error1">Skoro! Jeden blok je \u0161patn\u011B.</span><span id="Puzzle_error2">%1 bloky jsou chybn\u011B.</span><span id="Puzzle_tryAgain">Zv\u00FDrazn\u011Bn\u00FD blok nen\u00ED spr\u00E1vn\u011B.\nZkou\u0161ej to d\u00E1l.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Skl\u00E1da\u010Dka', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Zkontrolovat odpov\u011Bdi</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Ke ka\u017Ed\u00E9mu zv\u00ED\u0159eti (zelen\u011B) p\u0159i\u0159a\u010F obr\u00E1zek, po\u010Det nohou a seznam vlastnost\u00ED.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
