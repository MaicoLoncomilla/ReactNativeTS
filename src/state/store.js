"use strict";
exports.__esModule = true;
exports.Store = void 0;
var core_1 = require("@rematch/core");
var models_1 = require("./models");
exports.Store = core_1.init({ models: models_1.models });
