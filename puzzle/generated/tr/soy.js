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
  return '<div style="display: none"><span id="Puzzle_animal1">\u00D6rdek</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">T\u00FCyler</span><span id="Puzzle_animal1Trait2">Gaga</span><span id="Puzzle_animal1HelpUrl">https://tr.wikipedia.org/wiki/\u00D6rdek</span><span id="Puzzle_animal2">Kedi</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">B\u0131y\u0131klar</span><span id="Puzzle_animal2Trait2">K\u00FCrk</span><span id="Puzzle_animal2HelpUrl">https://tr.wikipedia.org/wiki/Kedi</span><span id="Puzzle_animal3">Ar\u0131</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Bal</span><span id="Puzzle_animal3Trait2">\u0130\u011Fne</span><span id="Puzzle_animal3HelpUrl">https://tr.wikipedia.org/wiki/Ar%C4%B1</span><span id="Puzzle_animal4">Salyangoz</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Kabuk</span><span id="Puzzle_animal4Trait2">S\u00FCm\u00FCks\u00FC madde</span><span id="Puzzle_animal4HelpUrl">https://tr.wikipedia.org/wiki/Salyangoz</span><span id="Puzzle_picture">resim:</span><span id="Puzzle_legs">bacaklar:</span><span id="Puzzle_legsChoose">se\u00E7im yap\u0131n...</span><span id="Puzzle_traits">\u00F6zellikleri:</span><span id="Puzzle_error0">Muhte\u015Fem!\n%1 blo\u011Fun hepsi de do\u011Fru.</span><span id="Puzzle_error1">Neredeyse oluyordu! Bir blok yanl\u0131\u015F.</span><span id="Puzzle_error2">%1 blok yanl\u0131\u015F.</span><span id="Puzzle_tryAgain">Vurgulanan blok yanl\u0131\u015F.\nDenemeye devam.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Bulmaca', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Yan\u0131tlar\u0131 Kontrol Et</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Her hayvan\u0131n (ye\u015Fil), resmini ekle, ayak say\u0131s\u0131n\u0131 se\u00E7 ve \u00F6zelliklerinden bir y\u0131\u011F\u0131n olu\u015Ftur.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
