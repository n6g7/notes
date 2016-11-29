MathJax.Hub.Config({
  displayAlign: 'center',
  TeX: {
    equationNumbers: {
      autoNumber: "all",
      useLabelIds: true
    }
  },
  tex2jax: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    processEscapes: true,
    processEnvironments: true
  }
});

export default function runMathjax() {
  if (window.MathJax) {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }
}
