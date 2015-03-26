Ext.define('MicroEvents.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'home'
            },
            {
                xtype: 'myevents'
            },
            {
                xtype: 'settings'
            }
        ]
    }
});
