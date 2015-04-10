Ext.define('MicroEvents.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'settings button[action=addCircle]',
            logoutButton : 'settings button[action=logout]'
        },
        control: {
            newButton: {
                tap: 'showAddCircleForm'
            },
            logoutButton: {
                tap: 'logout'
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
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'down'
        });

        Ext.getCmp('start').setActiveItem(4, {type : 'slide', direction:'down'});

    },

    seeCircleDetails: function(t, index, target, record, e, eOpts) {
        setTimeout(function(){t.deselect(index);}, 500);
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
