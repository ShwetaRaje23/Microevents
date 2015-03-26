var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.Login', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginButton : 'login button[action=login]',
            registerButton : 'login button[action=register]'
        },
        control: {
            loginButton: {
                tap: 'doLogin'
            },
            registerButton: {
                tap : 'doRegister'
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

        Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'right'});

    },

    doRegister: function(){

        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'left'
        });

        Ext.getCmp('start').setActiveItem(1, {type : 'slide', direction:'left'});

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
