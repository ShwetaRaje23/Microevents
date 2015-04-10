Ext.define('MicroEvents.controller.MyEvents', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'myevents button[action=addEvent]',
            myEventsList : 'myevents list'
        },
        control: {
            newButton: {
                tap: 'showAddEventForm'
            },
            myEventsList: {
                itemtap: 'seeEventDetails'
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

    seeEventDetails: function(t, index, target, record, e, eOpts) {
        setTimeout(function(){t.deselect(index);}, 100);
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
