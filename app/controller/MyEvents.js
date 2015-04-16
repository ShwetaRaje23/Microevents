Ext.define('MicroEvents.controller.MyEvents', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'myevents button[action=addEvent]',
            myEventsList : 'myevents list'
        },
        control: {
            newButton: {
                tap: 'setToNoValues'
            },
            myEventsList: {
                itemtap: 'seeAddedEvent'
            }
        }
    },

    setToNoValues: function() {
        
        Ext.getCmp('eventEditor_title').setValue("")
        Ext.getCmp('eventEditor_venue').setValue("")
        // Ext.getCmp('eventEditor_date').setValue("")
        // Ext.getCmp('eventTime').setValue("")
        Ext.getCmp('shareListText').setValue("")
        this.showAddEventForm()
    },

    showAddEventForm: function(){
        console.log("Reached")
        Ext.getCmp('botToolbar').hide()
        Ext.getCmp('backButtonEventEditor').setUi('decline');
        Ext.getCmp('saveButtonEventEditor').show();


        //Ext.getCmp('eventEditor_toolbar').setTitle('Invited Event')
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'down'
        });

        Ext.getCmp('start').setActiveItem(3, {type : 'slide', direction:'down'});

    },
    
    seeAddedEvent: function(t, index, target, record, e, eOpts){

        console.log(index, record)
        console.log(record.data.owner_id)
        Ext.getCmp('botToolbar').hide()
        Ext.getCmp('backButtonEventEditor').setUi('decline');
        Ext.getCmp('backButtonEventEditor').setText('Cancel');
        Ext.getCmp('saveButtonEventEditor').show();
        console.log(localStorage.getItem("MicroEvents_user_id"))

        // if (localStorage.getItem("MicroEvents_user_id") == record.data.owner_id)
        // {

        Ext.getCmp('eventEditor_title').setValue(record.data.event_name)
        Ext.getCmp('eventEditor_venue').setValue(record.data.venue)
        Ext.getCmp('eventEditor_date').setValue(record.data.date)
        Ext.getCmp('eventTime').setValue(record.data.time)
        Ext.getCmp('shareListText').setValue(record.data.attendees_number)


        Ext.getCmp('eventEditor_title').enable()
        Ext.getCmp('eventEditor_venue').enable()
        Ext.getCmp('eventEditor_date').enable()
        Ext.getCmp('eventTime').enable()
        Ext.getCmp('shareListText').enable()


        this.showAddEventForm()
        

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
