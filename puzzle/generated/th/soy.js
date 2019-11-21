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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0E40\u0E1B\u0E47\u0E14</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0E02\u0E19\u0E19\u0E01</span><span id="Puzzle_animal1Trait2">\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E1B\u0E32\u0E01</span><span id="Puzzle_animal1HelpUrl">https://th.wikipedia.org/wiki/\u0E40\u0E1B\u0E47\u0E14</span><span id="Puzzle_animal2">\u0E41\u0E21\u0E27</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0E2B\u0E19\u0E27\u0E14</span><span id="Puzzle_animal2Trait2">\u0E02\u0E19</span><span id="Puzzle_animal2HelpUrl">https://th.wikipedia.org/wiki/\u0E41\u0E21\u0E27</span><span id="Puzzle_animal3">\u0E1C\u0E36\u0E49\u0E07</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0E19\u0E49\u0E33\u0E1C\u0E36\u0E49\u0E07</span><span id="Puzzle_animal3Trait2">\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19</span><span id="Puzzle_animal3HelpUrl">https://th.wikipedia.org/wiki/\u0E1C\u0E36\u0E49\u0E07</span><span id="Puzzle_animal4">\u0E2B\u0E2D\u0E22\u0E17\u0E32\u0E01</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u0E2B\u0E2D\u0E22</span><span id="Puzzle_animal4Trait2">\u0E2A\u0E44\u0E25\u0E21\u0E4C</span><span id="Puzzle_animal4HelpUrl">https://th.wikipedia.org/wiki/\u0E2B\u0E2D\u0E22\u0E17\u0E32\u0E01</span><span id="Puzzle_picture">\u0E20\u0E32\u0E1E:</span><span id="Puzzle_legs">\u0E02\u0E32:</span><span id="Puzzle_legsChoose">\u0E40\u0E25\u0E37\u0E2D\u0E01...</span><span id="Puzzle_traits">\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30:</span><span id="Puzzle_error0">\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E1A\u0E1A!\n%1 \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</span><span id="Puzzle_error1">\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27! \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E41\u0E04\u0E48\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E14\u0E35\u0E22\u0E27\u0E17\u0E35\u0E48\u0E22\u0E31\u0E07\u0E1C\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48</span><span id="Puzzle_error2">%1 \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E22\u0E31\u0E07\u0E1C\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48</span><span id="Puzzle_tryAgain">\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E2A\u0E35\u0E44\u0E27\u0E49\u0E22\u0E31\u0E07\u0E1C\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48\n\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u0E15\u0E23\u0E27\u0E08\u0E04\u0E33\u0E15\u0E2D\u0E1A</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0E43\u0E19\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E41\u0E15\u0E48\u0E25\u0E30\u0E15\u0E31\u0E27 (\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27) \u0E43\u0E2B\u0E49\u0E19\u0E33\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E20\u0E32\u0E1E\u0E21\u0E32\u0E15\u0E48\u0E2D \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E32\u0E02\u0E2D\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E41\u0E15\u0E48\u0E25\u0E30\u0E15\u0E31\u0E27 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E43\u0E2A\u0E48\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E40\u0E23\u0E35\u0E22\u0E07\u0E44\u0E27\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
