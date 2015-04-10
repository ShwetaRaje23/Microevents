Ext.define('MicroEvents.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            newButton : 'settings button[action=addCircle]'
        },
        control: {
            newButton: {
                tap: 'showAddCircleForm'
            }
        }
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
