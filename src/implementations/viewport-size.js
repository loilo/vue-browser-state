export function getInitialState() {
  return [window.innerWidth, window.innerHeight]
}

export function listen(setState) {
  const sizeListener = () => setState([window.innerWidth, window.innerHeight])

  window.addEventListener('resize', sizeListener)
  return () => window.removeEventListener('resize', sizeListener)
}
