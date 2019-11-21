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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Gerakkan kura-kura maju atau mundur dengan \\njumlah yang ditentukan. </span><span id="Turtle_moveForward">bergerak maju dengan</span><span id="Turtle_moveBackward">bergerak mundur dengan</span><span id="Turtle_turnTooltip">Putar kura-kura ke kiri atau kanan dengan jumlah \\nderajat tertentu. </span><span id="Turtle_turnRight">putar ke kanan dengan</span><span id="Turtle_turnLeft">putar ke kiri dengan</span><span id="Turtle_widthTooltip">Ubah lebar pena.</span><span id="Turtle_setWidth">set lebar ke</span><span id="Turtle_colourTooltip">Ubah warna pena.</span><span id="Turtle_setColour">set warna ke</span><span id="Turtle_penTooltip">Angkat atau turunkan pena, menghentikan atau \\nmemulai menggambar. </span><span id="Turtle_penUp">angkat pena</span><span id="Turtle_penDown">turunkan pena</span><span id="Turtle_turtleVisibilityTooltip">Membuat kura-kura (lingkaran dan panah) terlihat \\natau tidak terlihat. </span><span id="Turtle_hideTurtle">sembunyikan kura-kura</span><span id="Turtle_showTurtle">tampilkan kura-kura</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Tampilkan teks ke arah kura-kura pada lokasinya.</span><span id="Turtle_print">cetak</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Set font yang digunakan oleh blok cetak.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">ukuran font</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Jalankan program anda sampai berhenti. Kemudian Anda dapat mengirimkan gambar Anda ke galeri.</span></div>';
};
if (goog.DEBUG) {
  Turtle.soy.messages.soyTemplateName = 'Turtle.soy.messages';
}


Turtle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Turtle.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Kura-kura', levelLinkSuffix: '', hasLinkButton: true, hasHelpButton: true, farLeftHtml: ''}, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Jalankan program yang Anda tulis."><img src="common/1x1.gif" class="run icon21"> Jalankan Program</button><button id="resetButton" class="primary" style="display: none" title="Hentikan program dan me-reset level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="Tampilkan galeri gambar di Reddit."><img src="common/1x1.gif" class="gallery icon21"> Lihat Galeri</button></form></td><td style="text-align: center;"><button id="submitButton" title="Kirim gambar Anda ke Reddit."><img src="common/1x1.gif" class="camera icon21"> Kirim ke Galeri</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Kirim gambar Anda ke Reddit.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Batal</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Turtle.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level < 4) ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Solusi Anda benar, tetapi masih ada solusi yang lebih baik. ' + ((opt_ijData.level < 3) ? 'Gambar bentuk dengan hanya tiga blok.' : 'Gambar bintang dengan hanya empat blok.') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Buat program yang menggambar persegi.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">' : (opt_ijData.level == 2) ? 'Ubah program Anda untuk menggambar pentagon bukannya persegi.' : (opt_ijData.level == 3) ? 'Ada sebuah blok baru yang memungkinkan Anda untuk mengubah warna:<div id="sampleHelp3" class="readonly"></div>Gambar bintang berwarna kuning.' : (opt_ijData.level == 4) ? 'Ada sebuah blok baru yang memungkinkan Anda untuk mengangkat pena dari kertas saat Anda bergerak:<div id="sampleHelp4" class="readonly"></div>Gambar bintang kecil berwarna kuning, kemudian gambar sebuah garis di atasnya.' : (opt_ijData.level == 5) ? 'Sebagai pengganti satu bintang, bisakah Anda menggambar empat bintang diatur dalam persegi?' : (opt_ijData.level == 6) ? 'Gambar tiga bintang kuning, dan satu garis putih.' : (opt_ijData.level == 7) ? 'Gambar beberapa bintang, kemudian gambar empat garis putih.' : (opt_ijData.level == 8) ? 'Gambar 360 garis putih yang akan terlihat seperti bulan purnama.' : (opt_ijData.level == 9) ? 'Anda dapat menambahkan lingkaran hitam sehingga bulan menjadi bulan sabit?' : (opt_ijData.level == 10) ? 'Gambar apapun yang Anda inginkan. Anda punya sejumlah besar blok baru yang dapat dijelajahi. Selamat bermain!' + ((! opt_ijData.html) ? '<br><br>Gunakan tombol "Lihat Galeri" untuk melihat apa yang orang lain telah gambar. Jika Anda menggambar sesuatu yang menarik, gunakan tombol  "Kirim ke Galeri" untuk mempublikasikannya.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' + ((opt_ijData.level == 1) ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Pilih kategori untuk melihat blok.</div>' : '');
};
if (goog.DEBUG) {
  Turtle.soy.start.soyTemplateName = 'Turtle.soy.start';
}


Turtle.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' + ((opt_ijData.level == 10) ? '<category name="Kura-kura"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Warna"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logika"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Perulangan"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Matematika"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Daftar"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variabel" custom="VARIABLE"></category><category name="Fungsi" custom="PROCEDURE"></category>' : '<category name="Kura-kura"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' + ((opt_ijData.level > 3) ? '<block type="turtle_pen"></block>' : '') + '</category>' + ((opt_ijData.level > 2) ? '<category name="Warna"><block type="turtle_colour_internal"></block></category>' : '') + '<category name="Perulangan"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') + '</xml>';
};
if (goog.DEBUG) {
  Turtle.soy.toolbox.soyTemplateName = 'Turtle.soy.toolbox';
}