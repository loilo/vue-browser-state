export function getInitialState() {
  return navigator.language
}

export function listen(setState) {
  const languageListener = () => setState(navigator.language)

  window.addEventListener('languagechange', languageListener)
  return () => window.removeEventListener('languagechange', languageListener)
}
