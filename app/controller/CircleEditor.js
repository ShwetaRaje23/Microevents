var defaultUser = "Sasha"

Ext.define('MicroEvents.controller.CircleEditor', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            saveButton : 'circleEditor button[action=save]',
            backButton : 'circleEditor button[action=back]'
        },
        control: {
            backButton: {
                tap: 'doHome'
            },
            saveButton: {
                tap: 'saveCircle'
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

    saveCircle: function() {
        newCircleValues = Ext.getCmp('circleEditor').getValues()
        console.log(newCircleValues)

        // var d = newCircleValues.date
        // date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        //console.log(date)
        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/circle/",
            method : 'POST',
            noCache: false,
            pageParam: false,
            startParam: false,
            limitParam: false,
            params: {
                circle_name: newCircleValues.title,
                user_ids: newCircleValues.invitees,
                user_id: localStorage.getItem("MicroEvents_user_id")

            },
            success: function(response){
                console.log(response)
                // temp = response
                // localStorage.setItem("MicroEvents_user_id", JSON.parse(temp.responseText).user_id);
                // localStorage.setItem("MicroEvents_email", JSON.parse(temp.responseText).email);
                // this.loadStores(localStorage.getItem("MicroEvents_user_id"))
            }
        });

        //temp_date = newCircleValues.date
        //date_string = temp_date.getFullYear()+"-"+temp_date.getMonth()+"-"+temp_date.getDate()+" "+temp_date.getHours()+":"+temp_date.getMinutes()+":00";
        //console.log(date_string)


        console.log(newCircleValues)
        this.doHome()
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
