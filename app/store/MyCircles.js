Ext.define("MicroEvents.store.MyCircles", {
    extend: "Ext.data.Store",
    config: {
        model: "MicroEvents.model.Circle",
        proxy : {
            type : 'ajax',
            method: 'get',
            
            useDefaultXhrHeader : false,
            noCache: false,
            pageParam: false,
            startParam: false,
            limitParam: false,

            reader : {
                type : 'json'
            }
        }
    }
});
