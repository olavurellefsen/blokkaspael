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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\u1340\u120B\u12A5\u1272 \u122D\u12A0\u1362 \u12AB\u1265 0 \u12AD\u1233\u1265 360 \u1218\u1320\u1295 \u130D\u12DC \u12C8\u1235\u1295\u1362 \u1265\u1270\u1218\u1233\u1233\u120A \u12A3\u1295\u1348\u1275 \u1293\u1265 \\n\u12DD\u122D\u12A8\u1265 \u12DD\u1240\u1228\u1260 \u1340\u120B\u12A2 \u12D8\u120E \u1213\u1342\u122D \u122D\u1215\u1240\u1275 \u12ED\u121D\u120D\u1235\u1362 </span><span id="Pond_cannonTooltip">\u12A5\u1272 \u1218\u12F5\u134D\u12D5 \u1270\u12A9\u1236\u1362 \u12A3\u1295\u1348\u1275 (0-360) \u12A8\u121D\u12A1 \'\u12CD\u1295 \u122D\u1215\u1240\u1275 (0-70) \\n\u12C8\u1235\u1295\u1362 </span><span id="Pond_swimTooltip">\u1295\u1245\u12F5\u121A\u1275 \u1213\u121D\u1235\u1362 \u12A3\u1295\u1348\u1275 \u12C8\u1235\u1295 (0-360)\u1362</span><span id="Pond_stopTooltip">\u121D\u1215\u121B\u1235 \u12A3\u124B\u122D\u1345\u1362 \u1270\u132B\u12CB\u1272 \u134D\u1325\u1290\u1275 \u1265\u121D\u1245\u1293\u1235 \u1320\u1320\u12CD \u12AD\u1265\u120D \u12A5\u12E9\u1362.</span><span id="Pond_healthTooltip">\u1293\u12ED \u1270\u132B\u12CB\u1272 \u1325\u12D5\u1293 \u12A9\u1290\u1273\u1275 \u12ED\u121D\u120D\u1235 (0 \u121B\u1208\u1275 \u121E\u12ED\u1271 \u121B\u1208\u1275 \'\u12E9\u1363 100 \u1219\u1209\u12A5 \\n\u1325\u12D5\u1293 \u12E8\u1218\u120D\u12AD\u1275)\u1362 </span><span id="Pond_speedTooltip">\u1293\u12ED \u1270\u132B\u12CB\u1273\u12ED \u1293\u12ED \u1215\u12DA \u134D\u1320\u1290\u1275 \u12ED\u121D\u120D\u1235\u1362 (0 \u1320\u1320\u12CD \u12A3\u1262\u1209 \u121B\u1208\u1275 \'\u12E9\u1363 100 \\n\u1219\u1209\u12A5 \u134D\u1320\u1290\u1275 \u12E8\u1218\u120B\u12BD\u1275)\u1362 </span><span id="Pond_locXTooltip">\u1293\u12ED \u1270\u132B\u12CB\u1273\u12ED \u1293\u12ED X \u1266\u1273 \u12ED\u121D\u120D\u1235 (0 \u121B\u1208\u1275 \u12A3\u1265 \u1340\u130B\u121B\u12ED \u12A9\u122D\u1293\u12D5\u1363 100 \\n\u12A3\u1265 \u12E8\u121B\u1293\u12ED \u12A9\u122D\u1293\u12D5 \u121B\u1208\u1275 \'\u12E9)\u1362 </span><span id="Pond_locYTooltip">\u1293\u12ED \u1270\u132B\u12CB\u1273\u12ED \u1293\u12ED Y \u1266\u1273 \u12ED\u121D\u120D\u1235 (0 \u121B\u1208\u1275 \u12A3\u1265 \u1273\u1215\u1270\u12CB\u12ED \u12A9\u122D\u1293\u12D5\u1363 100 \\n\u12A3\u1265 \u120B\u12D5\u1208\u12CB\u12ED \u12A9\u122D\u1293\u12D5 \u121B\u1208\u1275 \'\u12E9)\u1362 </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u1293\u12ED \u1230\u1290\u12F5 (\u12F6\u12A9\u1218\u1295\u1274\u123D\u1295) \u124B\u1295\u124B \u12A3\u122D\u12A5\u12ED\u1362">\u1230\u1290\u12F5 (\u12F6\u12A9\u1218\u1295\u1274\u123D\u1295)</button></td><td><button id="runButton" class="primary" title="\u12DD\u1340\u1213\u134D\u12AB\u12EE \u1355\u122E\u130D\u122B\u121D \u12A3\u12BA\u12F6"><img src="common/1x1.gif" class="run icon21"> \u1355\u122E\u130D\u122B\u121D \u12ED\u12BA\u12F5</button><button id="resetButton" class="primary" style="display: none" title="\u1355\u122E\u130D\u122B\u121D \u12A3\u121D\u1241\u122B\u1345 \u1290\u12DA \u12F0\u1228\u1303 \u12A8\u121D\u1265\u1213\u12F1\u123D \u1300\u121D\u122D"><img src="common/1x1.gif" class="stop icon21"> \u12A8\u121D\u1265\u1213\u12F1\u123D \u1300\u121D\u122D</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
