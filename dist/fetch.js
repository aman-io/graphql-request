"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var transformHeaders_1 = __importDefault(require("./transformHeaders"));
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
                        headers: transformHeaders_1.default(header),
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