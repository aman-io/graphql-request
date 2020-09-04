"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformHeaders = void 0;
var cross_fetch_1 = __importStar(require("cross-fetch"));
exports.transformHeaders = function (headers) {
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
var fetch;
//@ts-ignore
if (wx) {
    fetch = function (url, _a) {
        var method = _a.method, body = _a.body, headers = _a.headers;
        return new Promise(function (resolve) {
            //@ts-ignore
            wx.request({
                url: url,
                method: method,
                header: headers,
                data: body,
                dataType: 'text',
                complete: function (_a) {
                    var statusCode = _a.statusCode, data = _a.data, errMsg = _a.errMsg, header = _a.header;
                    resolve({
                        ok: statusCode >= 200 && statusCode < 300,
                        status: statusCode,
                        statusText: errMsg,
                        headers: exports.transformHeaders(header),
                        text: function () { return Promise.resolve(data); }
                    });
                }
            });
        });
    };
}
else {
    fetch = cross_fetch_1.default;
}
exports.default = fetch;
//# sourceMappingURL=fetch.js.map