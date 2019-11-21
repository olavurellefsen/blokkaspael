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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">C\u0103uta\u021Bi inamici. Specifica\u021Bi o direc\u021Bie (0-360). \\nReturneaz\u0103 distan\u021Ba p\u00E2n\u0103 la cel mai apropiat \\ndu\u0219man \u00EEn acea direc\u021Bie. Returneaz\u0103 Infinit dac\u0103 \\nnu s-a g\u0103sit niciun inamic. </span><span id="Pond_cannonTooltip">Focul de tun. Specifica\u021Bi o direc\u021Bie (0-360) \u0219i \\nun interval (0-70). </span><span id="Pond_swimTooltip">\u00CEnoat\u0103 \u00EEnainte. Specifica\u021Bi o direc\u021Bie (0-360). </span><span id="Pond_stopTooltip">Opri\u021Bi \u00EEnotul. Juc\u0103torul va \u00EEnceta s\u0103 se \\nopreasc\u0103. </span><span id="Pond_healthTooltip">Returneaz\u0103 s\u0103n\u0103tatea actual\u0103 a juc\u0103torului (0 \\neste mort, 100 este s\u0103n\u0103tos). </span><span id="Pond_speedTooltip">Returneaz\u0103 viteza curent\u0103 a juc\u0103torului (0 este \\noprit, 100 este vitez\u0103 maxim\u0103). </span><span id="Pond_locXTooltip">Returneaz\u0103 coordonatele X ale juc\u0103torului (0 \\neste marginea din st\u00E2nga, 100 este marginea \\ndreapt\u0103). </span><span id="Pond_locYTooltip">Returneaz\u0103 coordonatele Y ale playerului (0 este \\nmarginea de jos, 100 este marginea de sus). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Afi\u0219a\u021Bi documenta\u021Bia lingvistic\u0103.">Documenta\u021Bie</button></td><td><button id="runButton" class="primary" title="Rula\u021Bi programul pe care l-a\u021Bi scris."><img src="common/1x1.gif" class="run icon21"> Ruleaz\u0103 programul</button><button id="resetButton" class="primary" style="display: none" title="Opri\u021Bi programul \u0219i reseta\u021Bi nivelul."><img src="common/1x1.gif" class="stop icon21"> Reseteaz\u0103</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
