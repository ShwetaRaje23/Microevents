Ext.define("MicroEvents.store.MyEvents", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Event",
        autoLoad : false,
        proxy : {
            type : 'ajax',
            noCache: false,
            pageParam: false,
            startParam: false,
            limitParam: false,
            method: 'get',
            url : myEventsURL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'events'
            }
        }
    }
});



