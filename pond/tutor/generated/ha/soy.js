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
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_playerName">Mai wasa</span><span id="Pond_targetName">Wanda aka nufa</span><span id="Pond_pendulumName">Mai kai-komo</span><span id="Pond_scaredName">Maguji</span></div>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.messages.soyTemplateName = 'Pond.Tutor.soy.messages';
}


Pond.Tutor.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '' + Pond.Tutor.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Malam-na-bakin-kogi', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + Pond.soy.visualization(null, null, opt_ijData);
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
  output += Pond.Tutor.soy.playerTarget(null, null, opt_ijData) + Pond.Tutor.soy.playerPendulum(null, null, opt_ijData) + Pond.Tutor.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 5 || opt_ijData.level == 6) ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Amsarka ta yi, amma za ka iya yi fiye da haka. Yi amfani da \u2018lalube\u2019 domin shaidawa bindiga iyakar yadda za ta yi harbi.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1 || opt_ijData.level == 2) ? 'Yi amfani da umarni na \'bindiga\' domin harbin abin da aka nufa. Ma\u2019auni na farko shine kusurwa, ma\u2019auni na biyu shine jeri. Nemo ha\u0257in da yake dai dai.' + ((opt_ijData.level == 1) ? '<br><br><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 221.86 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 125.51,5.5 v 27 h -36.02 M 83.89,24.3 l 3.68,-2.1 M 193.9,5.5 v 27 h -38.31 M 149.99,24.3 l 3.68,-2.1"></path><g transform="translate(89.99,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><g transform="translate(156.09,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">70</text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">cannon</text><text class="blocklyText" y="12.5" transform="translate(68.11,10)">(</text><text class="blocklyText" y="12.5" transform="translate(135.01,10)">,</text><text class="blocklyText" y="12.5" transform="translate(203.4,10)">);</text></g></svg>' : (opt_ijData.level == 2) ? '<pre>cannon(0, 70);</pre>' : '') : (opt_ijData.level == 3 || opt_ijData.level == 4) ? 'Wannan abin da aka nufa dole a harbe shi sau da yawa. Yi amfani da \'yayin da yake (gaskiya)\' tsallake domin yin wani abu da ba a tabbatar ba.' + ((opt_ijData.level == 3) ? '<br><br><svg height="92" width="250"><g><path transform="translate(1,1)" fill="#498449" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path fill="#5ba55b" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path class="blocklyPathLight" stroke="#8cc08c" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 162.44 M 49.5,36.5 M 21.98,59.01 a 8.5,8.5 0 0,0 6.01,2.48 H 49.5 M 49.5,61.5 H 49.5 M 2.69,83.3 A 7.5,7.5 0 0,1 0.5,78 V 8 M 129.58,5.5 v 27 h -60.71 M 63.27,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">while&#160;(</text><text class="blocklyText" y="12.5" transform="translate(139.08,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,66)">}</text><g transform="translate(69.37,6)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b80a5" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 58.21 M 58.21,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="48.71"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">true<tspan style="fill: rgb(91, 128, 165);"> \u25BE</tspan></text></g></g></g></svg>' : (opt_ijData.level == 4) ? '<pre>while (true) {\n  ...\n}</pre>' : '') : (opt_ijData.level == 5 || opt_ijData.level == 6) ? 'Wannan abokin gaba yana matsawa gaba ya yi baya, wanda ke sawa ya zama da wahala a harbe shi. Maganar \'lalube\' za ta dawo da ainihin jerin zuwa abokin gabar a cikin wani wuri da aka fayyace.' + ((opt_ijData.level == 5) ? '<br><br><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 132.26 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 108.38,5.5 v 27 h -36.02 M 66.76,24.3 l 3.68,-2.1"></path><g transform="translate(72.86,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">scan</text><text class="blocklyText" y="12.5" transform="translate(50.97,10)">(</text><text class="blocklyText" y="12.5" transform="translate(117.88,10)">)</text></g></svg><br><br>' : (opt_ijData.level == 6) ? '<pre>scan(0)</pre>' : '') + 'Wannan jeri shine ainihin abinda umarnin \'bindiga\' yake so ya harba dai dai.' : (opt_ijData.level == 7 || opt_ijData.level == 8) ? 'Wannan abokin gaba ya yi nisa sosai domin amfani da bindiga (wanda ke da iyaka na mita 70). Maimakon haka, yi amfani da umarnin \'iyo\' domin fara iyo zuwa abokin gaba sannan kuma ka afka masa.' + ((opt_ijData.level == 7) ? '<br><br><svg height="41" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 138.75 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 110.8,5.5 v 27 h -36.02 M 69.18,24.3 l 3.68,-2.1"></path><g transform="translate(75.28,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00B0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">swim</text><text class="blocklyText" y="12.5" transform="translate(53.39,10)">(</text><text class="blocklyText" y="12.5" transform="translate(120.3,10)">);</text></g></svg>' : (opt_ijData.level == 8) ? '<pre>swim(0);</pre>' : '') : (opt_ijData.level == 9) ? 'Wannan abokin gaba ya yi nisa sosai domin amfani da bindiga. Amma kuma ka yi rauni sosai ka jure karo da shi. Yi iyo zuwa abokin gaba yayin da wurin da kake a mi\u0199e \u0199asa yake da 50. To \'tsaya\' sannan ka yi amfani da bindiga.' + ((opt_ijData.level == 9) ? '<br><br><svg height="37" width="250"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#5b80a5" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 193.75 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 98.43,5.5 v 26 h -81.93 M 10.9,24.3 l 3.68,-2.1 M 184.75,5.5 v 27 h -38.31 M 140.83,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(107.93,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="32.0"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">&lt;<tspan style="fill: rgb(91, 128, 165);"> \u25BE</tspan></text></g><g transform="translate(146.93,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">50</text></g></g><g transform="translate(17,6)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43 M 79.43,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getX</text><text class="blocklyText" y="12.5" transform="translate(50.16,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05,5)">)</text></g></g></svg><br><br><svg height="31" width="250"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 81.06 M 81.06,0.5 M 2.69,21.3 A 7.5,7.5 0 0,1 0.5,16 V 8"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">stop</text><text class="blocklyText" y="12.5" transform="translate(47.71,5)">(</text><text class="blocklyText" y="12.5" transform="translate(62.6,5)">);</text></g></svg>' : (opt_ijData.level == 10) ? '<pre>getX() &lt; 50</pre><pre>stop();</pre>' : '') : (opt_ijData.level == 10) ? 'Wannan abokin gaba ya matsa nesa lokacin da aka harbe shi. Yi iyo zuwa gare shi idan ba ya cikin jerin (mita 70).' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Pond.Tutor.soy.start.soyTemplateName = 'Pond.Tutor.soy.start';
}


Pond.Tutor.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Kogi"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block>' + ((opt_ijData.level >= 5) ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_stop"></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_getX"></block><block type="pond_getY"></block>' : '') + '</category>' + ((opt_ijData.level >= 3) ? '<category name="Dabara">' + ((opt_ijData.level >= 9) ? '<block type="controls_if"></block><block type="logic_compare"></block>' : '') + '<block type="logic_boolean"></block></category><category name="Tsallake-tsallake"><block type="controls_whileUntil"></block></category>' : '') + '<category name="Lissafi"><block type="pond_math_number"><mutation angle_field="false"></mutation></block></category></xml>';
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
