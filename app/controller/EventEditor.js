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
        console.log(newEventValues)

        var d = newEventValues.date
        date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        console.log(date)
        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/event/",
            method : 'POST',
            params: {
                event_name: newEventValues.title,
                event_date_time: date,
                user_id:localStorage.getItem("MicroEvents_user_id"),
                venue:newEventValues.venue,
                invites:1

            },
            success: function(response){
                console.log(response)
                // temp = response
                // localStorage.setItem("MicroEvents_user_id", JSON.parse(temp.responseText).user_id);
                // localStorage.setItem("MicroEvents_email", JSON.parse(temp.responseText).email);
                // this.loadStores(localStorage.getItem("MicroEvents_user_id"))
            }
        });

        temp_date = newEventValues.date
        date_string = temp_date.getFullYear()+"-"+temp_date.getMonth()+"-"+temp_date.getDate()+" "+temp_date.getHours()+":"+temp_date.getMinutes()+":00";
        console.log(date_string)


        console.log(newEventValues)
        this.doHome()
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
