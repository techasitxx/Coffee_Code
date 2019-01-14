
function onYouTubeIframeAPIReady() {
    yplayer = new YT.Player("mvclip", {
        width: "640",
        height: "360",
        videoId: "XtB3TBTifvk",
        host: 'http://www.youtube.com',
        playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            wmode: "transparent"
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}

function onPlayerReady(e) {
    e.target.mute(), e.target.seekTo(0), e.target.playVideo()
}

function onPlayerStateChange(e) {
    e.data === YT.PlayerState.ENDED && e.target.seekTo(0)
}

function mainVisualResize() {
    var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        t = document.getElementById("mvclip");
    1920 > e || (t.style.width = e + "px", t.style.height = Math.floor(e / 16 * 9) + "px")
}
var yplayer, ytag = document.createElement("script");
ytag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
window.onload = firstScriptTag.parentNode.insertBefore(ytag, firstScriptTag);
window.addEventListener("load", mainVisualResize);
window.addEventListener("resize", mainVisualResize);