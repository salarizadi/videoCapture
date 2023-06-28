## videoCapture
This jQuery plugin helps you convert every second of video to image without any element appearing on your web page and save it as Base64.

## Image Format support
The image format you want depends on whether the canvas.toDataURL function supports the desired format or not. And as far as I know and tested, it supports jpeg and png.

Note : I suggest you use jpeg because it has good quality and its size is lower than png.

```Sizes of test image formats: png (432 KB), jpg (86 KB)```

## Example
```js
$.videoCapture({
    video  : "myVideo.mp4",
    second : 1,
    format : "jpeg",
    loading: ( ) => {
        console.log("Convert video to image")
    },
    success: img => {
        console.log("Video converted")
        console.info(img)
    },
    failed: error => {
        console.log("Error converting video to image")
        console.error(error)
    }
})
```
