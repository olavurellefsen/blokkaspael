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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">slut x</span><span id="Movie_y2">slut y</span><span id="Movie_radius">radie</span><span id="Movie_width">bredd</span><span id="Movie_height">h\u00F6jd</span><span id="Movie_circleTooltip">Ritar en cirkel p\u00E5 angiven plats och med angiven \\nradie. </span><span id="Movie_circleDraw">cirkel</span><span id="Movie_rectTooltip">Ritar en cirkel p\u00E5 angiven plats och med angiven \\nbredd och h\u00F6jd. </span><span id="Movie_rectDraw">rektangel</span><span id="Movie_lineTooltip">Ritar en linje fr\u00E5n en punkt till en annan med \\nangiven bredd. </span><span id="Movie_lineDraw">linje</span><span id="Movie_timeTooltip">Returnerar den aktuella tiden i animationen \\n(0-100). </span><span id="Movie_colourTooltip">\u00C4ndrar f\u00E4rgen p\u00E5 pennan.</span><span id="Movie_setColour">st\u00E4ll in f\u00E4rg till</span><span id="Movie_submitDisabled">Din film r\u00F6r sig inte. Anv\u00E4nd block f\u00F6r att g\u00F6ra n\u00E5gonting intressant. D\u00E5 kan du sedan skicka din film till galleriet.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Film', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u00D6ppna filmgalleriet."><img src="common/1x1.gif" class="gallery icon21"> Se galleri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Skicka din film till galleriet."><img src="common/1x1.gif" class="camera icon21"> Skicka till galleriet</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Skicka din film till galleriet.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titel: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Avbryt</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Flytta bakgrundscirkel l\u00E4ngst upp i dit program. Den kommer sedan att dyka upp bakom personen.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Anv\u00E4nd enkla former f\u00F6r att rita personen.' : (opt_ijData.level == 2) ? 'Den h\u00E4r niv\u00E5n \u00E4r en film. Du ska f\u00F6rflytta personens arm tv\u00E4rs \u00F6ver sk\u00E4rmen. Tryck p\u00E5 uppspelningsknappen f\u00F6r en f\u00F6rhandsvisning.<div id="sampleHelp2" class="readonly"></div>N\u00E4r filmen spelas upp kommer v\u00E4rdet f\u00F6r blocket \'time\' r\u00E4kna fr\u00E5n 0 till 100. Eftersom du vill att \'y\'-positionen f\u00F6r armen ska b\u00F6rja vid 0 och g\u00E5 till 100 b\u00F6r detta vara enkelt.' : (opt_ijData.level == 3) ? 'Blocket \'time\' r\u00E4knar fr\u00E5n 0 till 100. Men nu vill du att \'y\'-positionen f\u00F6r den andra armen ska b\u00F6rja vid 100 och g\u00E5 till 0. Kan du lista ut en enkel matematisk formel som v\u00E4nder p\u00E5 riktningen?' : (opt_ijData.level == 4) ? 'Anv\u00E4nd vad du l\u00E4rde dig i den tidigare niv\u00E5n f\u00F6r att f\u00E5 benen att korsa varandra.' : (opt_ijData.level == 5) ? 'Den matematiska formeln f\u00F6r armen \u00E4r komplicerad. H\u00E4r \u00E4r svaret:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'Ge personen tv\u00E5 h\u00E4nder.' : (opt_ijData.level == 7) ? 'Anv\u00E4nd blocket \'om\' f\u00F6r att ett litet huvud i den f\u00F6rsta halvan av filmen. Rita sedan ett stort huvud i den andra halvan av filmen.' : (opt_ijData.level == 8) ? 'F\u00F6rflytta benen i motsatt riktning i den andra halvan av filmen.' : (opt_ijData.level == 9) ? 'Rita en utvidgande cirkel bakom personen.' : (opt_ijData.level == 10) ? 'G\u00F6r en film av vad du vill. Du har massor av nya block att utforska. Ha kul!' + ((! opt_ijData.html) ? '<br><br>Anv\u00E4nd knappen "Se galleriet" f\u00F6r att se filmer som andra personer har gjort. Om du g\u00F6r en intressant film kan du anv\u00E4nda knappen "Skicka till galleriet" f\u00F6r att publicera den.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Film"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="F\u00E4rg"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Logik"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Loopar"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="Matematik"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Listor"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabler" custom="VARIABLE"></category><category name="Funktioner" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}