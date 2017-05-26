"use strict";
/*
 * Copyright (C) 2017 Jaroslav Peter Prib
 * 
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 * 
 */
const appName = "DimensionalStore";
if (global.developmentMode) {
    console.log(appName + " started");
}

function Cell(keys, refreshFunction) {
    this.keys = keys;
    this.refreshFunction = refreshFunction;
}
Cell.prototype.refresh = function() {};

function Leaf(keys) {
    this.keys = keys;
    this.children = [];
}
//Object.appendChain(Leaf, new Cell());
Leaf.prototype.addLeaf = function() {};
Leaf.prototype.addCell = function() {};

function Level() {}

function Dimension(name, description, dataStore) {
    this.name = name;
    this.description = description;
    this.levels = [];
    this.dataStore = dataStore;
}

Dimension.prototype.addLevel = function(name, description) {
    this.levels.push(new Level(id, name));
    return this;
};

function DimensionalStore(name) {
    this.name = name;
    this.dimensions = {};
    this.root = null;
}

DimensionalStore.prototype.addDimension = function(name, description) {
    if (this.dimensions.hasOwnProperty(name)) {
        throw Error("Dimension already exists");
    }
    this.dimensions[name] = new Dimension(name, description);
    return this.dimensions[name];
};

DimensionalStore.prototype.addCell = function(f) {};
DimensionalStore.prototype.addLeaf = function(f) {};
DimensionalStore.prototype.addCell = function(f) {};

module.exports = DimensionalStore;
if (typeof define !== 'function') {
    var define = require('amdefine')(DimensionalStore);
}
define(function(require) {
    //The value returned from the function is used as the module export visible to Node.
    return DimensionalStore;
});
if (global.developmentMode) {
    console.log(appName + " ended");
}