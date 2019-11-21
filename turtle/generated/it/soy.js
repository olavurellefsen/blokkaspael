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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Muove avanti e indietro la tartaruga secondo \\nquanto specificato. </span><span id="Turtle_moveForward">sposta in avanti di</span><span id="Turtle_moveBackward">sposta indietro di</span><span id="Turtle_turnTooltip">Gira la tartaruga a destra o a sinistra, \\nsecondo l\'angolazione suggerita. </span><span id="Turtle_turnRight">gira a destra di</span><span id="Turtle_turnLeft">gira a sinistra di</span><span id="Turtle_widthTooltip">Cambia la larghezza della penna.</span><span id="Turtle_setWidth">imposta la larghezza a</span><span id="Turtle_colourTooltip">Cambia il colore della penna.</span><span id="Turtle_setColour">imposta colore a</span><span id="Turtle_penTooltip">Alza o abbassa la penna, per iniziare a \\ndisegnare o fermarti. </span><span id="Turtle_penUp">penna s\u00F9</span><span id="Turtle_penDown">penna gi\u00F9</span><span id="Turtle_turtleVisibilityTooltip">Rende la tartaruga (cerchio con la freccia), \\nvisibile o invisibile. </span><span id="Turtle_hideTurtle">nascondi tartaruga</span><span id="Turtle_showTurtle">mostra tartaruga</span><span id="Turtle_printHelpUrl">https://it.wikipedia.org/wiki/Stampa</span><span id="Turtle_printTooltip">disegna il testo nella direzione e alla \\nposizione della tartaruga. </span><span id="Turtle_print">stampa</span><span id="Turtle_fontHelpUrl">https://it.wikipedia.org/wiki/Tipo_di_carattere</span><span id="Turtle_fontTooltip">Imposta il tipo di carattere utilizzato dal \\nblocco di stampa. </span><span id="Turtle_font">tipo di carattere</span><span id="Turtle_fontSize">dimensione carattere</span><span id="Turtle_fontNormal">normale</span><span id="Turtle_fontBold">grassetto</span><span id="Turtle_fontItalic">corsivo</span><span id="Turtle_submitDisabled">Esegui il programma fino alla fine. Successivamente potrai inviare il tuo disegno alla galleria.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Tartaruga', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Esegui il programma che hai scritto."><img src="common/1x1.gif" class="run icon21"> Esegui programma</button><button id="resetButton" class="primary" style="display: none" title="Interrompi il programma e ripristina il livello."><img src="common/1x1.gif" class="stop icon21"> Reimposta</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Apri la galleria dei disegni."><img src="common/1x1.gif" class="gallery icon21"> Vedi galleria</button></form></td><td style="text-align: center;"><button id="submitButton" title="Invia il tuo disegno alla galleria."><img src="common/1x1.gif" class="camera icon21"> Invia alla galleria</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Invia il tuo disegno alla galleria.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titolo: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Annulla</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">La tua soluzione funziona, ma puoi fare di meglio. ' + ((opt_ijData.level < 3) ? 'Disegna la forma usando solo tre blocchi.' : 'Disegna la stella usando solo quattro blocchi.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Crea un programma che disegna un quadrato.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Cambia il tuo programma per disegnare un pentagono invece di un quadrato.' : (opt_ijData.level == 3) ? 'C\'\u00E8 un nuovo blocco che ti permette di cambiare il colore:<div id="sampleHelp3" class="readonly"></div>Disegna una stella gialla.' : (opt_ijData.level == 4) ? 'C\'\u00E8 un nuovo blocco che ti permette di sollevare la penna dalla carta quando ti sposti.<div id="sampleHelp4" class="readonly"></div>Disegna una piccola stella gialla, quindi disegna una linea sopra di essa.' : (opt_ijData.level == 5) ? 'Invece di una stella, riesci a disegnare quattro stelle disposte a quadrato?' : (opt_ijData.level == 6) ? 'Disegna tre stelle gialle e una linea bianca.' : (opt_ijData.level == 7) ? 'Disegna le stelle, quindi disegna quattro linee bianche.' : (opt_ijData.level == 8) ? 'Disegnando 360 linee bianche assomiglier\u00E0 alla luna piena.' : (opt_ijData.level == 9) ? 'Riesci ad aggiungere un cerchio nero per far diventare la luna crescente?' : (opt_ijData.level == 10) ? 'Disegna quello che vuoi. Hai un sacco di nuovi blocchi che puoi esplorare. Divertiti!' + ((! opt_ijData.html) ? '<br><br>Usa il pulsante "Vedi galleria" per vedere cosa hanno disegnato gli altri. Se disegni qualcosa di interessante usa il pulsante "Invia alla galleria" per pubblicarlo.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Scegli una categoria per vedere i blocchi.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Tartaruga"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Colore"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Cicli"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matematica"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Elenchi"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabili" custom="VARIABLE"></category><category name="Funzioni" custom="PROCEDURE"></category>' : '<category name="Tartaruga"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Colore"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Cicli"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}
