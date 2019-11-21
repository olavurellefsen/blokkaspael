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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">kn\u0101b\u012B nav t\u0101rpa</span><span id="Bird_heading">virziens</span><span id="Bird_noWormTooltip">St\u0101voklis, kad putnam kn\u0101b\u012B nav t\u0101rps.</span><span id="Bird_headingTooltip">Kust\u0113ties le\u0146\u0137a nor\u0101d\u012Btaj\u0101 virzien\u0101.\\n0: pa labi, 90: uz aug\u0161u, 270: uz leju, utt.</span><span id="Bird_positionTooltip">X un Y nosaka putna atra\u0161an\u0101s vietu. \\nJa x = 0, putns ir pie kreis\u0101s malas, \\nja x = 100, tas ir pie lab\u0101s malas. \\nJa y = 0, putns ir apak\u0161\u0101, ja y = 100, \\ntas ir aug\u0161pus\u0113. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Putns', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Palaist izveidoto programmu."><img src="common/1x1.gif" class="run icon21"> Izpild\u012Bt programmu</button><button id="resetButton" class="primary" style="display: none" title="Apst\u0101din\u0101t programmu un atiestat\u012Bt l\u012Bmeni."><img src="common/1x1.gif" class="stop icon21"> S\u0101kt no s\u0101kuma</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Main\u012Bt putna virziena le\u0146\u0137i, lai pal\u012Bdz\u0113tu tam ieg\u016Bt t\u0101rpu un atgriezties ligzd\u0101.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Izmanto \u0161o bloku, lai izv\u0113l\u0113tos virzienu atkar\u012Bb\u0101 no t\u0101 vai t\u0101rps ir pa\u0146emts vai n\u0113.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' ir j\u016Bsu pa\u0161reiz\u0113j\u0101 horizont\u0101l\u0101 poz\u012Bcija. Izmantojiet \u0161o bloku, lai ietu vien\u0101 virzien\u0101, ja \'x\' ir maz\u0101ks nek\u0101 dotais skaitlis, vai otr\u0101 virzien\u0101, ja \'x\' nav maz\u0101ks k\u0101 dotais skaitlis.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klik\u0161\u0137iniet uz ikonas, lai main\u012Btu \'ja\' bloku.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u0160aj\u0101 l\u012Bmen\u012B ir vajadz\u012Bgi gan \'cit\u0101di, ja\' un \'cit\u0101di\' bloki.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'un\' bloka vert\u012Bba ir "patiess" tikai tad, ja abi argumenti ir patiesi.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Velciet "cit\u0101di" bloku zem "ja" bloka.</td></tr></table></div>' : '');
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
