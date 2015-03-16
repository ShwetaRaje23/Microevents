Ext.define('MicroEvents.controller.Login', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginButton : 'login button[action=login]'
        },
        control: {
            loginButton: {
                tap: 'doLogin'
            }
        }
    },

    doLogin: function(){

        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(1, {type : 'slide', direction:'right'});

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
