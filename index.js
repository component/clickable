module.exports = function (e) {
  // primary button only
  if (e.type === 'click' && e.button !== 0)
    return false
  // one touch
  if (e.touches && e.touches.length > 1)
    return false

  return !(e.defaultPrevented
    || e.ctrlKey
    || e.altKey
    || e.shiftKey
    || e.metaKey
  )
}