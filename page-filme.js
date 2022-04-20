$(document).ready(function () {

    //Tabs
    function ShowTabs(num = 0) {

        let tabs = $('.tabs');
        let button_tab = $('.button-tab');
        let data = $(this).attr('data');

        RemoveClassTabs()

        $($(tabs)[num]).addClass('d-flex')
        $($(button_tab)[num]).addClass('active');

    };

    $('.button-tab').click(function (e) {
        e.preventDefault();
        RemoveClass();

        let num = $(this).attr('data')
        ShowTabs(num)
    });

    function RemoveClass() {
        for (let i = 0; i < $('.button-tab').length; i++) {
            $($('.button-tab')[i]).removeClass('active')
        }
    }
    function RemoveClassTabs() {
        for (let i = 0; i < $('.tabs').length; i++) {
            $($('.tabs')[i]).removeClass('d-flex')
        }
    }
    ShowTabs()

    // Open Selection
    $('.selection button').click(function (e) {
        e.preventDefault();
        $('.button .position-absolute').css('display', 'flex');
        $('.button button svg').css('transform', 'rotate(180deg)');

    });

    $('body').click(function (e) {
        if (e.target.tagName == 'SPAN' || e.target.tagName == 'svg' || e.target.tagName == 'BUTTON') {

        } else {
            $('.button .position-absolute').css('display', 'none');
            $('.button button svg').css('transform', 'rotate(0deg)');
        }
    })


    // close dropdown mobile 
    $('.close').click(function () {
        $('.dropdownMenu').fadeOut();
    });



    // open dropdown mobile
    $(window).resize(function () {
        if ($(window).innerWidth() < 768) {
            $('.dropdown-button').click(function (e) {
                e.preventDefault()
                $('.dropdownMenu').fadeIn();
            })
        } else {
            $('.dropdown-button').off('click')
        }
    });

    if ($(window).innerWidth() < 768) {
        $('.dropdown-button').click(function (e) {
            e.preventDefault()
            $('.dropdownMenu').fadeIn();
        })
    }



    // open dropdown desktop
    $(window).resize(function () {
        if ($(window).innerWidth() > 768) {
            $('.drop-button-desktop , .drop-menu-desktop').hover(function () {
                $('.drop-menu-desktop').css('display', 'flex');
            },
                function () {
                    $('.drop-menu-desktop').css('display', 'none');
                });
        } else {
            $('.drop-button-desktop').off('hover')
        }
    });

    if ($(window).innerWidth() > 768) {
        $('.drop-button-desktop , .drop-menu-desktop').hover(function () {
            $('.drop-menu-desktop').css('display', 'flex');
        },
            function () {
                $('.drop-menu-desktop').css('display', 'none');
            });
    }



    // open dropdown desktop 2
    $(window).resize(function () {
        if ($(window).innerWidth() > 768) {
            $('.drop-button-desktop-2 , .drop-menu-desktop-2').hover(function () {
                $('.drop-menu-desktop-2').css('display', 'flex');
            },
                function () {
                    $('.drop-menu-desktop-2').css('display', 'none');
                });
        } else {
            $('.drop-button-desktop-2').off('hover')
        }
    });

    if ($(window).innerWidth() > 768) {
        $('.drop-button-desktop-2 , .drop-menu-desktop-2').hover(function () {
            $('.drop-menu-desktop-2').css('display', 'flex');
        },
            function () {
                $('.drop-menu-desktop-2').css('display', 'none');
            });
    }



    // open dropdown desktop 3
    $(window).resize(function () {
        if ($(window).innerWidth() > 768) {
            $('.drop-button-desktop-3 , .drop-menu-desktop-3').hover(function () {
                $('.drop-menu-desktop-3').css('display', 'flex');
            },
                function () {
                    $('.drop-menu-desktop-3').css('display', 'none');
                });
        } else {
            $('.drop-button-desktop-3').off('hover')
        }
    });

    if ($(window).innerWidth() > 768) {
        $('.drop-button-desktop-3 , .drop-menu-desktop-3').hover(function () {
            $('.drop-menu-desktop-3').css('display', 'flex');
        },
            function () {
                $('.drop-menu-desktop-3').css('display', 'none');
            });
    }

    // close search-box
    $('.close-search-box').click(function () {
        $('.search-box').hide();
    });

    //Open Search-Box 
    $(window).resize(function () {
        if ($(window).innerWidth() < 768) {
            $('.search-button').click(function () {
                $('.search-box').show();
            });
        } else {
            $('.search-button-2').click(function () {
                $('.search-box').show();
            });
        }
    });

    if ($(window).innerWidth() < 768) {
        $('.search-button').click(function () {
            $('.search-box').show();
        });
    }

    if ($(window).innerWidth() > 768) {
        $('.search-button-2').click(function (e) {
            e.preventDefault()
            $('.search-box').show();
        });
    }


    //scroll Up
    $('.scrollup').click(function () {
        $('html , body').animate({
            scrollTop: 0
        });
    })

    // close 
    $('.close').click(function (e) {
        e.preventDefault();
        $('.more').hide()
    });

    //Opem more
    $('.show-more').click(function (e) {
        e.preventDefault();
        $('.more').css('display', 'flex')
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('.more-2').hide()
    });

    $('.show-more-2').click(function (e) {
        e.preventDefault();
        $('.more-2').css('display', 'flex')
    });

    $('.hover-more , .div-hover , .more-desktop').hover(function () {
        $('.more-desktop').css('display', 'flex')
    }, function () {
        $('.more-desktop').css('display', 'none')
    });

    $('.hover-more-2 , .div-hover-2 , .more-desktop-2').hover(function () {
        $('.more-desktop-2').css('display', 'flex')
    }, function () {
        $('.more-desktop-2').css('display', 'none')
    });

});