Ext.define("MicroEvents.view.EventsListContainer", {
    extend: "Ext.Container",
    alias: "widget.eventslistcontainer",

    initialize: function () {

        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'My Events',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                newButton
            ]
        };

        var notesList = {
            xtype: "eventslist",
            store: Ext.getStore("Events"),
            listeners: {
                disclose: { fn: this.onEventsListDisclose, scope: this }
            }
        };

        this.add([topToolbar, eventsList]);
    },
    onNewButtonTap: function () {
        console.log("newEventCommand");
        this.fireEvent("newEventCommand", this);
    },
    onEventsListDisclose: function (list, record, target, index, evt, options) {
        console.log("editEventCommand");
        this.fireEvent('editEventCommand', this, record);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }
});