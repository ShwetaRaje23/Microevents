var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'home button[action=addEvent]'
        },
        control: {
            newButton: {
                tap: 'showAddEventForm'
            }
        }
    },

    showAddEventForm: function(){
        console.log("Reached")
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'down'
        });

        Ext.getCmp('start').setActiveItem(3, {type : 'slide', direction:'down'});

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
