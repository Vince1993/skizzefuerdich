// Using an object literal for a jQuery feature
var myFeature = {
    init: function () {
        $("#respo_menu").click(this.openNav);
        this.loadImages();

       
    },
    openNav: function () {
        $("header nav").slideToggle();
    },
    loadImages: function () {
        $.getJSON('images.json', function (images) {
            $.each(images, function (index, image) {
                var newSrc = image.replace(/\.\w+$/, '.png');
                $('.gallery').append(`<img src="media/compressed/${image}" data-target="media/${newSrc}" alt="One sketch shown on website">`);
            });
        });
    }
};

$(document).ready(function () {
    myFeature.init();
    $('.gallery').on('click', 'img', function () {
        const fullSrc = $(this).data('target');

        // Create full-screen image element
        const $fullImg = $('<img>', {
            src: fullSrc,
            css: {
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                backgroundColor: '#06021dff',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999
            }
        });

        // Append to body
        $('body').append($fullImg);

        // Request fullscreen
        const elem = $fullImg[0];
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }

        // Remove image when exiting fullscreen
        $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
            if (!document.fullscreenElement &&
                !document.webkitFullscreenElement &&
                !document.mozFullScreenElement &&
                !document.msFullscreenElement) {
                $fullImg.remove();
            }
        });

        $fullImg.on('click', function () {
            if (document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });
    });
});
