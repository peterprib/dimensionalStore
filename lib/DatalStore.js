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
const appName = "DataStore";
if (global.developmentMode) {
    console.log(appName + " started");
}

function DataStore(name) {
    this.name = name;
    this.metaData = {};
}
DataStore.prototype.addColumn = function(name) {
    return;
};

module.exports = DataStore;
if (typeof define !== 'function') {
    var define = require('amdefine')(DataStore);
}
define(function(require) {
    //The value returned from the function is used as the module export visible to Node.
    return DataStore;
});
if (global.developmentMode) {
    console.log(appName + " ended");
}