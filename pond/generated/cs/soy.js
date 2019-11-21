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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Hled\u00E1 nep\u0159\u00EDtele. Zadej sm\u011Br (0-360). \\nVr\u00E1ti vzd\u00E1lenost od najbli\u017E\u0161\u00EDho nep\u0159\u00EDtele \\nv dan\u00E9m sm\u011Bru. Vr\u00E1ti nekone\u010Dno pokud \\nv dan\u00E9m sm\u011Bru nen\u00ED \u017E\u00E1dn\u00FD nep\u0159\u00EDtel. </span><span id="Pond_cannonTooltip">Vyp\u00E1l\u00ED z d\u011Bla. Zadej sm\u011Br (0-360) a s\u00EDlu (0-70). </span><span id="Pond_swimTooltip">Plavat vp\u0159ed. Ur\u010Dit sm\u011Br (0-360). </span><span id="Pond_stopTooltip">P\u0159estat plavat. Hr\u00E1\u010D se postupn\u011B zastav\u00ED. </span><span id="Pond_healthTooltip">Vrac\u00ED hr\u00E1\u010D\u016Fv sou\u010Dasn\u00FD zdravotn\u00ED stav (0 je \\nmrtv\u00FD, 100 je zcela zdrav\u00FD). </span><span id="Pond_speedTooltip">Vr\u00E1ti aktu\u00E1ln\u00ED rychlost hr\u00E1\u010De (0 stoj\u00ED, \\n100 pln\u00E1 rychlost). </span><span id="Pond_locXTooltip">Vr\u00E1t\u00ED hr\u00E1\u010Dovu sou\u0159adnici X (0 je lev\u00FD okraj, \\n100 je prav\u00FD okraj). </span><span id="Pond_locYTooltip">Vr\u00E1t\u00ED hr\u00E1\u010Dovu sou\u0159adnici Y (0 je spodn\u00ED okraj, \\n100 je horn\u00ED okraj). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Zobraz\u00ED dokumentaci jazyka.">Dokumentace</button></td><td><button id="runButton" class="primary" title="Spust\u00ED program, kter\u00FD jste napsali."><img src="common/1x1.gif" class="run icon21"> Spus\u0165 program</button><button id="resetButton" class="primary" style="display: none" title="Zastav\u00ED program a vr\u00E1t\u00ED \u00FArove\u0148 do v\u00FDchoz\u00EDho stavu."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
