Ext.define('MicroEvents.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'settings button[action=addCircle]',
            logoutButton : 'settings button[action=logout]', 
            myCirclesList : 'settings list'
        },
        control: {
            newButton: {
                tap: 'showAddCircleForm'
            },
            logoutButton: {
                tap: 'logout'
            },
            myCirclesList: {
                itemtap: 'showAddedCircle'

            }
        }
    },

    logout: function() {
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'left'
        });

        localStorage.setItem("MicroEvents_user_id", "");
        localStorage.setItem("MicroEvents_email", ""); 

        Ext.getCmp('start').setActiveItem(0, {type : 'slide', direction:'left'});
    },

    showAddCircleForm: function(){
        console.log("Reached")
        Ext.getCmp('circleEditor_toolbar').setTitle('New Circle')
        Ext.getCmp('ce_saveButton').setText('Save')
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'down'
        });

        Ext.getCmp('start').setActiveItem(4, {type : 'slide', direction:'down'});

    },

    showAddCircleForm2: function(){
        console.log("Reached")
        //Ext.getCmp('circleEditor_toolbar').setTitle('New Circle')
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'down'
        });

        Ext.getCmp('start').setActiveItem(4, {type : 'slide', direction:'down'});

    },


    showAddedCircle: function(t, index, target, record, e, eOpts){

        console.log(index, record)
        Ext.getCmp('circleEditor_toolbar').setTitle('Edit Circle')
        Ext.getCmp('ce_saveButton').setText('Edit')
        

        //console.log(record.data.users.email)
       // console.log(localStorage.getItem("MicroEvents_user_id"))
       var s = ""
       for (loop = 0 ; loop < record.data.users.length ; loop++)
       {

        //console.log(record.data.users[loop].email)
        s += record.data.users[loop].email
        //Ext.getCmp('circleEditor_invitees').setValue(record.data.users[loop].email)

       }

       console.log(s)
        Ext.getCmp('circleEditor_title').setValue(record.data.circle_name)
        Ext.getCmp('circleEditor_invitees').setValue(s)
        //Ext.getCmp('eventEditor_date').setValue(record.data.date)
        //Ext.getCmp('eventTime').setValue(record.data.time)
        this.showAddCircleForm2()
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
