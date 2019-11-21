// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Movie.soy.
 */

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 x</span><span id="Movie_y1">\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 y</span><span id="Movie_x2">\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 x</span><span id="Movie_y2">\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 y</span><span id="Movie_radius">\u0440\u0430\u0434\u0438\u0443\u0441</span><span id="Movie_width">\u0434\u043B\u0438\u043D\u0430</span><span id="Movie_height">\u0448\u0438\u0440\u0438\u043D\u0430</span><span id="Movie_circleTooltip">\u0420\u0438\u0441\u0443\u0435\u0442 \u043A\u0440\u0443\u0433 \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u0440\u0430\u0434\u0438\u0443\u0441\u043E\u043C.</span><span id="Movie_circleDraw">\u043A\u0440\u0443\u0433</span><span id="Movie_rectTooltip">\u0420\u0438\u0441\u0443\u0435\u0442 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \\n\u0434\u043B\u0438\u043D\u043E\u0439 \u0438 \u0448\u0438\u0440\u0438\u043D\u043E\u0439. </span><span id="Movie_rectDraw">\u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A</span><span id="Movie_lineTooltip">\u0420\u0438\u0441\u0443\u0435\u0442 \u043E\u0442\u0440\u0435\u0437\u043E\u043A \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u044B \u043C\u0435\u0436\u0434\u0443 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \\n\u0442\u043E\u0447\u043A\u0430\u043C\u0438. </span><span id="Movie_lineDraw">\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C</span><span id="Movie_timeTooltip">\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u0444\u0438\u043B\u044C\u043C\u0435 (0-100).</span><span id="Movie_colourTooltip">\u041C\u0435\u043D\u044F\u0435\u0442 \u0446\u0432\u0435\u0442 \u043F\u0435\u0440\u0430.</span><span id="Movie_setColour">\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0432\u0435\u0442</span><span id="Movie_submitDisabled">\u0422\u0432\u043E\u0439 \u0444\u0438\u043B\u044C\u043C \u043D\u0435\u043F\u043E\u0434\u0432\u0438\u0436\u0435\u043D. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0431\u043B\u043E\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0435. \u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0444\u0438\u043B\u044C\u043C \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0424\u0438\u043B\u044C\u043C', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u0430\u043B\u0435\u0440\u0435\u044E \u0444\u0438\u043B\u044C\u043C\u043E\u0432."><img src="common/1x1.gif" class="gallery icon21"> \u0441\u043C. \u0413\u0430\u043B\u0435\u0440\u0435\u044E</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0430\u0448 \u0444\u0438\u043B\u044C\u043C \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E. "><img src="common/1x1.gif" class="camera icon21"> \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432 \u0413\u0430\u043B\u0435\u0440\u0435\u044E</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0430\u0448 \u0444\u0438\u043B\u044C\u043C \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u044E. </header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u041E\u0442\u043C\u0435\u043D\u0430</button><button id="galleryOk" class="secondary" type="submit">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u041F\u0435\u0440\u0435\u0434\u0432\u0438\u043D\u044C\u0442\u0435 \u0444\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0440\u0443\u0433 \u043D\u0430\u0432\u0435\u0440\u0445 \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B. \u0422\u043E\u0433\u0434\u0430 \u043E\u043D \u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u043E\u0437\u0430\u0434\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0444\u0438\u0433\u0443\u0440\u044B, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043A\u0430.' : (opt_ijData.level == 2) ? '\u042D\u0442\u043E\u0442 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043A\u0438\u043D\u043E. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0440\u0443\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u043B\u0430\u0441\u044C \u043F\u043E \u044D\u043A\u0440\u0430\u043D\u0443. \u041D\u0430\u0436\u043C\u0438 \u043A\u043D\u043E\u043F\u043A\u0443 \u00AB\u0421\u0442\u0430\u0440\u0442\u00BB, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C.<div id="sampleHelp2" class="readonly"></div>\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u043A\u0430\u0437\u0430 \u0444\u0438\u043B\u044C\u043C\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430 "time" \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u0442 \u043D\u0443\u043B\u044F \u0434\u043E 100. \u0418\u0437-\u0437\u0430 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430 \'y\' \u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 0 \u0438 \u0434\u043E\u0439\u0442\u0438 \u0442\u043E 100, \u044D\u0442\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E.' : (opt_ijData.level == 3) ? '\u0411\u043B\u043E\u043A "time" \u043E\u0442\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u043E\u0442 0 \u0434\u043E 100. \u041D\u043E \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043C\u0435\u043D\u044F\u0442\u044C \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0443 \'y\' \u0434\u0440\u0443\u0433\u043E\u0439 \u0440\u0443\u043A\u0438 \u043E\u0442 100 \u0434\u043E 0. \u041C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0441\u0442\u0443\u044E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0444\u043E\u0440\u043C\u0443\u043B\u0443, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F?' : (opt_ijData.level == 4) ? '\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0442\u043E, \u0447\u0442\u043E \u0442\u044B \u0443\u0437\u043D\u0430\u043B \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u043E\u0433\u0438 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u043B\u0438\u0441\u044C.' : (opt_ijData.level == 5) ? '\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0444\u043E\u0440\u043C\u0443\u043B\u0430 \u0434\u043B\u044F \u0440\u0443\u043A\u0438 \u043D\u0435\u043F\u0440\u043E\u0441\u0442\u0430. \u0412\u043E\u0442 \u043E\u0442\u0432\u0435\u0442:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u0414\u043E\u0431\u0430\u0432\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443 \u043F\u0430\u0440\u0443 \u0440\u0443\u043A.' : (opt_ijData.level == 7) ? '\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0431\u043B\u043E\u043A \u00AB\u0435\u0441\u043B\u0438\u00BB, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0443\u044E \u0433\u043E\u043B\u043E\u0432\u0443 \u0434\u043B\u044F \u043F\u0435\u0440\u0432\u043E\u0439 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u044B \u0444\u0438\u043B\u044C\u043C\u0430. \u0417\u0430\u0442\u0435\u043C \u043D\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0433\u043E\u043B\u043E\u0432\u0443 \u0434\u043B\u044F \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u044B \u0444\u0438\u043B\u044C\u043C\u0430.' : (opt_ijData.level == 8) ? '\u0421\u0434\u0435\u043B\u0430\u0439, \u0447\u0442\u043E\u0431\u044B \u043D\u043E\u0433\u0438 \u0431\u044B\u043B\u0438 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043D\u0430 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u0444\u0438\u043B\u044C\u043C\u0430.' : (opt_ijData.level == 9) ? '\u041D\u0430\u0440\u0438\u0441\u0443\u0439 \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u044E\u0449\u0438\u0439\u0441\u044F \u043A\u0440\u0443\u0433 \u0437\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C.' : (opt_ijData.level == 10) ? '\u0421\u0434\u0435\u043B\u0430\u0439 \u0444\u0438\u043B\u044C\u043C, \u043A\u0430\u043A\u043E\u0439 \u043F\u043E\u0436\u0435\u043B\u0430\u0435\u0448\u044C. \u0423 \u0442\u0435\u0431\u044F \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u043C\u043D\u043E\u0433\u043E \u043D\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0442\u043E\u0438\u0442 \u0438\u0437\u0443\u0447\u0438\u0442\u044C. \u041F\u0440\u0438\u044F\u0442\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0432\u0440\u0435\u043C\u044F!' + ((! opt_ijData.html) ? '<br><br>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0413\u0430\u043B\u0435\u0440\u0435\u044E", \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u0438\u043B\u044C\u043C\u044B \u0434\u0440\u0443\u0433\u0438\u0445. \u0415\u0441\u043B\u0438 \u0442\u044B \u0441\u043E\u0437\u0434\u0430\u043B \u0447\u0442\u043E-\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0435 - \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0413\u0430\u043B\u0435\u0440\u0435\u0435", \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0444\u0438\u043B\u044C\u043C\u043E\u043C \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="\u0424\u0438\u043B\u044C\u043C"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="\u0426\u0432\u0435\u0442"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="\u041B\u043E\u0433\u0438\u043A\u0430"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0426\u0438\u043A\u043B\u044B"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="\u0421\u043F\u0438\u0441\u043A\u0438"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435" custom="VARIABLE"></category><category name="\u0424\u0443\u043D\u043A\u0446\u0438\u0438" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}