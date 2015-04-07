Ext.define("MicroEvents.store.Settings", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Settings",
        proxy : {
            type : 'ajax',
            method: 'get',
            // url : settingsURL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'user'
            }
        },
    }
});



