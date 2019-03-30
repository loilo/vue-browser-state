export function getSsrState() {
  return true
}

export function getInitialState() {
  return !document.hidden
}

export function listen(setState) {
  const visibilityListener = () => setState(!document.hidden)

  document.addEventListener('visibilitychange', visibilityListener)
  return () =>
    document.removeEventListener('visibilitychange', visibilityListener)
}
