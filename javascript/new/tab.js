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

for (let i = 0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).click(function(){
        $('.tab-button').removeClass('active');
        $('.tab-button').eq(i).addClass('active');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}