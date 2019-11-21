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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">b\u1EAFt \u0111\u1EA7u x</span><span id="Movie_y1">b\u1EAFt \u0111\u1EA7u y</span><span id="Movie_x2">k\u1EBFt th\u00FAc x</span><span id="Movie_y2">k\u1EBFt th\u00FAc y</span><span id="Movie_radius">b\u00E1n k\u00EDnh</span><span id="Movie_width">chi\u1EC1u ngang</span><span id="Movie_height">chi\u1EC1u cao</span><span id="Movie_circleTooltip">H\u00E3y v\u1EBD m\u1ED9t h\u00ECnh tr\u00F2n t\u1EA1i m\u1ED9t v\u1ECB tr\u00ED c\u1EE5 th\u1EC3 v\u00E0 \\nv\u1EDBi m\u1ED9t b\u00E1n k\u00EDnh c\u1EE5 th\u1EC3. </span><span id="Movie_circleDraw">h\u00ECnh tr\u00F2n</span><span id="Movie_rectTooltip">H\u00E3y v\u1EBD m\u1ED9t h\u00ECnh ch\u1EEF nh\u1EADt t\u1EA1i m\u1ED9t v\u1ECB tr\u00ED c\u1EE5 th\u1EC3 \\nv\u1EDBi chi\u1EC1u ngang v\u00E0 chi\u1EC1u cao c\u1EE5 th\u1EC3. </span><span id="Movie_rectDraw">h\u00ECnh ch\u1EEF nh\u1EADt</span><span id="Movie_lineTooltip">H\u00E3y v\u1EBD m\u1ED9t \u0111\u01B0\u1EDDng th\u1EB3ng t\u1EEB m\u1ED9t \u0111i\u1EC3m \u0111\u1EBFn \u0111i\u1EC3m c\u00F2n \\nl\u1EA1i v\u1EDBi m\u1ED9t chi\u1EC1u ngang c\u1EE5 th\u1EC3. </span><span id="Movie_lineDraw">\u0111\u01B0\u1EDDng th\u1EB3ng</span><span id="Movie_timeTooltip">Ho\u00E0n tr\u1EA3 th\u1EDDi \u0111i\u1EC3m hi\u1EC7n t\u1EA1i \u1EDF phim (0-100).</span><span id="Movie_colourTooltip">Thay m\u00E0u c\u1EE7a b\u00FAt v\u1EBD.</span><span id="Movie_setColour">g\u00E1n m\u00E0u</span><span id="Movie_submitDisabled">Phim c\u1EE7a b\u1EA1n kh\u00F4ng d\u1ECBch chuy\u1EC3n. S\u1EED d\u1EE5ng c\u00E1c m\u1EA3nh \u0111\u1EC3 t\u1EA1o v\u1EADt \u0111\u1EB7c s\u1EAFc. Sau \u0111\u00F3 b\u1EA1n c\u00F3 th\u1EC3 g\u1EEDi phim c\u1EE7a b\u1EA1n \u0111\u1EBFn ph\u00F2ng tr\u01B0ng b\u00E0y.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Phim', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="M\u1EDF ph\u00F2ng tr\u01B0ng b\u00E0y c\u1EE7a c\u00E1c phim."><img src="common/1x1.gif" class="gallery icon21"> Xem Ph\u00F2ng tr\u01B0ng b\u00E0y</button></form></td><td style="text-align: center;"><button id="submitButton" title="G\u1EEDi phim c\u1EE7a b\u1EA1n \u0111\u1EBFn ph\u00F2ng tr\u01B0ng b\u00E0y."><img src="common/1x1.gif" class="camera icon21"> G\u1EEDi \u0111\u1EBFn ph\u00F2ng tr\u01B0ng b\u00E0y</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>G\u1EEDi phim c\u1EE7a b\u1EA1n \u0111\u1EBFn ph\u00F2ng tr\u01B0ng b\u00E0y.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>T\u00EAn: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">H\u1EE7y</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Di chuy\u1EC3n n\u1EC1n h\u00ECnh tr\u00F2n l\u00EAn ph\u1EA7n \u0111\u1EA7u c\u1EE7a ch\u01B0\u01A1ng tr\u00ECnh. Sau \u0111\u00F3 n\u00F3 s\u1EBD xu\u1EA5t hi\u1EC7n ph\u00EDa sau nh\u00E2n v\u1EADt.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'S\u1EED d\u1EE5ng c\u00E1c kh\u1ED1i h\u00ECnh \u0111\u01A1n gi\u1EA3n \u0111\u1EC3 v\u1EBD ng\u01B0\u1EDDi n\u00E0y.' : (opt_ijData.level == 2) ? 'C\u1EA5p \u0111\u1ED9 n\u00E0y l\u00E0 m\u1ED9t \u0111o\u1EA1n phim. B\u1EA1n mu\u1ED1n c\u00E1nh tay c\u1EE7a nh\u00E2n v\u1EADt di chuy\u1EC3n qua m\u00E0n h\u00ECnh. Nh\u1EA5n n\u00FAt ch\u01A1i \u0111\u1EC3 xem ch\u01B0\u01A1ng tr\u00ECnh ch\u1EA1y.<div id="sampleHelp2" class="readonly"></div>Khi \u0111o\u1EA1n phim \u0111\u01B0\u1EE3c chi\u1EBFu, gi\u00E1 tr\u1ECB c\u1EE7a m\u1EA3nh \'th\u1EDDi gian\' \u0111\u1EBFm t\u1EEB 0 \u0111\u1EBFn 100.\nB\u1EA1n mu\u1ED1n cho v\u1ECB tr\u00ED n\u1EB1m ngang c\u1EE7a c\u00E1nh tay b\u1EAFt \u0111\u1EA7u t\u1EA1i 0 v\u00E0 \u0111i \u0111\u1EBFn 100.' : (opt_ijData.level == 3) ? 'M\u1EA3nh \'th\u1EDDi gian\' \u0111\u1EBFm t\u1EEB 0 \u0111\u1EBFn 100. Nh\u01B0ng b\u00E2y gi\u1EDD b\u1EA1n mu\u1ED1n v\u1ECB tr\u00ED n\u1EB1m ngang c\u1EE7a c\u00E1nh tay b\u1EAFt \u0111\u1EA7u t\u1EA1i 100 v\u00E0 \u0111i \u0111\u1EBFn 0. B\u1EA1n h\u00E3y t\u00ECm ra c\u00F4ng th\u1EE9c to\u00E1n \u0111\u01A1n gi\u1EA3n \u0111\u1EC3 \u0111\u1ED5i h\u01B0\u1EDBng \u0111\u1EBFm.' : (opt_ijData.level == 4) ? 'S\u1EED d\u1EE5ng nh\u1EEFng g\u00EC b\u1EA1n \u0111\u00E3 h\u1ECDc trong nh\u1EEFng c\u1EA5p \u0111\u1ED9 tr\u01B0\u1EDBc \u0111\u1EC3 l\u00E0m sao cho nh\u1EEFng c\u00E1i ch\u00E2n b\u1EAFt ch\u00E9o nhau.' : (opt_ijData.level == 5) ? 'Ph\u00E9p to\u00E1n cho c\u00E1nh tay kh\u00E1 ph\u1EE9c t\u1EA1p. \u0110\u00E2y l\u00E0 c\u00E2u tr\u1EA3 l\u1EDDi:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u0110\u01B0a cho nh\u00E2n v\u1EADt hai b\u00E0n tay.' : (opt_ijData.level == 7) ? 'S\u1EED d\u1EE5ng m\u1EA3nh \'if\' \u0111\u1EC3 v\u1EBD m\u1ED9t c\u00E1i \u0111\u1EA7u nh\u1ECF cho n\u1EEDa \u0111o\u1EA1n \u0111\u1EA7u tr\u00ECnh chi\u1EBFu c\u1EE7a phim. Sau \u0111\u00F3 v\u1EBD m\u1ED9t c\u00E1i \u0111\u1EA7u l\u1EDBn cho n\u1EEDa \u0111o\u1EA1n sau c\u1EE7a phim.' : (opt_ijData.level == 8) ? 'L\u00E0m cho nh\u1EEFng c\u00E1i ch\u00E2n thay \u0111\u1ED5i h\u01B0\u1EDBng \u1EDF gi\u1EEFa ch\u1EB7ng c\u1EE7a \u0111o\u1EA1n phim.' : (opt_ijData.level == 9) ? 'V\u1EBD m\u1ED9t v\u00F2ng tr\u00F2n m\u1EDF r\u1ED9ng \u0111\u1EB1ng sau nh\u00E2n v\u1EADt.' : (opt_ijData.level == 10) ? 'T\u1EA1o ra phim v\u1EC1 m\u1ECDi th\u1EE9 b\u1EA1n mu\u1ED1n. B\u1EA1n c\u00F3 th\u1EC3 kh\u00E1m ph\u00E1 c\u00F9ng v\u1EDBi m\u1ED9t s\u1ED1 l\u01B0\u1EE3ng l\u1EDBn m\u1EA3nh m\u1EDBi. Ch\u00FAc b\u1EA1n vui v\u1EBB.' + ((! opt_ijData.html) ? '<br><br>S\u1EED d\u1EE5ng "Xem Ph\u00F2ng tr\u01B0ng b\u00E0y" nh\u1EA5n \u0111\u1EC3 xem nh\u1EEFng ng\u01B0\u1EDDi kh\u00E1c \u0111\u00E3 thi\u1EBFt k\u1EBF. N\u1EBFu b\u1EA1n v\u1EBD n\u00EAn \u0111o\u1EA1n phim \u0111\u1EB7c s\u1EAFc, h\u00E3y d\u00F9ng "G\u1EEDi \u0111\u1EBFn Ph\u00F2ng tr\u01B0ng b\u00E0y" nh\u1EA5n \u0111\u1EC3 tr\u01B0ng b\u00E0y n\u00F3.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Phim"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="M\u00E0u"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Logic"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="V\u00F2ng l\u1EB7p"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="C\u00F4ng th\u1EE9c to\u00E1n"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Danh s\u00E1ch"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Bi\u1EBFn" custom="VARIABLE"></category><category name="H\u00E0m" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
