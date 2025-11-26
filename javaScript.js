$(document).ready(function () {
    $("#respo").click(slideInAndOut);

    rotateImages();
    /*$.ajax({
        url: "countImages.php",
        dataType: "json",   // <-- tell jQuery to parse JSON
        success: function (response) {
            var numImages = response.count; // now works
            loadImages(numImages);
        },
        error: function (xhr, status, error) {
            console.error("AJAX error:", status, error);
        }
    });*/

    loadImages(17);

    $(document).on("click", "img", openCloseFullScreen);

    $("a[href^='#']").on("click", scrollingSmoothToId);
      
});



//FUNCTION LIST
function slideInAndOut() {
    $("nav a").slideToggle(500);}

function rotateImages() {
    const $track = $('.carousel .track');

    function fadeShift() {
        const $lastImg = $track.children().last();

        // fade out the first image
        $lastImg.fadeOut(400, function () {
            // move it to the start
            $track.prepend($lastImg);
            // fade it back in at the new position
            $lastImg.fadeIn(400);
        });
    }

    // run every 3 seconds
    setInterval(fadeShift, 3000);
}

function loadImages(numImages) {
    for (let i = 0; i < numImages; i++) {
        $('.img_grid').append(`
            <div class="img_wrap">
                <img src="img_small/sketch${i}.jpg" id="img${i}">
                <div class="overlay-number">${i + 1}</div>
            </div>`);
    }

    /* $.ajax({
        url: "countImages.php",
        dataType: "json",   // <-- tell jQuery to parse JSON
        success: function (response) {
            var numImages = response.count; // now works
        },
        error: function (xhr, status, error) {
            console.error("AJAX error:", status, error);
        }
    }); */
}

function openCloseFullScreen() {
    const elem = $(this)[0]; // raw DOM element

    // Check if any fullscreen element is active
    const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

    if (!isFullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Older Firefox
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge legacy
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Older Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge legacy
            document.msExitFullscreen();
        }
    }
}

function scrollingSmoothToId(event) {
    event.preventDefault(); // prevent default jump
    var target = $($(this).attr("href"));
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 400); // smooth scroll in 400ms
    }
}
    



