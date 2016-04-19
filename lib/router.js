
FlowRouter.route('/', {
     action: function(params, queryParams){
        console.log("首页:", params.postId)
        BlazeLayout.render('home', {title: '首页'})
    }
})

FlowRouter.route('/articles', {
     action: function(params, queryParams){
        console.log("文章列表:", params.postId)
        BlazeLayout.render('articles', {title: '文章列表'})
    }
})

FlowRouter.route('/togethers', {
     action: function(params, queryParams){
        console.log("活动列表:", params.postId)
        BlazeLayout.render('togethers', {title: '活动列表'})
    }
})

FlowRouter.route('/collections', {
     action: function(params, queryParams){
        console.log("话题:", params.postId)
        BlazeLayout.render('collections', {title: '话题'})
    }
})

FlowRouter.route('/friends', {
     action: function(params, queryParams){
        console.log("朋友圈:", params.postId)
        BlazeLayout.render('friends', {title: '朋友圈'})
    }
})

