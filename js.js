// Using an object literal for a jQuery feature
var myFeature = {
    init: function () {
        $("#respo_menu").click(this.openNav);
        this.loadImages();

        $(".gallery").on("click", "img", (event) => {
            const image = event.currentTarget; // The clicked <img> element
            this.openFullscreen(image);
          });

        $("#fullscreenImg").click(this.closeFullscreen);
         
        // Hide image when fullscreen exits
        $(document).on("fullscreenchange webkitfullscreenchange msfullscreenchange", function () {
            if (!document.fullscreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) {
                $("#fullscreenImg").hide();
            }
        });
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
    },

    openFullscreen: function (image) {
        {
            let img_src = $(image).attr('src');
            let img_file_name = img_src.split('/').pop();
            let newFileName = img_file_name.replace('.jpg', '.png');
            let new_src = "media/" + newFileName;

            let $fullImg = $("#fullscreenImg");
            $fullImg.attr('src', new_src);
            $fullImg.show("full");
            let elem = $fullImg[0]; // Get the raw DOM element

            // Check if currently in fullscreen
            let isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            if (!isFullscreen) 
            {
                if (elem.requestFullscreen) {elem.requestFullscreen();} 
                else if (elem.webkitRequestFullscreen) {elem.webkitRequestFullscreen();} 
                else if (elem.msRequestFullscreen) {elem.msRequestFullscreen();}
            } 
            if(isFullscreen)
            {

            if (document.exitFullscreen) { document.exitFullscreen(); }
            else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
            else if (document.msExitFullscreen) { document.msExitFullscreen(); }
    
        }   
        }
    },

    closeFullscreen : function(){
        
            if (document.exitFullscreen) { document.exitFullscreen(); }
            else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
            else if (document.msExitFullscreen) { document.msExitFullscreen(); }
        
            $("#fullscreenImg").hide();
    }

};

$(document).ready(function () {
    myFeature.init();});
