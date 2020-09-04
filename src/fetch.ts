import crossFetch from 'cross-fetch'
import transformHeaders from './transformHeaders'

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