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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Szuka wrog\u00F3w. Wybierz kierunek (0-360). \\nZwraca odleg\u0142o\u015B\u0107 do najbli\u017Cszego wroga w \\ntym kierunku. Zwraca niesko\u0144czono\u015B\u0107 je\u015Bli \\nnie znajdzie wroga. </span><span id="Pond_cannonTooltip">Wystrzel z dzia\u0142a. Wybierz kierunek (0-360) i \\nodleg\u0142o\u015B\u0107 (0-70). </span><span id="Pond_swimTooltip">P\u0142y\u0144 do przodu. Wybierz kierunek (0-360). </span><span id="Pond_stopTooltip">Przesta\u0144 p\u0142yn\u0105\u0107. Gracz zwolni i zatrzyma si\u0119. </span><span id="Pond_healthTooltip">Zwraca bie\u017C\u0105ce zdrowie gracza (0 - nie \u017Cyje, \\n100 - zdrowy) </span><span id="Pond_speedTooltip">Zwraca bie\u017C\u0105c\u0105 pr\u0119dko\u015B\u0107 gracza (0 - stoi, \\n100 - pe\u0142na pr\u0119dko\u015B\u0107). </span><span id="Pond_locXTooltip">Zwraca wsp\u00F3\u0142rz\u0119dn\u0105 X gracza (0 - lewa kraw\u0119d\u017A, \\n100 - prawa kraw\u0119d\u017A). </span><span id="Pond_locYTooltip">Zwraca wsp\u00F3\u0142rz\u0119dn\u0105 Y gracza (0 - dolna kraw\u0119d\u017A, \\n100 - g\u00F3rna kraw\u0119d\u017A). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Poka\u017C dokumentacj\u0119 j\u0119zyka.">Dokumentacja</button></td><td><button id="runButton" class="primary" title="Uruchom napisany przez Ciebie program."><img src="common/1x1.gif" class="run icon21"> Uruchom Program</button><button id="resetButton" class="primary" style="display: none" title="Zatrzymaj program i zresetuj poziom."><img src="common/1x1.gif" class="stop icon21"> Zresetuj</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
