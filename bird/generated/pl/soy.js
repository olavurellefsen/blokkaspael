// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Bird.soy.
 */

goog.provide('Bird.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Bird.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">nie ma robaka</span><span id="Bird_heading">kierunek</span><span id="Bird_noWormTooltip">Stan, w kt\u00F3rym ptak nie z\u0142apa\u0142 robaka.</span><span id="Bird_headingTooltip">Poruszaj si\u0119 w kierunku danego k\u0105ta: 0 - w \\nprawo, 90 - do g\u00F3ry, itp. </span><span id="Bird_positionTooltip">x i y oznaczaj\u0105 pozycj\u0119 ptaka. \\nGdy x = 0, ptak jest przy lewej \\nkraw\u0119dzi, gdy x = 100, jest przy \\nprawej kraw\u0119dzi. Gdy y = 0, ptak \\njest na dole, a gdy y = 100, jest \\nna g\u00F3rze. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Ptak', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Uruchom napisany przez Ciebie program."><img src="common/1x1.gif" class="run icon21"> Uruchom Program</button><button id="resetButton" class="primary" style="display: none" title="Zatrzymaj program i zresetuj poziom."><img src="common/1x1.gif" class="stop icon21"> Zresetuj</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Zmie\u0144 k\u0105t kierunku, aby ptak z\u0142apa\u0142 robaka i wyl\u0105dowa\u0142 w swoim gnie\u017Adzie.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>U\u017Cyj tego klocka, aby i\u015B\u0107 w jednym kierunku, je\u015Bli masz robaka, albo w innym kierunku je\u015Bli go nie masz.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' jest twoj\u0105 pozycj\u0105 w poziomie. U\u017Cyj tego klocka, aby i\u015B\u0107 w jednym kierunku, je\u015Bli \'x\' jest mniejsze od liczby, b\u0105d\u017A w innym kierunku, w przeciwnym przypadku.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Kliknij ikon\u0119, aby zmodyfikowa\u0107 klocek \'if\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Na tym poziomie potrzebne s\u0105 klocki "else if" oraz "else".</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Blok \'and\' ma warto\u015B\u0107 prawdy tylko je\u015Bli oba jego parametry s\u0105 prawdziwe.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Przenie\u015B klocek \'else\' w klocek \'if\'.</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Bird.soy.start.soyTemplateName = 'Bird.soy.start';
}


Bird.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="bird_heading"></block>' + ((opt_ijData.level >= 2) ? ((opt_ijData.level == 4 || opt_ijData.level == 5) ? '<block type="bird_noWorm" disabled="true"></block>' : '<block type="bird_noWorm"></block>') + ((opt_ijData.level >= 4) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="bird_and"></block>' : '') : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Bird.soy.toolbox.soyTemplateName = 'Bird.soy.toolbox';
}
