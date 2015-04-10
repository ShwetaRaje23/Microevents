Ext.define("MicroEvents.store.AllEvents", {
    extend: "Ext.data.Store",
    config: {

        model: "MicroEvents.model.Event",
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
        },
        grouper: {
            groupFn: function(record) {
                var sortDate = new Date(record.get('date'))
                console.log(sortDate.toDateString())
                return sortDate.toDateString()
            }
        },
        groupDir: 'DESC',           
        sorters: 'date',
    }
});