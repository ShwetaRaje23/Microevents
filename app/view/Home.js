Ext.define('MicroEvents.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    id : 'home',
    requires: [

    ],
    config: {
        layout : 'card',
        title: 'Home',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items: [
            {
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
        ]
    }
});
