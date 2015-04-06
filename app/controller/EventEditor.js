var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.EventEditor', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            saveButton : 'eventEditor button[action=save]',
            backButton : 'eventEditor button[action=back]'
        },
        control: {
            backButton: {
                tap: 'doHome'
            },
            saveButton: {
                tap: 'saveEvent'
            }
        }
    },

    doHome: function(){
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'up'
        });

        Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'up'});
    },

    saveEvent: function() {
        
        newEventValues = Ext.getCmp('eventEditor').getValues()

        this.doHome()
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
