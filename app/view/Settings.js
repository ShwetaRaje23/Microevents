var settingsDetailTpl = Ext.XTemplate(
    'Name : {first_name} {last_name}',
    'Email : {email}'
);


Ext.define('MicroEvents.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    id : 'settings',
    requires: [

    ],
    config: {
        layout : {
            type : 'vbox',
            align : 'stretch'
        },
        title: 'Settings',
        iconCls: 'settings',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            },
            {
                xtype : 'container',
                // margin : '-15 -15 -15 -15',
                width  :'100%',
                height: '100%',
                style : 'background-color:#fcc;',
                flex : 1,
                id : 'settingsDetailPanel',
                tpl : settingsDetailTpl,
                items : [
                    // {
                    //     xtype : 'formpanel',
                    //     width : '100%',
                    //     height : '100%',
                    //     items : [
                    //         {
                    //             xtype: 'fieldset',
                    //             title: 'Enter your name',
                    //             items: [
                    //                 {
                    //                     xtype: 'textfield',
                    //                     label: 'First Name',
                    //                     name: 'firstName'
                    //                 },
                    //                 {
                    //                     xtype: 'textfield',
                    //                     label: 'Last Name',
                    //                     name: 'lastName'
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // }
                ]

            },
            {
                xtype : 'container',
                // margin : '-15 -15 -15 -15',
                styleHtmlContent: true,
                style : 'background-color:#aaa;',
                flex: 2,
                items : [
                    {
                        xtype : 'titlebar',
                        margin : '-15 -15 -15 -15',
                        title : 'My Circles',
                        items : [
                            {
                                xtype : 'button',
                                iconCls: 'add'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
