// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Spelletjes</span><span id="Games_puzzle">Puzzel</span><span id="Games_maze">Doolhof</span><span id="Games_bird">Vogel</span><span id="Games_turtle">Schildpad</span><span id="Games_movie">Film</span><span id="Games_music">Muziek</span><span id="Games_pondTutor">Leer Vijver</span><span id="Games_pond">Vijver</span><span id="Games_genetics">Genetica</span><span id="Games_linesOfCode1">Je hebt dit niveau opgelost met 1 regel JavaScript:</span><span id="Games_linesOfCode2">Je hebt dit niveau opgelost met %1 regels JavaScript:</span><span id="Games_nextLevel">Ben je klaar voor niveau %1?</span><span id="Games_finalLevel">Ben je klaar voor de volgende uitdaging?</span><span id="Games_submitTitle">Titel:</span><span id="Games_linkTooltip">Opslaan en koppelen naar blokken.</span><span id="Games_runTooltip">Het door u geschreven programma uitvoeren.</span><span id="Games_runProgram">Programma uitvoeren</span><span id="Games_resetTooltip">Stop het programma en begin het niveau opnieuw.</span><span id="Games_resetProgram">Opnieuw instellen</span><span id="Games_help">Hulp</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Annuleren</span><span id="Games_catLogic">Logica</span><span id="Games_catLoops">Lussen</span><span id="Games_catMath">Formules</span><span id="Games_catText">Tekst</span><span id="Games_catLists">Lijsten</span><span id="Games_catColour">Kleur</span><span id="Games_catVariables">Variabelen</span><span id="Games_catProcedures">Functies</span><span id="Games_httpRequestError">Er is een probleem opgetreden tijdens het verwerken van het verzoek.</span><span id="Games_linkAlert">Deel uw blokken via deze koppeling:\n\n%1</span><span id="Games_hashError">"%1" komt helaas niet overeen met een opgeslagen bestand.</span><span id="Games_xmlError">Uw opgeslagen bestand kan niet geladen worden. Is het misschien gemaakt met een andere versie van Blockly?</span><span id="Games_submitted">Dank u voor dit programma! Als onze staf van opgeleide apen het leuk vinden, zullen ze het binnen enkele dagen in de galerij opnemen.</span><span id="Games_listVariable">lijst</span><span id="Games_textVariable">tekst</span><span id="Games_breakLink">Zodra u begint met het bewerken van JavaScript, kunt u niet terug gaan naar het bewerken van blokken. Akkoord?</span><span id="Games_blocks">Blokken</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="Opslaan en koppelen naar blokken."><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">Hulp</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Spelletjes</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit215 = opt_ijData.maxLevel + 1;
  for (var i215 = 1; i215 < iLimit215; i215++) {
    output += ' ' + ((i215 == opt_ijData.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i215) + '">' + soy.$$escapeHtml(i215) + '</span>' : (i215 == opt_ijData.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i215) + '" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i215) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i215) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i215) + '" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i215) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Van harte gefeliciteerd!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Annuleren</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">Dit niveau is erg moeilijk. Wil je het overslaan en naar het volgende spel gaan? Je kunt altijd later terugkomen.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Annuleren</button><button id="abortOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
