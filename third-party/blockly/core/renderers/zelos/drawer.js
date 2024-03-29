/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Zelos renderer.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

goog.provide('Blockly.zelos.Drawer');

goog.require('Blockly.blockRendering.ConstantProvider');
goog.require('Blockly.blockRendering.Drawer');
goog.require('Blockly.blockRendering.Types');
goog.require('Blockly.utils.object');
goog.require('Blockly.zelos.RenderInfo');

goog.requireType('Blockly.zelos.PathObject');


/**
 * An object that draws a block based on the given rendering information.
 * @param {!Blockly.BlockSvg} block The block to render.
 * @param {!Blockly.zelos.RenderInfo} info An object containing all
 *   information needed to render this block.
 * @package
 * @constructor
 * @extends {Blockly.blockRendering.Drawer}
 */
Blockly.zelos.Drawer = function(block, info) {
  Blockly.zelos.Drawer.superClass_.constructor.call(this, block, info);
};
Blockly.utils.object.inherits(Blockly.zelos.Drawer,
    Blockly.blockRendering.Drawer);


/**
 * @override
 */
Blockly.zelos.Drawer.prototype.draw = function() {
  var pathObject =
    /** @type {!Blockly.zelos.PathObject} */ (this.block_.pathObject);
  pathObject.beginDrawing();
  this.hideHiddenIcons_();
  this.drawOutline_();
  this.drawInternals_();

  pathObject.setPath(this.outlinePath_ + '\n' + this.inlinePath_);
  if (this.info_.RTL) {
    pathObject.flipRTL();
  }
  if (Blockly.blockRendering.useDebugger) {
    this.block_.renderingDebugger.drawDebug(this.block_, this.info_);
  }
  this.recordSizeOnBlock_();
  pathObject.endDrawing();
};

/**
 * @override
 */
Blockly.zelos.Drawer.prototype.drawOutline_ = function() {
  if (this.info_.outputConnection &&
      this.info_.outputConnection.isDynamicShape) {
    this.drawFlatTop_();
    this.drawRightDynamicConnection_();
    this.drawFlatBottom_();
    this.drawLeftDynamicConnection_();
  } else {
    Blockly.zelos.Drawer.superClass_.drawOutline_.call(this);
  }
};

/**
 * Add steps for the right side of a row that does not have value or
 * statement input connections.
 * @param {!Blockly.blockRendering.Row} row The row to draw the
 *     side of.
 * @protected
 */
Blockly.zelos.Drawer.prototype.drawRightSideRow_ = function(row) {
  if (row.type & Blockly.blockRendering.Types.getType('BEFORE_STATEMENT_SPACER_ROW')) {
    var remainingHeight = row.height - this.constants_.INSIDE_CORNERS.rightWidth;
    this.outlinePath_ +=
        (remainingHeight > 0 ?
            Blockly.utils.svgPaths.lineOnAxis('V', row.yPos + remainingHeight) : '') +
        this.constants_.INSIDE_CORNERS.pathTopRight;
  } else if (row.type & Blockly.blockRendering.Types.getType('AFTER_STATEMENT_SPACER_ROW')) {
    var remainingHeight = row.height - this.constants_.INSIDE_CORNERS.rightWidth;
    this.outlinePath_ +=
        this.constants_.INSIDE_CORNERS.pathBottomRight +
        (remainingHeight > 0 ?
            Blockly.utils.svgPaths.lineOnAxis('V', row.yPos + row.height) : '');
  } else {
    this.outlinePath_ +=
        Blockly.utils.svgPaths.lineOnAxis('V', row.yPos + row.height);
  }
};

/**
 * Add steps to draw the right side of an output with a dynamic connection.
 * @protected
 */
Blockly.zelos.Drawer.prototype.drawRightDynamicConnection_ = function() {
  this.outlinePath_ += this.info_.outputConnection.shape.pathRightDown(
      this.info_.outputConnection.height);
};

/**
 * Add steps to draw the left side of an output with a dynamic connection.
 * @protected
 */
Blockly.zelos.Drawer.prototype.drawLeftDynamicConnection_ = function() {
  this.positionOutputConnection_();

  this.outlinePath_ += this.info_.outputConnection.shape.pathUp(
      this.info_.outputConnection.height);

  // Close off the path.  This draws a vertical line up to the start of the
  // block's path, which may be either a rounded or a sharp corner.
  this.outlinePath_ += 'z';
};

/**
 * Add steps to draw a flat top row.
 * @protected
 */
Blockly.zelos.Drawer.prototype.drawFlatTop_ = function() {
  var topRow = this.info_.topRow;
  this.positionPreviousConnection_();

  this.outlinePath_ +=
      Blockly.utils.svgPaths.moveBy(topRow.xPos, this.info_.startY);

  this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis('h', topRow.width);
};

/**
 * Add steps to draw a flat bottom row.
 * @protected
 */
Blockly.zelos.Drawer.prototype.drawFlatBottom_ = function() {
  var bottomRow = this.info_.bottomRow;
  this.positionNextConnection_();

  this.outlinePath_ +=
    Blockly.utils.svgPaths.lineOnAxis('V', bottomRow.baseline);

  this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis('h', -bottomRow.width);
};

/**
 * @override
 */
Blockly.zelos.Drawer.prototype.drawInlineInput_ = function(input) {
  this.positionInlineInputConnection_(input);

  var inputName = input.input.name;
  if (input.connectedBlock || this.info_.isInsertionMarker) {
    return;
  }

  var width = input.width - (input.connectionWidth * 2);
  var height = input.height;
  var yPos = input.centerline - height / 2;

  var connectionRight = input.xPos + input.connectionWidth;

  var outlinePath = Blockly.utils.svgPaths.moveTo(connectionRight, yPos) +
      Blockly.utils.svgPaths.lineOnAxis('h', width) +
      input.shape.pathRightDown(input.height) +
      Blockly.utils.svgPaths.lineOnAxis('h', -width) +
      input.shape.pathUp(input.height) +
      'z';
  this.block_.pathObject.setOutlinePath(inputName, outlinePath);
};

/**
 * @override
 */
Blockly.zelos.Drawer.prototype.drawStatementInput_ = function(row) {
  var input = row.getLastInput();
  // Where to start drawing the notch, which is on the right side in LTR.
  var x = input.xPos + input.notchOffset + input.shape.width;

  var innerTopLeftCorner =
      input.shape.pathRight +
      Blockly.utils.svgPaths.lineOnAxis('h',
          -(input.notchOffset - this.constants_.INSIDE_CORNERS.width)) +
      this.constants_.INSIDE_CORNERS.pathTop;

  var innerHeight =
      row.height - (2 * this.constants_.INSIDE_CORNERS.height);

  var innerBottomLeftCorner =
    this.constants_.INSIDE_CORNERS.pathBottom +
    Blockly.utils.svgPaths.lineOnAxis('h',
        (input.notchOffset - this.constants_.INSIDE_CORNERS.width)) +
    input.shape.pathLeft;

  this.outlinePath_ += Blockly.utils.svgPaths.lineOnAxis('H', x) +
      innerTopLeftCorner +
      Blockly.utils.svgPaths.lineOnAxis('v', innerHeight) +
      innerBottomLeftCorner +
      Blockly.utils.svgPaths.lineOnAxis('H', row.xPos + row.width);

  this.positionStatementInputConnection_(row);
};
