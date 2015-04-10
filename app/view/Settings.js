var settingsDetailTpl = new Ext.XTemplate(
    '<tpl>',
        '<br /><b>Name : </b>{first_name} {last_name}',
        '<br /><b>Email :</b> {email}',
    '</tpl>'
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
                width  :'100%',
                margin : '0 0 0 15',
                height: '100%',
                flex : 1,
                id : 'settingsDetailPanel',
                tpl : settingsDetailTpl
            },
            {
                xtype : 'container',
                
                styleHtmlContent: true,
                // style : 'background-color:#aaa;',
                flex: 5,
                items : [
                    {
                        xtype : 'titlebar',
                        margin : '-15 -15 -15 -15',
                        title : 'My Circles',
                        
                        items : [
                            {xtype : 'spacer'},
                            {
                                xtype : 'button',
                                iconCls: 'add',
                                action: 'addCircle',
                                ui : 'confirm'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
