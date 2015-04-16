Ext.define('MicroEvents.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.field.Email',
        'Ext.field.Password'
    ],
    config: {
        fullscreen: true,
        styleHtmlContent : true,
        // style : 'background-color:#fff;'

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
                xtype : 'panel',
                html : '<center><img src="resources/images/logo.png" alt="Im In"></img></center>',
                width: '70%',
                height: '40%'
            },
            {
                xtype : 'formpanel',
                id : 'loginForm',
                scrollable : false,
                flex: 1,
                width : '95%',
                items: [
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        id : 'login_email',
                        label: 'Email',
                        // listeners: {
                        //     keyup: function(field, e){
                        //         if(e.browserEvent.keyCode==13){
                        //             MicroEvents.app.getController('Login').doLogin()
                        //         }
                        //     }
                        // }
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
                        action : 'register',
                        flex : 1,
                        text : '<font size=2>Not a member? Register now!</font>',
                        ui : 'plain'
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
