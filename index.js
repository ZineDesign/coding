

$(".like_icon").hover(function() {
    $(this).attr('src', 'images/like_icon_checked.svg');
    }, function() {
        $(this).attr('src', 'images/like_icon.svg');
    }
)

$(".like_icon").click(function() {
    $(this).removeAttr('src', 'images/like_icon.svg');
    $(this).attr('src', 'images/like_icon_checked.svg');
    console.log("Worked")
    }
)
