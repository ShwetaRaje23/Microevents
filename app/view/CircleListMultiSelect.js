circleTpl = new Ext.XTemplate(
    '<p><font size=3><b>{circle_name}</b></font>',
        // '<p><font size=2>@{venue}</font></p>',  // use current array index to autonumber
    '</p>'
);

Ext.define('MicroEvents.view.CircleListMultiSelect', {
    extend: 'Ext.Panel',
    xtype: 'circleListMultiSelect',
    id : 'circleListMultiSelect',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        title: 'Share With...',
        iconCls: 'user',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'My Events',
                items : [
                    {xtype : 'spacer'},
                    {
                        xtype : 'button',
                        iconCls: 'check2',
                        action: 'addShareCircles',
                        ui : 'confirm'
                    }
                ]
            },
            {
                xtype : 'list',
                id : 'circleListSelect',
                height : '100%',
                width: '100%',
                store : 'MyCircles',
                mode: 'MULTI',
                itemTpl : circleTpl
            }
        ]
    }
});


// loadingText: "Loading Notes...",
//         emptyText: "<div class=\"notes-list-empty-text\">No notes found.</div>",
//         itemTpl : '{circle_name}'