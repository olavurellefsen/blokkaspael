// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Music.soy.
 */

goog.provide('Music.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Music.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Music_playNoteTooltip">A son-a mach un-a n\u00F2ta musical \u00EBd la dur\u00E0 e \\naut\u00EBssa spessific\u00E0. </span><span id="Music_playNote">son\u00E9 %1 n\u00F2ta %2</span><span id="Music_restTooltip">A spet\u00E0 p\u00EBr la dur\u00E0 spessific\u00E0.</span><span id="Music_restWholeTooltip">A speta p\u00EBr na n\u00F2ta antrega.</span><span id="Music_rest">spet\u00E9 %1</span><span id="Music_setInstrumentTooltip">A passa a l\u00EB strument \u00EBspessific\u00E0 an sonand le \\nn\u00F2te musicaj ch\'a ven-o apress. </span><span id="Music_setInstrument">fiss\u00E9 l\u00EB strument a %1</span><span id="Music_startTooltip">A fa marc\u00E9 ij bl\u00F2ch andrinta cand a s\u00EB sgnaca \u00EBl \\nboton \'F\u00E9 parte \u00EBl programa\'. </span><span id="Music_start">cand %1 a l\'\u00E9 sgnac\u00E0</span><span id="Music_pitchTooltip">Un-a n\u00F2ta (C4 a l\'\u00E9 7).</span><span id="Music_firstPart">prima part</span><span id="Music_piano">piano</span><span id="Music_trumpet">tromba</span><span id="Music_banjo">bangio</span><span id="Music_violin">violin</span><span id="Music_guitar">ghitara</span><span id="Music_flute">fluta</span><span id="Music_drum">tamborn</span><span id="Music_choir">c\u00F2ro</span><span id="Music_submitDisabled">F\u00E9 marc\u00E9 s\u00F2 programa fin-a ch\'as f\u00EBrma. Peui a peul publich\u00E9 soa m\u00F9sica ant la galar\u00ECa.</span></div>';
};
if (goog.DEBUG) {
  Music.soy.messages.soyTemplateName = 'Music.soy.messages';
}


Music.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Music.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'M\u00F9sica', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="F\u00E9 and\u00E9 \u00EBl programa ch\'a l\'ha scriv\u00F9."><img src="common/1x1.gif" class="run icon21"> F\u00E9 and\u00E9 \u00EBl programa</button><button id="resetButton" class="primary" style="display: none" title="F\u00EBrm\u00E9 \u00EBl programa e inissialis\u00E9 torna \u00EBl livel."><img src="common/1x1.gif" class="stop icon21"> But\u00E9 torna coma al prinsipi</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Duvert\u00E9 la galar\u00ECa \u00EBd m\u00F9sica."><img src="common/1x1.gif" class="gallery icon21"> V\u00EBdde la galar\u00ECa</button></form></td><td style="text-align: center;"><button id="submitButton" title="Publich\u00E9 soa m\u00F9sica ant la galar\u00ECa."><img src="common/1x1.gif" class="camera icon21"> Publich\u00E9 ant la galar\u00ECa</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Publich\u00E9 soa m\u00F9sica ant la galar\u00ECa.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>T\u00ECtol: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Anul\u00E9</button><button id="galleryOk" class="secondary" type="submit">Va bin</button></div></form></div>' : '') + Music.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Soa solussion a marcia, ma a peul f\u00E9 mej. Ch\'a deuvra dle fonsion p\u00EBr diminu\u00EC la quatit\u00E0 \u00EBd c\u00F2des arpet\u00F9.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">La m\u00F9sica a vnir\u00E0 mej s\'a deuvra n\u00EB strument diferent an minca \'n bl\u00F2ch \u00EBd partensa.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Ch\'a compon-e le prime quatr n\u00F2te \u00EBd \'Fr\u00E8re Jacques\'.<p>C4 - D4 - E4 - C4</p>' : (opt_ijData.level == 2) ? 'Na \'fonsion\' a-j p\u00EBrmet d\'argrop\u00E9 ansem dij bl\u00F2ch, peui \u00EBd feje and\u00E9 pi che na vira.<div id="sampleHelp2" class="readonly"></div>Ch\'a crea na fonsion p\u00EBr son\u00E9 le prime quatr n\u00F2te \u00EBd \'Fr\u00E8re Jacques\'. Ch\'a fasa parte sta fonsion doe vire. Ch\'a gionta gnun \u00E0utr bl\u00F2ch \u00EBd n\u00F2te.' : (opt_ijData.level == 3) ? 'Ch\'a crea na sconda fonsion p\u00EBr la part apress \u00EBd \'Fr\u00E8re Jacques\'. L\'\u00F9ltima n\u00F2ta a l\'\u00E9 pi longa.<br><img src="music/note0.5.png" class="sampleNote">' : (opt_ijData.level == 4) ? 'Ch\'a crea na tersa fonsion p\u00EBr la part ch\'a-i ven apress \u00EBd \'Fr\u00E8re Jacques\'. Le prime quatr n\u00F2te a son pi curte.<br><img src="music/note0.125.png" class="sampleNote">' : (opt_ijData.level == 5) ? 'Ch\'a completa tuta l\'aria \u00EBd \'Fr\u00E8re Jacques\'.' : (opt_ijData.level == 6) ? '\u00CBs neuv bl\u00F2ch a-j p\u00EBrmet \u00EBd pass\u00E9 a n\'\u00E0utr \u00EBstrument.<div id="sampleHelp6" class="readonly"></div>Son\u00E9 soa aria con un violin.' : (opt_ijData.level == 7) ? '\u00CBs neuv bl\u00F2ch a gionta un temp \u00EBd silensi.<div id="sampleHelp7" class="readonly"></div>Ch\'a crea un second bl\u00F2ch ch\'a l\'ha doi bl\u00F2ch \u00EBd silensi, peui a son-a \u00EBdc\u00F2 \'Fr\u00E8re Jacques\'.' : (opt_ijData.level == 8) ? 'Minca \'n bl\u00F2ch \u00EBd partensa a dev son\u00E9 \'Fr\u00E8re Jacques\' doe vire.' : (opt_ijData.level == 9) ? 'Ch\'a crea quatr bl\u00F2ch \u00EBd partensa ch\'a son-o mincadun \'Fr\u00E8re Jacques\' doe vire. Ch\'a gionta \u00EBl n\u00F9mer giust \u00EBd bl\u00F2ch \u00EBd silensi.' : (opt_ijData.level == 10) ? 'Ch\'a compon-a l\u00F2n ch\'a veul. A l\'ha un n\u00F9mer \u00EBstragr\u00F2ss \u00EBd neuv bl\u00F2ch da esplor\u00E9. Ch\'as amusa!' + ((! opt_ijData.html) ? '<br><br>Ch\'a deuvra \u00EBl boton "V\u00EBdde la galar\u00ECa" p\u00EBr v\u00EBdde l\u00F2n che j\'\u00E0utri a l\'han compon\u00F9. S\'a compon cheic\u00F2s d\'anteressant, ch\'a deuvra \u00EBl boton "Publich\u00E9 ant la galar\u00ECa" p\u00EBr publichelo.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Music.soy.start.soyTemplateName = 'Music.soy.start';
}


Music.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="M\u00F9sica"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="L\u00F2gica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Liasse"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matem\u00E0tica"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Liste"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Vari\u00E0bij" custom="VARIABLE"></category><category name="Fonsion" custom="PROCEDURE"></category>' : '<category name="M\u00F9sica"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + ((opt_ijData.level > 6) ? '<block type="music_rest_whole"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="music_instrument"></block>' : '') + ((opt_ijData.level > 6) ? '<block type="music_start" id="music_start"></block>' : '') + '</category>' + ((opt_ijData.level > 1) ? '<category name="Fonsion" custom="PROCEDURE"></category>' : '')) + '</xml>';
};
if (goog.DEBUG) {
  Music.soy.toolbox.soyTemplateName = 'Music.soy.toolbox';
}
