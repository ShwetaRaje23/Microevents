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
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Around Me',
                    items : [
                        {
                            xtype : 'button',
                            text : 'Add'
                        }
                    ]
                }
            },
            {
                title: 'My Events',
                iconCls: 'user',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'My Events'
                }
            },
            {
                title: 'Settings',
                iconCls: 'settings',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Settings'
                }
            }
        ]
    }
});
