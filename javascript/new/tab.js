// $('.tab-button').eq(0).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-button').eq(0).addClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-button').eq(1).addClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-button').eq(2).addClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).click(function(){
//         $('.tab-button').removeClass('active');
//         $('.tab-button').eq(i).addClass('active');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     });
// }


// 이런식으로 값을 저장도 가능
// $('.list').data('name', 'value');
// $('.list').data('name');



$('.list').click(function(e){
    
        opentab(e.target.dataset.id);
});

function opentab(n){
    $('.tab-button').removeClass('active');
    $('.tab-button').eq(n).addClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(n).addClass('show');
}