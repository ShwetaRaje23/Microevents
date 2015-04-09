Ext.define("MicroEvents.store.Notes", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "MicroEvents.model.Note",
        proxy: {
            noCache: false,
            type: 'localstorage',
            id: 'notes-app-store'
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}]
    }
});
