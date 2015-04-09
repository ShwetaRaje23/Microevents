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
                xtype: 'toolbar',
                title: 'My Events',
                items : [
                    {xtype : 'spacer'},
                    {
                        xtype : 'button',
                        iconCls: 'add',
                        action: 'addEvent',
                        ui : 'confirm'
                    }
                ]
            },
            {
                xtype : 'list',
                height : '100%',
                width: '100%',
                store : 'MyEvents',
                itemTpl : '{title}'
            }
        ]
    }
});
