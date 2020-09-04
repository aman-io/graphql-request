"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = require("cross-fetch");
var transformHeaders = function (headers) {
    var oHeaders = {};
    if (headers) {
        if (headers instanceof cross_fetch_1.Headers) {
            headers.forEach(function (v, k) { oHeaders[k] = v; });
        }
        else if (headers instanceof Array) {
            headers.forEach(function (_a) {
                var k = _a[0], v = _a[1];
                oHeaders[k] = v;
            });
        }
        else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
exports.default = transformHeaders;
//# sourceMappingURL=transformHeaders.js.map