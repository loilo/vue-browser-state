export function getSsrState() {
  return [0, 0]
}

export function getInitialState() {
  return [window.pageXOffset, window.pageYOffset]
}

export function listen(setState) {
  const scrollListener = () =>
    setState([window.pageXOffset, window.pageYOffset])

  window.addEventListener('scroll', scrollListener)
  return () => window.removeEventListener('scroll', scrollListener)
}
