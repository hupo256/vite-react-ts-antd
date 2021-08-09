interface parmsObj {
  [name: string]: any
}

export function urlParamHash(url: string = location.href) {
  let params: parmsObj = {}
  let hash = url.slice(url.indexOf('?') + 1).split('&')
  for (let i = 0; i < hash.length; i++) {
    const h = hash[i].split('=') //
    params[h[0]] = h[1]
  }
  return params
}

// localStorage
export function setStorage(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function getStorage(key: string) {
  let data = window.localStorage.getItem(key)
  return data && data !== 'undefined' ? JSON.parse(data) : ''
}

export default getStorage
