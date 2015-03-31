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
<<<<<<< HEAD
            },
            {
                xtype: "list",
                store: "Settings",
                itemTpl: '{title}' 


            }


=======
            }
>>>>>>> 9cba0a77745d51c7eb5e55c56c18ee62ec0920f3
        ]
    }
});
