module.exports = function (e) {
  // touch support
  if (e.type !== 'click')
    return true

  return !(e.button !== 0
    || e.defaultPrevented
    || e.ctrlKey
    || e.altKey
    || e.shiftKey
    || e.metaKey
  )
}