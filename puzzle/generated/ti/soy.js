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
  return '<div style="display: none"><span id="Puzzle_animal1">\u12A5\u122D\u130D\u1265</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u12AD\u1295\u1272\u1275</span><span id="Puzzle_animal1Trait2">\u12A3\u134D \u12D2\u134D</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">\u12F5\u1219</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u132D\u1215\u121A \u12F5\u1219</span><span id="Puzzle_animal2Trait2">\u1328\u1309\u122A</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">\u1295\u1205\u1262</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u1218\u12D3\u122D</span><span id="Puzzle_animal3Trait2">\u1218\u1295\u12F0\u134D</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">\u12D3\u1228\u1290</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u12AD\u12F3\u1295 \u12D3\u1228\u1290</span><span id="Puzzle_animal4Trait2">\u1213\u134A\u1235 \u1348\u1233\u1232</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u1235\u12A5\u120A\u1361</span><span id="Puzzle_legs">\u12A3\u12A5\u130B\u122D\u1361</span><span id="Puzzle_legsChoose">\u121D\u1228\u1345...</span><span id="Puzzle_traits">\u1218\u130D\u1208\u1345\u1273\u1275\u1361</span><span id="Puzzle_error0">\u1265\u1275\u12BD\u12AD\u120D!\n\u12A9\u120E\u121D %1 \u1233\u1293\u12F1\u1245 \u1275\u12BD\u12AD\u120D\'\u12EE\u121D\u1362</span><span id="Puzzle_error1">\u12F3\u122D\u130B \u1219\u1209\u12A5! \u1213\u12F0 \u1233\u1295\u12F1\u1245 \u12A3\u12ED\u1275\u12BD\u12AD\u120D\u1295\u1362</span><span id="Puzzle_error2">%1 \u1233\u1293\u12F1\u1245 \u12A3\u12ED\u120D\u12AD\u12D5\u1295\u1362</span><span id="Puzzle_tryAgain">\u12A5\u1272 \u12DD\u1270\u1230\u1218\u1228\u1209 \u1233\u1295\u12F1\u1245 \u120D\u12AD\u12D5 \u12A3\u12ED\u12AE\u1290\u1295\u1362</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u130D\u12F5\u120D', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u1218\u120D\u1232 \u122D\u12A0</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u1295\u1215\u12F5\u1215\u12F5 \u12A5\u1295\u1235\u1233 (\u1213\u121D\u1208\u12CB\u12ED)\u1363 \u1235\u12A5\u120E\u121D \u12A3\u1270\u1213\u1215\u12DD\u1363 \u1241\u1345\u122A \u12A3\u12A5\u130B\u122E\u121D \u121D\u1228\u1345 \u12A8\u121D\u12A1 \'\u12CD\u1295 \u1218\u130D\u1208\u1345\u1273\u1276\u121D \u12F0\u122D\u12F5\u122D\u1362</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
