/*swiper*/

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
/*选项卡*/
$(".nav1 li").click(function() {
    var i = $(this).index(); //获取当前导航栏li的下标
    $(this).addClass('title').siblings().removeClass('title'); //这样就可以添加title的style

    $('.nav2 .content').eq(i).show().siblings().hide();
});
/*回车事件*/
// var flag = true;
// $(".search-button").click(function() {

//     if (flag == false) {
//         flag = true;
//         if ($("#search").val() != "") {
//             localStorage.searchValue = $("#search").val();
//             location.href = "search.html";
//             return;
//         }


//     }
// });
$(document).keypress(function(e) {
    // 回车键事件  
    if (e.which == 13) {
        window.location.href = "xiangqingye.html";
    }
});