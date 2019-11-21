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
  return '<div style="display: none"><span id="Puzzle_animal1">Itik</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Bulu pelepah</span><span id="Puzzle_animal1Trait2">Paruh</span><span id="Puzzle_animal1HelpUrl">https://ms.wikipedia.org/wiki/Itik</span><span id="Puzzle_animal2">Kucing</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Misai</span><span id="Puzzle_animal2Trait2">Bulu</span><span id="Puzzle_animal2HelpUrl">https://ms.wikipedia.org/wiki/Kucing</span><span id="Puzzle_animal3">Lebah</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Madu</span><span id="Puzzle_animal3Trait2">Sengat</span><span id="Puzzle_animal3HelpUrl">https://ms.wikipedia.org/wiki/Lebah</span><span id="Puzzle_animal4">Siput</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Cangkerang</span><span id="Puzzle_animal4Trait2">Lendir</span><span id="Puzzle_animal4HelpUrl">https://ms.wikipedia.org/wiki/Siput</span><span id="Puzzle_picture">gambar:</span><span id="Puzzle_legs">kaki:</span><span id="Puzzle_legsChoose">pilih...</span><span id="Puzzle_traits">ciri-ciri:</span><span id="Puzzle_error0">Sempurna!\nKesemua %1 blok adalah betul.</span><span id="Puzzle_error1">Sikit saja lagi! Satu blok tidak betul.</span><span id="Puzzle_error2">%1 blok tidak betul.</span><span id="Puzzle_tryAgain">Blok yang ditonjolkan itu tidak betul. Cuba lagi.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Teka-teki', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Semak Jawapan</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Untuk setiap haiwan (hijau), lampirkan gambarnya, pilih bilangan kakinya, dan susunkan ciri-cirinya.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
