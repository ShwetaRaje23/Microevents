var temp;

// var allEventsURL = "", myEventsURL="";
var allEventsURL = "http://127.0.0.1:8000/api/user/1/";
var myEventsURL = "http://127.0.0.1:8000/api/user/1/";
var settingsURL = "http://127.0.0.1:8000/api/user/1/";

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

    loadStores: function(user_id) {
        settingsURL = "http://127.0.0.1:8000/api/user/"+user_id+"/"
        Ext.getStore('Settings').getProxy().setUrl(settingsURL);
        Ext.getStore('Settings').load(); 
        console.log(settingsURL)

        myEventsURL = "http://127.0.0.1:8000/api/user/"+user_id+"/events/"
        Ext.getStore('MyEvents').getProxy().setUrl(myEventsURL);
        Ext.getStore('MyEvents').load();             
        console.log(myEventsURL)

        allEventsURL = "http://127.0.0.1:8000/api/main/?user_id="+user_id
        Ext.getStore('AllEvents').getProxy().setUrl(allEventsURL);
        Ext.getStore('AllEvents').load();             
        console.log(allEventsURL)
    },

    doLogin: function(){

        logValues = Ext.getCmp('loginForm').getValues()
        check = false;

        if(logValues.email == ""){
            Ext.Msg.alert('Email Incorrect', 'Please enter your email correctly to proceed.', Ext.emptyFn);
        }

        else{
            Ext.Ajax.request({
                url: "http://127.0.0.1:8000/api/login/",
                method : 'POST',
                noCache: false,
                params: {
                    email : logValues.email
                },
                success: function(response){
                    console.log(response)
                    temp = response
                    console.log(id = JSON.parse(temp.responseText).user_id)

                    if(parseInt(JSON.parse(temp.responseText).user_id) > 0){
                        check = true;
                        localStorage.setItem("MicroEvents_user_id", JSON.parse(temp.responseText).user_id);
                        localStorage.setItem("MicroEvents_email", JSON.parse(temp.responseText).email);  
                        MicroEvents.app.getController("Login").loadStores(localStorage.getItem("MicroEvents_user_id"))
                        MicroEvents.app.getController("Login").slideToHome() 
                    }
                    else {
                        Ext.Msg.confirm(
                            'Welcome to MicroEvents',
                            "This Email ID has not been used with MicroEvents before. Register to continue.",
                            function(button){
                                if(button=='yes'){
                                Ext.getCmp('register_email').setValue(logValues.email)
                                MicroEvents.app.getController("Login").doRegister()
                            }
                        });
                    }
                    
                    
                }
            });
        }
            

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
        
        // if(localStorage.getItem("MicroEvents_user_id") && parseInt(localStorage.getItem("MicroEvents_user_id"))>0){
        //     this.loadStores(localStorage.getItem("MicroEvents_user_id"))
        //     this.slideToHome()
        // }




    }
});
