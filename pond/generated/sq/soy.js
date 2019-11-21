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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Skano p\u00EBr armiq. Specifiko nj\u00EB drejtim (0-360). \\nKthen distanc\u00EBn e armikut m\u00EB t\u00EB af\u00EBrt n\u00EB at\u00EB \\ndrejtim. Kthen Pafund\u00EBsisht n\u00EBse nuk gjendet \\narmik. </span><span id="Pond_cannonTooltip">Gjuaje topin. Specifiko drejtimin (0-360) dhe \\ndistanc\u00EBn (0-70). </span><span id="Pond_swimTooltip">Noto p\u00EBrpara. Specifikon drejtimin (0-360). </span><span id="Pond_stopTooltip">Ndalo notimin. Lojtari do t\u00EB ngadal\u00EBsohet deri \\nsa t\u00EB ndalet. </span><span id="Pond_healthTooltip">Kthen sh\u00EBndetin aktual t\u00EB lojtarit (0 \u00EBsht\u00EB i \\nvdekur, 100 \u00EBsht\u00EB i sh\u00EBndetsh\u00EBm). </span><span id="Pond_speedTooltip">Jep shpejt\u00EBsin\u00EB aktuale t\u00EB lojtarit (0 \u00EBsht\u00EB \\nndalur, 100 \u00EBsht\u00EB shpejt\u00EBsia e plot\u00EB). </span><span id="Pond_locXTooltip">Jep koordinat\u00EBn X t\u00EB lojtarit (0 \u00EBsht\u00EB buza e \\nmajt\u00EB, 100 \u00EBsht\u00EB buza e djatht\u00EB). </span><span id="Pond_locYTooltip">Jep koordinat\u00EBn Y t\u00EB lojtarit (0 \u00EBsht\u00EB buza e \\nposhtme, 100 \u00EBsht\u00EB buza e sip\u00EBrme). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Shfaq dokumentimin e gjuh\u00EBs.">Dokumentacion</button></td><td><button id="runButton" class="primary" title="Ekzekuto programin q\u00EB shkrove. "><img src="common/1x1.gif" class="run icon21"> Ekzekuto Programin</button><button id="resetButton" class="primary" style="display: none" title="Ndale programin dhe reseto nivelin."><img src="common/1x1.gif" class="stop icon21"> Riktheje</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
