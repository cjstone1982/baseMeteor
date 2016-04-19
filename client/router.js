// FlowRouter.route('/blog/:postId', {
//     // do some action for this route
//     action: function(params, queryParams) {
//         console.log("Params:", params)
//         console.log("Query Params:", queryParams)
//     },
//     name: "<name for the route>" // optional
// })






var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin',
    triggersEnter: [function(context, redirect) {
        console.log('running group triggers')
    }]
})

// handling /admin route
adminRoutes.route('/', {
    action: function() {
        BlazeLayout.render('componentLayout', { content: 'admin' })
    },
    triggersEnter: [function(context, redirect) {
        console.log('running /admin trigger')
    }]
})

// handling /admin/posts
adminRoutes.route('/posts', {
    action: function() {
        BlazeLayout.render('componentLayout', { content: 'posts' })
    }
})
