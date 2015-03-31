Ext.define('MicroEvents.view.MyEvents', {
    extend: 'Ext.Panel',
    xtype: 'myevents',
    id : 'myevents',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        title: 'My Events',
        iconCls: 'user',
        // styleHtmlContent: true,
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'My Events'
            },
            {
                xtype : 'list',
                height : '100%',
                width: '100%',
                store : 'Events',
                itemTpl : '{title}'
            }
        ]
    }
});
