export default {
  load (filename) {
    return window.fetch(filename)
    .then(res => res.text())
  }
}
