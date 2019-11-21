// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Turtle.soy.
 */

goog.provide('Turtle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Turtle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">A tekn\u0151c\u00F6t mozgatja el\u0151re, vagy h\u00E1tra a pixelben \\nmegadott \u00E9rt\u00E9kkel. </span><span id="Turtle_moveForward">Menj el\u0151re (pixel)</span><span id="Turtle_moveBackward">Menj h\u00E1tra (pixel)</span><span id="Turtle_turnTooltip">A tekn\u0151c\u00F6t jobbra, vagy balra ford\u00EDtja a fokban \\nmegadott \u00E9rt\u00E9kkel. </span><span id="Turtle_turnRight">Fordulj jobbra (fok)</span><span id="Turtle_turnLeft">Fordulj balra (fok)</span><span id="Turtle_widthTooltip">Vonalvastags\u00E1g v\u00E1ltoztat\u00E1sa.</span><span id="Turtle_setWidth">Vonalvastags\u00E1g</span><span id="Turtle_colourTooltip">A rajzol\u00E1s sz\u00EDn\u00E9nek v\u00E1ltoztat\u00E1sa.</span><span id="Turtle_setColour">Rajzol\u00E1s sz\u00EDne</span><span id="Turtle_penTooltip">Toll felemel\u00E9se letev\u00E9se, att\u00F3l f\u00FCgg\u0151en, \\nhogy elkezdj\u00FCk vagy befejezz\u00FCk a rajzol\u00E1st. </span><span id="Turtle_penUp">Tollat fel</span><span id="Turtle_penDown">Tollat le</span><span id="Turtle_turtleVisibilityTooltip">A tekn\u0151c (k\u00F6r \u00E9s ny\u00EDl) l\u00E1that\u00F3v\u00E1 t\u00E9tele, \\nvagy elrejt\u00E9se. </span><span id="Turtle_hideTurtle">Tekn\u0151c elrejt\u00E9se</span><span id="Turtle_showTurtle">Tekn\u0151c felfed\u00E9se</span><span id="Turtle_printHelpUrl">https://hu.wikipedia.org/wiki/Nyomtat%C3%A1s_(nyomd%C3%A1szat)</span><span id="Turtle_printTooltip">\u00DCzenetet \u00EDr a tekn\u0151c ir\u00E1ny\u00E1ban a hely\u00E9t\u0151l.</span><span id="Turtle_print">ki\u00EDr</span><span id="Turtle_fontHelpUrl">https://hu.wikipedia.org/wiki/Bet%C5%B1k%C3%A9p</span><span id="Turtle_fontTooltip">Be\u00E1ll\u00EDtja az \u00FCzenet bet\u0171t\u00EDpus\u00E1t.</span><span id="Turtle_font">Bet\u0171t\u00EDpus</span><span id="Turtle_fontSize">Bet\u0171m\u00E9ret</span><span id="Turtle_fontNormal">norm\u00E1l</span><span id="Turtle_fontBold">f\u00E9lk\u00F6v\u00E9r</span><span id="Turtle_fontItalic">d\u0151lt</span><span id="Turtle_submitDisabled">Futtasd a programot am\u00EDg le nem \u00E1ll. Az eredm\u00E9nyt megmutathatod mindenkinek a gal\u00E9ri\u00E1ban!</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Tekn\u0151c', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Futtasd a programod!"><img src="common/1x1.gif" class="run icon21"> Program futtat\u00E1sa</button><button id="resetButton" class="primary" style="display: none" title="Program le\u00E1ll\u00EDt\u00E1sa, \u00E9s a szint vissza\u00E1ll\u00EDt\u00E1sa."><img src="common/1x1.gif" class="stop icon21"> Vissza\u00E1ll\u00EDt\u00E1s</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Rajzok gal\u00E9ria megnyit\u00E1sa."><img src="common/1x1.gif" class="gallery icon21"> Gal\u00E9ria</button></form></td><td style="text-align: center;"><button id="submitButton" title="K\u00FCldje el a rajz\u00E1t a gal\u00E9ri\u00E1ba."><img src="common/1x1.gif" class="camera icon21"> K\u00E9p elk\u00FCld\u00E9se a Gal\u00E9ri\u00E1ba</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>K\u00FCldje el a rajz\u00E1t a gal\u00E9ri\u00E1ba.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">M\u00E9gse</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Megoldottad a feladatot, de tudsz enn\u00E9l jobbat is! ' + ((opt_ijData.level < 3) ? 'Rajzold meg a form\u00E1t h\u00E1rom blokkal!' : 'Rajzold meg a csillagot mind\u00F6ssze n\u00E9gy blokkal!') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'K\u00E9sz\u00EDts programot, ami n\u00E9gyzetet rajzol!<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'K\u00E9sz\u00EDts programot, ami egy \u00F6tsz\u00F6get rajzol a n\u00E9gyzet helyett!' : (opt_ijData.level == 3) ? 'Az \u00FAj blokkal v\u00E1ltoztathatod a h\u00FAzott vonal sz\u00EDn\u00E9t:<div id="sampleHelp3" class="readonly"></div>Rajzolj s\u00E1rga csillagot!' : (opt_ijData.level == 4) ? 'Az \u00FAj blok seg\u00EDts\u00E9g\u00E9vel felemelheted a  ceruz\u00E1d:<div id="sampleHelp4" class="readonly"></div>Rajzolj egy kis s\u00E1rga csillagot, majd egy vonalat f\u00F6l\u00E9!' : (opt_ijData.level == 5) ? 'Ha tudsz egy csillagot rajzolni, tudsz n\u00E9gyet is! Helyezd el \u0151ket egy n\u00E9gyzet cs\u00FAcsaira.' : (opt_ijData.level == 6) ? 'Rajzolj h\u00E1rom s\u00E1rga csillagot, \u00E9s egy feh\u00E9r vonalat!' : (opt_ijData.level == 7) ? 'Rajzold meg a csillagokat, majd n\u00E9gy feh\u00E9r vonalat!' : (opt_ijData.level == 8) ? '360, a k\u00F6z\u00E9pppontb\u00F3l indul\u00F3 feh\u00E9r vonal pont \u00FAgy fog kin\u00E9zni, mint a telihold.' : (opt_ijData.level == 9) ? 'Tudsz a hold el\u00E9 egy fekete k\u00F6rt rajzolni, hogy fogy\u00F3 hold legyen?' : (opt_ijData.level == 10) ? 'Kapt\u00E1l j\u00F3p\u00E1r extra blokkot. Pr\u00F3b\u00E1ld ki \u0151ket, rajzolj szabadon!' + ((! opt_ijData.html) ? '<br><br>Haszn\u00E1ld a "Gal\u00E9ria" gombot, hogy l\u00E1sd, min dolgoztak a t\u00F6bbiek. Ha saj\u00E1t munk\u00E1d szeretn\u00E9d megosztani mindenkivel, kattints a "Gal\u00E9ri\u00E1ba k\u00FCld\u00E9s" gombra!' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>V\u00E1lassz kateg\u00F3ri\u00E1t, hogy megn\u00E9zhesd a blokkokat!</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Tekn\u0151c"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Sz\u00EDnek"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logika"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Ciklusok"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matek"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Listakezel\u00E9s"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="V\u00E1ltoz\u00F3k" custom="VARIABLE"></category><category name="Elj\u00E1r\u00E1sok" custom="PROCEDURE"></category>' : '<category name="Tekn\u0151c"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Sz\u00EDnek"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Ciklusok"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}