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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Music_playNoteTooltip">\u0546\u057E\u0561\u0563\u0578\u0582\u0574 \u0567 \u0574\u0565\u056F \u0565\u0580\u0561\u056A\u0577\u057F\u0561\u056F\u0561\u0576 \u0576\u0578\u057F\u0561 \u0576\u0577\u057E\u0561\u056E \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0561\u0574\u0562 \\n\u0587 \u057F\u0578\u0576\u0561\u0575\u0576\u0578\u0582\u0569\u0575\u0561\u0574\u0562\u0589 </span><span id="Music_playNote">\u0576\u057E\u0561\u0563\u0565\u056C %1 \u0576\u0578\u057F\u0561\u055D %2</span><span id="Music_restTooltip">\u054D\u057A\u0561\u057D\u0578\u0582\u0574 \u0567 \u0576\u0577\u057E\u0561\u056E \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0561\u0574\u0562\u0589</span><span id="Music_restWholeTooltip">\u054D\u057A\u0561\u057D\u0578\u0582\u0574 \u0567 \u0574\u0565\u056F \u0561\u0574\u0562\u0578\u0572\u057B \u0576\u0578\u057F\u0561\u0589</span><span id="Music_rest">\u0570\u0561\u0563\u0576\u056B\u057D\u057F %1 \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0561\u0574\u0562</span><span id="Music_setInstrumentTooltip">\u0540\u0561\u057B\u0578\u0580\u0564 \u0576\u0578\u057F\u0561\u0576\u0565\u0580\u0568 \u0576\u057E\u0561\u0563\u0565\u056C\u0578\u0582\u0581 \u0561\u057C\u0561\u057B \u0574\u056B\u0561\u0581\u0576\u0578\u0582\u0574 \u0567 \\n\u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576 \u0565\u0580\u0561\u056A\u0577\u057F\u0561\u056F\u0561\u0576 \u0563\u0578\u0580\u056E\u056B\u0584\u0568\u0589 </span><span id="Music_setInstrument">\u0568\u0576\u057F\u0580\u0565\u056C %1 \u0563\u0578\u0580\u056E\u056B\u0584\u0568</span><span id="Music_startTooltip">\u0544\u056B\u0561\u0581\u0576\u0578\u0582\u0574 \u0567 \u0576\u0565\u0580\u057D\u056B \u0562\u056C\u0578\u056F\u0576\u0565\u0580\u0568, \u0565\u0580\u0562 \u00AB\u0533\u0578\u0580\u056E\u0561\u0580\u056F\u056B\u0580 \\n\u056E\u0580\u0561\u0563\u056B\u0580\u0568\u00BB \u056F\u0578\u0573\u0561\u056F\u0568 \u057D\u0565\u0572\u0574\u057E\u0561\u056E \u0567\u0589 </span><span id="Music_start">\u0565\u0580\u0562 %1 -\u0568 \u057D\u0565\u0572\u0574\u057E\u0561\u056E \u0567</span><span id="Music_pitchTooltip">\u0544\u0565\u056F \u0576\u0578\u057F\u0561 (C4-\u0568  7 \u0567):</span><span id="Music_firstPart">\u0561\u057C\u0561\u057B\u056B\u0576 \u0574\u0561\u057D</span><span id="Music_piano">\u0564\u0561\u0577\u0576\u0561\u0574\u0578\u0582\u0580</span><span id="Music_trumpet">\u0577\u0565\u0583\u0578\u0580</span><span id="Music_banjo">\u0562\u0561\u0576\u057B\u0578</span><span id="Music_violin">\u057B\u0578\u0582\u0569\u0561\u056F</span><span id="Music_guitar">\u056F\u056B\u0569\u0561\u057C</span><span id="Music_flute">\u0586\u056C\u0565\u0575\u057F\u0561</span><span id="Music_drum">\u0569\u0574\u0562\u0578\u0582\u056F</span><span id="Music_choir">\u0565\u0580\u0563\u0579\u0561\u056D\u0578\u0582\u0574\u0562</span><span id="Music_submitDisabled">\u0531\u0577\u056D\u0561\u057F\u0565\u0581\u0580\u0578\u0582 \u056E\u0580\u0561\u0563\u056B\u0580\u0568 \u0574\u056B\u0576\u0579 \u0561\u0575\u0576 \u056F\u0561\u057E\u0561\u0580\u057F\u057E\u056B\u0589 \u0531\u057A\u0561 \u056F\u0561\u0580\u0578\u0572 \u0565\u057D \u057A\u0561\u0570\u057A\u0561\u0576\u0565\u056C \u0561\u0575\u0576 \u057A\u0561\u057F\u056F\u0565\u0580\u0561\u057D\u0580\u0561\u0570\u0578\u0582\u0574\u0589</span></div>';
};
if (goog.DEBUG) {
  Music.soy.messages.soyTemplateName = 'Music.soy.messages';
}


Music.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Music.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0535\u0580\u0561\u056A\u0577\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="\u0533\u0578\u0580\u056E\u0561\u0580\u056F\u056B\u0580 \u0584\u0578 \u0563\u0580\u0561\u056E \u056E\u0580\u0561\u0563\u056B\u0580\u0568:"><img src="common/1x1.gif" class="run icon21"> \u0533\u0578\u0580\u056E\u0561\u0580\u056F\u056B\u0580 \u053E\u0580\u0561\u0563\u056B\u0580\u0568</button><button id="resetButton" class="primary" style="display: none" title="\u0534\u0561\u0564\u0561\u0580\u0565\u0581\u0576\u0565\u056C \u056E\u0580\u0561\u0563\u056B\u0580\u0568 \u0587 \u057E\u0565\u0580\u0561\u056F\u0561\u0576\u0563\u0576\u0565\u056C \u057D\u056F\u0566\u0562\u0576\u0561\u056F\u0561\u0576 \u057E\u056B\u0573\u0561\u056F\u0568:."><img src="common/1x1.gif" class="stop icon21"> \u054E\u0565\u0580\u0561\u056F\u0561\u0576\u0563\u0576\u0565\u056C</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0532\u0561\u0581\u0565\u056C \u0565\u0580\u0561\u056A\u0577\u057F\u0578\u0582\u0569\u0575\u0561\u0576 \u0571\u0561\u0575\u0576\u0561\u0564\u0561\u0580\u0561\u0576\u0568:."><img src="common/1x1.gif" class="gallery icon21"> \u054F\u0565\u057D\u0576\u0565\u056C \u0541\u0561\u0575\u0576\u0561\u0564\u0561\u0580\u0561\u0576\u0568</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u054A\u0561\u0570\u057A\u0561\u0576\u0565\u056C \u0565\u0580\u0561\u056A\u0577\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u0564\u0561\u0580\u0561\u0576\u0578\u0582\u0574\u0589."><img src="common/1x1.gif" class="camera icon21"> \u054A\u0561\u0570\u057A\u0561\u0576\u0565\u056C \u0534\u0561\u0580\u0561\u0576\u0578\u0582\u0574\u0589</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u054A\u0561\u0570\u057A\u0561\u0576\u0565\u056C \u0565\u0580\u0561\u056A\u0577\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u0564\u0561\u0580\u0561\u0576\u0578\u0582\u0574\u0589.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u054E\u0565\u0580\u0576\u0561\u0563\u056B\u0580. <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0549\u0565\u0572\u0561\u0580\u056F\u0565\u056C</button><button id="galleryOk" class="secondary" type="submit">\u053C\u0561\u057E</button></div></form></div>' : '') + Music.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0554\u0578 \u056C\u0578\u0582\u056E\u0578\u0582\u0574\u0568 \u0561\u0577\u056D\u0561\u057F\u0578\u0582\u0574 \u0567, \u0562\u0561\u0575\u0581 \u056F\u0561\u0580\u0578\u0572 \u0565\u057D \u0561\u057E\u0565\u056C\u056B \u056C\u0561\u057E \u0561\u0576\u0565\u056C: \u053F\u056B\u0580\u0561\u057C\u056B\u0580 \u0586\u0578\u0582\u0576\u056F\u0581\u056B\u0561\u0576\u0565\u0580 \u056F\u0580\u056F\u0576\u057E\u0578\u0572 \u056F\u0578\u0564\u056B \u0584\u0561\u0576\u0561\u056F\u0568 \u056F\u0580\u0573\u0561\u057F\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580:</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0544\u0565\u0572\u0565\u0564\u056B\u0576 \u0561\u057E\u0565\u056C\u056B \u056C\u0561\u057E \u056F\u0570\u0576\u0579\u056B, \u0565\u0569\u0565 \u0575\u0578\u0582\u0580\u0561\u0584\u0561\u0576\u0579\u0575\u0578\u0582\u0580 \u057D\u056F\u057D\u057E\u0578\u0572 \u0562\u056C\u0578\u056F\u0578\u0582\u0574 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0565\u057D \u057F\u0561\u0580\u0562\u0565\u0580 \u0563\u0578\u0580\u056E\u056B\u0584\u0576\u0565\u0580:</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u053F\u0561\u0566\u0574\u056B\u0580 \u00ABFr\u00E8re Jacques\u00BB\u058A\u056B \u0561\u057C\u0561\u057B\u056B\u0576 4 \u0576\u0578\u057F\u0561\u0576\u0565\u0580\u0568\u0589<p>C4 - D4 - E4 - C4</p>' : (opt_ijData.level == 2) ? '\u00AB\u0556\u0578\u0582\u0576\u056F\u0581\u056B\u0561\u0576\u00BB \u0569\u0578\u0582\u0575\u056C\u0561\u057F\u0580\u0578\u0582\u0574 \u0567 \u056D\u0574\u0562\u0561\u0578\u0580\u0565\u056C \u0562\u056C\u0578\u056F\u0576\u0565\u0580\u0568 \u0587 \u0570\u0565\u057F\u0578 \u0562\u0561\u0566\u0574\u0561\u056F\u056B \u0563\u0578\u0580\u056E\u0561\u0580\u056F\u0565\u056C \u0564\u0580\u0561\u0576\u0584\u0589<div id="sampleHelp2" class="readonly"></div>\u054D\u057F\u0565\u056E\u056B\u0580 \u0586\u0578\u0582\u0576\u056F\u0581\u056B\u0561, \u0578\u0580\u0568 \u056F\u0576\u057E\u0561\u0563\u056B \u00ABFr\u00E8re Jacques\u00BB\u058A\u056B \u0561\u057C\u0561\u057B\u056B\u0576 4 \u0576\u0578\u057F\u0561\u0576\u0565\u0580\u0568\u0589 \u0533\u0578\u0580\u056E\u0561\u0580\u056F\u056B\u0580 \u0561\u0575\u0576 2 \u0561\u0576\u0563\u0561\u0574\u0589 \u0544\u056B\u055B \u0561\u057E\u0565\u056C\u0561\u0581\u0580\u0578\u0582 \u0576\u0578\u057F\u0561\u0576\u0565\u0580\u056B \u0570\u0561\u057E\u0565\u056C\u0575\u0561\u056C \u0562\u056C\u0578\u056F\u0576\u0565\u0580\u0589' : (opt_ijData.level == 3) ? '\u054D\u057F\u0565\u0572\u056E\u056B\u0580 \u0565\u0580\u056F\u0580\u0578\u0580\u0564 \u0586\u0578\u0582\u0576\u056F\u0581\u056B\u0561\u0576 \'Fr\u00E8re Jacques\'\u058A\u056B \u0570\u0561\u057B\u0578\u0580\u0564 \u0574\u0561\u057D\u056B \u0570\u0561\u0574\u0561\u0580\u0589 \u054E\u0565\u0580\u057B\u056B\u0576 \u0576\u0578\u057F\u0561\u0576 \u0561\u057E\u0565\u056C\u056B \u0565\u0580\u056F\u0561\u0580 \u0567\u0589<br><img src="music/note0.5.png" class="sampleNote">' : (opt_ijData.level == 4) ? '\u054D\u057F\u0565\u0572\u056E\u056B\u0580 3\u058A\u0580\u0564 \u0586\u0578\u0582\u0576\u056F\u0581\u056B\u0561\u0576 \u00ABFr\u00E8re Jacques\u00BB \u0565\u0580\u0563\u056B \u0570\u0561\u057B\u0578\u0580\u0564 \u0574\u0561\u057D\u056B \u0570\u0561\u0574\u0561\u0580\u0589 \u0531\u057C\u0561\u057B\u056B\u0576 4 \u0576\u0578\u057F\u0561\u0576\u0565\u0580\u0568 \u0561\u057E\u0565\u056C\u056B \u056F\u0561\u0580\u0573 \u0565\u0576\u0589 <br><img src="music/note0.125.png" class="sampleNote">' : (opt_ijData.level == 5) ? '\u0531\u057E\u0561\u0580\u057F\u056B\u0580 \u00ABFr\u00E8re Jacques\u00BB\u058A\u056B \u0574\u0565\u0572\u0565\u0564\u056B\u0576\u0589' : (opt_ijData.level == 6) ? '\u0531\u0575\u057D \u0576\u0578\u0580 \u0562\u056C\u0578\u056F\u0568 \u0576\u0578\u0580 \u0563\u0578\u0580\u056E\u056B\u0584 \u057E\u0565\u0580\u0581\u0576\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u0567\u0589<div id="sampleHelp6" class="readonly"></div>\u0546\u057E\u0561\u0563\u056B\u0580 \u0584\u0578 \u0574\u0565\u0572\u0565\u0564\u056B\u0576 \u057B\u0578\u0582\u0569\u0561\u056F\u056B \u057E\u0580\u0561:' : (opt_ijData.level == 7) ? '\u0531\u0575\u057D \u0562\u056C\u0578\u056F\u0568 \u0561\u057E\u0565\u056C\u0561\u0581\u0576\u0578\u0582\u0574 \u0567 \u056C\u0578\u0582\u057C \u0568\u0576\u0564\u0570\u0561\u057F\u0578\u0582\u0574\u0589<div id="sampleHelp7" class="readonly"></div>\u054D\u057F\u0565\u0572\u056E\u056B\u0580 \u057D\u056F\u0566\u0562\u056B 2\u058A\u0580\u0564 \u0562\u056C\u0578\u056F\u0568, \u0578\u0580\u0568 \u056F\u0578\u0582\u0576\u0565\u0576\u0561 \u0564\u0561\u0564\u0561\u0580\u056B 2 \u0562\u056C\u0578\u056F\u0576\u0565\u0580, \u0561\u057A\u0561 \u0576\u057E\u0561\u0563\u056B\u0580 \u00ABFr\u00E8re Jacques\u00BB\u058A\u0568\u0589' : (opt_ijData.level == 8) ? '\u0545\u0578\u0582\u0580\u0561\u0584\u0561\u0576\u0579\u0575\u0578\u0582\u0580 \u057D\u056F\u0566\u0562\u056B \u0562\u056C\u0578\u056F \u057A\u056B\u057F\u056B \u00ABFr\u00E8re Jacques\u00BB\u058A\u0568 \u056F\u0580\u056F\u0576\u0561\u056F\u056B \u0576\u057E\u0561\u0563\u056B\u0589' : (opt_ijData.level == 9) ? '\u054D\u057F\u0565\u0572\u056E\u056B\u0580 4 \u057D\u056F\u0566\u0562\u056B \u0562\u056C\u0578\u056F\u0589 \u0545\u0578\u0582\u0580\u0561\u0584\u0561\u0576\u0579\u0575\u0578\u0582\u0580\u0568 \u057A\u056B\u057F\u056B 2 \u0561\u0576\u0563\u0561\u0574 \u0576\u057E\u0561\u0563\u056B \u00ABFr\u00E8re Jacques\u00BB\u058A\u0568\u0589 \u0531\u057E\u0565\u056C\u0561\u0581\u0580\u0578\u0582 \u0573\u056B\u0577\u057F \u0584\u0561\u0576\u0561\u056F\u0578\u057E \u0564\u0561\u0564\u0561\u0580\u056B \u0562\u056C\u0578\u056F\u0576\u0565\u0580\u0589' : (opt_ijData.level == 10) ? '\u0546\u057E\u0561\u0563\u056B\u0580 \u0561\u0575\u0576, \u056B\u0576\u0579 \u0581\u0561\u0576\u056F\u0561\u0576\u0578\u0582\u0574 \u0565\u057D: \u0534\u0578\u0582 \u0578\u0582\u0576\u0565\u057D \u0574\u0565\u056E \u0584\u0561\u0576\u0561\u056F\u0578\u0582\u0569\u0575\u0561\u0574\u0562 \u0576\u0578\u0580 \u0562\u056C\u0578\u056F\u0576\u0565\u0580, \u0578\u0580\u0578\u0576\u0584 \u056F\u0561\u0580\u0578\u0572 \u0565\u057D \u0578\u0582\u057D\u0578\u0582\u0574\u0576\u0561\u057D\u056B\u0580\u0565\u056C: \u0536\u057E\u0561\u0580\u0573\u0561\u0581\u056B\u0580:' + ((! opt_ijData.html) ? '<br><br>\u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u056B\u0580 "\u054F\u0565\u057D\u0576\u0565\u056C \u054A\u0561\u057F\u056F\u0565\u0580\u0561\u057D\u0580\u0561\u0570\u0568" \u056F\u0578\u0573\u0561\u056F\u0568 \u0561\u0575\u056C\u0578\u0581 \u0561\u0577\u056D\u0561\u057F\u0561\u0576\u0584\u0576\u0565\u0580\u0568 \u057F\u0565\u057D\u0576\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580\u0589 \u0535\u0569\u0565 \u0564\u0578\u0582 \u0578\u0580\u0587\u0567 \u0570\u0565\u057F\u0561\u0584\u0580\u0584\u056B\u0580 \u0562\u0561\u0576 \u0565\u057D \u056F\u0561\u057F\u0561\u0580\u0565\u056C, \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u056B\u0580 "\u054A\u0561\u0570\u057A\u0561\u0576\u0565\u056C \u057A\u0561\u057F\u056F\u0565\u0580\u0561\u057D\u0580\u0561\u0570\u0578\u0582\u0574" \u056F\u0578\u0573\u0561\u056F\u0568, \u0578\u0580\u057A\u056B\u057D\u056B \u0584\u0578 \u0561\u0577\u056D\u0561\u057F\u0561\u0576\u0584\u0568 \u0576\u0561\u0587 \u0578\u0582\u0580\u056B\u0577\u0576\u0565\u0580\u0568 \u057F\u0565\u057D\u0576\u0565\u0576\u0589' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Music.soy.start.soyTemplateName = 'Music.soy.start';
}


Music.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u0535\u0580\u0561\u056A\u0577\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="\u054F\u0580\u0561\u0574\u0561\u0562\u0561\u0576\u0561\u056F\u0561\u0576"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u053F\u0580\u056F\u0576\u0578\u0572 \u0570\u0561\u0576\u0563\u0578\u0582\u0575\u0581\u0576\u0565\u0580"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="\u0544\u0561\u0569\u0565\u0574\u0561\u057F\u056B\u056F\u0561"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u0551\u0561\u0576\u056F\u0565\u0580"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0553\u0578\u0583\u0578\u056D\u0561\u056F\u0561\u0576\u0576\u0565\u0580" custom="VARIABLE"></category><category name="\u0533\u0578\u0580\u056E\u0561\u057C\u0578\u0582\u0575\u0569\u0576\u0565\u0580" custom="PROCEDURE"></category>' : '<category name="\u0535\u0580\u0561\u056A\u0577\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' + ((opt_ijData.level > 6) ? '<block type="music_rest_whole"></block>' : '') + ((opt_ijData.level > 5) ? '<block type="music_instrument"></block>' : '') + ((opt_ijData.level > 6) ? '<block type="music_start" id="music_start"></block>' : '') + '</category>' + ((opt_ijData.level > 1) ? '<category name="\u0533\u0578\u0580\u056E\u0561\u057C\u0578\u0582\u0575\u0569\u0576\u0565\u0580" custom="PROCEDURE"></category>' : '')) + '</xml>';
};
if (goog.DEBUG) {
  Music.soy.toolbox.soyTemplateName = 'Music.soy.toolbox';
}
