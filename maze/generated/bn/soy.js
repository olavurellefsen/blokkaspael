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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">\u09B8\u09BE\u09AE\u09A8\u09C7 \u09AF\u09BE\u09A8</span><span id="Maze_turnLeft">\u09AC\u09BE\u09AE\u09C7 \u09AF\u09BE\u09A8</span><span id="Maze_turnRight">\u09A1\u09BE\u09A8\u09C7 \u09AF\u09BE\u09A8</span><span id="Maze_doCode">\u0995\u09B0\u09C1\u09A8</span><span id="Maze_elseCode">\u09A8\u09A4\u09C1\u09AC\u09BE</span><span id="Maze_helpIfElse">If-else \u09AC\u09CD\u09B2\u0995\u09B8\u09AE\u09C2\u09B9 \u098F\u0995\u099F\u09BF \u0995\u09BE\u099C \u0995\u09B0\u09AC\u09C7 \u0985\u09A5\u09AC\u09BE \u0985\u09A8\u09CD\u09AF\u099F\u09BF\u0964</span><span id="Maze_pathAhead">\u09AF\u09A6\u09BF \u09B8\u09BE\u09AE\u09A8\u09C7 \u09AA\u09A5 \u09A5\u09BE\u0995\u09C7</span><span id="Maze_pathLeft">\u09AF\u09A6\u09BF \u09AC\u09BE\u09AE\u09C7 \u09AA\u09A5 \u09A5\u09BE\u0995\u09C7</span><span id="Maze_pathRight">\u09AF\u09A6\u09BF \u09A1\u09BE\u09A8\u09C7 \u09AA\u09A5 \u09A5\u09BE\u0995\u09C7</span><span id="Maze_repeatUntil">\u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AC\u09C3\u09A4\u09CD\u09A4\u09BF</span><span id="Maze_moveForwardTooltip">\u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC\u0995\u09C7 \u098F\u0995 \u0998\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u09A8\u09C7\u09AF\u09BC\u0964</span><span id="Maze_turnTooltip">\u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC\u0995\u09C7 \u09EF\u09E6 \u09A1\u09BF\u0997\u09CD\u09B0\u09BF \u09A1\u09BE\u09A8\u09C7 \u0985\u09A5\u09AC\u09BE \u09AC\u09BE\u09AE\u09C7 \u0998\u09C1\u09B0\u09BE\u09A8\u0964.</span><span id="Maze_ifTooltip">\u09AF\u09A6\u09BF \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09BF\u09A4 \u09A6\u09BF\u0995\u09C7 \u09AA\u09A5 \u09A5\u09BE\u0995\u09C7, \u09A4\u09BE\u09B9\u09B2\u09C7 \u09AA\u09A6\u0995\u09CD\u09B7\u09C7\u09AA \u09A8\u09BF\u09A8\u0964.</span><span id="Maze_ifelseTooltip">\u09AF\u09A6\u09BF \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09BF\u09A4 \u09A6\u09BF\u0995\u09C7 \u09AA\u09A5 \u09A5\u09BE\u0995\u09C7, \u09A4\u09BE\u09B9\u09B2\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u09AC\u09CD\u09B2\u0995\u09C7\u09B0 \\n\u0995\u09BE\u099C \u0995\u09B0\u09C1\u09A8\u0964 \u0985\u09A8\u09CD\u09AF\u09A5\u09BE\u09AF\u09BC, \u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u09AC\u09CD\u09B2\u0995\u09C7\u09B0 \u0995\u09BE\u099C \u0995\u09B0\u09C1\u09A8\u0964 </span><span id="Maze_whileTooltip">\u09B8\u0982\u09AF\u09C1\u0995\u09CD\u09A4 \u09AA\u09A6\u0995\u09CD\u09B7\u09C7\u09AA \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u0997\u09CD\u09B0\u09B9\u09A8 \u0995\u09B0\u09C1\u09A8, \\n\u09B6\u09C7\u09B7 \u09AA\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4\u09C7 \u09A8\u09BE \u09AA\u09CC\u0981\u099B\u09A8\u09CB \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4\u0964 </span><span id="Maze_capacity0">\u0986\u09AA\u09A8\u09BE\u09B0 %0 \u09AC\u09CD\u09B2\u0995 \u09AC\u09BE\u0995\u09BF \u0986\u099B\u09C7\u0964</span><span id="Maze_capacity1">\u0986\u09AA\u09A8\u09BE\u09B0 %1\u099F\u09BF \u09AC\u09CD\u09B2\u0995 \u09AC\u09BE\u0995\u09BF \u0986\u099B\u09C7\u0964</span><span id="Maze_capacity2">\u0986\u09AA\u09A8\u09BE\u09B0 %2 \u09AC\u09CD\u09B2\u0995 \u09AC\u09BE\u0995\u09BF \u0986\u099B\u09C7\u0964</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0997\u09CB\u09B2\u0995\u09A7\u09BE\u0981\u09A7\u09BE', levelLinkSuffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="\u09AC\u09CD\u09B2\u0995\u09C7\u09B0 \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09A8\u09BE \u0985\u09A8\u09C1\u09B8\u09BE\u09B0\u09C7 \u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC\u0995\u09C7 \u099A\u09BE\u09B2\u09A8\u09BE \u0995\u09B0\u09C7\u0964."><img src="common/1x1.gif" class="run icon21"> \u09AA\u09CD\u09B0\u09CB\u0997\u09CD\u09B0\u09BE\u09AE \u099A\u09BE\u09B2\u09BE\u09A8</button><button id="resetButton" class="primary" style="display: none" title="\u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC\u0995\u09C7 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09A7\u09BE\u0981\u09A7\u09BE\u09B0 \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09BC\u0964."><img src="common/1x1.gif" class="stop icon21"> \u09AA\u09C1\u09A8:\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09C1\u09A8</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \'\u09B8\u09BE\u09AE\u09A8\u09C7 \u09A8\u09BF\u09A8\' \u09AC\u09CD\u09B2\u0995 \u098F\u0995\u09A4\u09CD\u09B0\u09C7 \u09B2\u0995\u09CD\u09B7\u09C7 \u09AA\u09CC\u0981\u099B\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09AC\u09C7\u0964</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u09B8\u09BE\u09A6\u09BE \u09B0\u0999\u09C7\u09B0 \u0995\u09BE\u099C\u09C7\u09B0\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u0985\u09BE\u09AA\u09A8\u09BE\u09B0 \u098F\u0987 \u09B8\u09CD\u09A4\u09B0\u09C7\u09B0 \u09B8\u09AC\u0997\u09C1\u09B2\u09CB \u09AC\u09CD\u09B2\u0995 \u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09A4 \u0995\u09B0\u09BE \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8\u0964<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u0997\u09CD\u09B0\u09BE\u09AE\u099F\u09BF \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09C1\u09A8 \u0995\u09BF \u09B9\u09AF\u09BC \u09A4\u09BE \u09A6\u09C7\u0996\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF\u0964</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09CB\u0997\u09CD\u09B0\u09BE\u09AE\u099F\u09BF \u0997\u09CB\u09B2\u0995\u09A7\u09BE\u0981\u09A7\u09BE \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0987\u0964 \u09AA\u09C1\u09A8:\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09A8 \u098F\u09AC\u0982 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u098F\u0987 \u09AA\u09A5\u09C7\u09B0 \u09B6\u09C7\u09B7\u09C7 \u09AF\u09BE\u09A8 \u09AE\u09BE\u09A4\u09CD\u09B0 \u09A6\u09C1\u099F\u09BF \u09AC\u09CD\u09B2\u0995 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C7\u0964 \'repeat\' \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8 \u0995\u09CB\u09A8 \u09AC\u09CD\u09B2\u0995 \u098F\u0995\u09BE\u09A7\u09BF\u0995\u09AC\u09BE\u09B0 \u099A\u09BE\u09B2\u09BE\u09A4\u09C7\u0964</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u098F\u0987 \u09B8\u09CD\u09A4\u09B0\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09BE\u09AA\u09A8\u09BF \u09B8\u09AC\u0997\u09C1\u09B2\u09CB \u09AC\u09CD\u09B2\u0995 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964 \u09A8\u09A4\u09C1\u09A8 \u098F\u0995\u099F\u09BF \u09AC\u09CD\u09B2\u0995 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09BF\u09A6\u09CD\u09AF\u09AE\u09BE\u09A8 \u09AC\u09CD\u09B2\u0995 \u09B9\u09A4\u09C7 \u098F\u0995\u099F\u09BF \u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09C1\u09A8\u0964</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u098F\u0995\u099F\u09BF \'repeat\' \u09AC\u09CD\u09B2\u0995\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u0986\u09AA\u09A8\u09BF \u098F\u0995\u09BE\u09A7\u09BF\u0995 \u09AC\u09CD\u09B2\u0995 \u09B2\u09BE\u0997\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">\u09AE\u09C7\u09A8\u09C1 \u09A5\u09C7\u0995\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09BF\u09AF\u09BC \u0996\u09C7\u09B2\u09CB\u09AF\u09BC\u09BE\u09A1\u09BC\u099F\u09BF \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C1\u09A8\u0964</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u098F\u0995\u099F\u09BF \'if\' \u09AC\u09CD\u09B2\u0995 \u0995\u09C7\u09AC\u09B2 \u09A4\u0996\u09A8\u0987 \u0995\u09BE\u099C \u0995\u09B0\u09AC\u09C7, \u09AF\u0996\u09A8 \u09B6\u09B0\u09CD\u09A4 \u09B8\u09A0\u09BF\u0995\u0964 \u09AC\u09BE \u09A6\u09BF\u0995\u09C7 \u0998\u09C1\u09B0\u09BE\u09A4\u09C7 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8 \u09AF\u09A6\u09BF \u09AC\u09BE \u09A6\u09BF\u0995\u09C7 \u09AA\u09A5 \u09A5\u09BE\u0995\u09C7\u0964</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\'if\' \u09AC\u09CD\u09B2\u0995\u09C7\u09B0 %1-\u098F \u099A\u09BE\u09AA \u09A6\u09BF\u09A8 \u098F\u09B0 \u09B6\u09B0\u09CD\u09A4 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u0964</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else \u09AC\u09CD\u09B2\u0995\u09B8\u09AE\u09C2\u09B9 \u098F\u0995\u099F\u09BF \u0995\u09BE\u099C \u0995\u09B0\u09AC\u09C7 \u0985\u09A5\u09AC\u09BE \u0985\u09A8\u09CD\u09AF\u099F\u09BF\u0964</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u098F\u0987 \u099C\u099F\u09BF\u09B2 \u09A7\u09BE\u09A7\u09BE \u0995\u09BF \u0985\u09BE\u09AA\u09A8\u09BF \u09AE\u09BF\u09B2\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8? \u09AC\u09BE \u09A6\u09BF\u0995\u09C7\u09B0 \u0993\u09AF\u09BC\u09BE\u09B2 \u0985\u09A8\u09C1\u09B8\u09BE\u09B0\u09C7 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964 \u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u09A6\u0995\u09CD\u09B7 \u09AA\u09CD\u09B0\u09CB\u0997\u09CD\u09B0\u09BE\u09AE\u09BE\u09B0\u09AC\u09C3\u09A8\u09CD\u09A6!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
