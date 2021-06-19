var video = document.getElementById("videoElement");
var videoSrc = "http://168.235.80.83:8000/live/stream/index.m3u8";
if (video.canPlayType("application/x-mpegURL")) {
    video.src = videoSrc;
    video.addEventListener("loadedmetadata", function () {
        video.play();
    });
} else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
    });
}