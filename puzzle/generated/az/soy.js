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
  return '<div style="display: none"><span id="Puzzle_animal1">\u00D6rd\u0259k</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">L\u0259l\u0259kl\u0259r</span><span id="Puzzle_animal1Trait2">Dimdik</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Pi\u015Fik</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">B\u0131\u011Fc\u0131q</span><span id="Puzzle_animal2Trait2">T\u00FCk</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Ar\u0131</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Bal</span><span id="Puzzle_animal3Trait2">\u0130yn\u0259</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">\u0130lbiz</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Qab\u0131q</span><span id="Puzzle_animal4Trait2">S\u00FCm\u00FCks\u00FC</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u015F\u0259kil:</span><span id="Puzzle_legs">ayaqlar:</span><span id="Puzzle_legsChoose">se\u00E7...</span><span id="Puzzle_traits">x\u00FCsusiyy\u0259tl\u0259r:</span><span id="Puzzle_error0">M\u00FCk\u0259mm\u0259l!\n%1 blokun ham\u0131s\u0131 do\u011Frudur.</span><span id="Puzzle_error1">Dem\u0259k olar ki! Bir blok s\u0259hvdir.</span><span id="Puzzle_error2">%1 blokun yerl\u0259\u015Fm\u0259si  s\u0259hfdir.</span><span id="Puzzle_tryAgain">Vur\u011Fulanan blok s\u0259hvdir.\n\u00C7al\u0131\u015Fma\u011Fa davam.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Tapmaca', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">Cavablar\u0131 Yoxla</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">H\u0259r bir heyvan (ya\u015F\u0131l blok) \u00FC\u00E7\u00FCn, ona aid r\u0259smini se\u00E7\u0259r\u0259k, \u0259yaqlar\u0131n\u0131n say\u0131 v\u0259 f\u0259rqli x\u00FCsusiyy\u0259tl\u0259rini qed et.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
