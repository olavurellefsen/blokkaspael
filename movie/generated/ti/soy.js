// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Movie.soy.
 */

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">x \u1300\u121D\u122D</span><span id="Movie_y1">y \u1300\u121D\u122D</span><span id="Movie_x2">x \u1328\u122D\u1235</span><span id="Movie_y2">y \u1328\u122D\u1235</span><span id="Movie_radius">\u122B\u12F5\u12E8\u1235</span><span id="Movie_width">\u12C8\u122D\u12F2</span><span id="Movie_height">\u1241\u1218\u1275</span><span id="Movie_circleTooltip">\u12A3\u1265\u1272 \u12DD\u1270\u1308\u1208\u1340 \u1266\u1273 \u1260\u1272 \u12DD\u1270\u1308\u1208\u1340 \u122B\u12F2\u12E8\u1235 \u12AD\u1262 \u12ED\u1235\u12A5\u120D\u1362.</span><span id="Movie_circleDraw">\u12AD\u1262</span><span id="Movie_rectTooltip">\u12A3\u1265\u1272 \u12DD\u1270\u1308\u1208\u1340 \u1266\u1273 \u1260\u1272 \u12DD\u1270\u1308\u1208\u1340 \u12C8\u122D\u12F5\u1295 \u1241\u1218\u1275\u1295 \u122D\u1261\u12D5 \u12A9\u122D\u1293\u12D5 \u12ED\u1235\u12A5\u120D\u1362.</span><span id="Movie_rectDraw">\u122D\u1261\u12D5 \u12A9\u122D\u1293\u12D5</span><span id="Movie_lineTooltip">\u12AB\u1265 \u1213\u12F0 \u1290\u1325\u1262 \u1293\u1265 \u12AB\u120D\u12A5 \u1260\u1272 \u12DD\u1270\u1308\u1208\u1340 \u12C8\u122D\u12F2 \u1215\u1295\u1343\u1345 \u12ED\u1235\u12A5\u120D\u1362.</span><span id="Movie_lineDraw">\u1215\u1295\u1343\u1345</span><span id="Movie_timeTooltip">\u12AB\u1265\u1272 \u12A3\u1292\u121C\u123D\u1295 \u1293\u12ED \u1215\u12DA \u1230\u12D3\u1275 \u12ED\u121D\u120D\u1235\u1362</span><span id="Movie_colourTooltip">\u1293\u12ED \u1262\u122E \u1215\u1265\u122A \u12ED\u1245\u12ED\u122D</span><span id="Movie_setColour">\u1215\u1265\u122A \u1293\u1265\u12DA \u1240\u12ED\u122D</span><span id="Movie_submitDisabled">\u134D\u120D\u121D\u12BB \u12A3\u12ED\u1295\u1240\u1233\u1240\u1235\u1295\u1362 \u12DD\u12BE\u1290 \u12F0\u1235 \u1265\u1203\u120A \u1290\u1308\u122D \u1295\u121D\u1235\u122B\u1215 \u1233\u1293\u12F1\u1245 \u1270\u1320\u1240\u121D\u1362 \u1265\u12F5\u1215\u122A\u12A1 \u134A\u120D\u121D\u12BB \u1293\u1265 \u1218\u1320\u122B\u1240\u121A \u12AD\u1275\u120D\u12A5\u12BD \u1275\u12BD\u12A5\u120D\u1362</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u134A\u120D\u121D', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u1218\u1320\u122B\u1240\u121A \u134A\u120D\u121D\u1273\u1275 \u12BD\u1348\u1275"><img src="common/1x1.gif" class="gallery icon21"> \u1218\u1320\u122B\u1240\u121A \u1228\u12A0</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u134A\u120D\u121D\u12BB \u1293\u1265 \u1218\u1320\u122B\u1240\u121A \u120D\u12A3\u12BD\u1362"><img src="common/1x1.gif" class="camera icon21"> \u1293\u1265 \u1218\u1320\u122B\u1240\u121A \u120D\u12A3\u12BD\u1362</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u134A\u120D\u121D\u12BB \u1293\u1265 \u1218\u1320\u122B\u1240\u121A \u120D\u12A3\u12BD\u1362</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u122D\u12A5\u1232\u1361 <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u1230\u122D\u12DD</button><button id="galleryOk" class="secondary" type="submit">\u12A5\u123A</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u12A5\u1272 \u1265\u12F5\u1215\u122A\u1275 (\u1265\u12AD\u130D\u122B\u12CD\u1295\u12F5) \u12D8\u120E \u12AD\u1262 \u1293\u1265 \u120D\u12D5\u120A \u1355\u122E\u130D\u122B\u121D\u12AB \u12A3\u1295\u1240\u1233\u1245\u1236\u1362 \u1265\u12F5\u1215\u122A\u12A1 \u1265\u12F5\u1215\u122A \u12A5\u1272 \u1230\u1265 \u12AD\u12BE\u1295 \u12A5\u12E9\u1362</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u1240\u1208\u120D\u1272 \u1245\u122D\u1345\u1273\u1275 \u1265\u121D\u1325\u1243\u121D \u1290\u12DA \u1230\u1265 \u1235\u12A3\u120D\u1362' : (opt_ijData.level == 2) ? '\u12A5\u12DA \u12F0\u1228\u1303 \u12A5\u12DA \u134A\u120D\u121D \u12A5\u12E9\u1362 \u1293\u12ED\u1272 \u1230\u1265 \u12A2\u12F5 \u12A3\u1265\u1272 \u1235\u12AD\u122A\u1295 \u12AD\u1295\u1240\u1233\u1240\u1235 \u1275\u12F0\u120A\u1362 \u1245\u12F5\u1218\u121D\u122D\u12A2\u1275 \u1295\u121D\u122D\u12A3\u12ED \u1270\u132B\u12C8\u1275 \u12DD\u1265\u120D \u1218\u120D\u130E\u121D \u1320\u12CD\u1245\u1362<div id="sampleHelp2" class="readonly"></div>\u12A5\u1272 \u134A\u120D\u121D \u12AD\u132B\u12C8\u1275 \u1270\u120E\u1363 \u1293\u12ED \'\u130D\u12DC\' \u1233\u1295\u12F1\u1245 \u12CB\u130B \u12AB\u1265 0 \u12AD\u1233\u1265 100 \u12ED\u1246\u1345\u122D\u1362 \u1293\u12ED\u1272 \u12A2\u12F5 \u1293\u12ED\'y\' \u1266\u1273 \u12AB\u1265 0 \u1300\u121A\u1229 \u12AD\u1233\u1265 100 \u12AD\u12B8\u12F5 \u1235\u1208\u1275\u12F0\u120A \u1240\u120A\u120D \u12AD\u12BE\u1295 \u12A3\u1208\u12CE\u1362' : (opt_ijData.level == 3) ? '\'\u130D\u12DC\' \u1233\u1295\u12F1\u1245 \u12AB\u1265 0 \u12AD\u1233\u1265 100 \u12ED\u1246\u1345\u122D\u1362 \u1215\u12DA \u130D\u1295 \u1293\u12ED\u1272 \u12AB\u120D\u12A5 \u12A2\u12F5 \u1293\u12ED \'y\' \u1266\u1273 \u12AB\u1265 100 \u1300\u121A\u1229 \u1293\u1265 0 \u12AD\u12B8\u12F5 \u1275\u12F0\u120A\u1362 \u12A5\u12DA \u12A3\u1295\u1348\u1275 \u12A5\u1275\u1245\u12ED\u122D \u1213\u1295\u1272 \u1293\u12ED \u1212\u1233\u1265 \u134E\u122D\u1219\u120B \u12F5\u1208\u1362' : (opt_ijData.level == 4) ? '\u12A3\u1265 \u12DD\u1213\u1208\u1348 \u12F0\u1228\u1303 \u12DD\u1270\u121D\u1203\u122D\u12AB\u12EE \u1265\u121D\u1325\u1243\u121D \u1218\u1235\u1240\u1208\u129B \u12DD\u1230\u122D\u1211 \u12A3\u12A5\u130B\u122D \u1235\u122B\u1215\u1362' : (opt_ijData.level == 5) ? '\u1212\u1233\u1263\u12CA \u134E\u122D\u1219\u120B \u12A2\u12F5 \u12DD\u1270\u1213\u120B\u1208\u12B8 \u12A5\u12E9\u1362 \u1218\u120D\u1231 \u12A3\u1265\u12DA \u12A3\u120E\u1362<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u1290\u1272 \u1230\u1265 \u1345\u121D\u12F2 \u12A3\u12A5\u12F3\u12CD \u1203\u1266\u1362' : (opt_ijData.level == 7) ? '\'\u12A5\u1295\u12F5\u1215\u122D\' \u1233\u1295\u12F1\u1245 \u1265\u121D\u1325\u1243\u121D \u1290\u1272 \u1293\u12ED \u1218\u1300\u1218\u122D\u1273 \u134D\u122D\u1242 \u134A\u120D\u121D \u1295\u12A5\u123D\u1276\u1295 \u122D\u12A5\u1232 \u1230\u12A3\u120D\u1362 \u1265\u12F5\u1215\u122A\u12A1\u1363 \u1290\u1272 \u12AB\u120D\u12A0\u12CB\u12ED \u134D\u122D\u1242 \u134A\u120D\u121D \u12D3\u1265\u12ED \u122D\u12A5\u1232 \u1230\u12A3\u120D\u1362' : (opt_ijData.level == 8) ? '\u12A3\u1265 \u1218\u134B\u122D\u1245 \u12A5\u1272 \u134A\u120D\u121D\u1363 \u12A5\u1276\u121D \u12A3\u12A5\u130B\u122D \u1293\u1265 \u1270\u1343\u122B\u122A \u12A3\u1295\u1348\u1275 \u12AD\u120D\u12CD\u1321 \u130D\u1260\u122D\u1362' : (opt_ijData.level == 9) ? '\u1265\u12F5\u1215\u122A \u12A5\u1272 \u1230\u1265\u1363 \u12DD\u1235\u134B\u1215\u134B\u1215 \u12AD\u1262 \u1230\u12A3\u120D\u1362' : (opt_ijData.level == 10) ? '\u12DD\u12F0\u1208\u12BB\u12EE \u134A\u120D\u121D \u1235\u122B\u1215\u1362 \u12AD\u1275\u12F5\u1205\u1235\u1236\u121D \u12A5\u1275\u12BD\u12A5\u120D \u1265\u12D9\u1213\u1275 \u1213\u12F0\u123D\u1272 \u1233\u1293\u12F1\u1245 \u12A3\u1208\u12CD\u12BB\u1362' + ((! opt_ijData.html) ? '<br><br>\u12AB\u120D\u12A6\u1275 \u1230\u1263\u1275 \u12DD\u1235\u122D\u1215\u12CE\u121D \u134A\u120D\u121D\u1273\u1275 \u1295\u121D\u122D\u12A3\u12ED \'\u1218\u1320\u122B\u1240\u121A \u122D\u12A0\' \u12DD\u1265\u120D \u1218\u120D\u130E\u121D \u1270\u1320\u1240\u121D\u1362 \u12F0\u1235 \u1260\u1203\u120A \u134A\u120D\u121D \u12A5\u1295\u1270\u1203\u120D\u12E9\u12AB\u1363 \'\u1293\u1265 \u1218\u1320\u122B\u1240\u121A \u120D\u12A3\u12BD\' \u12DD\u1265\u120D \u1218\u120D\u130E\u121D \u1265\u121D\u1325\u1243\u121D \u12A3\u1210\u1275\u121E\u1362' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u134A\u120D\u121D"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u1215\u1265\u122A"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u120E\u1302\u12AD"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u12A3\u12DD\u12CB\u122A\u1273\u1275"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u1212\u1233\u1265"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u12DD\u122D\u12DD\u122D"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u1270\u1270\u12AB\u12A5\u1272" custom="VARIABLE"></category><category name="\u134B\u1295\u12AD\u123D\u1293\u1275" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
