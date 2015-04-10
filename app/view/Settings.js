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
                xtype: 'toolbar',
                title: 'Settings',
                items : [
                    {
                        xtype : 'spacer'
                    },
                    {
                        xtype : 'button',
                        text : 'Logout',
                        iconCls: 'forbidden',
                        action : 'logout'
                    }
                ]
            },
            {
                xtype : 'container',
                layout : 'auto',
                // width  :'100%',
                margin : '0 0 0 15',
                flex : 1,
                id : 'settingsDetailPanel',
                tpl : settingsDetailTpl
            },
            {
                xtype : 'panel',
                layout : 'fit',
                styleHtmlContent: true,
                // style : 'background-color:#aaa;',
                flex: 5,
                items : [
                    {
                        xtype : 'toolbar',
                        title : 'My Circles',
                        docked: 'top',
                        items : [
                            {
                                xtype : 'button',
                                iconCls: 'add',
                                action: 'addCircle',
                                ui : 'confirm'
                            }
                        ]
                    },
                    {
                        xtype : 'list',
                        id : 'myCirclesList',
                        store : 'MyCircles',
                        itemTpl : '{circle_name}'
                    }
                ]
            }
        ]
    }
});
