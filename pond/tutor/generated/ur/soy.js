// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.Tutor.soy.
 */

goog.provide('Pond.Tutor.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Tutor.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_playerName">\u06A9\u06BE\u0644\u0627\u0691\u06CC</span><span id="Pond_targetName">\u06C1\u062F\u0641</span><span id="Pond_pendulumName">\u067E\u06CC\u0646\u0688\u0644\u0645</span><span id="Pond_scaredName">\u0688\u0631\u0627 \u06C1\u0648\u0627</span></div>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.messages.soyTemplateName = 'Pond.Tutor.soy.messages';
}


Pond.Tutor.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '' + Pond.Tutor.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0637\u0627\u0644\u0627\u0628 \u0679\u06CC\u0648\u0679\u0631', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + Pond.soy.visualization(null, null, opt_ijData);
  switch (opt_ijData.level) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      output += Pond.Tutor.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
      break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      output += '<div id="editor"></div>';
      break;
  }
  output += Pond.Tutor.soy.playerTarget(null, null, opt_ijData) + Pond.Tutor.soy.playerPendulum(null, null, opt_ijData) + Pond.Tutor.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 5 || opt_ijData.level == 6) ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0622\u067E \u06A9\u0627 \u062D\u0644 \u06A9\u0627\u0645 \u06A9\u0631\u062A\u0627 \u06C1\u06D2\u060C \u0644\u06CC\u06A9\u0646 \u0622\u067E \u0628\u06C1\u062A\u0631 \u06A9\u0631 \u0633\u06A9\u062A\u06D2 \u06C1\u06CC\u06BA. \u062A\u067E \u06A9\u0648 \u0628\u062A\u0627\u0646\u0627 \u06A9\u06C1 \u06A9\u062A\u0646\u0627 \u062F\u0648\u0631 \u06AF\u0648\u0644\u06CC \u0645\u0627\u0631 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \'\u0627\u0633\u06A9\u06CC\u0646\' \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1 || opt_ijData.level == 2) ? '\u06C1\u062F\u0641 \u06A9\u0648 \u0645\u0627\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \'\u062A\u067E\' \u06A9\u0645\u0627\u0646\u0688 \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA. \u067E\u06C1\u0644\u0627 \u067E\u06CC\u0631\u0627\u0645\u06CC\u0679\u0631 \u0632\u0627\u0648\u06CC\u06C1 \u06C1\u06D2\u060C \u062F\u0648\u0633\u0631\u0627 \u067E\u06CC\u0631\u0627\u0645\u06CC\u0679\u0631 \u0631\u06CC\u0646\u062C \u06C1\u06D2. \u0635\u062D\u06CC\u062D \u0645\u062C\u0645\u0648\u0639\u06C1 \u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA.' + ((opt_ijData.level == 1) ? '<br><br><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 221.86 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 125.51,5.5 v 27 h -36.02 M 83.89,24.3 l 3.68,-2.1 M 193.9,5.5 v 27 h -38.31 M 149.99,24.3 l 3.68,-2.1"></path><g transform="translate(89.99,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><g transform="translate(156.09,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">70</text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">cannon</text><text class="blocklyText" y="12.5" transform="translate(68.11,10)">(</text><text class="blocklyText" y="12.5" transform="translate(135.01,10)">,</text><text class="blocklyText" y="12.5" transform="translate(203.4,10)">);</text></g></svg>' : (opt_ijData.level == 2) ? '<pre>cannon(0, 70);</pre>' : '') : (opt_ijData.level == 3 || opt_ijData.level == 4) ? '\u0627\u0633 \u06C1\u062F\u0641 \u06A9\u0648 \u06A9\u0626\u06CC \u0628\u0627\u0631 \u0645\u0627\u0631\u0646\u06D2 \u06A9\u06CC \u0636\u0631\u0648\u0631\u062A \u06C1\u06D2. \u063A\u06CC\u0631 \u06CC\u0642\u06CC\u0646\u06CC \u0637\u0648\u0631 \u067E\u0631 \u06A9\u0686\u06BE \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \'\u062C\u0628\u06A9\u06C1 (\u0633\u0686)\' \u0644\u0648\u067E \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA.' + ((opt_ijData.level == 3) ? '<br><br><svg height="92" width="250"><g><path transform="translate(1,1)" fill="#498449" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path fill="#5ba55b" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path class="blocklyPathLight" stroke="#8cc08c" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 162.44 M 49.5,36.5 M 21.98,59.01 a 8.5,8.5 0 0,0 6.01,2.48 H 49.5 M 49.5,61.5 H 49.5 M 2.69,83.3 A 7.5,7.5 0 0,1 0.5,78 V 8 M 129.58,5.5 v 27 h -60.71 M 63.27,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">while&#160;(</text><text class="blocklyText" y="12.5" transform="translate(139.08,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,66)">}</text><g transform="translate(69.37,6)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b80a5" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 58.21 M 58.21,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="48.71"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">true<tspan style="fill: rgb(91, 128, 165);"> \u25BE</tspan></text></g></g></g></svg>' : (opt_ijData.level == 4) ? '<pre>while (true) {\n  ...\n}</pre>' : '') : (opt_ijData.level == 5 || opt_ijData.level == 6) ? '\u06CC\u06C1 \u0645\u062E\u0627\u0644\u0641 \u0622\u06AF\u06D2 \u067E\u06CC\u0686\u06BE\u06D2 \u0686\u0644\u062A\u0627 \u06C1\u06D2\u060C \u0627\u0633\u06D2 \u06C1\u0679\u0627\u0646\u0627 \u0645\u0634\u06A9\u0644 \u0628\u0646\u0627\u062A\u0627 \u06C1\u06D2. \'\u0627\u0633\u06A9\u06CC\u0646\' \u0627\u0638\u06C1\u0627\u0631 \u0645\u062E\u0635\u0648\u0635 \u0633\u0645\u062A \u0645\u06CC\u06BA \u0645\u062E\u0627\u0644\u0641 \u06A9\u0648 \u0635\u062D\u06CC\u062D \u0631\u06CC\u0646\u062C \u0648\u0627\u067E\u0633 \u062F\u06CC\u062A\u0627 \u06C1\u06D2.' + ((opt_ijData.level == 5) ? '<br><br><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 132.26 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 108.38,5.5 v 27 h -36.02 M 66.76,24.3 l 3.68,-2.1"></path><g transform="translate(72.86,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">scan</text><text class="blocklyText" y="12.5" transform="translate(50.97,10)">(</text><text class="blocklyText" y="12.5" transform="translate(117.88,10)">)</text></g></svg><br><br>' : (opt_ijData.level == 6) ? '<pre>scan(0)</pre>' : '') + '\u06CC\u06C1 \u0631\u06CC\u0646\u062C \u0628\u0627\u0644\u06A9\u0644 \u0648\u06C1\u06CC \u06C1\u06D2 \u062C\u0648 \'\u062A\u067E\' \u06A9\u0645\u0627\u0646\u0688 \u062F\u0631\u0633\u062A \u0637\u0648\u0631 \u067E\u0631 \u0622\u06AF \u0644\u06AF\u0627\u0646\u06D2 \u06A9\u06CC \u0636\u0631\u0648\u0631\u062A \u06C1\u06D2.' : (opt_ijData.level == 7 || opt_ijData.level == 8) ? '\u06CC\u06C1 \u0645\u062E\u0627\u0644\u0641 \u062A\u067E \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \u0628\u06C1\u062A \u062F\u0648\u0631 \u06C1\u06D2 (\u062C\u0633 \u0645\u06CC\u06BA 70 \u0645\u06CC\u0679\u0631 \u06A9\u06CC \u062D\u062F \u06C1\u06D2). \u0627\u0633 \u06A9\u06D2 \u0628\u062C\u0627\u0626\u06D2\u060C \u0645\u062E\u0627\u0644\u0641 \u0627\u0648\u0631 \u062D\u0627\u062F\u062B\u06D2 \u06A9\u06CC \u0637\u0631\u0641 \u0633\u0648\u0626\u0645\u0646\u06AF \u0634\u0631\u0648\u0639 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \'\u062A\u06CC\u0631\' \u06A9\u0645\u0627\u0646\u0688 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA.' + ((opt_ijData.level == 7) ? '<br><br><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 138.75 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 110.8,5.5 v 27 h -36.02 M 69.18,24.3 l 3.68,-2.1"></path><g transform="translate(75.28,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">swim</text><text class="blocklyText" y="12.5" transform="translate(53.39,10)">(</text><text class="blocklyText" y="12.5" transform="translate(120.3,10)">);</text></g></svg>' : (opt_ijData.level == 8) ? '<pre>swim(0);</pre>' : '') : (opt_ijData.level == 9) ? '\u06CC\u06C1 \u0645\u062E\u0627\u0644\u0641 \u0628\u06BE\u06CC \u062A\u067E \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \u0628\u06C1\u062A \u062F\u0648\u0631 \u06C1\u06D2. \u0644\u06CC\u06A9\u0646 \u0622\u067E \u0627\u06CC\u06A9 \u062A\u0635\u0627\u062F\u0645 \u0633\u06D2 \u0628\u0686\u0646\u06D2 \u06A9\u06D2 \u0644\u0626\u06D2 \u0628\u06C1\u062A \u06A9\u0645\u0632\u0648\u0631 \u06C1\u06CC\u06BA. \u0645\u062E\u0627\u0644\u0641 \u06A9\u06CC \u0637\u0631\u0641 \u062C\u06BE\u06A9 \u062C\u0627\u0624 \u062C\u0628\u06A9\u06C1 \u0622\u067E \u06A9\u06D2 \u0627\u0641\u0642\u06CC \u0645\u0642\u0627\u0645 50 \u0633\u06D2 \u0632\u0627\u0626\u062F \u06C1\u06D2. \u067E\u06BE\u0631 \'\u0631\u0648\u06A9\u06D2\' \u0627\u0648\u0631 \u062A\u067E \u06A9\u0627 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u06A9\u0631\u06CC\u06BA.' + ((opt_ijData.level == 9) ? '<br><br><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#5b80a5" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 193.75 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 98.43,5.5 v 26 h -81.93 M 10.9,24.3 l 3.68,-2.1 M 184.75,5.5 v 27 h -38.31 M 140.83,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(107.93,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="32.0"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">&lt;<tspan style="fill: rgb(91, 128, 165);"> \u25BE</tspan></text></g><g transform="translate(146.93,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">50</text></g></g><g transform="translate(17,6)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43 M 79.43,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getX</text><text class="blocklyText" y="12.5" transform="translate(50.16,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05,5)">)</text></g></g></svg><br><br><svg height="31" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 81.06 M 81.06,0.5 M 2.69,21.3 A 7.5,7.5 0 0,1 0.5,16 V 8"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">stop</text><text class="blocklyText" y="12.5" transform="translate(47.71,5)">(</text><text class="blocklyText" y="12.5" transform="translate(62.6,5)">);</text></g></svg>' : (opt_ijData.level == 10) ? '<pre>getX() &lt; 50</pre><pre>stop();</pre>' : '') : (opt_ijData.level == 10) ? '\u062C\u0628 \u0645\u062E\u0627\u0644\u0641 \u0645\u0627\u0631\u0627 \u062C\u0627\u062A\u0627 \u06C1\u06D2 \u062A\u0648 \u06CC\u06C1 \u062F\u0648\u0631 \u06C1\u0648\u062C\u0627\u0626\u06D2 \u06AF\u0627. \u0627\u0633 \u06A9\u06CC \u0637\u0631\u0641 \u0631\u062E \u06A9\u0631\u0648 \u0627\u06AF\u0631 \u06CC\u06C1 \u062D\u062F (70 \u0645\u06CC\u0679\u0631) \u0633\u06D2 \u0628\u0627\u06C1\u0631 \u06C1\u06D2.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Pond.Tutor.soy.start.soyTemplateName = 'Pond.Tutor.soy.start';
}


Pond.Tutor.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u0637\u0627\u0644\u0627\u0628"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block>' + ((opt_ijData.level >= 5) ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_stop"></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_getX"></block><block type="pond_getY"></block>' : '') + '</category>' + ((opt_ijData.level >= 3) ? '<category name="\u0645\u0646\u0637\u0642">' + ((opt_ijData.level >= 9) ? '<block type="controls_if"></block><block type="logic_compare"></block>' : '') + '<block type="logic_boolean"></block></category><category name="\u0644\u0648\u067E\u06CC\u06BA"><block type="controls_whileUntil"></block></category>' : '') + '<category name="\u0631\u06CC\u0627\u0636\u06CC"><block type="pond_math_number"><mutation angle_field="false"></mutation></block></category></xml>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.toolbox.soyTemplateName = 'Pond.Tutor.soy.toolbox';
}


Pond.Tutor.soy.playerTarget = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerTarget" style="display: none">\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerTarget.soyTemplateName = 'Pond.Tutor.soy.playerTarget';
}


Pond.Tutor.soy.playerPendulum = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (getX() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (getX() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerPendulum.soyTemplateName = 'Pond.Tutor.soy.playerPendulum';
}


Pond.Tutor.soy.playerScared = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerScared.soyTemplateName = 'Pond.Tutor.soy.playerScared';
}
