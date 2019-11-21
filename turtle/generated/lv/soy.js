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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">P\u0101rvieto bru\u0146urupuci uz priek\u0161u vai atpaka\u013C par \\nnor\u0101d\u012Bto att\u0101lumu. </span><span id="Turtle_moveForward">p\u0101rvieto uz priek\u0161u par</span><span id="Turtle_moveBackward">p\u0101rvieto atpaka\u013C par</span><span id="Turtle_turnTooltip">Pagrie\u017E bru\u0146urupuci pa kreisi vai pa labi par \\nnor\u0101d\u012Bto le\u0146\u0137i, gr\u0101dos. </span><span id="Turtle_turnRight">pagriezt pa labi par</span><span id="Turtle_turnLeft">pagriezt pa kreisi par</span><span id="Turtle_widthTooltip">Izmaina z\u012Bmu\u013Ca platumu</span><span id="Turtle_setWidth">iestat\u012Bt platumu, uz</span><span id="Turtle_colourTooltip">Maina z\u012Bmu\u013Ca kr\u0101su.</span><span id="Turtle_setColour">iestat\u012Bt kr\u0101su, uz</span><span id="Turtle_penTooltip">Pace\u013C vai nolai\u017E z\u012Bmuli, lai beigtu vai s\u0101ktu \\nz\u012Bm\u0113t. </span><span id="Turtle_penUp">pacelt z\u012Bmuli</span><span id="Turtle_penDown">nolaist z\u012Bmuli</span><span id="Turtle_turtleVisibilityTooltip">Padara bru\u0146urupuci (apli un bultu) redzamu vai \\nneredzamu. </span><span id="Turtle_hideTurtle">pasl\u0113pt bru\u0146rupuci</span><span id="Turtle_showTurtle">r\u0101d\u012Bt bru\u0146rupuci</span><span id="Turtle_printHelpUrl">https://lv.wikipedia.org/wiki/Druk\u0101\u0161\u0101na</span><span id="Turtle_printTooltip">Z\u012Bm\u0113 tekstu bru\u0146urupu\u010Da virzien\u0101 no t\u0101 atra\u0161an\u0101s \\nvietas. </span><span id="Turtle_print">druk\u0101t</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Iestata fontu, ko izmantos druk\u0101\u0161anas bloks.</span><span id="Turtle_font">fonts</span><span id="Turtle_fontSize">fonta lielums</span><span id="Turtle_fontNormal">norm\u0101ls</span><span id="Turtle_fontBold">treknraksts (bold)</span><span id="Turtle_fontItalic">sl\u012Bpraksts (italic)</span><span id="Turtle_submitDisabled">Palaidiet programmu, l\u012Bdz t\u0101 apst\u0101jas. Tad j\u016Bs varat iesniegt savu z\u012Bm\u0113jumu galerij\u0101.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Bru\u0146urupucis', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Palaist izveidoto programmu."><img src="common/1x1.gif" class="run icon21"> Izpild\u012Bt programmu</button><button id="resetButton" class="primary" style="display: none" title="Apst\u0101din\u0101t programmu un atiestat\u012Bt l\u012Bmeni."><img src="common/1x1.gif" class="stop icon21"> S\u0101kt no s\u0101kuma</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Atv\u0113rt z\u012Bm\u0113jumu galeriju."><img src="common/1x1.gif" class="gallery icon21"> Skat\u012Bt galeriju</button></form></td><td style="text-align: center;"><button id="submitButton" title="Iesniegt savu z\u012Bm\u0113jumu galerijai."><img src="common/1x1.gif" class="camera icon21"> Iesniegt galerij\u0101</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Iesniegt savu z\u012Bm\u0113jumu galerijai.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Nosaukums: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Atcelt</button><button id="galleryOk" class="secondary" type="submit">Labi</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">J\u016Bsu risin\u0101jums darbojas, bet j\u016Bs varat to izdar\u012Bt lab\u0101k. ' + ((opt_ijData.level < 3) ? 'Uzz\u012Bm\u0113jiet fig\u016Bru tikai ar tr\u012Bs bloku pal\u012Bdz\u012Bbu.' : 'Uzz\u012Bm\u0113jiet zvaigzni ar ne vair\u0101k k\u0101 \u010Detru bloku pal\u012Bdz\u012Bbu.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Izveidojiet programmu, kas uzz\u012Bm\u0113 kvadr\u0101tu.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Izmainiet programmu t\u0101, lai t\u0101 uzz\u012Bm\u0113tu piecst\u016Bri.' : (opt_ijData.level == 3) ? 'Jauns bloks, kas \u013Cauj jums main\u012Bt kr\u0101su:<div id="sampleHelp3" class="readonly"></div>Uzz\u012Bm\u0113 dzeltenu zvaigzni.' : (opt_ijData.level == 4) ? 'Jauns bloks, kas \u013Cauj pacelt z\u012Bmuli no pap\u012Bra, lai p\u0101rvietotu citur:<div id="sampleHelp4" class="readonly"></div>Uzz\u012Bm\u0113jiet nelielu dzeltenu zvaigzni, ar l\u012Bniju virs t\u0101s.' : (opt_ijData.level == 5) ? 'Vai j\u016Bs varat uzz\u012Bm\u0113t \u010Detras zvaigznes, kas izk\u0101rtotas kvadr\u0101t\u0101?' : (opt_ijData.level == 6) ? 'Uzz\u012Bm\u0113 tr\u012Bs dzeltenas zvaigznes, un vienu baltu l\u012Bniju.' : (opt_ijData.level == 7) ? 'Uzz\u012Bm\u0113jiet zvaigznes, un p\u0113c tam uzz\u012Bm\u0113jiet \u010Detras baltas l\u012Bnijas.' : (opt_ijData.level == 8) ? '360 baltas l\u012Bnijas uzz\u012Bm\u0113tas izskat\u012Bsies k\u0101 pilnm\u0113ness.' : (opt_ijData.level == 9) ? 'Vai J\u016Bs varat pievienot melnu apli t\u0101, lai m\u0113ness k\u013C\u016Bst par par pusm\u0113nesi?' : (opt_ijData.level == 10) ? 'Z\u012Bm\u0113jiet jebko, ko v\u0113laties. Jums ir pieejami daudzi jauni bloki. G\u016Bstiet prieku tos izp\u0113tot!' + ((! opt_ijData.html) ? '<br><br>Izmantojiet pogu "Galerija", lai redz\u0113tu, ko izveidoju\u0161i citi cilv\u0113ki. Ja j\u016Bs esat izveidoju\u0161i ko interesantu, izmantojiet pogu "Pievienot Galerijai", lai to public\u0113tu.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Izv\u0113lieties kategoriju, lai redz\u0113tu blokus.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Bru\u0146urupucis"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Kr\u0101sa"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Lo\u0123ika"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Cikli"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matem\u0101tika"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Saraksti"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Main\u012Bgie" custom="VARIABLE"></category><category name="Funkcijas" custom="PROCEDURE"></category>' : '<category name="Bru\u0146urupucis"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Kr\u0101sa"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Cikli"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}