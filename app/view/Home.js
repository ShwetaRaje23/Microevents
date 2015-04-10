var allEventsTpl = new Ext.XTemplate(
    '<p><font size=3><b>{event_name} with {owner_name}</b></font>',
        '<br><font size=2>{venue} | @{time}</font>',  // use current array index to autonumber
    '</p>'
);


Ext.define('MicroEvents.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    requires: [

    ],
    config: {
        layout : 'card',
        title: 'Home',
        iconCls: 'home',

        // styleHtmlContent: true,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Around Me'
            },
            {
                xtype: "list",
                store : 'AllEvents',
                itemTpl : allEventsTpl,
                grouped : true,
                listeners: {
                    disclose: { fn: this.onEventsListDisclose, scope: this }
                }
            }
        ]
    }
    
});
