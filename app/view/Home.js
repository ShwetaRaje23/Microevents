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
        scrollable: true,

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Around Me',
                items : [
                    {
                        xtype : 'button',
                        text : 'Add New Event',
                        action: 'new',
                        flex : 1,
                        height : 40,
                        ui : 'confirm'
                    }
                ]
            },
            
            {
            xtype: "list",
            store : 'Events',
            itemTpl : '{title}',
            listeners: {
                disclose: { fn: this.onEventsListDisclose, scope: this }
            }
        }
        ]
    }
    
});
