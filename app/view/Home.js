Ext.define('MicroEvents.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    requires: [

    ],
    config: {
        layout : 'card',
        title: 'Home',
        iconCls: 'home',

        styleHtmlContent: true,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Around Me'
            },
            {
                xtype: "list",
                store : 'AllEvents',
                itemTpl : '{title}',
                listeners: {
                    disclose: { fn: this.onEventsListDisclose, scope: this }
                }
            }
        ]
    }
    
});
