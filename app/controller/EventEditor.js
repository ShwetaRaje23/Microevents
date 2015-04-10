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

        var d = newEventValues.date
        date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()

        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/event/",
            method : 'POST',
            noCache: false,
            pageParam: false,
            startParam: false,
            limitParam: false,
            params: {
                event_name: newEventValues.title,
                event_date_time: date,
                user_id:localStorage.getItem("MicroEvents_user_id"),
                venue:newEventValues.venue,
                invites:1
            },
            success: function(response){
                console.log(response)
                Ext.getStore('MyEvents').add(response.responseText);
            }
        });

        this.doHome()
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
