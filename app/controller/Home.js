var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            eventlist : 'home list',
            acceptInvite : 'eventEditor button[action=acceptInvite]',
            rejectInvite : 'eventEditor button[action=rejectInvite]'

        },
        control: {

            acceptInvite: {
                tap : 'acceptInvite'
            },

            rejectInvite: {
                tap : 'rejectInvite'
            },

            eventlist:{
                itemtap : 'showAddedEvent'

            }


        }
    },

    acceptInvite: function(){
        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/main/",
            method : 'POST',
            params: {
                event_id: localStorage.getItem("MicroEvents_eventInvite"),
                user_id: localStorage.getItem("MicroEvents_user_id"),
                accept: 1
            },
            success: function(response){
                console.log("Here")
                Ext.getCmp('start').getLayout().setAnimation({
                    type: 'slide',
                    duration: 300,
                    reverse: true,
                    direction:'up'
                });

                Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'up'});
            }
        });
    },

    rejectInvite: function(){
        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/main/",
            method : 'POST',
            params: {
                event_id: localStorage.getItem("MicroEvents_eventInvite"),
                user_id: localStorage.getItem("MicroEvents_user_id"),
                accept: 2
            },
            success: function(response){
                console.log("Here")
                Ext.getCmp('start').getLayout().setAnimation({
                    type: 'slide',
                    duration: 300,
                    reverse: true,
                    direction:'up'
                });

                Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'up'});
            }
        });
    },


    showAddEventForm2: function(){
        console.log("Reached")
        Ext.getCmp('botToolbar').show()
        Ext.getCmp('backButtonEventEditor').setUi('back');
        Ext.getCmp('backButtonEventEditor').setText('Back');
        Ext.getCmp('saveButtonEventEditor').hide();

        //Ext.getCmp('eventEditor_toolbar').setTitle('Invited Event')
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

        // if (localStorage.getItem("MicroEvents_user_id") == record.data.owner_id)
        // {

        Ext.getCmp('botToolbar').show()

        localStorage.setItem("MicroEvents_eventInvite", record.data.event_id);

        Ext.getCmp('backButtonEventEditor').setUi('back');
        Ext.getCmp('backButtonEventEditor').setText('Back');
        Ext.getCmp('saveButtonEventEditor').hide();

        Ext.getCmp('eventEditor_title').setValue(record.data.event_name)
        Ext.getCmp('eventEditor_venue').setValue(record.data.venue)
        Ext.getCmp('eventEditor_date').setValue(record.data.date)
        Ext.getCmp('eventTime').setValue(record.data.time)
        Ext.getCmp('shareListText').setValue(record.data.attendees_number)

        Ext.getCmp('eventEditor_title').disable()
        Ext.getCmp('eventEditor_venue').disable()
        Ext.getCmp('eventEditor_date').disable()
        Ext.getCmp('eventTime').disable()
        Ext.getCmp('shareListText').disable()



        this.showAddEventForm2()
        

    },

    // showAddEventForm: function(){
    //     console.log("Reached")
    //     Ext.getCmp('circleEditor_toolbar').setTitle('New Circle')
    //     Ext.getCmp('ce_saveButton').setText('Save')
    //     Ext.getCmp('start').getLayout().setAnimation({
    //         type: 'slide',
    //         duration: 300,
    //         reverse: true,
    //         direction:'down'
    //     });

    //     Ext.getCmp('start').setActiveItem(3, {type : 'slide', direction:'down'});

    // },



    // showAddedEvent: function(t, index, target, record, e, eOpts){

    //     console.log(index, record)
    //     Ext.getCmp('circleEditor_toolbar').setTitle('Edit Circle')
    //     Ext.getCmp('ce_saveButton').setText('Edit')
        

    //     //console.log(record.data.users.email)
    //    // console.log(localStorage.getItem("MicroEvents_user_id"))
    //    var s = ""
    //    for (loop = 0 ; loop < record.data.users.length ; loop++)
    //    {

    //     //console.log(record.data.users[loop].email)
    //     s += record.data.users[loop].email
    //     //Ext.getCmp('circleEditor_invitees').setValue(record.data.users[loop].email)

    //    }

    //    console.log(s)
    //     Ext.getCmp('circleEditor_title').setValue(record.data.circle_name)
    //     Ext.getCmp('circleEditor_invitees').setValue(s)
    //     //Ext.getCmp('eventEditor_date').setValue(record.data.date)
    //     //Ext.getCmp('eventTime').setValue(record.data.time)
    //     this.showAddCircleForm2()
    // },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
