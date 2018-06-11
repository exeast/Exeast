window.onload = function() {

  // var animateMessage = function () {
  //
  //     $('.hyeinseo_text').css('left','')
  //                .animate({'left':$(".hyeinseo_parent").width()},
  //                         10000,
  //                         'linear',
  //                         function(){
  //                             animateMessage();
  //                         });
  // };
  //
  // animateMessage();

// $(".quarter").on("mouseenter", function(){
//   $(".description").show();
// });
//
// $(".quarter").on("mouseleave", function(){
//   $(".description").hide();
// });

// $('.marquee').marquee({
//   duplicated: true,
//   duration: 7000,
//
// });

$("#hyein_ticker").webTicker({
    height:'24px',
    duplicate:true,
    rssfrequency:0,
    startEmpty:false,
    hoverpause:false,
    speed:40,

});

$("#hyein_ticker_down").webTicker({
    height:'24px',
    duplicate:true,
    rssfrequency:0,
    startEmpty:false,
    hoverpause:false,
    speed:40,
    direction:"right",

});

$("#cy_ticker").webTicker({
  height:'24px',
  duplicate:true,
  rssfrequency:0,
  startEmpty:false,
  hoverpause:false,
  speed:40,

});

$("#cy_ticker_down").webTicker({
    height:'24px',
    duplicate:true,
    rssfrequency:0,
    startEmpty:false,
    hoverpause:false,
    speed:40,
    direction:"right",

});

$("#pw_ticker").webTicker({
  height:'24px',
  duplicate:true,
  rssfrequency:0,
  startEmpty:false,
  hoverpause:false,
  speed:40,

});

$("#pw_ticker_down").webTicker({
    height:'24px',
    duplicate:true,
    rssfrequency:0,
    startEmpty:false,
    hoverpause:false,
    speed:40,
    direction:"right",

});



}
