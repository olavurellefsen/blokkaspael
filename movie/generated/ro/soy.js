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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">\u00EEncepe x</span><span id="Movie_y1">start y</span><span id="Movie_x2">sf\u00E2r\u0219it x</span><span id="Movie_y2">sf\u00E2r\u0219it y</span><span id="Movie_radius">raz\u0103</span><span id="Movie_width">l\u0103\u021Bime</span><span id="Movie_height">\u00EEn\u0103l\u021Bime</span><span id="Movie_circleTooltip">Deseneaz\u0103 un cerc la loca\u021Bia specificat\u0103 \u0219i cu \\nraza specificat\u0103. </span><span id="Movie_circleDraw">cerc</span><span id="Movie_rectTooltip">Deseneaz\u0103 un dreptunghi \u00EEn loca\u021Bia specificat\u0103 \\n\u0219i cu l\u0103\u021Bimea \u0219i \u00EEn\u0103l\u021Bimea specificate. </span><span id="Movie_rectDraw">dreptunghi</span><span id="Movie_lineTooltip">Deseneaz\u0103 o linie dintr-un punct \u00EEn altul cu \\nl\u0103\u021Bimea specificat\u0103. </span><span id="Movie_lineDraw">linie</span><span id="Movie_timeTooltip">Returneaz\u0103 ora curent\u0103 \u00EEn anima\u021Bie (0-100).</span><span id="Movie_colourTooltip">Modific\u0103 culoarea stiloului.</span><span id="Movie_setColour">seteaz\u0103 culoarea la</span><span id="Movie_submitDisabled">Filmul t\u0103u nu se mi\u0219c\u0103. Utiliza\u021Bi blocuri pentru a face ceva interesant. Apoi, pute\u021Bi trimite filmul \u00EEn galerie.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Film', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Deschide\u021Bi galeria de filme."><img src="common/1x1.gif" class="gallery icon21"> Vede\u021Bi Galeria</button></form></td><td style="text-align: center;"><button id="submitButton" title="Trimite\u021Bi filmul spre galerie. "><img src="common/1x1.gif" class="camera icon21"> Trimite\u021Bi la Galerie</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Trimite\u021Bi filmul spre galerie. </header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titlu: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Revocare</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Deplasa\u021Bi cercul de fond \u00EEn partea de sus a programului. Apoi, va ap\u0103rea \u00EEn spatele persoanei.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Utiliza\u021Bi forme simple pentru a desena aceast\u0103 persoan\u0103.' : (opt_ijData.level == 2) ? 'Acest nivel este un film. Vrei ca bra\u021Bul persoanei s\u0103 se deplaseze pe ecran. Ap\u0103sa\u021Bi butonul de redare pentru a vedea o previzualizare.<div id="sampleHelp2" class="readonly"></div>Pe m\u0103sur\u0103 ce filmul ruleaz\u0103, valoarea blocului \'time\' se calculeaz\u0103 de la 0 la 100. Deoarece dori\u021Bi ca pozi\u021Bia \'y\' a bra\u021Bului s\u0103 \u00EEnceap\u0103 la 0 \u0219i s\u0103 mearg\u0103 la 100, acest lucru ar trebui s\u0103 fie u\u0219or.' : (opt_ijData.level == 3) ? 'Blocul \'time\' num\u0103r\u0103 de la 0 la 100. Dar acum dori\u021Bi ca pozi\u021Bia \'y\' a celuilalt bra\u021B s\u0103 \u00EEnceap\u0103 la 100 \u0219i s\u0103 mearg\u0103 la 0. \u00CE\u021Bi po\u021Bi da seama de o formul\u0103 matematic\u0103 simpl\u0103 care \u00EEnvinge direc\u021Bia?' : (opt_ijData.level == 4) ? 'Utiliza\u021Bi ceea ce a\u021Bi \u00EEnv\u0103\u021Bat la nivelul anterior pentru a face picioare care se \u00EEncruci\u0219eaz\u0103.' : (opt_ijData.level == 5) ? 'Formula matematic\u0103 a bra\u021Bului este complicat\u0103. Iat\u0103 r\u0103spunsul:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'D\u0103-i o pereche de m\u00E2ini.' : (opt_ijData.level == 7) ? 'Utiliza\u021Bi blocul \'if\' pentru a desena un cap mic pentru prima jum\u0103tate a filmului. Apoi deseneaz\u0103 un cap mare pentru a doua jum\u0103tate a filmului.' : (opt_ijData.level == 8) ? 'Face\u021Bi picioarele s\u0103 mearg\u0103 \u00EEn direc\u021Bia invers\u0103 la jum\u0103tatea filmului.' : (opt_ijData.level == 9) ? 'Desena\u021Bi un cerc \u00EEn spatele persoanei.' : (opt_ijData.level == 10) ? 'Face\u021Bi un film cu tot ce dori\u021Bi. Ai un num\u0103r mare de blocuri noi pe care le po\u021Bi explora. Distreaz\u0103-te!' + ((! opt_ijData.html) ? '<br><br>Utiliza\u021Bi op\u021Biunea "Vezi galerie"  pentru a vedea filmele pe care alte persoane le-au f\u0103cut. Dac\u0103 face\u021Bi un film interesant, utiliza\u021Bi func\u021Bia "Trimite\u021Bi la Galerie" buton pentru a publica.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Film"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Culoare"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Logic"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Bucle"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="Matematic\u0103"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Liste"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabile" custom="VARIABLE"></category><category name="Func\u021Bii" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
