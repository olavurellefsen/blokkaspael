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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">beginpunt x</span><span id="Movie_y1">beginpunt y</span><span id="Movie_x2">eindpunt x</span><span id="Movie_y2">eindpunt y</span><span id="Movie_radius">straal</span><span id="Movie_width">breedte</span><span id="Movie_height">hoogte</span><span id="Movie_circleTooltip">Maakt een cirkel op de opgegeven plaats en met \\nde opgegeven radius. </span><span id="Movie_circleDraw">cirkel</span><span id="Movie_rectTooltip">Maakt een rechthoek op de opgegeven plaats en \\nmet de opgegeven breedte en hoogte. </span><span id="Movie_rectDraw">rechthoek</span><span id="Movie_lineTooltip">Maakt een lijn van het ene punt naar het andere \\nmet de opgegeven breedte. </span><span id="Movie_lineDraw">lijn</span><span id="Movie_timeTooltip">Geeft de huidige tijd terug in de animatie (0-100).</span><span id="Movie_colourTooltip">Wijzigt de kleur van de pen.</span><span id="Movie_setColour">stel kleur in op</span><span id="Movie_submitDisabled">Je filmpje beweegt niet. Gebruik blokken om iets interessants te maken. Daarna kan je je filmpje opslaan in de galerij.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Movie.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Film', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Open de filmgalerij."><img src="common/1x1.gif" class="gallery icon21"> Galerij bekijken</button></form></td><td style="text-align: center;"><button id="submitButton" title="Sla je film op in de galerij."><img src="common/1x1.gif" class="camera icon21"> Opslaan in galerij</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Sla je film op in de galerij.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Titel: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Annuleren</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Verplaats de achtergrondcirkel naar de bovenkant van uw programma. Dan zal het achter de persoon te zien zijn.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Gebruik eenvoudige vormen om deze persoon te tekenen.' : (opt_ijData.level == 2) ? 'Dit niveau is een film. Je wilt de arm van de persoon over het scherm laten bewegen. Klik op de afspeelknop om een voorvertoning te bekijken.<div id="sampleHelp2" class="readonly"></div>Terwijl de film draait, telt de waarde van het "tijd"-blok van 0 tot 100. Omdat je wilt dat de y-positie van de arm begint op 0 en eindigt bij 100 zou dit makkelijk moeten zijn.' : (opt_ijData.level == 3) ? 'Het "tijd"-blok telt van 0 tot 100. Maar nu wil je dat de y-positie van de andere arm begint bij 100 en naar 0 gaat. Kan je een eenvoudige wiskundige formule vinden die de richting omkeert?' : (opt_ijData.level == 4) ? 'Gebruik wat je hebt geleerd in het vorige niveau om kruisende benen te vormen.' : (opt_ijData.level == 5) ? 'De wiskundige formule voor de arm is complex. Hier het antwoord:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? 'Geef de persoon een paar handen.' : (opt_ijData.level == 7) ? 'Gebruik het \'if\'-blok om een hoofdje voor de eerste helft van de film te tekenen. Teken daarna een groot hoofd voor de tweede helft.' : (opt_ijData.level == 8) ? 'Stuur de benen de andere kant op halverwege de film.' : (opt_ijData.level == 9) ? 'Teken een groter wordende cirkel achter de persoon.' : (opt_ijData.level == 10) ? 'Maak een filmpje over wat je maar wilt. Je hebt een groot aantal nieuwe blokken tot je beschikking. Veel plezier!' + ((! opt_ijData.html) ? '<br><br>Gebruik de knop "Galerij bekijken" om de filmpjes te bekijken die andere mensen hebben gemaakt. Als je zelf een interessant filmpje hebt egmaakt, klik dan op de knop "In galerij opslaan" om het te delen.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Film"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="Kleur"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Logica"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Lussen"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="Formules"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Lijsten"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabelen" custom="VARIABLE"></category><category name="Functies" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}