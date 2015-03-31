Ext.define('MicroEvents.controller.MyEvents', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            myEventsList : 'myevents list'
        },
        control: {
            myEventsList: {
                itemtap: 'seeEventDetails'
            }
        }
    },

    seeEventDetails: function(argument) {
        setTimeout(function(){t.deselect(index);}, 500);
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
