export function getSsrState() {
  return 'loading'
}

export function getInitialState() {
  return document.readyState
}

export function listen(setState) {
  const listener = () => setState(document.readyState)

  document.addEventListener('readystatechange', listener)
  return () => document.addEventListener('readystatechange', listener)
}
