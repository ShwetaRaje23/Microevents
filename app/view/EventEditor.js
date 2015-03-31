Ext.define("MicroEvents.view.EventEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.eventeditor",
    config: {
        scrollable: 'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var backButton = {
            xtype: "button",
            text: "Home",
            action: "back",
            ui : 'back'
        };

        var saveButton = {
            xtype: "button",
            text: "Save",
            action: "save",
            ui : 'action'
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "New Event",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            scope: this
        };

        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };

        var eventTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title',
            required: true
        };

        var eventNarrativeEditor = {
            xtype: 'textareafield',
            name: 'narrative',
            label: 'Narrative'
        };

        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [eventTitleEditor, eventNarrativeEditor]
            },
            bottomToolbar
        ]);
    },
    onSaveButtonTap: function () {
        console.log("saveEventCommand");
        this.fireEvent("saveEventCommand", this);
    }

});

