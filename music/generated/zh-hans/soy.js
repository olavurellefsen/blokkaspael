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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Music_playNoteTooltip">\u6F14\u594F\u4E00\u4E2A\u7279\u5B9A\u6301\u7EED\u65F6\u95F4\u548C\u7279\u5B9A\u97F3\u9AD8\u7684\u97F3\u7B26\u3002</span><span id="Music_playNote">\u6F14\u594F%1 \u97F3\u9AD8\u4E3A%2</span><span id="Music_restTooltip">\u7B49\u5F85\u4E00\u6BB5\u7279\u5B9A\u7684\u65F6\u957F\u3002</span><span id="Music_restWholeTooltip">\u7B49\u5F85\u4E00\u4E2A\u5168\u97F3\u7B26\u3002</span><span id="Music_rest">\u4F11\u6B62 %1</span><span id="Music_setInstrumentTooltip">\u5F53\u6F14\u594F\u540E\u7EED\u97F3\u7B26\u65F6\uFF0C\u5207\u6362\u5230\u7279\u5B9A\u4E50\u5668\u3002</span><span id="Music_setInstrument">\u8BBE\u7F6E\u4E50\u5668\u4E3A%1</span><span id="Music_startTooltip">\u5F53\u70B9\u51FB\u201C\u8FD0\u884C\u7A0B\u5E8F\u201D\u6309\u94AE\u65F6\uFF0C\u6267\u884C\u5757\u5185\u7684\u4EE3\u7801\u3002</span><span id="Music_start">\u5F53\u70B9\u51FB%1\u65F6</span><span id="Music_pitchTooltip">\u4E00\u4E2A\u97F3\u9AD8\uFF08C4\u75287\u8868\u793A\uFF09\u3002</span><span id="Music_firstPart">\u7B2C\u4E00\u90E8\u5206</span><span id="Music_piano">\u94A2\u7434</span><span id="Music_trumpet">\u5C0F\u53F7</span><span id="Music_banjo">\u73ED\u5353\u7434</span><span id="Music_violin">\u5C0F\u63D0\u7434</span><span id="Music_guitar">\u5409\u4ED6</span><span id="Music_flute">\u957F\u7B1B</span><span id="Music_drum">\u9F13</span><span id="Music_choir">\u5408\u5531</span><span id="Music_submitDisabled">\u8FD0\u884C\u60A8\u7684\u7A0B\u5E8F\u76F4\u5230\u5B83\u505C\u4E0B\u6765\u3002\u4E4B\u540E\u60A8\u53EF\u4EE5\u63D0\u4EA4\u60A8\u7684\u97F3\u4E50\u4F5C\u54C1\u5230\u753B\u5ECA\u91CC\u3002</span></div>';
};
if (goog.DEBUG) {
  Music.soy.messages.soyTemplateName = 'Music.soy.messages';
}


Music.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Music.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u97F3\u4E50', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="\u8FD0\u884C\u60A8\u7F16\u5199\u7684\u7A0B\u5E8F\u3002"><img src="common/1x1.gif" class="run icon21"> \u8FD0\u884C\u7A0B\u5E8F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u7A0B\u5E8F\u8FD0\u884C\u5E76\u91CD\u7F6E\u672C\u5173\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u6253\u5F00\u97F3\u4E50\u753B\u5ECA\u3002"><img src="common/1x1.gif" class="gallery icon21"> \u6D4F\u89C8\u753B\u5ECA</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u63D0\u4EA4\u60A8\u7684\u97F3\u4E50\u4F5C\u54C1\u5230\u753B\u5ECA\u91CC\u3002"><img src="common/1x1.gif" class="camera icon21"> \u63D0\u4EA4\u81F3\u753B\u5ECA</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u63D0\u4EA4\u60A8\u7684\u97F3\u4E50\u4F5C\u54C1\u5230\u753B\u5ECA\u91CC\u3002</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u6807\u9898\uFF1A <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u53D6\u6D88</button><button id="galleryOk" class="secondary" type="submit">\u786E\u8BA4</button></div></form></div>' : '') + Music.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u60A8\u7684\u89E3\u51B3\u65B9\u6848\u53EF\u4EE5\u5DE5\u4F5C\uFF0C\u4F46\u60A8\u53EF\u4EE5\u505A\u7684\u66F4\u597D\u3002\u4F7F\u7528\u51FD\u6570\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u6570\u91CF\u3002</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u5982\u679C\u60A8\u5728\u6BCF\u4E2A\u8D77\u59CB\u5757\u4F7F\u7528\u4E0D\u540C\u7684\u4E50\u5668\uFF0C\u97F3\u4E50\u6F14\u594F\u6548\u679C\u4F1A\u66F4\u4F73\u3002</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u7EC4\u5408\u51FA\u4E50\u66F2\u201C\u96C5\u514B\u5144\u5F1F\u201D\u7684\u524D\u56DB\u4E2A\u97F3\u7B26\u3002<p>C4 - D4 - E4 - C4</p>' : (opt_ijData.level == 2) ? '\u4E00\u4E2A\u201C\u51FD\u6570\u201D\u5141\u8BB8\u60A8\u5C06\u5757\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u7136\u540E\u591A\u6B21\u8FD0\u884C\u5B83\u4EEC\u3002<div id="sampleHelp2" class="readonly"></div>\u521B\u9020\u4E00\u4E2A\u51FD\u6570\u6765\u6F14\u594F\u4E50\u66F2\u201C\u96C5\u514B\u5144\u5F1F\u201D\u7684\u524D\u56DB\u4E2A\u97F3\u7B26\u3002\u8FD0\u884C\u8FD9\u4E2A\u51FD\u6570\u4E24\u904D\u3002\u4E0D\u8981\u589E\u52A0\u65B0\u7684\u97F3\u7B26\u5757\u3002' : (opt_ijData.level == 3) ? '\u4E3A\u4E50\u66F2\u201C\u96C5\u514B\u5144\u5F1F\u201D\u7684\u4E0B\u4E00\u90E8\u5206\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u51FD\u6570\u3002\u6700\u540E\u4E00\u4E2A\u97F3\u7B26\u4F1A\u66F4\u957F\u4E00\u70B9\u3002<br><img src="music/note0.5.png" class="sampleNote">' : (opt_ijData.level == 4) ? '\u4E3A\u4E50\u66F2\u201C\u96C5\u514B\u5144\u5F1F\u201D\u7684\u4E0B\u4E00\u90E8\u5206\u521B\u5EFA\u7B2C\u4E09\u4E2A\u51FD\u6570\u3002\u524D\u56DB\u4E2A\u97F3\u7B26\u66F4\u77ED\u3002<br><img src="music/note0.125.png" class="sampleNote">' : (opt_ijData.level == 5) ? '\u5B8C\u6210\u201C\u96C5\u514B\u5144\u5F1F\u201D\u7684\u6574\u4E2A\u66F2\u5B50\u3002' : (opt_ijData.level == 6) ? '\u8FD9\u4E2A\u65B0\u5757\u8BA9\u60A8\u80FD\u591F\u6539\u6210\u53E6\u4E00\u4E50\u5668\u3002<div id="sampleHelp6" class="readonly"></div>\u7528\u5C0F\u63D0\u7434\u6765\u6F14\u594F\u60A8\u7684\u66F2\u5B50\u3002' : (opt_ijData.level == 7) ? '\u8FD9\u4E2A\u65B0\u5757\u6DFB\u52A0\u4E86\u4E00\u4E2A\u65E0\u58F0\u7684\u5EF6\u8FDF\u3002<div id="sampleHelp7" class="readonly"></div>\u521B\u5EFA\u7B2C\u4E8C\u4E2A\u5F00\u59CB\u5757\uFF0C\u5B83\u5E26\u6709\u4E24\u4E2A\u5EF6\u65F6\u5757\uFF0C\u7136\u540E\u540C\u6837\u6F14\u594F\u201C\u96C5\u514B\u5144\u5F1F\u201D\u3002' : (opt_ijData.level == 8) ? '\u8BA9\u6BCF\u4E2A\u5F00\u59CB\u5757\u6F14\u594F\u201C\u96C5\u514B\u5144\u5F1F\u201D\u4E24\u904D\u3002' : (opt_ijData.level == 9) ? '\u521B\u5EFA\u56DB\u4E2A\u5F00\u59CB\u5757\uFF0C\u6BCF\u4E2A\u90FD\u4F1A\u6F14\u594F\u201C\u96C5\u514B\u5144\u5F1F\u201D\u4E24\u904D\u3002\u6DFB\u52A0\u6B63\u786E\u7684\u5EF6\u65F6\u5757\u6570\u91CF\u3002' : (opt_ijData.level == 10) ? '\u6309\u60A8\u7684\u5174\u8DA3\u6765\u8C31\u66F2\u5427\u3002\u73B0\u5728\u60A8\u62E5\u6709\u4E86\u5927\u91CF\u7684\u65B0\u5757\u53EF\u4F9B\u63A2\u7D22\u3002\u73A9\u5F97\u6109\u5FEB\uFF01' + ((! opt_ijData.html) ? '<br><br>\u70B9\u51FB"\u6D4F\u89C8\u753B\u5ECA"\u6309\u94AE\u6765\u6D4F\u89C8\u5176\u4ED6\u4EBA\u7684\u4F5C\u54C1\u3002\u5982\u679C\u60A8\u521B\u4F5C\u51FA\u4E86\u4E00\u4E9B\u6709\u8DA3\u7684\u97F3\u4E50\u4F5C\u54C1\uFF0C\u53EF\u4EE5\u70B9\u51FB"\u63D0\u4EA4\u81F3\u753B\u5ECA"\u6309\u94AE\u6765\u53D1\u5E03\u5B83\u3002' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Music.soy.start.soyTemplateName = 'Music.soy.start';
}


Music.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u97F3\u4E50"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="\u903B\u8F91"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u5FAA\u73AF"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="\u6570\u5B66"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u5217\u8868"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u53D8\u91CF" custom="VARIABLE"></category><category name="\u51FD\u6570" custom="PROCEDURE"></category>' : '<category name="\u97F3\u4E50"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + ((opt_ijData.level > 6) ? '<block type="music_rest_whole"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="music_instrument"></block>' : '') + ((opt_ijData.level > 6) ? '<block type="music_start" id="music_start"></block>' : '') + '</category>' + ((opt_ijData.level > 1) ? '<category name="\u51FD\u6570" custom="PROCEDURE"></category>' : '')) + '</xml>';
};
if (goog.DEBUG) {
  Music.soy.toolbox.soyTemplateName = 'Music.soy.toolbox';
}