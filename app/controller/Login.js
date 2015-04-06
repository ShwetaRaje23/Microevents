var temp;

var defaultUser = "Sasha"
var allEventsURL = ""
var myEventsURL = ""

Ext.define('MicroEvents.controller.Login', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginButton : 'login button[action=login]',
            registerButton : 'login button[action=register]'
        },
        control: {
            loginButton: {
                tap: 'doLogin'
            },
            registerButton: {
                tap : 'doRegister'
            }
        }
    },

    loadStores: function() {
        
    
        
    },

    doLogin: function(){

        logValues = Ext.getCmp('loginForm').getValues()

        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/login/",
            method : 'POST',
            params: {
                email : logValues.email
            },
            success: function(response){
                temp = response
                localStorage.setItem("MicroEvents_user_id", JSON.parse(temp.responseText).user_id);
                localStorage.setItem("MicroEvents_email", JSON.parse(temp.responseText).email);
            }
        });

        this.slideToHome()

    },

    slideToHome : function() {
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'right'});
    },

    doRegister: function(){
    
        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'left'
        });

        Ext.getCmp('start').setActiveItem(1, {type : 'slide', direction:'left'});

    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
        if(localStorage.getItem("MicroEvents_user_id") && parseInt(localStorage.getItem("MicroEvents_user_id"))>0){
            this.slideToHome()
        }

        


    }
});
