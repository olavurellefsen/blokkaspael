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
  return '<div style="display: none"><span id="Puzzle_animal1">\u0532\u0561\u0564</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u0553\u0565\u057F\u0578\u0582\u0580\u0576\u0565\u0580</span><span id="Puzzle_animal1Trait2">\u053F\u057F\u0578\u0582\u0581</span><span id="Puzzle_animal1HelpUrl">https://hy.wikipedia.org/wiki/\u0532\u0561\u0564\u0565\u0580</span><span id="Puzzle_animal2">\u053F\u0561\u057F\u0578\u0582</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u0532\u0565\u0572</span><span id="Puzzle_animal2Trait2">\u0544\u0578\u0580\u0569\u056B</span><span id="Puzzle_animal2HelpUrl">https://hy.wikipedia.org/wiki/\u053F\u0561\u057F\u0578\u0582\u0576\u0565\u0580</span><span id="Puzzle_animal3">\u0544\u0565\u0572\u0578\u0582</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u0544\u0565\u0572\u0580</span><span id="Puzzle_animal3Trait2">\u053D\u0561\u0575\u0569</span><span id="Puzzle_animal3HelpUrl">https://hy.wikipedia.org/wiki/\u0544\u0565\u0572\u0578\u0582\u0576\u0565\u0580</span><span id="Puzzle_animal4">\u053D\u056D\u0578\u0582\u0576\u057B</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u053D\u0565\u0581\u056B</span><span id="Puzzle_animal4Trait2">\u053C\u0578\u0580\u0571</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u057A\u0561\u057F\u056F\u0565\u0580.</span><span id="Puzzle_legs">\u0578\u057F\u0584\u0565\u0580</span><span id="Puzzle_legsChoose">\u0568\u0576\u057F\u0580\u056B\u0580...</span><span id="Puzzle_traits">\u0570\u0561\u057F\u056F\u0561\u0576\u056B\u0577\u0576\u0565\u0580.</span><span id="Puzzle_error0">\u053F\u0561\u057F\u0561\u0580\u0575\u0561\u056C:\n\u0532\u0578\u056C\u0578\u0580 %1 \u0562\u056C\u0578\u056F\u0576\u0565\u0580\u0568 \u0573\u056B\u0577\u057F \u0565\u0576:</span><span id="Puzzle_error1">\u0533\u0580\u0565\u0569\u0565: \u0544\u0565\u056F \u0562\u056C\u0578\u056F\u0568 \u0573\u056B\u0577\u057F \u0579\u0567:</span><span id="Puzzle_error2">%1 \u0562\u056C\u0578\u056F \u057D\u056D\u0561\u056C \u0567:</span><span id="Puzzle_tryAgain">\u0546\u0577\u057E\u0561\u056E \u0562\u056C\u0578\u056F\u0568 \u0573\u056B\u0577\u057F \u0579\u0567 \u057F\u0565\u0572\u0561\u0564\u0580\u057E\u0561\u056E:\n\u053F\u0580\u056F\u056B\u0576 \u0583\u0578\u0580\u0571\u056B\u0580:</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Puzzle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0533\u056C\u0578\u0582\u056D\u056F\u0578\u057F\u0580\u0578\u0582\u056F', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: true, farLeftHtml: '<button id="checkButton" class="primary">\u054D\u057F\u0578\u0582\u0563\u0565\u056C \u0561\u0580\u0564\u0575\u0578\u0582\u0576\u0584\u0568</button>'}, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0545\u0578\u0582\u0580\u0561\u0584\u0561\u0576\u0579\u0575\u0578\u0582\u0580 \u056F\u0565\u0576\u0564\u0561\u0576\u0578\u0582 \u0570\u0561\u0574\u0561\u0580(\u056F\u0561\u0576\u0561\u0579 \u0562\u056C\u0578\u056F)  \u056F\u0581\u056B\u0580 \u056B\u0580 \u0576\u056F\u0561\u0580\u0568, \u0568\u0576\u057F\u0580\u056B\u0580 \u0578\u057F\u0584\u0565\u0580\u056B \u0584\u0561\u0576\u0561\u056F\u0568 \u0587 \u0570\u0561\u057E\u0561\u0584\u056B\u0580 \u056B\u0580 \u0561\u057C\u0561\u0576\u0571\u0576\u0561\u0570\u0561\u057F\u056F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u0568:</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
