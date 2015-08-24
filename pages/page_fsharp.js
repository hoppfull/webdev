var page_fsharp = {
  load_post : function(post) {
    $("#page_fsharp_post").load("pages/fsharp_posts/" + post, function() {
      $('pre code').each(function(i, block) {hljs.highlightBlock(block);});
    });
  }
};