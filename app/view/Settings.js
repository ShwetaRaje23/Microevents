Ext.define('MicroEvents.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    id : 'settings',
    requires: [

    ],
    config: {
        layout : 'card',
        title: 'Settings',
        iconCls: 'settings',
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            },
            {
                xtype: "list",
                store: "Settings",
                itemTpl: '{title}' 


            }

            


        ]
    }
});
