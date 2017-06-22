(function () {
  /************************************/
  /*     INITIALIZE REVEAL             */
  /* ************************************/
  Reveal.initialize({
    width: "60%",
    controls: true,
    progress: true,
    history: true,
    dependencies: [
      // Syntax highlight for <code> elements
      { src: '../bower_components/reveal-js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
  });
})();
