var pages = {
    showPage: $("#home"),
}

$(".page-button").click(function() {
    $(pages.showPage).css("width", "36px")
    $(pages.showPage).css("filter", "hue-rotate(0deg)")
    $(this).css("width", "76px")
    $(this).css("filter", "hue-rotate(90deg)")
    pages.showPage = this
    switch ($(this).attr("id")) {
        case "home":
            $('#pageview').attr('src', "./pages/home/index.html");
            break
        case "tools":
            $('#pageview').attr('src', "./pages/tools/index.html");
            break
        case "explain":
            $('#pageview').attr('src', "https://minidocs.skyinncloud.top/");
            break
        case "user":
            $('#pageview').attr('src', "./pages/user/index.html");
            break
        case "settings":
            $('#pageview').attr('src', "./pages/settings/index.html");
            break
        default:
        	$('#pageview').attr('src', "./pages/home/index.html");
    }
})

$(pages.showPage).css("width", "76px")
$(pages.showPage).css("filter", "hue-rotate(90deg)")
$('#pageview').attr('src', "./pages/home/index.html");