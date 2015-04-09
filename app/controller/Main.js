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
        if(val.id == 'settings'){
            settingsDetailTpl.overwrite(Ext.getCmp('settingsDetailPanel').element, Ext.getStore('Settings').getAt(0).getData());
        }
        
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var eventsStore = Ext.getStore('MyEvents');
        eventsStore.load();
        eventsStore.clearFilter();
        eventsStore.filter('owner_id', defaultUser)
    }
});
