Ext.define('MicroEvents.controller.Register', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            registerButton : 'register button[action=register]'
        },
        control: {
            registerButton: {
                tap : 'registerUserAndSignIn'
            }
        }
    },
    
    registerUserAndSignIn : function(){

        regValues = Ext.getCmp('registerForm').getValues()
        console.log(regValues)

        Ext.Ajax.request({
            url: "http://127.0.0.1:8000/api/user/",
            method : 'POST',
            params: {
                first_name : regValues.first_name,
                last_name : regValues.last_name,
                email : regValues.email
            },
            success: function(response){
                localStorage.setItem("MicroEvents_user_id", response.user_id);
                localStorage.setItem("MicroEvents_email", response.email);
            }
        });
        

        Ext.getCmp('start').getLayout().setAnimation({
            type: 'slide',
            duration: 300,
            reverse: true,
            direction:'right'
        });

        Ext.getCmp('start').setActiveItem(2, {type : 'slide', direction:'right'});

    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
