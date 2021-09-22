"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.user = void 0;
var core_1 = require("@rematch/core");
var user_1 = require("../../type/user");
exports.user = core_1.createModel()({
    state: new user_1.UserClass(),
    reducers: {
        setUser: function (state, payload) {
            return __assign(__assign({}, state), payload);
        }
    }
});
