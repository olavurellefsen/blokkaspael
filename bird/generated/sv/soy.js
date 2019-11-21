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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">har inte mask</span><span id="Bird_heading">riktning</span><span id="Bird_noWormTooltip">Tillst\u00E5ndet n\u00E4r f\u00E5geln inte har f\u00E5ngat masken.</span><span id="Bird_headingTooltip">Flyg i angiven riktning: 0 \u00E4r till h\u00F6ger, \\n90 \u00E4r rakt upp osv. </span><span id="Bird_positionTooltip">x och y markerar f\u00E5gelns position. \\nN\u00E4r x = n\u00E4r f\u00E5geln n\u00E4ra den v\u00E4nstra \\nsidan, n\u00E4r x = 100 \u00E4r den n\u00E4ra den \\nh\u00F6gra sidan. N\u00E4r y = 0 \u00E4r f\u00E5gel l\u00E4ngst \\nned, n\u00E4r y = 100 \u00E4r den l\u00E4ngst upp. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Bird.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'F\u00E5gel', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="K\u00F6r programmet du skrev."><img src="common/1x1.gif" class="run icon21"> K\u00F6r program</button><button id="resetButton" class="primary" style="display: none" title="Stoppa programmet och \u00E5terst\u00E4ll niv\u00E5n."><img src="common/1x1.gif" class="stop icon21"> \u00C5terst\u00E4ll</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u00C4ndra riktningen f\u00F6r att f\u00E5geln ska f\u00E5 tag i masken och landa i sitt bo.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>Anv\u00E4nd det h\u00E4r blocket f\u00F6r att flyga i en riktning n\u00E4r du har masken och i en annan riktning n\u00E4r du inte har masken.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' \u00E4r din nuvarande horisontella position. Anv\u00E4nd det h\u00E4r blocket f\u00F6r att flyga i en riktning n\u00E4r \'x\' \u00E4r mindre \u00E4n en siffra och annars i en annan riktning.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Klicka p\u00E5 ikonen f\u00F6r att \u00E4ndra \'om\'-blocket.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Den h\u00E4r niv\u00E5n kr\u00E4ver b\u00E5de ett \'annars om\' och ett \'annars\'-block.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'och\'-blocket \u00E4r endast sant om b\u00E5da inmatningar \u00E4r sanna.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Dra ett \'annars\'-block till \'om\'-blocket.</td></tr></table></div>' : '');
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
