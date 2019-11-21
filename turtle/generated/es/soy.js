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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Mueve la tortuga hacia adelante o hacia atr\u00E1s en \\nla cantidad especificada. </span><span id="Turtle_moveForward">avanzar</span><span id="Turtle_moveBackward">retroceder</span><span id="Turtle_turnTooltip">Gira la tortuga hacia la izquierda o la derecha \\nel n\u00FAmero especificado de grados. </span><span id="Turtle_turnRight">girar a la derecha</span><span id="Turtle_turnLeft">girar a la izquierda</span><span id="Turtle_widthTooltip">Cambia la anchura del bol\u00EDgrafo.</span><span id="Turtle_setWidth">establecer la anchura a</span><span id="Turtle_colourTooltip">Cambia el color del bol\u00EDgrafo. </span><span id="Turtle_setColour">establecer el color a</span><span id="Turtle_penTooltip">Levanta o baja el bol\u00EDgrafo para detener o \\nempezar a dibujar. </span><span id="Turtle_penUp">levantar el bol\u00EDgrafo</span><span id="Turtle_penDown">bajar el bol\u00EDgrafo</span><span id="Turtle_turtleVisibilityTooltip">Hace a la tortuga (c\u00EDrculo y flecha) visible o \\ninvisible. </span><span id="Turtle_hideTurtle">ocultar la tortuga</span><span id="Turtle_showTurtle">mostrar la tortuga</span><span id="Turtle_printHelpUrl">https://es.wikipedia.org/wiki/Impresi%C3%B3n</span><span id="Turtle_printTooltip">Dibuja texto en la direcci\u00F3n de la tortuga en su \\nubicaci\u00F3n. </span><span id="Turtle_print">imprimir</span><span id="Turtle_fontHelpUrl">https://es.wikipedia.org/wiki/Tipo_de_letra</span><span id="Turtle_fontTooltip">Establece el tipo de letra utilizado por el \\nbloque de impresi\u00F3n. </span><span id="Turtle_font">tipo de letra</span><span id="Turtle_fontSize">tama\u00F1o de letra</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">negrita</span><span id="Turtle_fontItalic">cursiva</span><span id="Turtle_submitDisabled">Ejecuta tu programa hasta que se detenga. Luego puedes enviar tu dibujo a la galer\u00EDa.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Tortuga', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Ejecutar el programa que escribiste."><img src="common/1x1.gif" class="run icon21"> Ejecutar el programa</button><button id="resetButton" class="primary" style="display: none" title="Detener el programa y restablecer el nivel."><img src="common/1x1.gif" class="stop icon21"> Restablecer</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Abre la galer\u00EDa de dibujos."><img src="common/1x1.gif" class="gallery icon21"> Ver galer\u00EDa</button></form></td><td style="text-align: center;"><button id="submitButton" title="Env\u00EDa tu dibujo a la galer\u00EDa."><img src="common/1x1.gif" class="camera icon21"> Enviar a la galer\u00EDa</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Env\u00EDa tu dibujo a la galer\u00EDa.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>T\u00EDtulo: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancelar</button><button id="galleryOk" class="secondary" type="submit">Aceptar</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">La soluci\u00F3n funciona, pero se puede hacer mejor. ' + ((opt_ijData.level < 3) ? 'Dibuja la forma con solo tres bloques.' : 'Dibuja la estrella con solo cuatro bloques.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Crea un programa que dibuje un cuadrado.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Cambia el programa para dibujar un pent\u00E1gono en lugar de un cuadrado.' : (opt_ijData.level == 3) ? 'Hay un bloque nuevo que permite cambiar el color:<div id="sampleHelp3" class="readonly"></div>Dibuja una estrella amarilla.' : (opt_ijData.level == 4) ? 'Hay un bloque nuevo que permite levantar el l\u00E1piz del papel cuando te mueves:<div id="sampleHelp4" class="readonly"></div>Dibuja una estrella amarilla, luego dibuja una l\u00EDnea por encima de ella.' : (opt_ijData.level == 5) ? 'En lugar de una estrella, \u00BFpuedes dibujar cuatro estrellas dispuestas en un cuadrado?' : (opt_ijData.level == 6) ? 'Dibuja tres estrellas amarillas y una l\u00EDnea blanca.' : (opt_ijData.level == 7) ? 'Dibuja las estrellas, luego dibuja cuatro l\u00EDneas blancas.' : (opt_ijData.level == 8) ? 'Dibujar 360 l\u00EDneas blancas se ver\u00E1 como la luna llena.' : (opt_ijData.level == 9) ? '\u00BFPuedes agregar un c\u00EDrculo negro para que la luna se convierta en una media luna?' : (opt_ijData.level == 10) ? 'Dibuja lo que quieras. Tienes muchos bloques nuevos para explorar \u00A1Divi\u00E9rtete!' + ((! opt_ijData.html) ? '<br><br>Usa el bot\u00F3n "Ver galer\u00EDa" para ver lo que otros han dibujado. Si has dibujado algo interesante, usa el bot\u00F3n "Enviar a la galer\u00EDa" para publicarlo.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Elige una categor\u00EDa para ver los bloques.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Tortuga"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Color"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="L\u00F3gica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Bucles"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matem\u00E1ticas"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Listas"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Funciones" custom="PROCEDURE"></category>' : '<category name="Tortuga"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Color"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Bucles"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}