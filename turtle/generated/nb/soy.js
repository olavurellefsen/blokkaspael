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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Flytter skilpadden fremover eller bakover med \\nden angitte verdien. </span><span id="Turtle_moveForward">flytt fremover med</span><span id="Turtle_moveBackward">flytt bakover med</span><span id="Turtle_turnTooltip">Sving skilpadden venstre eller h\u00F8yre med angitt \\nantall grader. </span><span id="Turtle_turnRight">sving til h\u00F8yre med</span><span id="Turtle_turnLeft">sving til venstre med</span><span id="Turtle_widthTooltip">Endrer bredden p\u00E5 pennen.</span><span id="Turtle_setWidth">sett bredden til</span><span id="Turtle_colourTooltip">Endrer fargen p\u00E5 pennen.</span><span id="Turtle_setColour">sett fargen til</span><span id="Turtle_penTooltip">Hever eller senker pennen, for \u00E5 stoppe eller \\nstarte tegning. </span><span id="Turtle_penUp">penn opp</span><span id="Turtle_penDown">penn ned</span><span id="Turtle_turtleVisibilityTooltip">Gj\u00F8r skilpadden (sirkel og pil) synlig eller \\nusynlig. </span><span id="Turtle_hideTurtle">skjul skilpadde</span><span id="Turtle_showTurtle">vis skilpadde</span><span id="Turtle_printHelpUrl">https://no.wikipedia.org/wiki/Trykking</span><span id="Turtle_printTooltip">Skriver tekst i skilpaddens retning p\u00E5 dens \\nplassering. </span><span id="Turtle_print">skriv</span><span id="Turtle_fontHelpUrl">https://no.wikipedia.org/wiki/Skrifttype</span><span id="Turtle_fontTooltip">Setter skrifttypen som brukes av skriveblokken.</span><span id="Turtle_font">skrifttype</span><span id="Turtle_fontSize">skriftst\u00F8rrelse</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">fet</span><span id="Turtle_fontItalic">kursiv</span><span id="Turtle_submitDisabled">Kj\u00F8r programmet til det stopper. Etter det kan du levere tegningen din til galleriet.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Skilpadde', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Kj\u00F8r programmet du skrev."><img src="common/1x1.gif" class="run icon21"> Kj\u00F8r Programmet</button><button id="resetButton" class="primary" style="display: none" title="Stopp programmet og nullstill niv\u00E5et."><img src="common/1x1.gif" class="stop icon21"> Nullstill</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u00C5pne galleriet over tegninger. "><img src="common/1x1.gif" class="gallery icon21"> Se galleri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Send tegningen din til galleriet."><img src="common/1x1.gif" class="camera icon21"> Send til galleri</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Send tegningen din til galleriet.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Tittel: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Avbryt</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">L\u00F8sningen din virker, men du kan gj\u00F8re det bedre. ' + ((opt_ijData.level < 3) ? 'Tegn formen med bare tre blokker.' : 'Tegn stjernen med bare fire blokker.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Lag et program som tegner et kvadrat.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Endre programmet til \u00E5 tegne en femkant i stedet for en stjerne.' : (opt_ijData.level == 3) ? 'Det er en ny blokk som lar deg endre fargen:<div id="sampleHelp3" class="readonly"></div>Tegn en gul stjerne.' : (opt_ijData.level == 4) ? 'Det er en ny blokk som lar deg l\u00F8fte pennen av papiret n\u00E5r du flytter deg:<div id="sampleHelp4" class="readonly"></div>Tegn en liten gul stjerne, og tegn en linje over den.' : (opt_ijData.level == 5) ? 'I stedet for \u00E9n stjerne, kan du tegne fire stjerner i et firkantm\u00F8nster?' : (opt_ijData.level == 6) ? 'Tegn tre gule stjerner og \u00E9n hvit linje.' : (opt_ijData.level == 7) ? 'Tegn stjernene, og tegn s\u00E5 fire hvite linjer.' : (opt_ijData.level == 8) ? '\u00C5 tegne 360 hvite linjer vil ligne p\u00E5 fullm\u00E5nen.' : (opt_ijData.level == 9) ? 'Kan du legge til en svart sirkel s\u00E5 m\u00E5nen blir en halvm\u00E5ne?' : (opt_ijData.level == 10) ? 'Tegn det du har lyst til. Du har et enormt antall nye blokker du kan utforske. Kos deg!' + ((! opt_ijData.html) ? '<br><br>Bruk \u00ABSe galleri\u00BB-knappen for \u00E5 se hva andre har tegnet. Om du tegner noe interessant, bruk \u00ABSend til galleri\u00BB-knappen for \u00E5 publisere det.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Velg en kategori for \u00E5 se blokkene.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Skilpadde"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Farge"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logikk"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="L\u00F8kker"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matte"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Lister"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabler" custom="VARIABLE"></category><category name="Funksjoner" custom="PROCEDURE"></category>' : '<category name="Skilpadde"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Farge"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="L\u00F8kker"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}
