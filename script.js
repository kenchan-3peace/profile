$(function() {
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    fade: true,
  });
  $('.works-img').on('mouseover', function(){
    $(this).animate({
      opacity:0.5,
    }, 500);
  });
  $('.works-img').on('mouseout', function(){
    $(this).animate({
      opacity:1.0,
    }, 500);
  });
  $('.fadeText').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    }, 200);
  });
  $('.fadeText').on('mouseout', function(){
    $(this).animate({
      opacity:1.0,
    }, 200);
  });
  $('a[href^="#"]').click(function() {
    const speed = 500;
    const href= $(this).attr("href");
    let target;
    if (href == '#') {
      target = $('html');
    }
    else {
      target = $(href);
      console.log(target.offset())
    }
    const position = target.offset().top;
    $('html, body').animate({scrollTop: position }, speed, 'swing');
    return false;
  });
  // 初期表示時、セクションが画面内にある場合は画面に表示させる
  $('section').each(function () {
    const windowHeight = $(window).height();
    const position = $(this).offset().top;
    if (windowHeight > position){
      $(this).addClass('fade-in');
    }
  });
   // スクロールしたときにセクションをフェードインさせる
   $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });
});
// back-btnというidを持つHTML要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');
 
// 画面がスクロールされたときにイベント処理を実行する
window.addEventListener('scroll', () => {
  // 画面のスクロール量をpx（ピクセル）数で取得する
  const scrollValue = document.scrollingElement.scrollTop;

  // 画面のスクロール量が300px以上であれば、「TOPに戻る」ボタンを表示する
  if (scrollValue >= 300) {
    backBtn.style.display = 'inline';
  }
  // 画面のスクロール量がそれ以外（300px未満）であれば、「TOPに戻る」ボタンを非表示にする
  else {
    backBtn.style.display = 'none';
  }
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works-img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () { 
    $('.modal').fadeOut();
    return false
  });
});