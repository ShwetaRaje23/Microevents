Ext.define('MicroEvents.view.MyEvents', {
    extend: 'Ext.Panel',
    xtype: 'myevents',
    id : 'myevents',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        layout : 'card',
        title: 'My Events',
        iconCls: 'user',
        styleHtmlContent: true,
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'My Events'
            },
            {
                xtype : 'list',
                store : 'Events',
                itemTpl : '{title}'
            }
        ]
    }
});
