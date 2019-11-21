// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Gallery.soy.
 */

goog.provide('Gallery.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Gallery.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.headerBar({appName: soy.$$escapeHtml(opt_ijData.appName) + '\u0E23\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E07\u0E20\u0E32\u0E1E', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: false, farLeftHtml: ''}, null, opt_ijData) + '<div id="gallery"></div><div id="loading"><img src="common/loading.gif"></div>';
};
if (goog.DEBUG) {
  Gallery.soy.start.soyTemplateName = 'Gallery.soy.start';
}


Gallery.soy.record = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="galleryThumb">' + ((opt_data.key) ? '<input type="checkbox" id="publish-' + soy.$$escapeHtml(opt_data.key) + '"' + ((opt_data.published) ? ' checked ' : '') + 'onchange="Gallery.publish(this)">' : '') + '<a href="/' + soy.$$escapeHtml(opt_data.app) + '?level=10#' + soy.$$escapeHtml(opt_data.uuid) + '"><img src="' + soy.$$escapeHtml(opt_data.thumb) + '"></a></div><div class="galleryTitle"><a href="/' + soy.$$escapeHtml(opt_data.app) + '?level=10#' + soy.$$escapeHtml(opt_data.uuid) + '">' + soy.$$escapeHtml(opt_data.title) + '</a></div>';
};
if (goog.DEBUG) {
  Gallery.soy.record.soyTemplateName = 'Gallery.soy.record';
}
