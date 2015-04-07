Ext.define("MicroEvents.store.AllEvents", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Event",
        proxy : {
            type : 'ajax',
            method: 'get',
            // url : settingsURL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'event'
            }
        },
    }
});



