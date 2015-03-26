Ext.define('MicroEvents.controller.Main', {
    extend: 'Ext.app.Controller',
    /**
     * @requires 
     */
    requires: [
        'Ext.util.DelayedTask'
    ],
    config: {
        refs: {
            myevents : 'main'
        },
        control: {
            myevents: {
                activeitemchange: 'switchingBetweenTabs'
            }
        }
    },

    switchingBetweenTabs: function(t, val, oldVal, eOpts) {
        if(val.getTitle() == "My Events"){
            var eventsStore = Ext.getStore('Events');
            eventsStore.load();
            eventsStore.clearFilter();
            eventsStore.filter('owner_id', defaultUser)
        }
        else if (oldVal.getTitle()=="My Events") {
            var eventsStore = Ext.getStore('Events');

            //Delay added because otherwise the filter was being removed before the tab animation had finished
            var task = Ext.create('Ext.util.DelayedTask', function () {
                eventsStore.clearFilter();
                eventsStore.load();
            });
            task.delay(500);
        }
        
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
