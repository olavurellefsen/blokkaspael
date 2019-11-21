// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Maze.soy.
 */

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">vorw\u00E4\u00E4rts loofe</span><span id="Maze_turnLeft">links abbieche</span><span id="Maze_turnRight">rechts abbieche</span><span id="Maze_doCode">ausf\u00FCre</span><span id="Maze_elseCode">sonst</span><span id="Maze_helpIfElse">Wenn-Sonst-Bausten f\u00FChre das ene orrer das annre aus.</span><span id="Maze_pathAhead">wenn Pad davoar ist</span><span id="Maze_pathLeft">wenn Pad noh links ist</span><span id="Maze_pathRight">wenn Pad noh rechts ist</span><span id="Maze_repeatUntil">repetiere bis</span><span id="Maze_moveForwardTooltip">Bewecht den Spieler en Feld vor.</span><span id="Maze_turnTooltip">Dreht den Spieler um 90 Grad noh links orrer \\nrechts. </span><span id="Maze_ifTooltip">Falls es ene Pad in der oongeb Richtung gebt, \\ndann eniche Aktione ausf\u00FChre. </span><span id="Maze_ifelseTooltip">Falls es ene Pad in der oongeb Richtung gebt, \\ndann den earschte Aktionebausten ausf\u00FChre, \\nannerefalls den zwooite. </span><span id="Maze_whileTooltip">Die beigef\u00FCchte Aktione wiederhole, \\nbis das Ziel erreicht woard. </span><span id="Maze_capacity0">Du host noch %0 Bausten.</span><span id="Maze_capacity1">Du host noch %1 Bausten.</span><span id="Maze_capacity2">Du host noch %2 Bausten.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labyrinth', levelLinkSuffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Der Spieler macht das, was die Bausten soogn."><img src="common/1x1.gif" class="run icon21"> Programm ausf\u00FChre</button><button id="resetButton" class="primary" style="display: none" title="Setzt den Spieler zur\u00FCck an den Labyrinth sein \\nOonfang. "><img src="common/1x1.gif" class="stop icon21"> Zur\u00FCcksetze</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Verbinn eniche \'loofe vorw\u00E4\u00E4rts\' Bl\u00F6cke, um mir zu helfe um das Ziel zu erreiche.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>In dem Schicht musst du die ganze Bausten in dem weisse Oorweitsbereich zusammerstaple.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>F\u00FChr dein Programm aus, um zu siehn, was passiert.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>F\u00FChr dein Programm aus, um zu siehn, was passiert.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Computador hoon begrenzte Speicher. Erreich das End von dem Pad mit nuar zwooi Bausten. Benutz "Wiederhole", um en Bausten meahr als emol auszuf\u00FChre.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Du host f\u00FCr die Schicht all Bausten uffgebraucht. Um en neie Bausten zu erstelle, musst du zuearscht en vorhandne Bausten l\u00F6sche.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Du kannst mehrer Bl\u00F6cke innerlich ene Block \'repeat\' passe.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">W\u00E4hl dein Lieblingsspieler vom Men\u00FC aus.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>En \u201EWenn\u201C-Bausten macht etwas, falls die Bedingung woahr ist. Versuch links abzubieche, falls es enen Pad noh links gebt.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Klick uff %1 im \'Wenn\'-Bausten um die Bedingung zu \u00E4nnere.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Wenn-Sonst-Bausten f\u00FChre das ene orrer das annre aus.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Kannst du das komplizierte Labyrinth l\u00F6se? Follich der linke Wand. Nuar f\u00FCr fortgeschrittne Programmierer!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Maze.soy.start.soyTemplateName = 'Maze.soy.start';
}


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Maze.soy.toolbox.soyTemplateName = 'Maze.soy.toolbox';
}
