/* ページスクロール */
$(function() {
    /*
    var pagetop = $('#pagetop-a');
    var position = {bottom: '20px',right: '20px'}
    pagetop.css(position);
    */
    //スクロール
    $('a[href^=#]').click(function() {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
    });
});