Ext.define('MicroEvents.view.Start', {
    extend: 'Ext.Panel',
    xtype: 'start',
    id : 'start',
    requires: [

    ],
    config: {
        fullscreen: true,
        layout : 'card',

        items: [
            {
                xtype : 'login'
            },
            {
                xtype : 'register'
            },
            {
                xtype : 'main'
            },
            {
                xtype : 'eventEditor'
            },
            {
                xtype : 'circleEditor'
            },
            {
                xtype : 'circleListMultiSelect'
            }
        ]
    }
});
