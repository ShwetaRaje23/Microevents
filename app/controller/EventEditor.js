var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.EventEditor', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            saveButton : 'eventeditor button[action=save]',
            backButton : 'eventeditor button[action=back]'
        },
        control: {
            backButton: {
                tap: 'doHome'
            },
            saveButton: {
                tap: 'doHome'
            }
        }
    },

    doHome: function(){
        console.log("Back Home")
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'left'});

    },
    doHome: function(){
        console.log("Back Home")
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
