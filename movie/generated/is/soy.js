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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">fr\u00E1 x</span><span id="Movie_y1">fr\u00E1 y</span><span id="Movie_x2">til x</span><span id="Movie_y2">til y</span><span id="Movie_radius">rad\u00EDus</span><span id="Movie_width">breidd</span><span id="Movie_height">h\u00E6\u00F0</span><span id="Movie_circleTooltip">Teiknar hring \u00E1 tilteknum sta\u00F0 me\u00F0 tilteknum \\nrad\u00EDus. </span><span id="Movie_circleDraw">hringur</span><span id="Movie_rectTooltip">Teiknar r\u00E9tthyrning \u00E1 tilteknum sta\u00F0 og me\u00F0 \\ntiltekna breidd og h\u00E6\u00F0. </span><span id="Movie_rectDraw">r\u00E9tthyrningur</span><span id="Movie_lineTooltip">Teiknar l\u00EDnu fr\u00E1 einum punkti til annars me\u00F0 \\ntiltekna breidd. </span><span id="Movie_lineDraw">l\u00EDna</span><span id="Movie_timeTooltip">Skilar gildandi t\u00EDma \u00ED hreyfimyndinni (0-100).</span><span id="Movie_colourTooltip">Breytir lit pennans.</span><span id="Movie_setColour">stilla lit \u00E1</span><span id="Movie_submitDisabled">Hreyfimyndin \u00FE\u00EDn hreyfist ekki. Nota\u00F0u kubba til a\u00F0 b\u00FAa til eitthva\u00F0 \u00E1hugavert. S\u00ED\u00F0an m\u00E1tt \u00FE\u00FA setja hreyfimyndina \u00FE\u00EDna \u00ED safni\u00F0.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Hreyfimynd', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Opna safn hreyfimynda."><img src="common/1x1.gif" class="gallery icon21"> Sko\u00F0a safn</button></form></td><td style="text-align: center;"><button id="submitButton" title="Senda hreyfimyndina \u00ED safni\u00F0."><img src="common/1x1.gif" class="camera icon21"> Setja \u00E1 safn</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Senda hreyfimyndina \u00ED safni\u00F0.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titill: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">H\u00E6tta vi\u00F0</button><button id="galleryOk" class="secondary" type="submit">\u00CD lagi</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Nota\u00F0u einf\u00F6ld form til a\u00F0 teikna \u00FEessa veru.' : (opt_ijData.level == 2) ? '\u00DEessi \u00E1fangi er hreyfimynd. \u00DE\u00FA vilt l\u00E1ta handlegg \u00E1 manneskju f\u00E6rast yfir skj\u00E1inn. \u00DDttu \u00E1 spilunarhnappinn til a\u00F0 forsko\u00F0a.<div id="sampleHelp2" class="readonly"></div>\u00DEegar myndin er spilu\u00F0, s\u00FDnir kubburinn \'t\u00EDmi\' talningu fr\u00E1 0 til 100. \u00DEar sem \u00FE\u00FA vilt a\u00F0 \'y\'-sta\u00F0a handleggsins byrji vi\u00F0 0 l\u00E1r\u00E9tt og fari til 100, \u00E6tti \u00FEetta a\u00F0 vera au\u00F0velt.' : (opt_ijData.level == 3) ? 'Kubburinn \'t\u00EDmi\' telur fr\u00E1 0 til 100. En \u00ED \u00FEetta sinn vilt \u00FE\u00FA a\u00F0 \'y\'-sta\u00F0a hins handleggsins byrji vi\u00F0 100 og endi \u00E1 0. Getur \u00FE\u00FA fundi\u00F0 \u00FAt einfalda reikningsform\u00FAlu sem sn\u00FDr stefnunni vi\u00F0?' : (opt_ijData.level == 4) ? 'Nota\u00F0u \u00FEa\u00F0 sem \u00FE\u00FA l\u00E6r\u00F0ir \u00ED s\u00ED\u00F0asta \u00E1fanga til a\u00F0 b\u00FAa til krosslag\u00F0a f\u00E6tur.' : (opt_ijData.level == 5) ? 'Reikniform\u00FAlan fyrir handlegginn er fl\u00F3kin. H\u00E9r er svari\u00F0:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'Gef\u00F0u manneskjunni tv\u00E6r hendur.' : (opt_ijData.level == 7) ? 'St\u00E6r\u00F0fr\u00E6\u00F0iform\u00FAlan fyrir \u00FEennan fallandi bolta er fl\u00F3kin. H\u00E9r er svari\u00F0:' : (opt_ijData.level == 8) ? 'Nota\u00F0u \'if\' kubbinn til a\u00F0 teikna rau\u00F0a og bl\u00E1a bolta fyrir fyrri helming hreyfimyndarinnar. Teikna\u00F0u svo gr\u00E6nan bolta fyrir seinni helming myndarinnar.' : (opt_ijData.level == 9) ? 'Getur \u00FE\u00FA b\u00FAi\u00F0 til bolta sem fylgir v\u00EDrnum eftir? \u00DEa\u00F0 er b\u00FAi\u00F0 a\u00F0 teikna v\u00EDrinn fyrir \u00FEig. Eftir a\u00F0 \u00FE\u00FA getur gert \u00FEetta, getur\u00F0u gert hva\u00F0 sem er.' : (opt_ijData.level == 10) ? 'B\u00FA\u00F0u til eigin hreyfimynd. \u00DE\u00FA hefur fj\u00F6ldan allan af kubbum til a\u00F0 pr\u00F3fa. Skemmtu \u00FE\u00E9r!' + ((! opt_ijData.html) ? '<br><br>Nota\u00F0u "Sko\u00F0a safn" hnappinn til a\u00F0 sko\u00F0a hreyfimyndir sem a\u00F0rir hafa b\u00FAi\u00F0 til. Ef \u00FE\u00FA b\u00FDr\u00F0 til \u00E1hugaver\u00F0a hreyfimynd, getur \u00FE\u00FA nota\u00F0 "Senda \u00ED safn" hnappinn til a\u00F0 birta hana.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Hreyfimynd"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Litir"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="R\u00F6kv\u00EDsi"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Lykkjur"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="Reikningur"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Listar"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Breytur" custom="VARIABLE"></category><category name="F\u00F6ll" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
