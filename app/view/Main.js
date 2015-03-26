Ext.define('MicroEvents.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
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
