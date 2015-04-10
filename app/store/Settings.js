Ext.define("MicroEvents.store.Settings", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Settings",
        proxy : {
            type : 'ajax',
            method: 'get',
            noCache: false,
            url : settingsURL,
            pageParam: false,
            startParam: false,
            limitParam: false,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json'
            }
        }
    }
});



