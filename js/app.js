window.QMSG_GLOBALS = {
	DEFAULTS: {
		showClose: false,
		timeout: 3000
	}
}

var pages = {
	showPage: $("#home"),
	docsLoaded: false,
}

var home = {
}

pages.swiper = new Swiper('#pageview', {
	allowTouchMove: false,
})

$(pages.showPage).css("width", "80px")
$(pages.showPage).css("filter", "hue-rotate(90deg)")
//$("#pageview").load("./pages/home/main.html");

$(".page-button").click(function() {
	$(pages.showPage).css("width", "40px")
	$(pages.showPage).css("filter", "hue-rotate(0deg)")
	$(this).css("width", "80px")
	$(this).css("filter", "hue-rotate(90deg)")
	pages.showPage = this
	switch ($(this).attr("id")) {
		case "home":
			pages.swiper.slideTo(0, 0, false);
			break
		case "tools":
			pages.swiper.slideTo(1, 0, false);
			break
		case "explain":
			pages.swiper.slideTo(2, 0, false);
			if (pages.docsLoaded == false) {
				pages.docsLoaded = true
				Qmsg.info("文档首次加载较慢，请耐心等待")
				$("#page-explain").prepend(`<div class="loader-showbox">
                <div class="loader">
                  <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                  </svg>
                </div>
              </div>`)
				$("#pageview-docs").attr("src", "https://minidocs.skyinncloud.top/")
				$("#pageview-docs").on("load", function() {
					Qmsg.success("加载完成")
					$(".loader-showbox").fadeOut(1000, function() {
						$(".loader-showbox").remove()
					});

				})
			}
			break
		case "user":
			pages.swiper.slideTo(3, 0, false);
			break
		case "settings":
			pages.swiper.slideTo(4, 0, false);
			break
		default:
			pages.swiper.slideTo(0, 0, false);
	}
})

home.swiper = new Swiper ('#home-swiper', {
    autoplay:true,
    disableOnInteraction:false,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })   
//home.swiper.update()


$("#home-swiper").children(".swiper-wrapper").on("click", ".swiper-slide", function() {
    window.open($(this).attr("url"));
})

function miniloginData(data) {
	console.log(data)
	for (i in data.banner) {
		$("#home-swiper").children(".swiper-wrapper").append(`<div class="swiper-slide" url="${data.banner[i].target_url}"><img src="${data.banner[i].image_url}"></div>`)
	}
	//home.swiper.update()
	home.swiper.update()
	for (i in data.news) {
		$("#home-news").append(`<div class="item"><a class="title" target="view_window" href="${data.news[i].target_url}">${data.news[i].title}</a><span class="date">${data.news[i].create_date}</span></div>`)
		
	}
}
$.ajax({
	url: 'https://www.mini1.cn/landing/getdata',
	type: 'get',
	dataType: 'jsonp',
	data: {param1: 'value1'},
})