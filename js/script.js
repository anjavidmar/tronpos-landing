/*
function ml_webform_success_1641546(){
    var r=ml_jQuery||jQuery;
    r(".ml-subscribe-form-1641546 .row-success").show(),r(".ml-subscribe-form-1641546 .row-form").hide();
}
*/

var h = window.innerHeight;
var w = window.innerWidth;

console.log('screen height = ' + h, 'screen width = ' + w);

var videoHeading = document.getElementById('video-heading');
var videoHeading_w = videoHeading.offsetWidth;
var video = document.getElementById('video');
var video_w = videoHeading_w - 4;
var video_h = video_w * 0.5625;

if (w > 850) {
    video_w = 780;
    video_h = video_w * 0.5625;
}

video.width = video_w;
video.height = video_h;

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        }
    });
    $(window).resize(function(){
        h = window.innerHeight;
        w = window.innerWidth;

        videoHeading_w = videoHeading.offsetWidth;
        video_w = videoHeading_w - 4;
        video_h = video_w * 0.5625;

        if (w > 850) {
            video_w = 780;
            video_h = video_w * 0.5625;
        }

        video.width = video_w;
        video.height = video_h;
    });
});