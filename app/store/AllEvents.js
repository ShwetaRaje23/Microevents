Ext.define("MicroEvents.store.AllEvents", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Event",
        autoLoad : true,        
        proxy : {
            type : 'ajax',
            noCache: false,
            pageParam: false,
            startParam: false,
            limitParam: false,
            method: 'get',
            url : allEventsURL,
            useDefaultXhrHeader : false,
            reader : {
                type : 'json',
                rootProperty : 'events'
            }
        }
    }
});



