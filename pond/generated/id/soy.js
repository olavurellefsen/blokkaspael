// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Amati musuh. Tentukan arah (0-360). \\nKembalikan jarak ke musuh terdekat \\ndari arah tersebut. Kembalikan Infinity \\n(tak terhingga) jika musuh tidak \\nditemukan. </span><span id="Pond_cannonTooltip">Lepas tembakan meriam. Tentukan arah (0-360) dan \\njarak (0-70). </span><span id="Pond_swimTooltip">Berenang kedepan. Tentukan arah (0-360). </span><span id="Pond_stopTooltip">Berhenti berenang. Pemain akan bergerak perlahan \\nhingga berhenti. </span><span id="Pond_healthTooltip">Kembalikan tingkat kesehatan pemain (0 mati, \\n100 sehat). </span><span id="Pond_speedTooltip">Kembalikan tingkat kecepatan pemain (0 berhenti, \\n100 kecepatan penuh). </span><span id="Pond_locXTooltip">Kembalikan koordinat X dari pemain (0 sisi kiri, \\n100 sisi kanan). </span><span id="Pond_locYTooltip">Kembalikan koordinat Y dari pemain (0 sis bawah, \\n100 sisi atas). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Tampilkan dokumentasi bahasa.">Dokumentasi</button></td><td><button id="runButton" class="primary" title="Jalankan program yang Anda tulis."><img src="common/1x1.gif" class="run icon21"> Jalankan Program</button><button id="resetButton" class="primary" style="display: none" title="Hentikan program dan me-reset level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
