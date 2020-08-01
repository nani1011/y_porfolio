(function($) {
    $.fn.tile = function(columns) {
        var tiles, max, c, h, last = this.length - 1,
            s;
        if (!columns) columns = this.length;
        this.each(function() {
            s = this.style;
            if (s.removeProperty) s.removeProperty("height");
            if (s.removeAttribute) s.removeAttribute("height");
        });
        return this.each(function(i) {
            c = i % columns;
            if (c == 0) tiles = [];
            tiles[c] = $(this);
            h = tiles[c].height();
            if (c == 0 || h > max) max = h;
            if (i == last || c == columns - 1)
                $.each(tiles, function() { this.height(max); });
        });
    };
})(jQuery);

$(window).load(function() {
    $('.prt_profile_slider .owl-carousel .item .img').tile(5);
    $('.prt_contact_details .prt_contact_details_box').tile(3);
    $('.prt_couter_wrapper .prt_counter_box').tile(4);
    $('.prt_contact_details_box details_box1 p').tile(3);
});
$(window).resize(function() {
    $('.prt_profile_slider .owl-carousel .item .img').tile(5);
    $('.prt_contact_details .prt_contact_details_box').tile(3);
    $('.prt_couter_wrapper .prt_counter_box').tile(4);
    $('.prt_contact_details_box details_box1 p').tile(3);
});

$(function() {
    var nav = $('.prt_main_wrapper');
    //表示位置
    var navTop = nav.offset().top + 100;
    //ナビゲーションの高さ（シャドウの分だけ足してます）
    var navHeight = nav.height() + 10;
    var showFlag = false;
    nav.css('top', -navHeight + 'px');
    //ナビゲーションの位置まできたら表示
    $(window).scroll(function() {
        var winTop = $(this).scrollTop();
        if (winTop >= navTop) {
            if (showFlag == false) {
                $(".hide").hide();
                showFlag = true;
                nav.addClass('fixed').stop().animate({ 'top': '0px' }, 500);
            }
        } else if (winTop <= navTop) {
            if (showFlag) {
                $(".hide").show();
                showFlag = false;
                nav.stop().animate({ 'top': navHeight + 'px' }, 200, function() {
                    nav.removeClass('fixed');
                });
            }
        }
    });
});