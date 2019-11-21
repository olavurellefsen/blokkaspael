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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">idi napred</span><span id="Maze_turnLeft">okreni se levo</span><span id="Maze_turnRight">okreni se desno</span><span id="Maze_doCode">izvedi</span><span id="Maze_elseCode">ina\u010De</span><span id="Maze_helpIfElse">Blokovi \u201Eako-ina\u010De\u201C izvr\u0161i\u0107e ili jedno ili drugo.</span><span id="Maze_pathAhead">ako postoji put napred</span><span id="Maze_pathLeft">ako postoji put levo</span><span id="Maze_pathRight">ako postoji put desno</span><span id="Maze_repeatUntil">ponavljaj do</span><span id="Maze_moveForwardTooltip">Pomera igra\u010Da napred za jedno mesto.</span><span id="Maze_turnTooltip">Okre\u0107e igra\u010Da ulevo ili udesno za 90 stepeni.</span><span id="Maze_ifTooltip">Ako postoji put u datom pravcu, \\nonda izvr\u0161i neke radnje. </span><span id="Maze_ifelseTooltip">Ako postoji put u datom pravcu, \\nonda izvr\u0161i prvi blok radnji. U \\nsuprotnom, izvr\u0161i drugi. </span><span id="Maze_whileTooltip">Ponavlja zadate radnje dok ne do\u0111e do kraja.</span><span id="Maze_capacity0">Preostalo ti je %0 blokova.</span><span id="Maze_capacity1">Preostao ti je %1 blok.</span><span id="Maze_capacity2">Preostalo ti je %2 blokova.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Lavirint', levelLinkSuffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Odre\u0111uje \u0161ta \u0107e igra\u010D uraditi na osnovu blokova."><img src="common/1x1.gif" class="run icon21"> Pokreni program</button><button id="resetButton" class="primary" style="display: none" title="Vratite igra\u010Da na po\u010Detak lavirinta."><img src="common/1x1.gif" class="stop icon21"> Ponovo postavi</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Nare\u0111ajte dva bloka \u201Eidi napred\u201C da biste mi pomogli da do\u0111em do cilja.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>U ovom nivou treba da nare\u0111ate sve blokove u beli radni prostor.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Pokrenite program i vidite \u0161ta se de\u0161ava.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Program nije re\u0161io lavirint. Kliknite na \u201EPonovo\u201C da biste ponovo poku\u0161ali.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Do\u0111ite do kraja puta upotrebiv\u0161i samo dva bloka. Koristite \u201Eponovi\u201C da biste izvr\u0161ili blok vi\u0161e puta.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Ste koristili sve blokove na ovom nivou. Da napravite novi blok, potrebno je da prvo uklonite postoje\u0107i blok.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Dostigni cilj upotrebom samo pet blokova.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Izaberite Svoj omiljeni igra\u010D iz ovog menija.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\'ako\' blok \u0107e uraditi ne\u0161to jedino ako je uslov ispunjen. Poku\u0161aj okret u levo ako postoji put sa leve strane.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Kliknite na %1 \'ako\' blok, da promeni svoj status.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blokovi \u201Eako-ina\u010De\u201C izvr\u0161i\u0107e ili jedno ili drugo.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Mo\u017Ee\u0161 li da re\u0161i\u0161 ovaj slo\u017Eeni lavirint? Pok\u0161aj da se kre\u0107e\u0161 uz levi zid.' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
