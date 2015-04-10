myEventsTpl = new Ext.XTemplate(
    '<p><font size=3><b>{event_name}</b></font>',
        '<p><font size=2>@{venue}</font></p>',  // use current array index to autonumber
    '</p>'
);

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
                id : 'myEventsList',
                height : '100%',
                width: '100%',
                store : 'MyEvents',
                itemTpl : myEventsTpl
            }
        ]
    }
});
