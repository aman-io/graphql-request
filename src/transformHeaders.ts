import { Headers } from 'cross-fetch'

const transformHeaders = (headers: RequestInit["headers"]): Record<string, string> => {
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

export default transformHeaders