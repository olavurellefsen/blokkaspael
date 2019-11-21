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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Flyttar sk\u00F6ldpaddan fram\u00E5t eller bak\u00E5t enligt \\nden angivna summan. </span><span id="Turtle_moveForward">flytta fram\u00E5t med</span><span id="Turtle_moveBackward">flytta bak\u00E5t med</span><span id="Turtle_turnTooltip">Vrider sk\u00F6ldpaddan v\u00E4nster eller h\u00F6ger enligt \\ndet angivna antalet grader. </span><span id="Turtle_turnRight">sv\u00E4ng h\u00F6ger med</span><span id="Turtle_turnLeft">sv\u00E4ng v\u00E4nster med</span><span id="Turtle_widthTooltip">\u00C4ndrar bredden p\u00E5 pennan.</span><span id="Turtle_setWidth">st\u00E4ll in bredd till</span><span id="Turtle_colourTooltip">\u00C4ndrar pennans f\u00E4rg.</span><span id="Turtle_setColour">st\u00E4ll in f\u00E4rg till</span><span id="Turtle_penTooltip">Lyfter eller s\u00E4nker pennan, f\u00F6r att sluta eller \\nb\u00F6rja rita. </span><span id="Turtle_penUp">penna upp</span><span id="Turtle_penDown">penna ned</span><span id="Turtle_turtleVisibilityTooltip">G\u00F6r sk\u00F6ldpaddan (cirkel och pil) synlig eller \\nosynlig. </span><span id="Turtle_hideTurtle">d\u00F6lj sk\u00F6ldpadda</span><span id="Turtle_showTurtle">visa sk\u00F6ldpadda</span><span id="Turtle_printHelpUrl">https://sv.wikipedia.org/wiki/Tryckteknik</span><span id="Turtle_printTooltip">Ritar text i sk\u00F6ldpaddans riktning p\u00E5 dess \\nplacering. </span><span id="Turtle_print">visa</span><span id="Turtle_fontHelpUrl">https://sv.wikipedia.org/wiki/Vikt_%28typografi%29</span><span id="Turtle_fontTooltip">Anger vilket typsnitt som ska anv\u00E4ndas av \\ntextblocket. </span><span id="Turtle_font">typsnitt</span><span id="Turtle_fontSize">teckenstorlek</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">fet</span><span id="Turtle_fontItalic">kursiv</span><span id="Turtle_submitDisabled">K\u00F6r ditt program tills det stannar. Sedan kan du skicka din teckning till galleriet.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Sk\u00F6ldpadda', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="K\u00F6r programmet du skrev."><img src="common/1x1.gif" class="run icon21"> K\u00F6r program</button><button id="resetButton" class="primary" style="display: none" title="Stoppa programmet och \u00E5terst\u00E4ll niv\u00E5n."><img src="common/1x1.gif" class="stop icon21"> \u00C5terst\u00E4ll</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u00D6ppna teckningsgalleriet."><img src="common/1x1.gif" class="gallery icon21"> Se galleri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Skicka din teckning till galleriet."><img src="common/1x1.gif" class="camera icon21"> Skicka till galleriet</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Skicka din teckning till galleriet.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titel: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Avbryt</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Din l\u00F6sning fungerar, men du kan g\u00F6ra det b\u00E4ttre. ' + ((opt_ijData.level < 3) ? 'Rita formen med bara tre block.' : 'Rita stj\u00E4rnan med bara fyra block.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Skapa ett program som ritar en kvadrat.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? '\u00C4ndra ditt program f\u00F6r att rita en femh\u00F6rning i st\u00E4llet f\u00F6r en kvadrat.' : (opt_ijData.level == 3) ? 'Det finns ett nytt block som l\u00E5ter dig \u00E4ndra f\u00E4rgen:<div id="sampleHelp3" class="readonly"></div>Rita en gul stj\u00E4rna.' : (opt_ijData.level == 4) ? 'Det finns ett nytt block som l\u00E5ter dig lyfta din penna fr\u00E5n papperet n\u00E4r du flyttar den:<div id="sampleHelp4" class="readonly"></div>Rita en liten gul stj\u00E4rna och rita sedan en linje ovanf\u00F6r den.' : (opt_ijData.level == 5) ? 'Kan du rita fyra stj\u00E4rnor ordnade i en kvadrat ist\u00E4llet f\u00F6r en stj\u00E4rna?' : (opt_ijData.level == 6) ? 'Rita tre gula stj\u00E4rnor och en vit linje.' : (opt_ijData.level == 7) ? 'Rita stj\u00E4rnorna och sedan fyra vita linjer.' : (opt_ijData.level == 8) ? 'Om en vit linje ritas i 360 grader ser den ut som en fullm\u00E5ne.' : (opt_ijData.level == 9) ? 'Kan du l\u00E4gga till en svart cirkel s\u00E5 att m\u00E5nen blir en halvm\u00E5ne?' : (opt_ijData.level == 10) ? 'Rita vad du vill. Du har massa nya block att utforska. Ha kul!' + ((! opt_ijData.html) ? '<br><br>Anv\u00E4nd knappen "Se galleriet" f\u00F6r att se vad andra personer har ritat. Anv\u00E4nd knappen "Skicka till galleriet" f\u00F6r att publicera din teckning om du ritar n\u00E5gonting intressant.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>V\u00E4lj en kategori f\u00F6r att se blocken.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Sk\u00F6ldpadda"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="F\u00E4rg"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logik"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loopar"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matematik"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Listor"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabler" custom="VARIABLE"></category><category name="Funktioner" custom="PROCEDURE"></category>' : '<category name="Sk\u00F6ldpadda"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="F\u00E4rg"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Loopar"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}