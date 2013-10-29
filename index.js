module.exports = function (e) {
  return !(e.button !== 0
    || e.defaultPrevented
    || e.ctrlKey
    || e.altKey
    || e.shiftKey
    || e.metaKey
  )
}