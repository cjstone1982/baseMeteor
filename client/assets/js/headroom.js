$(function() {
	//头部显示隐藏动画
    $("header").headroom({
        "offset": 100,
        "tolerance": 1,
        "classes": {
            "initial": "animated",
            "pinned": "swingInX", //swingInX | slideDown
            "unpinned": "slideUp" //swingOutX | slideUp
        }
    })
})
