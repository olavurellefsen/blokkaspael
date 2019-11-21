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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">\u041F\u0435\u0440\u0435\u043C\u0456\u0449\u0443\u0454 \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0443 \u0432\u043F\u0435\u0440\u0435\u0434 \u0430\u0431\u043E \u043D\u0430\u0437\u0430\u0434 \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u0443 \\n\u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C. </span><span id="Turtle_moveForward">\u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0432\u043F\u0435\u0440\u0435\u0434 \u043D\u0430</span><span id="Turtle_moveBackward">\u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u043D\u0430\u0437\u0430\u0434 \u043D\u0430</span><span id="Turtle_turnTooltip">\u041F\u043E\u0432\u0435\u0440\u0442\u0430\u0454 \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0443 \u0432\u043B\u0456\u0432\u043E \u0430\u0431\u043E \u0432\u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0432\u043A\u0430\u0437\u0430\u043D\u0443 \\n\u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432. </span><span id="Turtle_turnRight">\u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447 \u043D\u0430</span><span id="Turtle_turnLeft">\u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043B\u0456\u0432\u043E\u0440\u0443\u0447 \u043D\u0430</span><span id="Turtle_widthTooltip">\u0417\u043C\u0456\u043D\u044E\u0454 \u0448\u0438\u0440\u0438\u043D\u0443 \u043F\u0435\u0440\u0430.</span><span id="Turtle_setWidth">\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0448\u0438\u0440\u0438\u043D\u0443</span><span id="Turtle_colourTooltip">\u0417\u043C\u0456\u043D\u044E\u0454 \u043A\u043E\u043B\u0456\u0440 \u043F\u0435\u0440\u0430.</span><span id="Turtle_setColour">\u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440</span><span id="Turtle_penTooltip">\u041F\u0456\u0434\u043D\u0456\u043C\u0430\u0454 \u0430\u0431\u043E \u043E\u043F\u0443\u0441\u043A\u0430\u0454 \u043F\u0435\u0440\u043E, \u0449\u043E\u0431 \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0430\u0431\u043E \\n\u043F\u043E\u0447\u0430\u0442\u0438 \u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438. </span><span id="Turtle_penUp">\u043F\u0456\u0434\u043D\u044F\u0442\u0438 \u043F\u0435\u0440\u043E</span><span id="Turtle_penDown">\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043F\u0435\u0440\u043E</span><span id="Turtle_turtleVisibilityTooltip">\u0420\u043E\u0431\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0443 (\u043A\u043E\u043B\u043E \u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0443) \u0432\u0438\u0434\u0438\u043C\u043E\u044E \u0430\u0431\u043E \\n\u043D\u0435\u0432\u0438\u0434\u0438\u043C\u043E\u044E. </span><span id="Turtle_hideTurtle">\u043F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0443</span><span id="Turtle_showTurtle">\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0443</span><span id="Turtle_printHelpUrl">https://uk.wikipedia.org/wiki/\u0414\u0440\u0443\u043A\u0430\u0440\u0441\u0442\u0432\u043E</span><span id="Turtle_printTooltip">\u041C\u0430\u043B\u044E\u0454 \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 \u0440\u0443\u0445\u0443 \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0438 \u043D\u0430 \u043C\u0456\u0441\u0446\u0456 \u0457\u0457 \\n\u0440\u043E\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043D\u043D\u044F. </span><span id="Turtle_print">\u0434\u0440\u0443\u043A\u0443\u0432\u0430\u0442\u0438</span><span id="Turtle_fontHelpUrl">https://uk.wikipedia.org/wiki/\u0428\u0440\u0438\u0444\u0442</span><span id="Turtle_fontTooltip">\u0412\u0438\u0437\u043D\u0430\u0447\u0430\u0454 \u0448\u0440\u0438\u0444\u0442, \u0449\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0431\u043B\u043E\u043A\u043E\u043C \u0434\u0440\u0443\u043A\u0443.</span><span id="Turtle_font">\u0448\u0440\u0438\u0444\u0442</span><span id="Turtle_fontSize">\u0440\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443</span><span id="Turtle_fontNormal">\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439</span><span id="Turtle_fontBold">\u0436\u0438\u0440\u043D\u0438\u0439</span><span id="Turtle_fontItalic">\u043A\u0443\u0440\u0441\u0438\u0432</span><span id="Turtle_submitDisabled">\u0417\u0430\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0456 \u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u0457\u0457 \u0437\u0443\u043F\u0438\u043D\u043A\u0438. \u041F\u043E\u0442\u0456\u043C \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u043E\u0437\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0441\u0432\u0456\u0439 \u043C\u0430\u043B\u044E\u043D\u043E\u043A \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u0457.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0427\u0435\u0440\u0435\u043F\u0430\u0445\u0430', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443."><img src="common/1x1.gif" class="run icon21"> \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443</button><button id="resetButton" class="primary" style="display: none" title="\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0456 \u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0432 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0441\u0442\u0430\u043D."><img src="common/1x1.gif" class="stop icon21"> \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u044E \u043C\u0430\u043B\u044E\u043D\u043A\u0456\u0432."><img src="common/1x1.gif" class="gallery icon21"> \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0413\u0430\u043B\u0435\u0440\u0435\u044E</button></form></td><td style="text-align: center;"><button id="submitButton" title="\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u043C\u0430\u043B\u044E\u043D\u043E\u043A \u0434\u043E \u0433\u0430\u043B\u0435\u0440\u0435\u0457."><img src="common/1x1.gif" class="camera icon21"> \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0432 \u0413\u0430\u043B\u0435\u0440\u0435\u044E</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u043C\u0430\u043B\u044E\u043D\u043E\u043A \u0434\u043E \u0433\u0430\u043B\u0435\u0440\u0435\u0457.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438</button><button id="galleryOk" class="secondary" type="submit">\u0413\u0430\u0440\u0430\u0437\u0434</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0412\u0430\u0448 \u0440\u043E\u0437\u0432\u2019\u044F\u0437\u043E\u043A \u043F\u0440\u0430\u0446\u044E\u0454, \u0430\u043B\u0435 \u043C\u043E\u0436\u043D\u0430 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043A\u0440\u0430\u0449\u0435. ' + ((opt_ijData.level < 3) ? '\u041D\u0430\u043C\u0430\u043B\u044E\u0439\u0442\u0435 \u0444\u0456\u0433\u0443\u0440\u0443, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0448\u0438 \u0432\u0441\u044C\u043E\u0433\u043E \u0442\u0440\u0438 \u0431\u043B\u043E\u043A\u0438.' : '\u041D\u0430\u043C\u0430\u043B\u044E\u0439\u0442\u0435 \u0437\u0456\u0440\u043A\u0443, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0448\u0438 \u0432\u0441\u044C\u043E\u0433\u043E \u0447\u043E\u0442\u0438\u0440\u0438 \u0431\u043B\u043E\u043A\u0438.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? '\u0421\u0442\u0432\u043E\u0440\u0456\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443, \u044F\u043A\u0430 \u043D\u0430\u043C\u0430\u043B\u044E\u0454 \u043A\u0432\u0430\u0434\u0440\u0430\u0442.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? '\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443, \u0449\u043E\u0431 \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u043D\u0430\u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\'\u044F\u0442\u0438\u043A\u0443\u0442\u043D\u0438\u043A.' : (opt_ijData.level == 3) ? '\u0426\u0435 \u043D\u043E\u0432\u0438\u0439 \u0431\u043B\u043E\u043A, \u044F\u043A\u0438\u0439 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440:<div id="sampleHelp3" class="readonly"></div>\u041D\u0430\u043C\u0430\u043B\u044E\u0439\u0442\u0435 \u0436\u043E\u0432\u0442\u0443 \u0437\u0456\u0440\u043A\u0443.' : (opt_ijData.level == 4) ? '\u0426\u0435 \u043D\u043E\u0432\u0438\u0439 \u0431\u043B\u043E\u043A, \u044F\u043A\u0438\u0439 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043F\u0456\u0434\u043D\u044F\u0442\u0438 \u043F\u0435\u0440\u043E \u043D\u0430\u0434 \u043F\u0430\u043F\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u0456:<div id="sampleHelp4" class="readonly"></div>\u041D\u0430\u043C\u0430\u043B\u044E\u0439\u0442\u0435 \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0443 \u0436\u043E\u0432\u0442\u0443 \u0437\u0456\u0440\u043A\u0443, \u043F\u043E\u0442\u0456\u043C \u043B\u0456\u043D\u0456\u044E \u043D\u0430\u0434 \u043D\u0435\u044E.' : (opt_ijData.level == 5) ? '\u0417\u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u043E\u0434\u043D\u0456\u0454\u0457 \u0437\u0456\u0440\u043A\u0438 \u043D\u0430\u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u0447\u043E\u0442\u0438\u0440\u0438 \u0437\u0456\u0440\u043A\u0438, \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0456 \u0432 \u043A\u0443\u0442\u0430\u0445 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430?' : (opt_ijData.level == 6) ? '\u041D\u0430\u043C\u0430\u043B\u044E\u0439\u0442\u0435 \u0442\u0440\u0438 \u0436\u043E\u0432\u0442\u0456 \u0437\u0456\u0440\u043A\u0438 \u0456 \u043E\u0434\u043D\u0443 \u0431\u0456\u043B\u0443 \u043B\u0456\u043D\u0456\u044E.' : (opt_ijData.level == 7) ? '\u041D\u0430\u043C\u0430\u043B\u044E\u0439\u0442\u0435 \u0437\u0456\u0440\u043A\u0438, \u043F\u043E\u0442\u0456\u043C \u0447\u043E\u0442\u0438\u0440\u0438 \u0431\u0456\u043B\u0456 \u043B\u0456\u043D\u0456\u0457.' : (opt_ijData.level == 8) ? '\u041C\u0430\u043B\u044E\u043D\u043E\u043A \u0437 360 \u0431\u0456\u043B\u0438\u0445 \u043B\u0456\u043D\u0456\u0439 \u0431\u0443\u0434\u0435 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u044F\u043A \u043F\u043E\u0432\u043D\u0438\u0439 \u043C\u0456\u0441\u044F\u0446\u044C.' : (opt_ijData.level == 9) ? '\u0417\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0434\u0430\u0442\u0438 \u0447\u043E\u0440\u043D\u0438\u0439 \u043A\u0440\u0443\u0433 \u0442\u0430\u043A, \u0449\u043E\u0431 \u041C\u0456\u0441\u044F\u0446\u044C \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0432\u0441\u044F \u043D\u0430 \u043F\u0456\u0432\u043C\u0456\u0441\u044F\u0446\u044C?' : (opt_ijData.level == 10) ? '\u041C\u0430\u043B\u044E\u0439\u0442\u0435 \u0432\u0441\u0435, \u0449\u043E \u0437\u0430\u0432\u0433\u043E\u0434\u043D\u043E. \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u043E\u0432\u0438\u0445 \u0431\u043B\u043E\u043A\u0456\u0432, \u044F\u043A\u0456 \u0432\u0430\u0440\u0442\u043E \u0434\u043E\u0441\u043B\u0456\u0434\u0438\u0442\u0438. \u0412\u0441\u044C\u043E\u0433\u043E \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u043E\u0433\u043E!' + ((! opt_ijData.html) ? '<br><br>\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0413\u0430\u043B\u0435\u0440\u0435\u044E", \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043C\u0430\u043B\u044E\u043D\u043A\u0438 \u0456\u043D\u0448\u0438\u0445. \u042F\u043A\u0449\u043E \u043D\u0430\u043C\u0430\u043B\u044E\u0432\u0430\u043B\u0438 \u0449\u043E\u0441\u044C \u0446\u0456\u043A\u0430\u0432\u0435 - \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u044E "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0432 \u0413\u0430\u043B\u0435\u0440\u0435\u0457", \u0449\u043E\u0431 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044C \u043C\u0430\u043B\u044E\u043D\u043A\u043E\u043C \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u043B\u044E\u0434\u044C\u043C\u0438.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E, \u0449\u043E\u0431 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0431\u043B\u043E\u043A\u0438.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="\u0427\u0435\u0440\u0435\u043F\u0430\u0445\u0430"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="\u041A\u043E\u043B\u0456\u0440"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="\u041B\u043E\u0433\u0456\u043A\u0430"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="\u0426\u0438\u043A\u043B\u0438"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="\u0421\u043F\u0438\u0441\u043A\u0438"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="\u0417\u043C\u0456\u043D\u043D\u0456" custom="VARIABLE"></category><category name="\u0424\u0443\u043D\u043A\u0446\u0456\u0457" custom="PROCEDURE"></category>' : '<category name="\u0427\u0435\u0440\u0435\u043F\u0430\u0445\u0430"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="\u041A\u043E\u043B\u0456\u0440"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="\u0426\u0438\u043A\u043B\u0438"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}
