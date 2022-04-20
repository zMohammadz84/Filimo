$(document).ready(function () {



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

    // owl carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
    });


    // Hidden owl-nav
    $(window).resize(function () {
        if ($(window).innerWidth() > 640) {

            $('section .owl-nav').show();

        } else {
            $('.owl-nav').hide();
        }
    });

    if ($(window).innerWidth() > 640) {

        $('section .owl-nav').show();

    } else {
        $('.owl-nav').hide();
    }

    //Change image-slide 
    $(window).resize(function () {
        if ($(window).innerWidth() > 768) {
            $('.img-1 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/wqklz_desktop_1_v1.jpg?6')
            $('.img-2 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0v9if_desktop_1_v1.jpg?6')
            $('.img-3 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0lcx2_desktop_1_v1.jpg?6')
            $('.img-4 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/esfand_desktop_1_v8.jpg?6')
            $('.img-5 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/tbmar_desktop_1_v1.jpg?6')
        } else {
            $('.img-1 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/wqklz_mobile_1_v1.jpg?6')
            $('.img-2 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0v9if_mobile_1_v1.jpg?6')
            $('.img-3 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0lcx2_mobile_1_v1.jpg?6')
            $('.img-4 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/esfand_mobile_1_v8.jpg?6')
            $('.img-5 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/tbmar_mobile_1_v1.jpg?6')
        }
    });

    if ($(window).innerWidth() > 768) {
        $('.img-1 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/wqklz_desktop_1_v1.jpg?6')
        $('.img-2 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0v9if_desktop_1_v1.jpg?6')
        $('.img-3 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0lcx2_desktop_1_v1.jpg?6')
        $('.img-4 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/esfand_desktop_1_v8.jpg?6')
        $('.img-5 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/tbmar_desktop_1_v1.jpg?6')
    } else {
        $('.img-1 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/wqklz_mobile_1_v1.jpg?6')
        $('.img-2 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0v9if_mobile_1_v1.jpg?6')
        $('.img-3 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/0lcx2_mobile_1_v1.jpg?6')
        $('.img-4 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/esfand_mobile_1_v8.jpg?6')
        $('.img-5 img').attr('src', 'https://www.filimo.com/public/public/filemanager/homeslider/tbmar_mobile_1_v1.jpg?6')
    }

    //filter-collapse
    $('.btn-filter button').click(function (e) {
        e.preventDefault();
        $('.filter-bar').slideToggle();
        $('.btn-filter button').toggleClass('change-bg');
    });

    // change border-color of select:last-child
    $('input[type=checkbox]').click(function () {
        $('.select-hd').toggleClass('border-color-changed');
    })

    //Show/Hide pages of filter Mobile
    $($(window)).resize(function () {
        if ($(window).innerWidth() < 768) {
            $('.select-1').click(function (e) {
                let svg = $(this).children()[0]
                let data = $(this).attr('data');
                let click = $(this);
                let page = $('.page-of-filter-bar')[data - 1];
                let a = $('a', page)
                innerhtml()
                $(page).fadeIn(hide_pages);
                $(svg).css('transform', 'rotate(180deg)');

                function hide_pages() {
                    $('.close-filter-page').click(function () {
                        $(page).fadeOut();
                        let svg = $(click).children()[0]
                        $(svg).css('transform', 'rotate(0deg)')
                    })
                }
                function innerhtml() {
                    $(a).click(function (e) {
                        e.preventDefault();
                        $('span', click).text($(this).text());
                        $(page).fadeOut();
                        let svg = $(click).children()[0]
                        $(svg).css('transform', 'rotate(0deg)')
                        if ($('span', click).text() === 'همه') {
                            $(click).css('border-color', 'gray')
                        } else {
                            $(click).css('border-color', '#f6b828 ')
                        }
                    })
                }
            });
        } else {
            $('.select-1').off('click')
        }
    });
    if ($(window).innerWidth() < 768) {
        $('.select-1').click(function (e) {
            let svg = $(this).children()[0]
            let data = $(this).attr('data');
            let click = $(this);
            let page = $('.page-of-filter-bar')[data - 1];
            let a = $('a', page)
            innerhtml()
            $(page).fadeIn(hide_pages);
            $(svg).css('transform', 'rotate(180deg)');

            function hide_pages() {
                $('.close-filter-page').click(function () {
                    $(page).fadeOut();
                    let svg = $(click).children()[0]
                    $(svg).css('transform', 'rotate(0deg)')
                })
            }
            function innerhtml() {
                $(a).click(function (e) {
                    e.preventDefault();
                    $('span', click).text($(this).text());
                    $(page).fadeOut();
                    let svg = $(click).children()[0]
                    $(svg).css('transform', 'rotate(0deg)')
                    if ($('span', click).text() === 'همه') {
                        $(click).css('border-color', 'gray')
                    } else {
                        $(click).css('border-color', '#f6b828 ')
                    }
                })
            }
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





})



