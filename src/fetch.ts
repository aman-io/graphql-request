import crossFetch, { Headers } from 'cross-fetch'

export const transformHeaders = (headers: RequestInit["headers"]): Record<string, string> => {
  let oHeaders: Record<string, string> = {};
  if (headers) {
    if (headers instanceof Headers) {
      headers.forEach((v, k) => { oHeaders[k] = v })
    } else if (headers instanceof Array) {
      headers.forEach(([k, v]) => { oHeaders[k] = v })
    } else {
      oHeaders = headers as Record<string, string>
    }
  }

  return oHeaders
};

let fetch
//@ts-ignore
if (wx) {
  fetch = (url, { method, body, headers }) => {
    return new Promise(resolve => {
      //@ts-ignore
      wx.request({
        url,
        method,
        header: headers,
        data: body,
        dataType: 'text',
        complete: ({ statusCode, data, errMsg, header }) => {
          resolve({
            ok: statusCode >= 200 && statusCode < 300,
            status: statusCode,
            statusText: errMsg,
            headers: transformHeaders(header),
            text: () => Promise.resolve(data)
          })
        }
      })
    })
  }
} else {
  fetch = crossFetch
}

export default fetch