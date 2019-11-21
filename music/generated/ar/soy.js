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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Music_playNoteTooltip">\u064A\u0642\u0648\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0645\u0644\u0627\u062D\u0638\u0629 \u0645\u0648\u0633\u064A\u0642\u064A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0644\u0645\u062F\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u0648 \\n\u062F\u0631\u062C\u0629 \u0627\u0644\u0635\u0648\u062A. </span><span id="Music_playNote">\u062A\u0634\u063A\u064A\u0644 %1 \u0645\u0644\u0627\u062D\u0638\u0629 %2</span><span id="Music_restTooltip">\u064A\u0646\u062A\u0638\u0631 \u0644\u0645\u062F\u0629 \u0645\u062D\u062F\u062F\u0629.</span><span id="Music_restWholeTooltip">\u064A\u0646\u062A\u0638\u0631 \u0645\u0644\u0627\u062D\u0638\u0629 \u0648\u0627\u062D\u062F\u0629 \u0643\u0627\u0645\u0644\u0629.</span><span id="Music_rest">\u0627\u0644\u0628\u0627\u0642\u064A %1</span><span id="Music_setInstrumentTooltip">\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F \u0639\u0646\u062F \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \\n\u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629. </span><span id="Music_setInstrument">\u0636\u0628\u0637 \u0622\u0644\u0629 \u0645\u0648\u0633\u064A\u0642\u064A\u0629 \u0639\u0644\u0649 %1</span><span id="Music_startTooltip">\u064A\u0646\u0641\u0630 \u0627\u0644\u0643\u062A\u0644 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0639\u0646\u062F\u0645\u0627 \u064A\u062A\u0645 \u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0632\u0631 \\n"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C". </span><span id="Music_start">\u0639\u0646\u062F \u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 %1</span><span id="Music_pitchTooltip">\u062F\u0631\u062C\u0629 \u0648\u0627\u062D\u062F\u0629 (C4 \u062A\u0643\u0648\u0646 7).</span><span id="Music_firstPart">\u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u0627\u0648\u0644</span><span id="Music_piano">\u0628\u064A\u0627\u0646\u0648</span><span id="Music_trumpet">\u0628\u0648\u0642</span><span id="Music_banjo">\u0628\u0627\u0646\u062C\u0648</span><span id="Music_violin">\u0643\u0645\u0627\u0646</span><span id="Music_guitar">\u0642\u064A\u062B\u0627\u0631\u0629</span><span id="Music_flute">\u0645\u0632\u0645\u0627\u0631</span><span id="Music_drum">\u0637\u0628\u0644</span><span id="Music_choir">\u062C\u0648\u0642\u0629</span><span id="Music_submitDisabled">\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u062D\u062A\u0649 \u064A\u062A\u0648\u0642\u0641\u060C \u062B\u0645 \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0645\u0648\u0633\u064A\u0642\u0627\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636.</span></div>';
};
if (goog.DEBUG) {
  Music.soy.messages.soyTemplateName = 'Music.soy.messages';
}


Music.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Music.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0645\u0648\u0633\u064A\u0642\u0649', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u0643\u062A\u0628\u062A\u0647."><img src="common/1x1.gif" class="run icon21"> \u0634\u063A\u0650\u0651\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C</button><button id="resetButton" class="primary" style="display: none" title="\u0623\u0648\u0642\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0648\u0623\u0639\u062F \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0648\u0649."><img src="common/1x1.gif" class="stop icon21"> \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0627\u0641\u062A\u062D \u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649."><img src="common/1x1.gif" class="gallery icon21"> \u0634\u0627\u0647\u062F \u0627\u0644\u0645\u0639\u0631\u0636</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u0623\u0631\u0633\u0644 \u0645\u0648\u0633\u064A\u0642\u0627\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636."><img src="common/1x1.gif" class="camera icon21"> \u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u0623\u0631\u0633\u0644 \u0645\u0648\u0633\u064A\u0642\u0627\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0627\u0644\u0639\u0646\u0648\u0627\u0646: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0625\u0644\u063A\u0627\u0621</button><button id="galleryOk" class="secondary" type="submit">\u0645\u0648\u0627\u0641\u0642</button></div></form></div>' : '') + Music.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u064A\u0639\u0645\u0644 \u062D\u0644\u0643\u060C \u0648\u0644\u0643\u0646 \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0642\u064A\u0627\u0645 \u0628\u0647 \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644\u060C \u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062F\u0627\u0644\u0627\u062A \u0644\u062A\u0642\u0644\u064A\u0644 \u0645\u0642\u062F\u0627\u0631 \u0627\u0644\u0643\u0648\u062F \u0627\u0644\u0645\u062A\u0643\u0631\u0631.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649 \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644 \u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0633\u062A\u062E\u062F\u0645 \u0622\u0644\u0629\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u0641\u064A \u0643\u0644 \u0643\u062A\u0644\u0629 \u0628\u062F\u0627\u064A\u0629.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u064A\u0644\u062D\u0646 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \'\u0627\u0644\u0623\u062E \u062C\u064A\u0645\u0633\'.<p>C4 - D4 - E4 - C4</p>' : (opt_ijData.level == 2) ? '\u062A\u062A\u064A\u062D \u0644\u0643 "\u0627\u0644\u0648\u0638\u064A\u0641\u0629" \u062A\u062C\u0645\u064A\u0639 \u0627\u0644\u0643\u062A\u0644 \u0645\u0639\u0627\u060C \u062B\u0645 \u062A\u0634\u063A\u064A\u0644\u0647\u0627 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0645\u0631\u0629.<div id="sampleHelp2" class="readonly"></div>\u0623\u0646\u0634\u0626 \u0648\u0638\u064A\u0641\u0629 \u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \'\u0627\u0644\u0623\u062E \u062C\u064A\u0645\u0633\'\u060C \u062A\u0634\u063A\u064A\u0644 \u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064A\u0641\u0629 \u0645\u0631\u062A\u064A\u0646\u060C \u0644\u0627 \u062A\u0636\u0641 \u0623\u064A\u0629 \u0643\u062A\u0644 \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u062C\u062F\u064A\u062F\u0629.' : (opt_ijData.level == 3) ? '\u0623\u0646\u0634\u0626 \u0648\u0638\u064A\u0641\u0629 \u062B\u0627\u0646\u064A\u0629 \u0644\u0644\u062C\u0632\u0621 \u0627\u0644\u062A\u0627\u0644\u064A \u0645\u0646 \'\u0627\u0644\u0623\u062E \u062C\u064A\u0645\u0633\'\u060C \u0627\u0644\u062F\u0631\u062C\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0623\u0637\u0648\u0644.<br><img src="music/note0.5.png" class="sampleNote">' : (opt_ijData.level == 4) ? '\u0623\u0646\u0634\u0626 \u0648\u0638\u064A\u0641\u0629 \u062B\u0627\u0644\u062B\u0629 \u0644\u0644\u062C\u0632\u0621 \u0627\u0644\u062A\u0627\u0644\u064A \u0645\u0646 \'\u0627\u0644\u0623\u062E \u062C\u064A\u0645\u0633\'\u060C \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0623\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644\u0649 \u0623\u0642\u0635\u0631.<br><img src="music/note0.125.png" class="sampleNote">' : (opt_ijData.level == 5) ? '\u0623\u0643\u0645\u0644 \u0627\u0644\u0644\u062D\u0646 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0640\'\u0627\u0644\u0623\u062E \u062C\u064A\u0645\u0633\'.' : (opt_ijData.level == 6) ? '\u062A\u062A\u064A\u062D \u0644\u0643 \u0647\u0630\u0647 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0627\u0644\u062A\u063A\u064A\u064A\u0631 \u0625\u0644\u0649 \u0622\u0644\u0629 \u0623\u062E\u0631\u0649.<div id="sampleHelp6" class="readonly"></div>\u062A\u0634\u063A\u064A\u0644 \u0646\u063A\u0645\u062A\u0643 \u0645\u0639 \u0643\u0645\u0627\u0646.' : (opt_ijData.level == 7) ? '\u062A\u0636\u064A\u0641 \u0647\u0630\u0647 \u0627\u0644\u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u062F\u064A\u062F \u062A\u0623\u062E\u064A\u0631\u0627 \u0635\u0627\u0645\u062A\u0627.<div id="sampleHelp7" class="readonly"></div>\u0625\u0646\u0634\u0627\u0621 \u0643\u062A\u0644\u0629 \u0628\u062F\u0627\u064A\u0629 \u062B\u0627\u0646\u064A\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0643\u062A\u0644\u062A\u064A \u062A\u0623\u062E\u064A\u0631\u060C \u062B\u0645 \u062A\u0634\u063A\u0644 \u0623\u064A\u0636\u0627 \'\u0627\u0644\u0623\u062E \u062C\u0627\u0643\'.' : (opt_ijData.level == 8) ? '\u0643\u0644 \u0628\u062F\u0627\u064A\u0629 \u0643\u062A\u0644\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0634\u063A\u0644 \'\u0627\u0644\u0623\u062E \u062C\u0627\u0643\' \u0645\u0631\u062A\u064A\u0646.' : (opt_ijData.level == 9) ? '\u0623\u0646\u0634\u0626 \u0623\u0631\u0628\u0639 \u0643\u062A\u0644 \u0628\u062F\u0627\u064A\u0629 \u062A\u0634\u063A\u0644 \u0643\u0644 \u0645\u0646\u0647\u0627 \'\u0627\u0644\u0623\u062E \u062C\u0627\u0643\' \u0645\u0631\u062A\u064A\u0646\u060C \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u062F\u062F \u0627\u0644\u0635\u062D\u064A\u062D \u0645\u0646 \u0643\u062A\u0644 \u0627\u0644\u062A\u0623\u062E\u064A\u0631.' : (opt_ijData.level == 10) ? '\u064A\u0644\u062D\u0646 \u0623\u064A \u0634\u064A\u0621 \u062A\u0631\u064A\u062F\u0647\u060C \u0644\u062F\u064A\u0643 \u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u0645\u0646 \u0627\u0644\u0643\u062A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u0643\u0634\u0627\u0641\u0647\u0627. \u0627\u0633\u062A\u0645\u062A\u0639!' + ((! opt_ijData.html) ? '<br><br>\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0632\u0631 "\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0636" \u0644\u0631\u0624\u064A\u0629 \u0645\u0627 \u0644\u062D\u0646\u0647 \u0627\u0644\u0622\u062E\u0631\u0648\u0646\u060C \u0625\u0630\u0627 \u0623\u0646\u0634\u0623\u062A \u0634\u064A\u0626\u0627 \u0645\u062B\u064A\u0631\u0627 \u0644\u0644\u0627\u0647\u062A\u0645\u0627\u0645\u060C \u0641\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0632\u0631 "\u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636" \u0644\u0646\u0634\u0631\u0647.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Music.soy.start.soyTemplateName = 'Music.soy.start';
}


Music.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u0645\u0648\u0633\u064A\u0642\u0649"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="\u0645\u0646\u0637\u0642"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u0627\u0644\u062D\u0644\u0642\u0627\u062A"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="\u0631\u064A\u0627\u0636\u064A\u0627\u062A"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u0642\u0648\u0627\u0626\u0645"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0645\u062A\u063A\u064A\u0631\u0627\u062A" custom="VARIABLE"></category><category name="\u0625\u062C\u0631\u0627\u0621\u0627\u062A" custom="PROCEDURE"></category>' : '<category name="\u0645\u0648\u0633\u064A\u0642\u0649"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + ((opt_ijData.level > 6) ? '<block type="music_rest_whole"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="music_instrument"></block>' : '') + ((opt_ijData.level > 6) ? '<block type="music_start" id="music_start"></block>' : '') + '</category>' + ((opt_ijData.level > 1) ? '<category name="\u0625\u062C\u0631\u0627\u0621\u0627\u062A" custom="PROCEDURE"></category>' : '')) + '</xml>';
};
if (goog.DEBUG) {
  Music.soy.toolbox.soyTemplateName = 'Music.soy.toolbox';
}