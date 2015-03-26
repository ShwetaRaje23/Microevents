Ext.define('MicroEvents.view.MyEvents', {
    extend: 'Ext.Panel',
    xtype: 'myevents',
    id : 'myevents',
    requires: [

    ],
    config: {
        layout : 'card',
        title: 'My Events',
        iconCls: 'user',

        styleHtmlContent: true,
        scrollable: true,

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'My Events'
            }
        ]
    }
});
