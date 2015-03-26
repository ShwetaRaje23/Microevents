Ext.define('MicroEvents.view.Register', {
    extend: 'Ext.Panel',
    xtype: 'register',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.field.Email',
        'Ext.field.Password'
    ],
    config: {
        fullscreen: true,
        scrollable : true,
        styleHtmlContent : true,

        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'center'
        },
        items: [
            {
                xtype : 'spacer',
                flex: 1
            },
            {
                html : '<h2><font color="4F0076">App Name Here</font></h2>'
            },
            {
                xtype : 'formpanel',
                flex: 1,
                width : '95%',
                items: [
                    {
                        xtype : 'textfield',
                        name : 'fname',
                        label : 'First Name'
                    },
                    {
                        xtype : 'textfield',
                        name : 'lname',
                        label : 'Last Name'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        label: 'Password'
                    },
                    {
                        xtype : 'button',
                        text : 'Register',
                        action: 'register',
                        flex : 1,
                        height : 40,
                        ui : 'confirm'
                    }
                ]
            },
            {
                xtype : 'spacer',
                flex: 1
            }
        ]
    }
});
