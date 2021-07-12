export function getSsrValue() {
  return ''
}

let getHash = () => decodeURIComponent(window.location.hash.substr(1))

export function getInitialState() {
  return getHash()
}

export function listen(setState) {
  const hashListener = () => setState(getHash())

  window.addEventListener('hashchange', hashListener)
  return () => window.removeEventListener('hashchange', hashListener)
}
