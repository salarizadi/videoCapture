/**
 *  Copyright (c) 2023
 *  @Version    : 1.0.0
 *  @Repository : https://github.com/salarizadi/videoCapture
 *  @Author     : https://salarizadi.github.io
 *
 * $.videoCapture({
 *     video  : "myVideo.mp4",
 *     second : 1,
 *     format : "jpeg", // jpeg or png
 *     loading: ( ) => {
 *         console.log("Convert video to image")
 *     },
 *     success: img => {
 *         console.log("Video converted")
 *         console.info(img)
 *     },
 *     failed: error => {
 *         console.log("Error converting video to image")
 *         console.error(error)
 *     }
 * })
 */

(function ($) {

    $.videoCapture = ( $options ) => {
        const options = $.extend(true, {
            second : 1,
            format : "jpeg",
            loading: ( )    => {},
            success: result => {},
            failed : error  => {}
        }, $options);
        const $video  = $(`<video></video>`);
        const $canvas = $(`<canvas></canvas>`);

        $video.append(`<source src="${options.video}">`);

        options.loading();
        $video.on("loadstart", function ( ) {
            try {
                $video[0].currentTime = options.second;
                $video[0].addEventListener("seeked", function () {
                    const video  = $video.get(0);
                    const canvas = $canvas.get(0);
                    const ctx    = canvas.getContext('2d');

                    canvas.width  = video.videoWidth;
                    canvas.height = video.videoHeight;

                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                    options.success(canvas.toDataURL(`image/${options.format}`))
                })
            } catch (e) {options.error(e)}
        });
    }

})(jQuery);