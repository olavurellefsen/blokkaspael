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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\u0418\u0449\u0435\u0442 \u0432\u0440\u0430\u0433\u043E\u0432. \u0423\u043A\u0430\u0436\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 (0-360). \\n\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0434\u043E \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043E \\n\u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430 \u0432 \u044D\u0442\u043E\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438. \\n\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C, \u0435\u0441\u043B\u0438 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A \\n\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. </span><span id="Pond_cannonTooltip">\u0421\u0442\u0440\u0435\u043B\u044F\u0442\u044C \u0438\u0437 \u043F\u0443\u0448\u043A\u0438. \u0423\u043A\u0430\u0436\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 (0-360) \u0438 \\n\u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 (0-70). </span><span id="Pond_swimTooltip">\u041F\u043B\u044B\u0442\u044C \u0432\u043F\u0435\u0440\u0435\u0434. \u0423\u043A\u0430\u0436\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 (0-360). </span><span id="Pond_stopTooltip">\u041F\u0440\u0435\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043F\u043B\u044B\u0442\u044C. \u0418\u0433\u0440\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u0434\u043B\u044F\u0442\u044C\u0441\u044F \u0434\u043E \\n\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438. </span><span id="Pond_healthTooltip">\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0438\u0433\u0440\u043E\u043A\u0430 (0 - \u0442\u0440\u0443\u043F, \\n100 - \u0437\u0434\u043E\u0440\u043E\u0432). </span><span id="Pond_speedTooltip">\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438\u0433\u0440\u043E\u043A\u0430 (0 - \\n\u043D\u0435\u043F\u043E\u0434\u0432\u0438\u0436\u043D\u043E\u0441\u0442\u044C, 100 - \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C). </span><span id="Pond_locXTooltip">\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0443 X \u0438\u0433\u0440\u043E\u043A\u0430 (0 - \u043B\u0435\u0432\u044B\u0439 \u043A\u0440\u0430\u0439, \\n100 - \u043F\u0440\u0430\u0432\u044B\u0439 \u043A\u0440\u0430\u0439). </span><span id="Pond_locYTooltip">\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0443 Y \u0438\u0433\u0440\u043E\u043A\u0430 (0 - \u043D\u0438\u0436\u043D\u0438\u0439 \u043A\u0440\u0430\u0439, \\n100 - \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u043A\u0440\u0430\u0439). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E \u044F\u0437\u044B\u043A\u0443.">\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F</button></td><td><button id="runButton" class="primary" title="\u0417\u0430\u043F\u0443\u0441\u0442\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u0443\u044E \u0442\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443."><img src="common/1x1.gif" class="run icon21"> \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443</button><button id="resetButton" class="primary" style="display: none" title="\u041F\u0440\u0435\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0438 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \\n\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435. "><img src="common/1x1.gif" class="stop icon21"> \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
