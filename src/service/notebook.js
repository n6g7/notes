export default {
  load(filename) {
    return fetch(`/${filename}`)
    .then(res => res.text());
  }
}
