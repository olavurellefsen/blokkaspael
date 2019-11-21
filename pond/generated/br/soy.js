// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Klaskit enebourien. Spisait un tu (0-360). \\nDistrei\u00F1 a ra an hed d\'an enebour tosta\u00F1 \\ndiouzh an tu-ma\u00F1. Distrei\u00F1 a ra "anvevenn" \\nma ne vez kavet enebour ebet. </span><span id="Pond_cannonTooltip">Tenna\u00F1 gant ar c\'hanol. Spisait un tu (0-360) \\nhag un hed-tenn (0-70). </span><span id="Pond_swimTooltip">Neuial. Spisait un tu (0-360). </span><span id="Pond_stopTooltip">Paouezit da neuial. Ar c\'hoarier a grenno e dizh \\nevit chom a-sav. </span><span id="Pond_healthTooltip">Distrei\u00F1 yec\'hed a vrema\u00F1 ar c\'hoarier (0 zo par \\nda "marv", 100 zo par da "yac\'h-pesk") </span><span id="Pond_speedTooltip">Distrei\u00F1 tizh a vrema\u00F1 ar c\'hoarier (0 zo par da \\n"ehanet", 100 zo par "diwar dizh"). </span><span id="Pond_locXTooltip">Distrei\u00F1 daveenn X ar c\'hoarier (0 zo ar bord \\nkleiz, 100 zo par d\'ar vord dehou) </span><span id="Pond_locYTooltip">Retorn a ra daveenn Y ar c\'hoarier (0 zo an \\ntrao\u00F1, 100 zo ar c\'hrec\'h). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Diskwel an teuliadur diwar-benn ar yezh.">Teuliadur</button></td><td><button id="runButton" class="primary" title="La\u00F1sa\u00F1 ar programm ho peus skrivet."><img src="common/1x1.gif" class="run icon21"> La\u00F1sa\u00F1 ar programm</button><button id="resetButton" class="primary" style="display: none" title="Paouez ar programm hag adderaouekaat al live."><img src="common/1x1.gif" class="stop icon21"> Adderaouekaat</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
