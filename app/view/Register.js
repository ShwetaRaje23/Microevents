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
        styleHtmlContent : true,
        scrollable: false,

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
                scrollable: false,
                id : 'registerForm',
                flex: 1,
                width : '95%',
                items: [
                    {
                        xtype : 'textfield',
                        name : 'first_name',
                        label : 'First Name'
                    },
                    {
                        xtype : 'textfield',
                        name : 'last_name',
                        label : 'Last Name'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        id : 'register_email',
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
