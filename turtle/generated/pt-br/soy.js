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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Move a tartaruga para frente ou para tr\u00E1s a \\nquantidade especificada. </span><span id="Turtle_moveForward">avan\u00E7ar</span><span id="Turtle_moveBackward">mover para tr\u00E1s</span><span id="Turtle_turnTooltip">Gira a tartaruga para esquerda ou direita de \\nacordo com o n\u00FAmero de graus especificado. </span><span id="Turtle_turnRight">vire \u00E0 direita</span><span id="Turtle_turnLeft">vire \u00E0 esquerda</span><span id="Turtle_widthTooltip">Muda o tamanho da caneta.</span><span id="Turtle_setWidth">configurar largura para</span><span id="Turtle_colourTooltip">Muda a cor da caneta.</span><span id="Turtle_setColour">Configurar cor para</span><span id="Turtle_penTooltip">Levanta ou abaixa a caneta, para parar ou voltar \\na desenhar. </span><span id="Turtle_penUp">levantar caneta</span><span id="Turtle_penDown">abaixar caneta</span><span id="Turtle_turtleVisibilityTooltip">Torna a tartaruga (c\u00EDrculo e seta) vis\u00EDvel ou \\ninvis\u00EDvel. </span><span id="Turtle_hideTurtle">esconder tartaruga</span><span id="Turtle_showTurtle">mostrar tartaruga</span><span id="Turtle_printHelpUrl">https://pt.wikipedia.org/wiki/Impress%C3%A3o</span><span id="Turtle_printTooltip">Desenha texto na dire\u00E7\u00E3o da tartaruga em sua \\nlocaliza\u00E7\u00E3o. </span><span id="Turtle_print">imprimir</span><span id="Turtle_fontHelpUrl">https://pt.wikipedia.org/wiki/Fonte_tipogr%C3%A1fica</span><span id="Turtle_fontTooltip">Configurar a fonte usada pelo bloco de impress\u00E3o \\nna tela. </span><span id="Turtle_font">fonte</span><span id="Turtle_fontSize">tamanho da fonte</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">negrito</span><span id="Turtle_fontItalic">it\u00E1lico</span><span id="Turtle_submitDisabled">Rode seu programa at\u00E9 que ele pare. Depois voc\u00EA pode submeter seu desenho a galeria.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Tartaruga', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Rodar o programa que voc\u00EA escreveu."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Parar a execu\u00E7\u00E3o do programa e resetar o nivel."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Abrir a galeria de desenhos."><img src="common/1x1.gif" class="gallery icon21"> Ver a Galeria</button></form></td><td style="text-align: center;"><button id="submitButton" title="Enviar seu desenho para a galeria."><img src="common/1x1.gif" class="camera icon21"> Enviar a Galeria</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Enviar seu desenho para a galeria.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>T\u00EDtulo: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancelar</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Sua solu\u00E7\u00E3o funciona, mas voc\u00EA pode fazer melhor. ' + ((opt_ijData.level < 3) ? 'Desenhe o contorno somente com esses tr\u00EAs blocos.' : 'Desenhe a estrela somente com 4 blocos.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Crie um programa que desenha um quadrado.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Modifique seu programa para que desenhe um pent\u00E1gono em vez de um quadrado.' : (opt_ijData.level == 3) ? 'Aqui est\u00E1 um novo bloco que te permite trocar a cor:<div id="sampleHelp3" class="readonly"></div>Desenhe uma estrela amarela.' : (opt_ijData.level == 4) ? 'Aqui esta um novo bloco que te permite suspender a caneta quando voc\u00EA move o cursor:<div id="sampleHelp4" class="readonly"></div>Desenhe uma pequena estrela amarela, depois, desenhe uma linha em cima dela.' : (opt_ijData.level == 5) ? 'Em vez de uma estrela, voc\u00EA pode desenhar quatro estrelas dispostas como um quadrado?' : (opt_ijData.level == 6) ? 'Desenhe tr\u00EAs estrelas amarelas e uma linha branca.' : (opt_ijData.level == 7) ? 'Desenhe as estrelas, depois desenhe quatro linhas brancas.' : (opt_ijData.level == 8) ? 'Desenhar 360 linhas brancas vai parecer uma lua cheia.' : (opt_ijData.level == 9) ? 'Voc\u00EA pode adicionar um circulo preto para que a lua fique crescente?' : (opt_ijData.level == 10) ? 'Desenhe o que voc\u00EA quiser. Voc\u00EA conseguiu um grande numero de blocos novos para explorar. Divirta-se!' + ((! opt_ijData.html) ? '<br><br>Use o bot\u00E3o "Ver Galeria" para ver o que as outras pessoas desenharam. Se voc\u00EA desenhar algo interessante,use o bot\u00E3o "Enviar para a Galeria" para publicar.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Escolha uma categoria para ver os blocos.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Tartaruga"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Cor"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="L\u00F3gica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="La\u00E7os"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matem\u00E1tica"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Listas"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Vari\u00E1veis" custom="VARIABLE"></category><category name="Fun\u00E7\u00F5es" custom="PROCEDURE"></category>' : '<category name="Tartaruga"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Cor"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="La\u00E7os"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}
