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
  return '<div style="display: none"><span id="Puzzle_animal1">\uC624\uB9AC</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\uAE43\uD138</span><span id="Puzzle_animal1Trait2">\uBD80\uB9AC</span><span id="Puzzle_animal1HelpUrl">https://ko.wikipedia.org/wiki/%EC%98%A4%EB%A6%AC</span><span id="Puzzle_animal2">\uACE0\uC591\uC774</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\uC218\uC5FC</span><span id="Puzzle_animal2Trait2">\uBAA8\uD53C</span><span id="Puzzle_animal2HelpUrl">https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%96%91%EC%9D%B4</span><span id="Puzzle_animal3">\uBC8C</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\uAFC0</span><span id="Puzzle_animal3Trait2">\uB3C5\uCE68</span><span id="Puzzle_animal3HelpUrl">https://ko.wikipedia.org/wiki/%EB%B2%8C_(%EA%B3%A4%EC%B6%A9)</span><span id="Puzzle_animal4">\uB2EC\uD33D\uC774</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\uAECD\uC9C8</span><span id="Puzzle_animal4Trait2">\uC810\uC561</span><span id="Puzzle_animal4HelpUrl">https://ko.wikipedia.org/wiki/%EB%8B%AC%ED%8C%BD%EC%9D%B4</span><span id="Puzzle_picture">\uC0AC\uC9C4:</span><span id="Puzzle_legs">\uB2E4\uB9AC:</span><span id="Puzzle_legsChoose">\uC120\uD0DD...</span><span id="Puzzle_traits">\uC131\uC9C8:</span><span id="Puzzle_error0">\uC644\uBCBD\uD569\uB2C8\uB2E4!\n\uBAA8\uB4E0 \uBE14\uB85D %1\uAC1C\uAC00 \uC815\uD655\uD569\uB2C8\uB2E4.</span><span id="Puzzle_error1">\uAC70\uC758 \uB410\uC2B5\uB2C8\uB2E4! \uBE14\uB85D \uD55C \uAC1C\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</span><span id="Puzzle_error2">\uBE14\uB85D %1\uAC1C\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</span><span id="Puzzle_tryAgain">\uAC15\uC870\uD55C \uBE14\uB85D\uC740 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\n\uACC4\uC18D \uD574\uBCF4\uC138\uC694.</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\uD37C\uC990', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\uC815\uB2F5 \uD655\uC778</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\uAC01 \uB3D9\uBB3C(\uCD08\uB85D)\uC5D0 \uADF8\uB9BC\uC744 \uC5F0\uACB0\uD558\uACE0 \uB2E4\uB9AC\uC758 \uAC1C\uC218\uB97C \uC120\uD0DD\uD558\uC5EC \uC131\uC9C8\uC758 \uC2A4\uD0DD\uC744 \uB9CC\uB4DC\uC138\uC694.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
