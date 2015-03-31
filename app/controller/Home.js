var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'home button[action=new]'
        },
        control: {
            newButton: {
                tap: 'doNewEvent'
            }
        }
    },

    doNewEvent: function(){
        console.log("Reached")
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(3, {type : 'slide', direction:'right'});

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
