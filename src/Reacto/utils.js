export function relativeCoords(el) {
  const x = el.clientX
  const y = el.clientY

  return { x: x, y: y }
}
