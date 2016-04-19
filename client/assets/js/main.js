
Meteor.startup(function () {
	 
    //花式通知栏
    sAlert.config({
        effect: 'bouncyflip',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        stack: {
            spacing: 5, 
            limit: 10
        }, 
        offset: 5, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
        onClose: function() {
            console.log('s-alert closed');
        }
    })

    // effect    no effects  scale  slide  genie  jelly  flip  bouncyflip  stackslide
    // position top-left bottom-left top-right bottom-right top (full width) bottom (full width)
    // sAlert.error('Your message', alertOption)
    // sAlert.warning('Your message', alertOption)
    // sAlert.info('Your message', alertOption)
    // sAlert.success('Your message', alertOption)
    // sAlert.close(alertId)
    // sAlert.closeAll()

    // var alertOption={
    //     effect: 'bouncyflip', 
    //     position: 'top-right', 
    //     timeout: '3000', 
    //     onRouteClose: false, 
    //     stack: {
    //         spacing: 5, 
    //         limit: 10
    //     }, 
    //     offset: '80px',
    //     onClose: function() {
    //     console.log('closing alert in 3000ms...')
    //     }
    // }
    // sAlert.info('info', alertOption )
    // sAlert.warning('warning', alertOption )
    // sAlert.success('success', alertOption )
    // sAlert.error('error', alertOption )

    
})
 
