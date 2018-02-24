let banner = 1
const nmrDeBanners = 4
//nmeDeBanners é a quantidade de banners -1 que
//existem na pasta imagens.

export function changeBanner(){
  var animacaotipo = 'animated slideInRight';
  var animacaofim = 'webkitAnimationEnd'
 $('section .fa-angle-right').click(function(){
   banner++
   if(banner > nmrDeBanners)
     banner = 0
    $('section#banners').css({"background-image": `url('./imagens/banner${banner}.jpg')`})
      .addClass(animacaotipo).one(animacaofim, function(){
      $(this).removeClass(animacaotipo);
   })
 })
 $('section .fa-angle-left').click(function(){
   banner--
   if(banner < 0)
     banner = nmrDeBanners
    $('section#banners').css({"background-image": `url('./imagens/banner${banner}.jpg')`})
      .addClass(animacaotipo).one(animacaofim, function(){
      $(this).removeClass(animacaotipo);
   })
 })
}

export function autoChangeBanner(){
 setInterval(function(){
  var animacaotipo = 'animated slideInRight';
  var animacaofim = 'webkitAnimationEnd'
   $('section#banners').css({"background-image": `url('./imagens/banner${banner}.jpg')`})
    .addClass(animacaotipo).one(animacaofim, function(){
      $(this).removeClass(animacaotipo);
   })
   banner++
   if(banner > nmrDeBanners)
     banner = 0
 }, 6000)
}
