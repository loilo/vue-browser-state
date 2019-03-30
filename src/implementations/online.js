export function getSsrState() {
  return true
}

export function getInitialState() {
  return navigator.onLine
}

export function listen(setState) {
  const onlineListener = () => setState(true)
  const offlineListener = () => setState(false)

  window.addEventListener('online', onlineListener)
  window.addEventListener('offline', offlineListener)

  return () => {
    window.removeEventListener('online', onlineListener)
    window.removeEventListener('offline', offlineListener)
  }
}
