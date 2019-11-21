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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Presunie korytna\u010Dku dopredu alebo dozadu o \\nur\u010Dit\u00FD po\u010Det krokov. </span><span id="Turtle_moveForward">posun\u00FA\u0165 dopredu o</span><span id="Turtle_moveBackward">posun\u00FA\u0165 vzad o</span><span id="Turtle_turnTooltip">Korytna\u010Dka sa oto\u010D\u00ED v\u013Eavo alebo vpravo o zadan\u00FD \\npo\u010Det stup\u0148ov. </span><span id="Turtle_turnRight">oto\u010Di\u0165 vpravo o</span><span id="Turtle_turnLeft">oto\u010Di\u0165 v\u013Eavo o</span><span id="Turtle_widthTooltip">Zmeni\u0165 hr\u00FAbku pera.</span><span id="Turtle_setWidth">nastavi\u0165 \u0161\u00EDrku</span><span id="Turtle_colourTooltip">Zmeni\u0165 farbu pera.</span><span id="Turtle_setColour">nastavi\u0165 farbu</span><span id="Turtle_penTooltip">Pero hore alebo dole, skon\u010D\u00ED alebo za\u010Dne kresli\u0165.</span><span id="Turtle_penUp">pero hore</span><span id="Turtle_penDown">pero dole</span><span id="Turtle_turtleVisibilityTooltip">Uk\u00E1\u017Ee alebo skryje korytna\u010Dku (kr\u00FA\u017Eok so \u0161\u00EDpkou).</span><span id="Turtle_hideTurtle">skry\u0165 korytna\u010Dku</span><span id="Turtle_showTurtle">uk\u00E1za\u0165 korytna\u010Dku</span><span id="Turtle_printHelpUrl">https://sk.wikipedia.org/wiki/Kn%C3%ADhtla%C4%8D</span><span id="Turtle_printTooltip">Vyp\u00ED\u0161e text na poz\u00EDcii korytna\u010Dky v smere jej \\nnato\u010Denia. </span><span id="Turtle_print">tla\u010Di\u0165</span><span id="Turtle_fontHelpUrl">https://sk.wikipedia.org/wiki/Font_%28po%C4%8D%C3%ADta%C4%8De%29</span><span id="Turtle_fontTooltip">Nastav\u00ED p\u00EDsmo, ktor\u00E9 pou\u017E\u00EDva tla\u010Dov\u00FD dielec.</span><span id="Turtle_font">p\u00EDsmo</span><span id="Turtle_fontSize">ve\u013Ekos\u0165 p\u00EDsma</span><span id="Turtle_fontNormal">norm\u00E1lne</span><span id="Turtle_fontBold">tu\u010Dn\u00E9</span><span id="Turtle_fontItalic">kurz\u00EDva</span><span id="Turtle_submitDisabled">Spusti\u0165 program, a\u017E k\u00FDm nezastav\u00ED. Potom m\u00F4\u017Ee\u0161 svoj v\u00FDtvor posla\u0165 do gal\u00E9rie.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Korytna\u010Dka', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Spusti\u0165 nap\u00EDsan\u00FD program."><img src="common/1x1.gif" class="run icon21"> Spusti\u0165</button><button id="resetButton" class="primary" style="display: none" title="Zastavi\u0165 program a vr\u00E1ti\u0165 \u00FArove\u0148 do p\u00F4vodn\u00E9ho \\nstavu. "><img src="common/1x1.gif" class="stop icon21"> Odznova</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Otvori\u0165 gal\u00E9riu obr\u00E1zkov v slu\u017Ebe Reddit."><img src="common/1x1.gif" class="gallery icon21"> Prezrie\u0165 gal\u00E9riu</button></form></td><td style="text-align: center;"><button id="submitButton" title="Po\u0161li svoj obr\u00E1zok na Reddit."><img src="common/1x1.gif" class="camera icon21"> Posla\u0165 do Gal\u00E9rie</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Po\u0161li svoj obr\u00E1zok na Reddit.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Zru\u0161i\u0165</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Tvoje rie\u0161enie pracuje, ale m\u00F4\u017Ee by\u0165 e\u0161te lep\u0161ie. ' + ((opt_ijData.level < 3) ? 'Nakresli tento \u00FAtvar iba s tromi blokmi.' : 'Nakresli hviezdi\u010Dku iba so \u0161tyrmi blokmi.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Vytvor program, ktor\u00FD kresl\u00ED \u0161tvorec.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Zme\u0148 svoj program tak, aby namiesto \u0161tvorca nakreslil p\u00E4\u0165uholn\u00EDk.' : (opt_ijData.level == 3) ? 'Pribudol nov\u00FD blok, ktor\u00FD men\u00ED farbu \u010Diary:<div id="sampleHelp3" class="readonly"></div>Nakresli \u017Elt\u00FA hviezdi\u010Dku.' : (opt_ijData.level == 4) ? 'Pribudol nov\u00FD blok, ktor\u00FDm sa zdv\u00EDha pero z papiera:<div id="sampleHelp4" class="readonly"></div>Nakresli \u017Elt\u00FA hviezdi\u010Dku a potom \u010Diaru nad \u0148ou.' : (opt_ijData.level == 5) ? 'Namiesto jednej hviezdi\u010Dky nakresli \u0161tyri, usporiadn\u00E9 do \u0161tvorca.' : (opt_ijData.level == 6) ? 'Nakresli tri \u017Elt\u00E9 hviezdy a jednu bielu \u010Diaru.' : (opt_ijData.level == 7) ? 'Nakresli hviezdy, a potom \u0161tyri biele \u010Diary.' : (opt_ijData.level == 8) ? '360 bielych \u010Diar bude pripom\u00EDna\u0165 mesiac v splne.' : (opt_ijData.level == 9) ? 'Ak prid\u00E1\u0161 e\u0161te \u010Dierny kruh, z mesiaca sa stane polmesiac.' : (opt_ijData.level == 10) ? 'Nakresli si \u010Doko\u013Evek. Pribudlo mnoho nov\u00FDch blokov, ktor\u00E9 m\u00F4\u017Ee\u0161 presk\u00FAma\u0165. Bav sa!' + ((! opt_ijData.html) ? '<br><br>Pou\u017Ei tla\u010Didlo "Prezrie\u0165 Gal\u00E9riu" a prezri si v\u00FDtvory in\u00FDch \u013Eud\u00ED. Ak nakresl\u00ED\u0161 nie\u010Do zauj\u00EDmav\u00E9, stla\u010D "Posla\u0165 do Gal\u00E9rie" a zverejni svoj v\u00FDtvor.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Zvo\u013E si kateg\u00F3riu a prezri si bloky v nej.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Korytna\u010Dka"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Farba"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logick\u00E9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Slu\u010Dky"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matematika"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Zoznamy"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Premenn\u00E9" custom="VARIABLE"></category><category name="Funkcie" custom="PROCEDURE"></category>' : '<category name="Korytna\u010Dka"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Farba"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Slu\u010Dky"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}