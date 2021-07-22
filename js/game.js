$(function () {
    // 爪子感應區修正
    var clipX = $('.clip-hand--left').offset().left;
    var clipY = $('.clip-hand--left').offset().top;
    var clipW = $('.clip-hand--right').offset().left + $('.clip-hand--right').width() - clipX;
    var clipH = $('.clip').height();
    var anwser = $('.game').data('anwser');
    $('.clip').addClass('swing');

    $(".dragObject-item").draggable({
        start: function (e, ui) {
        },
        stop: function (e, ui) {
            var x = $(this).offset().left;
            var y = $(this).offset().top;
            var w = $(this).width();
            var h = $(this).height();
            var choose = $(this).children('span').text();
            if (x > (clipX - w) && x < (clipX + clipW) && y > (clipY - h) && y < (clipY + clipH)) {
                if (anwser.indexOf(choose) != -1) {
                    $('.clip').addClass('clip--active').removeClass('swing');
                    setTimeout(function () {
                        if ($('.text-rightAns').length >= 0) {
                            alert($('.text-rightAns').text());
                        }
                        location.href = $('.game').data('next');
                    }, 500);
                } else {
                    $('.error').fadeIn();
                    $(this).animate({ left: '0px', top: '0px' }, 200);
                }
            } else {
                $(this).animate({ left: '0px', top: '0px' }, 200);
            }
        }
    });

    $('.btn-back').on('click', function () {
        $('.error').hide();
    });
});