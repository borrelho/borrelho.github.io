$(function() {
        $(".video").click(function () {
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC;
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', '');
        });
        });
    });

$('#videoModal').on('hidden.bs.modal', function (e) {
$('#videoModal').find('iframe').attr('src', '');
});