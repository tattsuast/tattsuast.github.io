  $(window).on('load resize', function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    var header = $('header').height();
    var footer = $('footer').outerHeight(true);
    var menu = $('#menu').outerHeight(true);
    
 //余白の調整
 
    if (w > 480) {
      $("body").css('margin-bottom', footer + 30 + 'px');
      $("header").css('padding-bottom', menu + 'px');
    } else {
      $("body").css('margin-bottom', footer + 30 + 'px');
      $("header").css('padding-bottom', '0');
    }
  });
