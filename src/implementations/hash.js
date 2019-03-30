export function getSsrValue() {
  return ''
}

export function getInitialState() {
  return window.location.hash.substr(1)
}

export function listen(setState) {
  const hashListener = () => setState(window.location.hash.substr(1))

  window.addEventListener('hashchange', hashListener)
  return () => window.removeEventListener('hashchange', hashListener)
}
