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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Music_playNoteTooltip">Plays one musical note of the specified duration and pitch.</span><span id="Music_playNote">play %1 note %2</span><span id="Music_restTooltip">Waits for the specified duration.</span><span id="Music_restWholeTooltip">Waits for one whole note.</span><span id="Music_rest">rest %1</span><span id="Music_setInstrumentTooltip">Switches to the specified instrument when playing subsequent musical notes.</span><span id="Music_setInstrument">set instrument to %1</span><span id="Music_startTooltip">Executes the blocks inside when the \'Run Program\' button is clicked.</span><span id="Music_start">when %1 clicked</span><span id="Music_pitchTooltip">One note (C4 is 7).</span><span id="Music_firstPart">first part</span><span id="Music_piano">piano</span><span id="Music_trumpet">trumpet</span><span id="Music_banjo">banjo</span><span id="Music_violin">violin</span><span id="Music_guitar">guitar</span><span id="Music_flute">flute</span><span id="Music_drum">drum</span><span id="Music_choir">choir</span><span id="Music_submitDisabled">Run your program until it stops. Then you may submit your music to the gallery.</span></div>';
};
if (goog.DEBUG) {
  Music.soy.messages.soyTemplateName = 'Music.soy.messages';
}


Music.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Music.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Music', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Rin Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Open the gallery of music."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your music to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your music to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancel</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Music.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better.  Use functions to reduce the amount of repeated code.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">The music will sound better if you use a different instrument in each start block.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Compose the first four notes of \'Fr\u00E8re Jacques\'.<p>C4 - D4 - E4 - C4</p>' : (opt_ijData.level == 2) ? 'A \'function\' allows you to group blocks together, then run them more than once.<div id="sampleHelp2" class="readonly"></div>Create a function to play the first four notes of \'Fr\u00E8re Jacques\'. Run that function twice.  Don\'t add any new note blocks.' : (opt_ijData.level == 3) ? 'Create a second function for the next part of \'Fr\u00E8re Jacques\'. The last note is longer.<br><img src="music/note0.5.png" class="sampleNote">' : (opt_ijData.level == 4) ? 'Create a third function for the next part of \'Fr\u00E8re Jacques\'. The first four notes are shorter.<br><img src="music/note0.125.png" class="sampleNote">' : (opt_ijData.level == 5) ? 'Complete the full tune of \'Fr\u00E8re Jacques\'.' : (opt_ijData.level == 6) ? 'This new block lets you change to another instrument.<div id="sampleHelp6" class="readonly"></div>Play your tune with a violin.' : (opt_ijData.level == 7) ? 'This new block adds a silent delay.<div id="sampleHelp7" class="readonly"></div>Create a second start block that has two delay blocks, then also plays \'Fr\u00E8re Jacques\'.' : (opt_ijData.level == 8) ? 'Each start block should play \'Fr\u00E8re Jacques\' twice.' : (opt_ijData.level == 9) ? 'Create four start blocks that each play \'Fr\u00E8re Jacques\' twice. Add the correct number of delay blocks.' : (opt_ijData.level == 10) ? 'Compose anything you want. You\'ve got a huge number of new blocks you can explore. Have fun!' + ((! opt_ijData.html) ? '<br><br>Use the "See Gallery" button to see what other people have composed. If you compose something interesting, use the "Submit to Gallery" button to publish it.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Music.soy.start.soyTemplateName = 'Music.soy.start';
}


Music.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Music"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="Logeec"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Luips"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Maths"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Leets"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>' : '<category name="Music"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + ((opt_ijData.level > 6) ? '<block type="music_rest_whole"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="music_instrument"></block>' : '') + ((opt_ijData.level > 6) ? '<block type="music_start" id="music_start"></block>' : '') + '</category>' + ((opt_ijData.level > 1) ? '<category name="Functions" custom="PROCEDURE"></category>' : '')) + '</xml>';
};
if (goog.DEBUG) {
  Music.soy.toolbox.soyTemplateName = 'Music.soy.toolbox';
}
