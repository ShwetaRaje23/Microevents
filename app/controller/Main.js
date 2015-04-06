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

        
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var eventsStore = Ext.getStore('MyEvents');
        eventsStore.load();
        eventsStore.clearFilter();
        eventsStore.filter('owner_id', defaultUser)
    }
});
