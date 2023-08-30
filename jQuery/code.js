$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_05 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
  //閉じるボタンがクリックされたら
  $('a.close_btn').click(function () {
    //クリックされたa.close_btnの親要素.accordion_innerを閉じる。
    $(this).parents('.accordion_inner').slideUp();
    //クリックされたa.close_btnの親要素.accordion_innerの前要素にクラスopenがなければ追加し、あれば削除する。
    $(this).parents('.accordion_inner').prev().toggleClass("open");
  });
});
 
// ページ内リンク
$(function(){
  // 閉じるボタンをクリックした場合に処理
  $('.s_05 a.close_btn').click(function() {
    // 移動先を0px上にずらす
    var adjust = 0;
    // スクロールの速度
    var speed = 500; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
