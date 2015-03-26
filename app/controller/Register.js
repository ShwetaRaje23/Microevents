Ext.define('MicroEvents.controller.Register', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            registerButton : 'register button[action=register]'
        },
        control: {
            registerButton: {
                tap : 'registerUserAndSignIn'
            }
        }
    },
    
    registerUserAndSignIn : function(){
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'right'});

    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
