$(document).ready(function(){
  $('pre code').each(function(i, block){
    hljs.highlightBlock(block);
  });
  
  load_page("page_home");
});

function load_page(page) {
  $(".pages").height("0px");
  $("#" + page).load("pages/" + page + ".html").height("100%");
}