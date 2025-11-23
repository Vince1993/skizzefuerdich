$(document).ready(function () {
    $("#respo").click(slideInAndOut);

<<<<<<< HEAD
    rotateImages();
=======
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
>>>>>>> 475d45c148faffb599526d45317e3ca7094302a8

    loadImages(17);

    loadImages(17);

    $(document).on("click", ".img_grid img", openCloseFullScreen);

    $("a[href^='#']").on("click", scrollingSmoothToId);
      
});



//FUNCTION LIST
function slideInAndOut() {
    $("nav a").slideToggle(1000);}

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
    if (!document.fullscreenElement) {
        $(this)[0].requestFullscreen(); // ensure raw DOM element
    } else {
        document.exitFullscreen();
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
    



