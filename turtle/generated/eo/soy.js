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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Movi la testudon anta\u016Den a\u016D malanta\u016Den je la \\nspecifita kiomo. </span><span id="Turtle_moveForward">movi\u011Di anta\u016Den de distanco</span><span id="Turtle_moveBackward">movi\u011Di malanta\u016Den de distanco</span><span id="Turtle_turnTooltip">Turni la testudon dekstren a\u016D maldekstren je la \\nspecifita kiomo da gradoj. </span><span id="Turtle_turnRight">turni\u011Di dekstren je angulo</span><span id="Turtle_turnLeft">turni\u011Di maldekstren je angulo</span><span id="Turtle_widthTooltip">\u015Can\u011Di la lar\u011Don de la plumo.</span><span id="Turtle_setWidth">difini lar\u011Don kiel</span><span id="Turtle_colourTooltip">\u015Can\u011Di la koloron de la plumo.</span><span id="Turtle_setColour">kolorigi kiel</span><span id="Turtle_penTooltip">La plumo estos mallevita por komenci desegni a\u016D \\nmallevita por ne plu desegni. </span><span id="Turtle_penUp">plumo supren</span><span id="Turtle_penDown">plumo malsupren</span><span id="Turtle_turtleVisibilityTooltip">Tio Igas la testudon (cirklon kaj sageton) \u0109u \\nvidebla \u0109u nevidebla. </span><span id="Turtle_hideTurtle">ka\u015Di testudon</span><span id="Turtle_showTurtle">montri testudon</span><span id="Turtle_printHelpUrl">https://eo.wikipedia.org/wiki/Presarto</span><span id="Turtle_printTooltip">Ekde la pozicio de la testudo, \\nkaj en \u011Dia direkto, teksto estos \\ndesegnita. </span><span id="Turtle_print">presi</span><span id="Turtle_fontHelpUrl">https://eo.wikipedia.org/wiki/Tiparo</span><span id="Turtle_fontTooltip">Elekti la tiparon uzatan de la \'presi\'-blokon.</span><span id="Turtle_font">tiparo</span><span id="Turtle_fontSize">tipara grando</span><span id="Turtle_fontNormal">normala</span><span id="Turtle_fontBold">grasa</span><span id="Turtle_fontItalic">kursiva</span><span id="Turtle_submitDisabled">Rulu vian programon \u011Dis kiam \u011Di haltas. Poste vi povas sendi vian desegnon al la galerio.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Testudo', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Ruli la programon, kiun vi skribis."><img src="common/1x1.gif" class="run icon21"> Ruli programon</button><button id="resetButton" class="primary" style="display: none" title="Haltigi la programon kaj rekomenci la nivelon."><img src="common/1x1.gif" class="stop icon21"> Remeti</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Malfermi la galerion de desegna\u0135oj."><img src="common/1x1.gif" class="gallery icon21"> Vidi galerion</button></form></td><td style="text-align: center;"><button id="submitButton" title="Sendi vian desegna\u0135on al la galerio."><img src="common/1x1.gif" class="camera icon21"> Sendi al la galerio</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Sendi vian desegna\u0135on al la galerio.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titolo: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Nuligi</button><button id="galleryOk" class="secondary" type="submit">Bone</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Via solvo funkcias, sed vi povas plibonigi \u011Din. ' + ((opt_ijData.level < 3) ? 'Desegni la formon per nur tri blokoj.' : 'Desegni la stelon per nur kvar blokoj.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Krei programon, kiu desegnas kvadraton.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? '\u015Can\u011Di vian programon por desegni kvinangulon kaj ne kvadraton.' : (opt_ijData.level == 3) ? 'Jen nova bloko kiu \u015Dan\u011Das la koloron:<div id="sampleHelp3" class="readonly"></div>Desegni flavan stelon.' : (opt_ijData.level == 4) ? 'Jen nova bloko kiu forlevas la plumon for de la papero kiam vi movi\u011Das:<div id="sampleHelp4" class="readonly"></div>Desegnu malgrandan flavan stelon, kaj desegnu linion super \u011Di.' : (opt_ijData.level == 5) ? 'Anstata\u016D unu stelo, \u0109u vi povas desegni kvar stelojn aran\u011Ditajn kiel kvadrato?' : (opt_ijData.level == 6) ? 'Desegnu tri flavajn stelojn kaj unu blankan linion.' : (opt_ijData.level == 7) ? 'Desegnu la stelojn, kaj desegnu kvar blankajn liniojn.' : (opt_ijData.level == 8) ? 'Desegna\u0135o de 360 blankaj linioj \u015Dajnos plenluno.' : (opt_ijData.level == 9) ? '\u0108u vi povas aldoni nigran cirklon, por ke la luno esti\u011Das lunarko?' : (opt_ijData.level == 10) ? 'Desegnu ajnon deziratan. Jen variegon da novaj blokoj esploreblaj. Amuzu vin!' + ((! opt_ijData.html) ? '<br><br>Uzu la butonon \'Vidi Galerion\' por vidi desegna\u0135ojn far aliuloj. Se vi desegnas ion interesan, uzu la butonon \'Sendi al Galerio\' por publikigi \u011Din.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Elektu kategorion por vidi la blokojn.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Testudo"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Koloro"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logika"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Cikloj"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matematika"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Listoj"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabloj" custom="VARIABLE"></category><category name="Funkcioj" custom="PROCEDURE"></category>' : '<category name="Testudo"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Koloro"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Cikloj"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}