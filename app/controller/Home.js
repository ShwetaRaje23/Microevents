var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'home button[action=addEvent]',
            eventlist : 'home list'

        },
        control: {

            newButton: {
                tap: 'showAddEventForm'
            },
            eventlist:{
                itemtap : 'showAddedEvent'

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
    
    showAddedEvent: function(t, index, target, record, e, eOpts){

        console.log(index, record)
        console.log(record.data.owner_id)
        console.log(localStorage.getItem("MicroEvents_user_id"))

        if (localStorage.getItem("MicroEvents_user_id") == record.data.owner_id)
        {

        Ext.getCmp('eventEditor_title').setValue(record.data.title)
        Ext.getCmp('eventEditor_venue').setValue(record.data.venue)
        Ext.getCmp('eventEditor_date').setValue(record.data.date)
        Ext.getCmp('eventTime').setValue(record.data.time)
        this.showAddEventForm()
    }
    else{

        Ext.getCmp('eventEditor_title').setValue(record.data.title).disable()
        Ext.getCmp('eventEditor_venue').setValue(record.data.venue).disable()
        Ext.getCmp('eventEditor_date').setValue(record.data.date).disable()
        Ext.getCmp('eventTime').setValue(record.data.time).disable()

        this.showAddEventForm()

    }

        

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
