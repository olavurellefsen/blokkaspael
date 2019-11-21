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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">fara x</span><span id="Movie_y1">fara y</span><span id="Movie_x2">\u0199are x</span><span id="Movie_y2">\u0199are y</span><span id="Movie_radius">da\u2019ira</span><span id="Movie_width">fa\u0257i</span><span id="Movie_height">tsawo</span><span id="Movie_circleTooltip">Ya zana da\u2019ira a wani wuri da aka fayyace kuma \\nda ke da da\u2019ira da aka fayyace. </span><span id="Movie_circleDraw">da\u2019ira</span><span id="Movie_rectTooltip">Ya zana siffa mai kusurwa hu\u0257u a wani wuri da \\naka fayyace kuma dake da fa\u0257i da tsawo da aka \\nfayyace. </span><span id="Movie_rectDraw">siffa mai kusurwa hu\u0257u</span><span id="Movie_lineTooltip">Ya zana layi daga wani gurbi zuwa wani tare da \\nwani fa\u0257i da aka fayyace. </span><span id="Movie_lineDraw">layi</span><span id="Movie_timeTooltip">Ya dawo da lokaci na yanzu a cikin hotuna masu \\nmotsi (0-100). </span><span id="Movie_colourTooltip">Ya canza launin al\u0199alamin.</span><span id="Movie_setColour">saita launi zuwa</span><span id="Movie_submitDisabled">Fim \u0257inka baya motsawa. Yi amfani da bululluka domin yin wani abu mai ban sha\u2019awa. Sannan za ka iya mi\u0199a fim \u0257inka zuwa galari.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Sinima', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Bu\u0257e galari na fina-finai."><img src="common/1x1.gif" class="gallery icon21"> Kalli Galari</button></form></td><td style="text-align: center;"><button id="submitButton" title="Mi\u0199a fim \u0257inka zuwa galarin."><img src="common/1x1.gif" class="camera icon21"> Tura zuwa Galari</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Mi\u0199a fim \u0257inka zuwa galarin.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Suna: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancel</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Matsar da da\u2019irar da ke baya zuwa saman shirinka. Sannan za ta bayyana a bayan mutumin.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Yi amfani da siffofi masu sau\u0199i domin zana wannan mutumin.' : (opt_ijData.level == 2) ? 'Wannan matakin fim ne. Kana so hannun mutumin ya matsa a duk fa\u0257in allon. Danna madannin wasa domin ganin duban farko.<div id="sampleHelp2" class="readonly"></div>Yiyin da fim \u0257in yake kunnawa, kimar bulo na \u2018lokacin\u2019 yana \u0199irgawa daga 0 zuwa 100. Tunda kana son gurbin \'y\' na hannun ya fara daga 0 sannan ya tafi 100 wannan zai zama mai sau\u0199i.' : (opt_ijData.level == 3) ? 'Bulo na \u2018lokaci\' yana \u0199irga daga 0 zuwa 100. Amma yanzu kana so gurbin \'y\' na \u0257aya hannun ya fara a 100 sannan ya tafi zuwa 0. Za ka iya gano wata hanyar lissaffi mai sau\u0199i da za ta juya gurbin?' : (opt_ijData.level == 4) ? 'Yi amfani da abinda ka koya a matakin da ya gabata domin yin \u0199afafu da suka hau kan juna.' : (opt_ijData.level == 5) ? 'Hanyar lissafi domin hannuwa na da sar\u0199a\u0199iya. Ga amsar:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'Bawa mutumin \u2018yan wasu hannaye.' : (opt_ijData.level == 7) ? 'Yi amfani da bulo na \u2018idan\u2019 domin zana \u0199aramin kai na rabin farko na fim \u0257in. Sannan ka zana babban kai domin rabo na biyu na fim \u0257in.' : (opt_ijData.level == 8) ? 'Sa \u0199afafun su sauya tsarin wuri a tsakiyar fim \u0257in.' : (opt_ijData.level == 9) ? 'Zana babbar da\u2019ira a bayan mutumin.' : (opt_ijData.level == 10) ? 'Yi fim na duk abinda kake so. Kana da adadi mai yawa na sabbin bululluka da za ka gano. Sami jin da\u0257i!' + ((! opt_ijData.html) ? '<br><br>Yi amfani da madannin "Kalli Galari" domin ganin abin da wasu matanen suka samar. Idan ka samar da wani abu mai ban sha\u2019awa, yi amfani da madannin "tura zuwa Galari" domin \u0257abba\u2019a shi.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Sinima"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Launi"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Dabara"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Tsallake-tsallake"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="Lissafi"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Jeri"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Siffofi" custom="VARIABLE"></category><category name="Aikace-aikace" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
