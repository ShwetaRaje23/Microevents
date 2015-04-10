Ext.define("MicroEvents.store.MyCircles", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Circle",
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
                rootProperty : 'circles'
            }
        }
    }
});
