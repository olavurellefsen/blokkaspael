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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">g\u00E5 fremover</span><span id="Maze_turnLeft">sving til venstre</span><span id="Maze_turnRight">sving til h\u00F8yre</span><span id="Maze_doCode">utf\u00F8r</span><span id="Maze_elseCode">ellers</span><span id="Maze_helpIfElse">If-else-blokker vil gj\u00F8re det ene eller det andre.</span><span id="Maze_pathAhead">if-sti fremover</span><span id="Maze_pathLeft">if-sti til venstre</span><span id="Maze_pathRight">if-sti til h\u00F8yre</span><span id="Maze_repeatUntil">gjenta inntil</span><span id="Maze_moveForwardTooltip">Flytter spilleren ett felt fremover.</span><span id="Maze_turnTooltip">Svinger spilleren 90 grader til h\u00F8yre eller \\nvenstre. </span><span id="Maze_ifTooltip">Hvis det finnes en sti i angitt retning, \\ngj\u00F8r visse handlinger. </span><span id="Maze_ifelseTooltip">Hvis det finnes en sti i angitt retning, \\ngj\u00F8r den f\u00F8rste blokken av handlinger. \\nEllers, gj\u00F8r den andre blokken av handlinger. </span><span id="Maze_whileTooltip">Gjenta de sluttede kommandoene inntil \\nsluttpunktet n\u00E5s. </span><span id="Maze_capacity0">Du har %0 blokker igjen.</span><span id="Maze_capacity1">Du har %1 blokk igjen.</span><span id="Maze_capacity2">Du har %2 blokker igjen.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labyrint', levelLinkSuffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="F\u00E5 spilleren til \u00E5 gj\u00F8re det blokkene sier."><img src="common/1x1.gif" class="run icon21"> Kj\u00F8r Programmet</button><button id="resetButton" class="primary" style="display: none" title="Flytt spilleren tilbake til starten av labyrinten."><img src="common/1x1.gif" class="stop icon21"> Nullstill</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Sett sammen et par \'g\u00E5 fremover\'-blokker for \u00E5 hjelpe meg med \u00E5 n\u00E5 m\u00E5let.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>P\u00E5 dette niv\u00E5et m\u00E5 du sette sammen alle blokkene i det hvite arbeidsomr\u00E5det.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Kj\u00F8r programmet for \u00E5 se hva som skjer.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Programmet ditt l\u00F8ste ikke labyrinten. Trykk \'Nullstill\' og pr\u00F8v igjen.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>N\u00E5 slutten av denne stien ved \u00E5 bruke bare to blokker. Bruk \'repeter\' for \u00E5 kj\u00F8re en blokk mer enn \u00E9n gang.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Du har brukt opp alle blokkene for dette niv\u00E5et. For \u00E5 lage nye blokker, m\u00E5 du f\u00F8rst slette en eksisterende blokk.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Du kan plassere mer enn en blokk i en repeteringsblokk.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Velg din favorittspiller fra denne menyen.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>En \'if\'-blokk vil bare gj\u00F8re noe dersom forholdene er sanne. Fors\u00F8k \u00E5 svinge til venstre hvis det finnes en sti til venstre.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Klikk p\u00E5 %1 i \'if\'-blokken for \u00E5 endre tilstand.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else-blokker vil gj\u00F8re det ene eller det andre.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Kan du l\u00F8se denne kompliserte pyramiden? Fors\u00F8k \u00E5 f\u00F8lge veggen p\u00E5 venstre side. Kun for avanserte programmerere.' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
