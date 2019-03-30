export function listen(setState) {
  const mouseListener = evt => setState([evt.pageX, evt.pageY])

  window.addEventListener('mousemove', mouseListener)
  return () => window.removeEventListener('mousemove', mouseListener)
}
