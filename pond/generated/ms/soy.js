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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Imbaskan musuh. Tetapkan arah (0-360). \\nMemaparkan jarak dengan musuh terdekat \\ndi arah tersebut. Memaparkan Infinity \\njika tidak terdapat musuh. </span><span id="Pond_cannonTooltip">Tembakkan meriam. Tetapkan arah (0-360) dan \\njarak (0-70). </span><span id="Pond_swimTooltip">Berenang ke depan. Nyatakan arah (0-360). </span><span id="Pond_stopTooltip">Berhenti berenang. Pemain akan berhenti \\nperlahan-lahan. </span><span id="Pond_healthTooltip">Menyatakan kesihatan pemain (0 = mati, \\n100 = paling sihat). </span><span id="Pond_speedTooltip">Menyatakan kelajuan semasa pemain (0 = pegun, \\n100 = kelajuan penuh). </span><span id="Pond_locXTooltip">Menyatakan koordinat X pemain (0 = hujung kiri, \\n100 = hujung kanan). </span><span id="Pond_locYTooltip">Mengembalikan koordinat Y pemain (0 = hujung \\nbawah, 100 = hujung atas). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Paparkan dokumentasi bahasa.">Dokumentasi</button></td><td><button id="runButton" class="primary" title="Jalankan atur cara anda."><img src="common/1x1.gif" class="run icon21"> Jalankan Program</button><button id="resetButton" class="primary" style="display: none" title="Hentikan atur cara dan reset tahap."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
