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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Music_playNoteTooltip">Urar tazmili n u\u1E93awan n tenzagt akked uwrir n \\nyisefka. </span><span id="Music_playNote">Urar %1 tazmilt %2</span><span id="Music_restTooltip">Ad yer\u01E7u tanzagt i d-ittufken. </span><span id="Music_restWholeTooltip">Ad yer\u01E7u tazmilt me\u1E5B\u1E5Ba.</span><span id="Music_rest">r\u01E7u %1</span><span id="Music_setInstrumentTooltip">Ddu ar wallal i d-ituunefken s wurar n tezmilin \\nti\u1E93awanin ye\u1E6D\u1E6Dafaren. </span><span id="Music_setInstrument">Sbadu allal ar %1</span><span id="Music_startTooltip">Ad yesselkem i\u1E25edran degugensu ticki taqeffalt \\n"Senker ahil" tettusenned. </span><span id="Music_start">ticki %1 yettusenned</span><span id="Music_pitchTooltip">Tazmilt(C4 d 7).</span><span id="Music_firstPart">a\u1E25ric amenzu</span><span id="Music_piano">Apyanu</span><span id="Music_trumpet">L\u0263i\u1E0Da</span><span id="Music_banjo">Abanju</span><span id="Music_violin">Im\u1E93ad</span><span id="Music_guitar">Snitra</span><span id="Music_flute">Ajewwaq</span><span id="Music_drum">abendayer</span><span id="Music_choir">ch\u0153ur</span><span id="Music_submitDisabled">Ad iselkem ahil arama ye\u1E25bes. Sakin ad tizmired ad tessuff\u0263e\u1E0D aza\u025Ban-ik di tmidelt.</span></div>';
};
if (goog.DEBUG) {
  Music.soy.messages.soyTemplateName = 'Music.soy.messages';
}


Music.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Music.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'A\u1E93awan', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Selkem ahil i turi\u1E0D."><img src="common/1x1.gif" class="run icon21"> Selkem ahil</button><button id="resetButton" class="primary" style="display: none" title="Se\u1E25bes ahil sakin ales awennez n uswir."><img src="common/1x1.gif" class="stop icon21"> Ales awennez</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Ldi timidelt n u\u1E93awan."><img src="common/1x1.gif" class="gallery icon21"> Wali timidelt</button></form></td><td style="text-align: center;"><button id="submitButton" title="Azen a\u1E93awan-ik ar tmidelt."><img src="common/1x1.gif" class="camera icon21"> Suffe\u0263-d di tmidelt</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Azen a\u1E93awan-ik ar tmidelt.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Azwel: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Sefsex</button><button id="galleryOk" class="secondary" type="submit">IH</button></div></form></div>' : '') + Music.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Tifrat-ik tetteddu, maca tzemre\u1E0D ad txedme\u1E0D ugar. Seqdec tiwuriwin akken ad tesne\u0263se\u1E0D tasmekta n tengalt yettwalsen.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">A\u1E93awan ad yffe\u0263 akken iwata ma yella tsxedme\u1E0D allal-nniden deg yal i\u1E25der n tnekra.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Suddes kra\u1E0D n tizmilin timezwura n \'Fr\u00E8re Jacques\'.<p>C4 - D4 - E4 - C4</p>' : (opt_ijData.level == 2) ? '\'tawuri\' ad k-te\u01E7\u01E7 ad tesdukle\u1E0D i\u1E25edran, sakin ad ten-tsellekme\u1E0D deg yiwet n tikelt.<div id="sampleHelp2" class="readonly"></div>Rnu tawuri akken ad turare\u1E0D kra\u1E0D n tizmilin timezwura n \'Fr\u00E8re Jacques\'. Senker tawuri-agi snat n tikalt. Ur rennu ara i\u1E25edran-nni\u1E0Den n tizmilin.' : (opt_ijData.level == 3) ? 'Rnu tawuri tis snat i yi\u1E25der n \'Fr\u00E8re Jacques\'. Tazmilt taneggarut meqqert ugar.<br><img src="music/note0.5.png" class="sampleNote">' : (opt_ijData.level == 4) ? 'Rnu tawuri tis kra\u1E0D i yi\u1E25der ye\u1E6D\u1E6Dafa\u1E5Ben \'Fr\u00E8re Jacques\'. Ku\u1E93 timezwura n tizmilin weizzilit ugar.<br><img src="music/note0.125.png" class="sampleNote">' : (opt_ijData.level == 5) ? 'Fak a\u1E93awan n \'Fr\u00E8re Jacques\'.' : (opt_ijData.level == 6) ? 'I\u1E25der-agi amaynut ad k-ye\u01E7\u01E7 ad teddu\u1E0D ar wallal-nni\u1E0Den.<div id="sampleHelp6" class="readonly"></div>Urar a\u1E93wan-ik s yim\u1E93ad' : (opt_ijData.level == 7) ? 'I\u1E25der-agi amaynut a dyernu akud n tsusmi.<div id="sampleHelp7" class="readonly"></div>Rnu g\u0331hder wis sin yes\u025Ban i\u1E25der n tsusmi, sakin urar da\u0263en \'Fr\u00E8re Jacques\'.' : (opt_ijData.level == 8) ? 'Yal i\u1E25der n beddu yessefk ad yurar \'Fr\u00E8re Jacques\' snat n tikal.' : (opt_ijData.level == 9) ? 'Rnu ku\u1E93 n yi\u1E25edran n beddu anida yal yiwen ad yurar \'Fr\u00E8re Jacques\' snat n tikal. rnu am\u1E0Dan iwatan n yi\u1E25edran n tsusmi.' : (opt_ijData.level == 10) ? 'Suddes ayen teb\u0263i\u1E0D. \u0194ur-k ddeqs n i\u1E25edran imaynuten ara twali\u1E0D. Zhu!' + ((! opt_ijData.html) ? '<br><br>Seqdec taqeffalt  "Wali timdelt" akken ad twali\u1E0D ayen i suddsen wiya\u1E0D. Ma yella terni\u1E0D ayen yelhan, seqdec taqeffalt "Suffe\u0263-d deg tmidelt" akken ad t-id-suff\u0263e\u1E0D.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Music.soy.start.soyTemplateName = 'Music.soy.start';
}


Music.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="A\u1E93awan"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="Tame\u1E93la"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Tineddicin"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Tusnakt"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Tibdarint"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Imuttiyen" custom="VARIABLE"></category><category name="Tiwura" custom="PROCEDURE"></category>' : '<category name="A\u1E93awan"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + ((opt_ijData.level > 6) ? '<block type="music_rest_whole"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="music_instrument"></block>' : '') + ((opt_ijData.level > 6) ? '<block type="music_start" id="music_start"></block>' : '') + '</category>' + ((opt_ijData.level > 1) ? '<category name="Tiwura" custom="PROCEDURE"></category>' : '')) + '</xml>';
};
if (goog.DEBUG) {
  Music.soy.toolbox.soyTemplateName = 'Music.soy.toolbox';
}
