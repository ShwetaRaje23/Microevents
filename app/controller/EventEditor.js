Ext.define('MicroEvents.controller.EventEditor', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            saveButton : 'eventEditor button[action=save]',
            backButton : 'eventEditor button[action=back]',
            shareListField : 'eventEditor textareafield[name=shareListTextShow]',
            addShareCircles: 'circleListMultiSelect button[action=addShareCircles]'
        },
        control: {
            backButton: {
                tap: 'doHome'
            },
            saveButton: {
                tap: 'saveEvent'
            },

            shareListField: {
                focus : 'showCirclesList'
            },

            addShareCircles: {
                tap: 'addCirclesToForm'
            }
        }
    },

    addCirclesToForm: function() {
        var selection = Ext.getCmp('circleListSelect').getSelection();
        var text = "";
        var text_id = "";
        for (i = 0; i < selection.length; i++) { 
            if(i==0){
                text += selection[i].data.circle_name;    
                text_id += selection[i].data.id;    
            }
            else{
                text += ", "+selection[i].data.circle_name;
                text_id += ","+selection[i].data.id;
            }
            
        }

        Ext.getCmp('shareListText').setValue(text);
        Ext.getCmp('invitesHidden').setValue(text_id);

        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'left'
        });

        Ext.getCmp('start').setActiveItem(3, {type : 'slide', direction:'left'});        

    },

    showCirclesList: function() {
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(5, {type : 'slide', direction:'right'});
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
        date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();

        console.log(newEventValues)

        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/event/",
            method : 'POST',
            useDefaultXhrHeader : false,
            noCache: false,
            pageParam: false,
            startParam: false,
            limitParam: false,
            params: {
                event_name: newEventValues.title,
                event_date_time: date,
                user_id:localStorage.getItem("MicroEvents_user_id"),
                venue:newEventValues.venue,
                invites:newEventValues.invites
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
