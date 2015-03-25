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
                        text : 'Login',
                        action: 'login',
                        flex : 1,
                        height : 40,
                        ui : 'confirm'
                    },
                    {
                        xtype : 'button',
                        flex : 1,
                        text : '<font size=2>Not a member? Sign Up</font>',
                        ui : 'plain'
                    },
                ]
            },
            {
                xtype : 'spacer',
                flex: 1
            }
        ]
    }
});
